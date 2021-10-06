
# Docker: Quick Start


# Prerequisites (1 of 2)
* A recent computer and OS
  * Recent/Stable Linux, macOS, or Windows 10
  * root/admin rights
  * Sufficient resources to run one 4 vCPU virtual machine (VM)
  * CPU Virtualization extensions MUST be enabled in your BIOS/EFI
  * Reliable and fast internet connectivity
* Docker Community/Desktop Edition (on Linux also install Docker Compose V2)

---

# Prerequisites (2 of 2)
* A graphical web browser
* A text editor
* A software package manager
* Git client
* General comfort with the command line will be helpful.
* [optional] tar, wget, curl, jq, SSH client

---

# A Note for Powershell Users
 Terminal commands reflect the Unix bash shell. PowerShell users will need to adjust the commands.
* Unix Variables
  * `export MY_VAR=test`
  * `echo ${MY_VAR}`
* Windows 10 Variables (powershell)
  * `$env:my_var = "test"`
  * `Get-ChildItem Env:my_var`


# Linux Container Mode

* On the Windows platform make sure that you are running in [Linux Container mode](https://docs.docker.com/docker-for-windows/#switch-between-windows-and-linux-containers).

---

# A Note About Proxies

Proxies can interfere with some Docker activities if they are not configured correctly.

If required, you can configure a proxy in Docker Desktop via the preferences.

* [Docker](https://dev.to/mcastellin/use-docker-with-proxy-servers-tutorial-10gg)
* [Docker-Compose](https://stackoverflow.com/questions/34990458/docker-compose-build-and-http-proxy)

---


---

# Docker in Translation

* **Docker client**
  * The docker command used to control most of the Docker workflow and talk to remote Docker servers.

* **Docker server**
  * The dockerd command used to launch the Docker daemon. This turns a Linux system into a Docker server that can have containers deployed, launched, and torn down via a remote client.

---

# Docker in Translation

* **Virtual Machine**
  * In general, the docker server can be only directly run on Linux. Because of this, it is common to utilize a Linux virtual machine to run Docker on other development platforms. Docker Community/Desktop Edition makes this very easy.

---

# Docker in Translation

* **Docker images**
  * Docker images consist of one or more filesystem layers and some important metadata that represent all the files required to run a Dockerized application. A single Docker image can be copied to numerous hosts. A container will typically have both a name and a tag. The tag is generally used to identify a particular release of an image.

---

# Docker in Translation

* **Linux Containers**
  * A Linux Container is a single instantiation of a Docker or OCI-standard image. A specific container can only exist once; however, you can easily create multiple containers from the same image.
  * OCI - Open Container Initiative

---

# Testing the Docker Setup

```shell
$ docker image ls
$ docker container run -d --rm --name quantum \
    --publish mode=ingress,published=18080,target=8080 \
    spkane/quantum-game:latest
$ docker container ls
```

* In a web browser, navigate to port 18080 on your Docker server.

```shell
$ docker container stop quantum
$ docker container ls
$ docker container ls -a
```

---

# Exploring the Dockerfile

```shell
$ cd ${HOME}
$ mkdir class-docker-images
$ cd ${HOME}/class-docker-images
$ git clone https://github.com/spkane/balance_game.git \
    --config core.autocrlf=input
$ cd balance_game
```

* Open & explore Dockerfile in your text editor

**Full Documentation**:
https://docs.docker.com/engine/reference/builder/

---

# Registering with Docker Hub

Create an account at: https://hub.docker.com/

---

# Create Your Image Repository

* **Login**:` https://hub.docker.com/`
* **Click**:` Create Repository+`
* **Enter name**: `balance_game`
* **Set visibility**: `public`
* **Click**: `Create`

---

# Docker Login

```shell
$ docker login
$ cat ~/.docker/config.json
```

---

# Registry Authentication

```json
{
    "auths": {
        "https://index.docker.io/v1/": {
            "auth": "q378t348q7tb78bfs387b==",
            "email": "me@example.com"
        }
    }
}
```

---

# Building Your First Image

```shell
$ export HUB_USER=${USER}
$ docker image build -t ${HUB_USER}/balance_game:latest .
$ docker image push ${HUB_USER}/balance_game:latest
$ docker search ${HUB_USER}
$ docker container run -d --rm --name balance_game \
    --publish mode=ingress,published=18081,target=80 \
    ${HUB_USER}/balance_game:latest
$ docker container stop balance_game
```

---

# Docker Hub API Examples

```shell
$ curl -s -S \
  "https://registry.hub.docker.com/v2/repositories/library/alpine/tags/" \
  | jq '."results"[]["name"]' | sort
```

---

# A Typical Build Process

1. Client uploads build context to the server
1. Base image pulled, if required
1. New intermediate container created from base image
    * or empty container created, if using `FROM scratch`
1. Dockerfile command executed inside intermediate container
1. New image/layer created from intermediate container
1. If there is another step, a new intermediate container is created from the last step, and then the build goes back to step 3.

---

<!-- _class: lead -->

# Advanced Dockerfile Techniques

---

# Keep it Small

* Each and every layer’s size matters
* Don’t install unnecessary files

```shell
$ cd ${HOME}/class-docker-images
$ docker container run --rm -d --name outyet-small \
    --publish mode=ingress,published=8090,target=8080 \
    spkane/outyet:1.9.4-small
$ docker container export outyet-small -o export.tar
$ tar -tvf export.tar
$ docker container stop outyet-small
$ rm export.tar
```

---

# Debugging an Image

* If your image has a shell installed you can access it using a command like this:

```shell
$ docker image ls
$ docker container run --rm -ti spkane/outyet:1.9.4-small /bin/sh
```

But without a shell in the image this will fail.

---

# Debugging an Image

So, let's fix this:

```shell
$ git clone https://github.com/spkane/outyet.git \
    --config core.autocrlf=input
$ cd outyet
```

---

# Multi-Stage Images

```dockerfile
FROM golang:1.9.4 as builder

COPY . /go/src/outyet
WORKDIR /go/src/outyet

ENV CGO_ENABLED=0
ENV GOOS=linux

RUN go get -v -d && \
    go install -v && \
    go test -v && \
    go build -ldflags "-s" -a -installsuffix cgo -o outyet .
```

---

# Multi-Stage Images

```dockerfile
# To support debugging, let's use alpine instead of scratch
FROM alpine:latest as deploy

# Since we are using alpine we can simply install these
RUN apk --no-cache add ca-certificates

WORKDIR /
COPY --from=builder /go/src/outyet/outyet .
# (or) COPY --from=0 /go/src/outyet/outyet .

EXPOSE 8080

CMD ["/outyet", "-version", "1.9.4", "-poll", "600s", "-http", ":8080"]
```

---

# Building the Improved Image

```shell
$ docker image build -f Dockerfile -t outyet:1.9.4-local .
```

---

# Debugging an Image

* Now that we have a shell, let's try this again:

```shell
$ docker image ls
$ docker container run --rm -ti outyet:1.9.4-local /bin/sh
```

* Once inside the new container:

```shell
$ ls -lFa /outyet
$ exit
```

---

# Debugging a Broken Build (1 of 2)

* Break the `Dockerfile` and then try building it again.

```dockerfile
RUN apc --no-cache add ca-certificates
```

```shell
$ docker image build -f Dockerfile .
```

---

# Debugging a Broken Build (2 of 2)

* Let's debug the last successful image in that build

```shell
$ docker container run --rm -ti ${IMAGE_ID} /bin/sh
```

* Once inside the new container:

```shell
$ apc --no-cache add ca-certificates
$ apk --no-cache add ca-certificates
$ exit
```

---

# Smart Layering

* Each and every layer’s size matters
* Clean up, inside of each step.

```shell
$ cd ${HOME}/class-docker-images
$ cd balance_game
$ docker image build -f Dockerfile.fedora .
$ docker image tag ${IMAGE_ID} size${#}
$ docker image history size${#}
```

---

# Smart Layering

* edit `Dockerfile.fedora`, build, and re-examine size

```shell
RUN dnf install -y httpd
RUN dnf clean all
```

```shell
RUN dnf install -y httpd && \
    dnf clean all
```

---

# Timing commands in Windows

* In the next exercise we will be timing commands using a Unix utility. If you are on Windows and want to try to time these commands locally, you can try something like this in Powershell.

```powershell
PS C:\> $t = Measure-Command { docker image build --no-cache . }
PS C:\> Write-Host That command took $t.TotalSeconds to complete.
```

---

# Order Matters

* Keep commands that change towards the end of your Dockerfile.

```shell
$ cd ${HOME}/class-docker-images
$ cd balance_game
$ time docker image build --no-cache .
$ time docker image build .
```

* edit `start.sh`

```shell
$ time docker image build .
```

---

# Order Matters

* Add to the top of Dockerfile:

```dockerfile
ADD start.sh /
```

* And then remove the same line from the bottom of the Dockerfile.

```shell
$ time docker image build --no-cache .
$ time docker image build .
$ vi start.sh
$ time docker image build .
```

---

# What We Have Learned

* What a Dockerfile is
* Building a Docker image
* Using Docker Hub
* Keeping Images Small
* Keeping Builds Fast
* Multi-Stage Dockerfiles
* Debugging Images
* Creating a Private Registry

---

# Additional Reading

* The 12-Factor App
  * http://12factor.net/

* Official Docker Documentation
  * https://docs.docker.com/

* Docker: Up and Running
  * http://shop.oreilly.com/product/0636920153566.do

