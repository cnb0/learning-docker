Section 1 - Key Container Concepts
  
## Modern Infrastructures And Applications With Docker
                      
            Understanding the evolution of applications
            Infrastructures
            Processes
            Microservices and processes
            What are containers?
            Learning about the main concepts of containers
            Container runtime
            Images
            Containers
            Process isolation
            Orchestration
            Registry
            Docker components
            Docker daemon
            Docker client
            Docker objects
            Building, shipping, and running workflows
            Building
            Shipping
            Running
            Windows containers
            Customizing Docker 
            Customizing the Docker daemon 
            Docker client customization
            Docker security
            Docker client-server security
            Docker daemon security
            Namespaces
            User namespace
            Kernel capabilities (seccomp) 
            Linux security modules
            Docker Content Trust
            Chapter labs
            Installing the Docker runtime and executing a "hello world" container 
            Docker runtime processes and namespace isolation
            Docker capabilities
     
   
    
## Building Docker Images
  
            Building Docker images
            Creating images with Dockerfiles
            Creating images interactively 
            Creating images from scratch
            Understanding copy-on-write filesystems
            Building images with a Dockerfile reference
            Dockerfile quick reference
            Building process actions
            Image tagging and meta-information
            Docker registries and repositories
            Securing images
            Managing images and other related objects
            Listing images
            Sharing images using registries
            Multistage building and image caches
            Templating images
            Image releases and updates
            Chapter labs
            Docker build caching
            Where to use volumes in Dockerfiles
            Multistage building
            Deploying a local registry
            Image templating using Dockerfiles
     
   
    
## Running Docker Containers
  
            Reviewing the Docker command line in depth
            Learning about Docker objects
            Running containers
            Main container actions
            Container network properties
            Container behavior definition
            Executing containers
            Container security options
            Using host namespaces
            Interacting with containers
            Limiting host resources
            Converting containers into images
            Formatting and filtering information
            Managing devices
            Chapter labs
            Reviewing Docker command-line object options
            Executing containers
            Limiting container resources
            Formatting and filtering container list output
     
   
    
## Container Persistency And Networking
  
            Understanding stateless and stateful containers
            Learning how volumes work
            Learning about volume object actions
            Using volumes in containers
            Learning about different persistence strategies
            Local persistence
            Distributed or remote volumes
            Networking in containers
            Using the default bridge network
            Understanding null networks
            Understanding the host network
            Creating custom bridge networks
            The MacVLAN network – macvlan
            Learning about container interactions
            Communication with the external world
            Inter-container communications
            DNS on custom bridge networks
            Publishing applications
            Chapter labs
            Using volumes to code on your laptop
            Mounting SSHFS
            Multi-homed containers
            Publishing applications
     
   
    
## Deploying Multi-Container Applications
  
            Installing and using Docker Compose
            Installing docker-compose as a Python module
            Installing docker-compose using downloaded binaries
            Executing docker-compose using a container
            Installing docker-compose on Windows servers
            Understanding the docker-compose.yaml file
            Using the Docker Compose command-line interface
            Customizing images with docker-compose
            Automating your desktop and CI/CD with Docker Compose
            Chapter labs
            Colors application lab
            Executing a red application
            Scaling the red application's backends
            Adding more colors
            Adding a simple load balancer
     
   
    
## Introduction To Docker Content Trust
  
            The Update Framework
            Signing images
            Reviewing signatures
            Creating and running applications in trusted environments
            Chapter labs
            Signing images for Docker Hub
     
   
    
## Section 2 - Container Orchestration
  
## Introduction To Orchestration
  
            Introducing orchestration concepts
            Learning about container orchestration
            Scheduling applications cluster-wide
            Managing data and persistency
            Scaling and updating application components
     
   
    
