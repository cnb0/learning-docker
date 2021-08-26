Part 1: The Big Picture Stuff
                    
1: Containers from 30,000 feet
                    
            The bad old days
            Hello VMware!
            VMwarts
            Hello Containers!
            Linux containers
            Hello Docker!
            Windows containers
            Windows containers vs Linux containers
            What about Mac containers?
            What about Kubernetes
    
2: Docker
                    
            Docker -        
            Docker, Inc.
            The Docker technology
            The Open Container Initiative (OCI)
         
3: Installing Docker
                    
            Docker Desktop
            Windows pre-reqs
            Installing Docker Desktop on Windows 10
            Installing Docker Desktop on Mac
            Installing Docker on Linux
            Installing Docker on Windows Server 2019
            Play with Docker
         
4: The big picture
                    
            The Ops Perspective
            Images
            Containers
            Attaching to running containers
            The Dev Perspective
         
Part 2: The Technical Stuff
                    
5: The Docker Engine
                    
            Docker Engine -        
            Docker Engine - The Deep Dive
            Getting rid of LXC
            Getting rid of the monolithic Docker daemon
            The influence of the Open Container Initiative (OCI)
            runc
            containerd
            Starting a new container (example)
            One huge benefit of this model
            What’s this shim all about?
            How it’s implemented on Linux
            What’s the point of the daemon
            Securing client and daemon communication
         
6: Images
                    
            Docker images -        
            Docker images - The deep dive
            Images and containers
            Images are usually small
            Pulling images
            Image naming
            Image registries
            Image naming and tagging
            Images with multiple tags
            Filtering the output of docker image ls
            Searching Docker Hub from the CLI
            Images and layers
            Sharing image layers
            Pulling images by digest
            A little bit more about image hashes (digests)
            Multi-architecture images
            Deleting Images
            Images - The commands
         
7: Containers
                    
            Docker containers -        
            Docker containers - The deep dive
            Containers vs VMs
            The VM tax
            Running containers
            Checking that Docker is running
            Starting a simple container
            Container processes
            Container lifecycle
            Stopping containers gracefully
            Self-healing containers with restart policies
            Web server example
            Inspecting containers
            Tidying up
            Containers - The commands
         
8: Containerizing an app
                    
            Containerizing an app -        
            Containerizing an app - The deep dive
            Containerize a single-container app
            Moving to production with Multi-stage Builds
            A few best practices
            Containerizing an app - The commands
         
9: Deploying Apps with Docker Compose
                    
        Deploying apps with Compose -        
        Deploying apps with Compose - The Deep Dive
        Compose background
        Installing Compose
        Compose files
        Deploying an app with Compose
        Managing an app with Compose
        Deploying apps with Compose - The commands
         
10: Docker Swarm
                    
        Docker Swarm -        
        Docker Swarm - The Deep Dive
        Swarm primer
        Build a secure Swarm cluster
        Swarm manager high availability (HA)
        Swarm services
        Viewing and inspecting services
        Replicated vs global services
        Scaling a service
        Removing a service
        Rolling updates
        Troubleshooting
        Backing up Swarm
        Docker Swarm - The Commands
         
11: Docker Networking
                    
        Docker Networking -        
        Docker Networking - The Deep Dive
        The theory
        Single-host bridge networks
        Multi-host overlay networks
        Connecting to existing networks
        Service discovery
        Ingress load balancing
        Docker Networking - The Commands
         
12: Docker overlay networking
                    
        Docker overlay networking -        
        Docker overlay networking - The deep dive
        Build and test a Docker overlay network in Swarm mode
        Test the overlay network
        The theory of how it all works
        Docker overlay networking - The commands
         
13: Volumes and persistent data
                    
        Volumes and persistent data -        
        Volumes and persistent data - The Deep Dive
        Containers and non-persistent data
        Containers and persistent data
        Demonstrating volumes with containers and services
        Sharing storage across cluster nodes
        Volumes and persistent data - The Commands
         
14: Deploying apps with Docker Stacks
                    
        Deploying apps with Docker Stacks -        
        Deploying apps with Docker Stacks - The Deep Dive
        Overview of the sample app
        Looking closer at the stack file
        Deploying the app
        Managing the app
        Deploying apps with Docker Stacks - The Commands
         
15: Security in Docker
                    
        Security in Docker -        
        Security in Docker - The deep dive
        Linux security technologies
        Docker platform security technologies
        Docker Secrets
         