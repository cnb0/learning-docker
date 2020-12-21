# Workshop: Introduction to Docker

## Software Installation

### Windows 10 Pro / Mac OS X / Linux
1. Visit [https://www.docker.com/community-edition#/download](https://www.docker.com/community-edition#/download) and download Docker for Mac or Windows.
2. Follow the instructions on the website to install Docker on your computer.
3. Start `Docker`

### Installation for Windows 10 Home Edition
1. Visit [https://docs.docker.com/toolbox/toolbox_install_windows](https://docs.docker.com/toolbox/toolbox_install_windows) instead to download and install Docker Toolbox.
2. Ensure that you've verified your docker toolbox installation in step 3 on that page. The Docker CLI should be installed and accessible via Git Bash, and all console/terminal commands should be run Git Bash.


## Verify your docker installation

1. Open your `Console`.

2. Type: `docker -v`

	This should show you which version of Docker you have installed.

	This will be the primary way in which you will interact with your Docker environment.

3. Type: `docker info`

	This should show you a wall of text with info about your Docker daemon (or your Docker installation).

4. Type : `docker run hello-world`

   You should see
    ```
    Hello from Docker!
    This message shows that your installation appears to be working correctly.

    To generate this message, Docker took the following steps:
    1. The Docker client contacted the Docker daemon.
    2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
        (amd64)
    3. The Docker daemon created a new container from that image which runs the
        executable that produces the output you are currently reading.
    4. The Docker daemon streamed that output to the Docker client, which sent it
        to your terminal.

    .....
    ```