## Orchestration Using Docker Swarm
  
            Deploying Docker Swarm
            Docker Swarm overall architecture
            Management plane
            Control plane
            Data plane
            Deploying a Docker Swarm cluster using the command line
            Deploying Docker Swarm with high availability
            Creating a Docker Swarm cluster 
            Recovering a faulty Docker Swarm cluster
            Backing up your Swarm
            Recovering your Swarm
            Scheduling workloads in the cluster – tasks and services
            Deploying applications using Stacks and other Docker Swarm resources
            Secrets
            Config
            Stacks
            Networking in Docker Swarm 
            Service discovery and load balancing
            Bypassing the router mesh
            Using host mode
            Using Round-Robin DNS mode
            Chapter labs
            Creating a Docker Swarm cluster
            Deploying a simple replicated service
            Deploying a global service
            Updating a service's base image
            Deploying using Docker Stacks
            Swarm ingress internal load balancing
            Service discovery
     
   
    
## Orchestration Using Kubernetes
  
            Deploying Kubernetes using Docker Engine
            Deploying a Kubernetes cluster with high availability
            Pods, services, and other Kubernetes resources
            Pods
            Services
            ConfigMaps and secrets
            Namespaces
            Persistent volumes
            Deploying orchestrated resources
            Kubernetes networking
            Service discovery
            Load balancing
            Network policies
            Publishing applications
            Kubernetes security components and features
            Comparing Docker Swarm and Kubernetes side by side
            Chapter labs
            Deploying applications in Kubernetes
            Using volumes
     
   
    
## Section 3 - Docker Enterprise
  
## Introduction To The Docker Enterprise Platform
  
            Reviewing the Docker editions
            Docker Community
            Docker Enterprise
            Understanding CaaS
            The Docker Enterprise platform
            Docker Engine
            Universal Control Plane
            Docker Trusted Registry
            Planning your Docker Enterprise deployment
     
   
    
## Universal Control Plane
  
            Understanding UCP components and features
            UCP components on manager nodes
            UCP components on worker nodes
            Deploying UCP with high availability
            Reviewing the Docker UCP environment
            The web UI
            The command line using the UCP bundle
            Role-based access control and isolation
            UCP's Kubernetes integration
            UCP administration and security
            Backup strategies
            Docker Swarm's backup
            Backing up UCP
            Upgrades, monitoring, and troubleshooting
            Upgrading your environment
            Monitoring a cluster's health
            Troubleshooting UCP
            Troubleshooting UCP-KV
            Troubleshooting UCP-Auth
            Troubleshooting nodes
     
   
    
## Publishing Applications In Docker Enterprise
  
            Understanding publishing concepts and components
            Understanding an application's logic
            Publishing applications in Kubernetes using ingress controllers
            Using Interlock to publish applications deployed in Docker Swarm
            Reviewing Interlock usage
            Simple application redirection
            Publishing a service securely using Interlock with TLS
     
   
    
## Implementing An Enterprise-Grade Registry With DTR
  
            Understanding DTR components and features
            Deploying DTR with high availability
            Learning about RBAC
            Image scanning and security features
            Security scanning
            Image immutability
            Content trust in DTR
            Integrating and automating image workflow
            Image promotion
            DTR webhooks
            Mirror images between registries
            Registry caching
            Garbage collection
            Backup strategies
            Updates, health checks, and troubleshooting
            Logging
            DTR disaster recovery
            Some replicas are unhealthy, but we keep the cluster's quorum's state
            The majority of replicas are unhealthy
            All replicas are unhealthy
     
   
    
## Section 4 - Preparing For The Docker Certified Associate Exam
  
## Summarizing Important Concepts
  
            Reviewing orchestration concepts
            Required knowledge for the exam
            A brief summary  of Docker image concepts
            Required image management knowledge for the exam
            A summary of the Docker architecture, installation, and configuration topics
            The knowledge required about the Docker platform for the exam
            A summary of the networking topics
            The Docker networking knowledge required for the exam
            Understanding security concepts and related Docker features
            The knowledge of Docker security required for the exam
            Quickly summarizing Docker storage and volumes
            The storage and volume knowledge required for the exam
            Mock Exam summary  And Final Notes
            
## Docker Certified Associate exam details
            Mock exam    