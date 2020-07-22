
- Containerize your traditional or microservice-based applications
- Develop, modify, debug, and test an application running inside a container
- Share or ship your application as an immutable container image
- Build a Docker Swarm and a Kubernetes cluster in the cloud
- Run a highly distributed application using Docker Swarm or Kubernetes
- Update or rollback a distributed application with zero downtime
- Secure your applications with encapsulation, networks, and secrets
- Troubleshoot a containerized, highly distributed application in the cloud


```
Section 1: Motivation and Getting Started

            What Are Containers and Why Should I Use Them?
            What are containers?
            Why are containers important?
            What's the benefit for me or for my&#xA0;company?
            The Moby project
            Docker products
            Docker CE
            Docker EE
            Container architecture

2. Setting Up a Working Environment
            The Linux command shell
            PowerShell for Windows
            Using a package manager
                Installing Homebrew on macOS
                Installing Chocolatey on Windows
                Installing Git
            Choosing a code editor
                Installing VS Code on macOS
                Installing VS Code on Windows
                Installing VS Code on Linux
                Installing VS Code extensions

            Installing Docker for Desktop
                Installing Docker for Desktop on macOS
                Installing Docker for Desktop on Windows
                Installing Docker CE on Linux

            Installing Docker Toolbox
                Installing Docker Toolbox on macOS
                Installing Docker Toolbox on Windows
                Setting up Docker Toolbox

            Installing Minikube
                Installing Minikube on macOS and Windows
                Testing Minikube and kubectl

Section 2: Containerization, from Beginner to Black Belt

        Mastering Containers
        Running the first container
        Starting, stopping, and removing containers
        Running a random trivia question container
                Listing containers
                Stopping and starting containers
                Removing containers
                Inspecting containers
                Exec into a running container
                Attaching to a running container
        Retrieving container logs
            Logging drivers
            Using a container-specific logging driver
            Advanced topic changing the default logging driver
        Anatomy of containers
            Architecture
            Namespaces
            Control groups (cgroups)
            Union filesystem (Unionfs)
            Container plumbing
                runC
                Containerd


Creating and Managing Container Images

    What are images?
        The layered filesystem
        The writable container layer
        Copy-on-write
        Graph drivers
    Creating images
        Interactive image creation
        Using Dockerfiles
        The FROM keyword
        The RUN keyword
        The COPY and ADD keywords
        The WORKDIR keyword
        The CMD and ENTRYPOINT keywords
        A complex Dockerfile
        Building an image
        Multi-step builds
        Dockerfile best practices
        Saving and loading images

Lift and shift: Containerizing a legacy app
        Analysis of external dependencies
        Source code and build instructions
        Configuration
        Secrets
        Authoring the Dockerfile
            The base image
            Assembling the sources
            Building the application
            Defining the start command
        Sharing or shipping images
            Tagging an image
            Image namespaces
            Official images
            Pushing images to a registry

Data Volumes and Configuration
        Creating and mounting data volumes
            Modifying the container layer
            Creating volumes
            Mounting a volume
            Removing volumes
            Accessing volumes created with Docker for Desktop
         Sharing data between containers
         Using host volumes
         Defining volumes in images
         Configuring containers
            Defining environment variables for containers
            Using configuration files
            Defining environment variables in container images
            Environment variables at build time



Debugging Code Running in Containers

        Evolving and testing code running in a container
            Mounting evolving code into the running container
        Auto restarting code upon changes
            Auto-restarting for Node.js
            Auto-restarting for Python
            Auto-restarting for .NET

        Line-by-line code debugging inside a container
            Debugging a Node.js application
            Debugging a .NET application

        Instrumenting your code to produce meaningful logging information
            Instrumenting a Python application
            Instrumenting a .NET C# application
            Using Jaeger to monitor and troubleshoot


Using Docker to Supercharge Automation

        Executing simple admin tasks in a container
        Using test containers
            Integration tests for a Node.js application
            The Testcontainers project
        Using Docker to power a CI/CD pipeline

Advanced Docker Usage Scenarios
All of the tips and tricks of a Docker pro
            Keeping your Docker environment clean
            Running Docker in Docker
            Formatting the output of common Docker commands
            Filtering the output of common Docker commands
            Optimizing your build process
            Limiting resources consumed by a container
            Read-only filesystem
            Avoid running a containerized app as root&#xA0;
            Running your Terminal in a remote container and accessing it via HTTPS
            Running your development environment inside a container
            Running your code editor in a remote container and accessing it via HTTPS


Section 3: Orchestration Fundamentals and Docker Swarm
            Distributed Application Architecture
            Understanding the distributed application architecture
            Patterns and best practices
                   Loosely coupled components
                   Stateful versus stateless
                   Service discovery
                   Routing
                    Load balancing
                    Defensive programming
                        Retries
                        Logging
                        Error handling
             Redundancy
             Health checks
             Circuit breaker pattern
             Running in production
                        Logging
                        Tracing
                        Monitoring
                        Application updates
                                Rolling updates
                                Blue-green deployments
                                Canary releases
                                Irreversible data changes
                                Rollback

Single-Host Networking
            Dissecting the container network model
            Network firewalling
            Working with the bridge network
            The host and null network
                The host network
                The null network
            Running in an existing network namespace
            Managing container ports
            HTTP-level routing using a reverse proxy
                    Containerizing the monolith
                    Extracting the first microservice
                    Using Traefik to reroute traffic



Docker Compose
                Demystifying declarative versus imperative
                Running a multi-service app
                Building images with Docker Compose
                Running an application with Docker Compose
                Scaling a service
                Building and pushing an application
                Using Docker Compose overrides


Orchestrators
            What are orchestrators and why do we need them?
            The tasks of an orchestrator
                    Reconciling the desired state
                    Replicated and global services
                    Service discovery
                    Routing
                    Load balancing
                    Scaling
                    Self-healing
                    Zero downtime deployments
                    Affinity and location awareness
                    Security
                        Secure communication and cryptographic node identity
                        Secure networks and network policies
                        Role-based access control (RBAC)
                        Secrets
                        Content trust
                        Reverse uptime
                    Introspection

                    Overview of popular orchestrators
                    Kubernetes
                    Docker Swarm
                    Apache Mesos and Marathon
                    Amazon ECS
                    Microsoft ACS



Introduction to Docker Swarm

                The Docker Swarm architecture
                Swarm nodes
                Swarm managers
                Swarm workers
                Stacks, services, and tasks
                Services
                Task
                Stack
                Multi-host networking
                Creating a Docker Swarm
                Creating a local single node swarm
                Creating a local Swarm in VirtualBox or Hyper-V
                Using Play with Docker to generate a Swarm
                Creating a Docker Swarm in the cloud
                Deploying a first application
                Creating a service
                Inspecting the service and its tasks
                Logs of a service
                Reconciling the desired state
                Deleting a service or a stack
                Deploying a multi-service stack
                The swarm routing mesh


Zero-Downtime Deployments and Secrets
                Zero-downtime deployment
                        Popular deployment strategies
                        Rolling updates
                        Health checks
                        Rollback
                        Blue green deployments
                        Canary releases
                Storing configuration data in the swarm
                Protecting sensitive data with Docker secrets
                        Creating secrets
                        Using a secret
                        Simulating secrets in a development environment
                        Secrets and legacy applications
                        Updating secrets


Section 4: Docker, Kubernetes, and the Cloud

                Introduction to Kubernetes
                Technical requirements
                Kubernetes architecture
                Kubernetes master nodes
                Cluster nodes
                Introduction to Minikube
                Kubernetes support in&#xA0;Docker for Desktop
                Introduction to pods
                        Comparing Docker container and Kubernetes pod networking
                        Sharing the network namespace
                        Pod life cycle
                        Pod specifications
                        Pods and volumes
                Kubernetes ReplicaSet
                        ReplicaSet specification
                        Self-healing
                Kubernetes deployment
                Kubernetes service
                Context-based routing
                Comparing SwarmKit with Kubernetes

Deploying, Updating, and Securing an Application with Kubernetes
                Deploying a first application
                        Deploying the web component
                        Deploying the database
                        Streamlining the deployment
                Defining liveness and readiness
                        Kubernetes liveness probe
                        Kubernetes readiness probe
                        Kubernetes startup probe
                Zero downtime deployments
                        Rolling updates
                        Blue-green deployment
                Kubernetes secrets
                        Manually defining secrets
                        Creating secrets with kubectl
                        Using secrets in a pod
                        Secret values in environment variables

Monitoring and Troubleshooting an App Running in Production
            Monitoring an individual service
                    Instrumenting a Node.js-based service
                    Instrumenting a .NET Core-based service
            Using Prometheus to monitor a distributed application
                    Deploying Prometheus to Kubernetes
                    Deploying our application services to Kubernetes
                    Deploying Grafana to Kubernetes
            Troubleshooting a service running in production
                     The netshoot container

Running a Containerized App in the Cloud
            Deploying and using Docker EE on AWS
                    Provisioning the infrastructure
                    Installing Docker
                    Installing Docker UCP
                    Using remote admin for the UCP cluster
                    Deploying to Docker Swarm
                    Deploying to Kubernetes

Exploring Microsoft's Azure Kubernetes Service (AKS)
                    Preparing the Azure CLI
                    Creating a container registry on Azure
                    Pushing our images to ACR
                    Creating a Kubernetes cluster
                    Deploying our application to the Kubernetes cluster
                    Understanding GKE

```