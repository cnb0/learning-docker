1. Introduction
   
        The Promise of Docker
        Benefits of the Docker Workflow
        What Docker Isn’t
        Important Terminology

2. The Docker Landscape

            Process Simplification
            Broad Support and Adoption
            Architecture
            Client/Server Model
            Network Ports and Unix Sockets
            Robust Tooling
            Docker Command-Line Tool
            Docker Engine API
            Container Networking
            Getting the Most from Docker
            Containers Are Not Virtual Machines
            Limited Isolation
            Containers Are Lightweight
            Toward an Immutable Infrastructure
            Stateless Applications
            Externalizing State
            The Docker Workflow
            Revision Control
            Building
            Testing
            Packaging
            Deploying
            The Docker Ecosystem
 
3. Installing Docker
   
            Docker Client
            Linux
            macOS, Mac OS X
            Microsoft Windows 10 Professional
            Docker Server
            systemd-Based Linux
            Non-Linux VM-Based Server
            Testing the Setup
            Ubuntu
            Fedora
            Alpine Linux
            Exploring the Docker Server
 
4. Working With Docker Images

            Anatomy of a Dockerfile
            Building an Image
            Troubleshooting Broken Builds
            Running Your Image
            Environment Variables
            Custom Base Images
            Storing Images
            Public Registries
            Private Registries
            Authenticating to a Registry
            Running a Private Registry
            Advanced Building Techniques
            Keeping Images Small
            Layers Are Additive
            Optimizing for the Cache
 
5. Working With Docker Containers
   

            What Are Containers?
            History of Containers
            Creating a Container
            Basic Configuration
            Storage Volumes
            Resource Quotas
            Starting a Container
            Auto-Restarting a Container
            Stopping a Container
            Killing a Container
            Pausing and Unpausing a Container
            Cleaning Up Containers and Images
            Windows Containers
 
6. Exploring Docker
   
        Printing the Docker Version
        Server Information
        Downloading Image Updates
        Inspecting a Container
        Exploring the Shell
        Returning a Result
        Getting Inside a Running Container
        docker exec
        nsenter
        docker volume
        Logging
        docker logs
        More Advanced Logging
        Non-Plug-In Community Options
        Monitoring Docker
        Container Stats
        Container Health Checks
        Docker Events
        cAdvisor
        Prometheus Monitoring
        Exploration
 
7. Debugging Containers

        Process Output
        Process Inspection
        Controlling Processes
        Network Inspection
        Image History
        Inspecting a Container
        Filesystem Inspection
 
8. Exploring Docker Compose

        Configuring Docker Compose
        Launching Services
        Exploring RocketChat
        Exercising Docker Compose
 
9. The Path To Production Containers

        Getting to Production
        Docker’s Role in Production Environments
        Job Control
        Resource Limits
        Networking
        Configuration
        Packaging and Delivery
        Logging
        Monitoring
        Scheduling
        Service Discovery
        Production  
        Docker and the DevOps Pipeline
        Quick Overview
        Outside Dependencies
 
10. Docker At Scale
   
        Centurion
        Docker Swarm Mode
        Amazon ECS and Fargate
        Core AWS Setup
        IAM Role Setup
        AWS CLI Setup
        Container Instances
        Tasks
        Testing the Task
        Stopping the Task
        Kubernetes
        What Is Minikube?
        Installing Minikube
        Running Kubernetes
        Kubernetes Dashboard
        Kubernetes Containers and Pods
        Let’s Deploy Something
        Deploying a Realistic Stack
        Service Definition
        PersistentVolumeClaim Definition
        Deployment Definition
        Deploying the Application
        Scaling Up
        kubectl API
 
11. Advanced Topics
   

        Containers in Detail
        cgroups
        Namespaces
        Security
        UID 0
        Privileged Containers
        Secure Computing Mode
        SElinux and AppArmor
        The Docker Daemon
        Advanced Configuration
        Networking
        Storage
        The Structure of Docker
        Swapping Runtimes
        gVisor
 
12. Container Platform Design
   
        The Twelve-Factor App
        Codebase
        Dependencies
        Config
        Backing Services
        Build, Release, Run
        Processes
        Port Binding
        Concurrency
        Disposability
        Development/Production Parity
        Logs
        Admin Processes
        Twelve-Factor  
        The Reactive Manifesto
        Responsive
        Resilient
        Elastic
        Message-Driven
 
13. Conclusion

    The Challenges Docker Addresses
    The Docker Workflow
    Minimizing Deployment Artifacts
    Optimizing Storage and Retrieval
    The Payoff