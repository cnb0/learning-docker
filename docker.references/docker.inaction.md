### Docker in Action

- Create, deploy, and manage applications hosted in Docker containers running on Linux. 
- hands-on with packaging applications, testing, installing, running programs securely, and 
- deploying them across a cluster of hosts. 
- With examples showing how Docker benefits the whole dev lifecycle, 
- discover techniques for everything from dev-and-test machines to full-scale cloud deployments


```

Part 1. Process isolation and environment-independent computing

        Chapter 2. Running software in containers
                2.1. Controlling containers: Building a website monitor
                2.2. Solved problems and the PID namespace
                2.3. Eliminating metaconflicts: Building a website farm
                2.4. Building environment-agnostic systems
                2.5. Building durable containers
                2.6. Cleaning up


        Chapter 3. Software installation simplified
                3.1. Identifying software
                3.2. Finding and installing software
                3.3. Installation files and isolation

        Chapter 4. Working with storage and volumes
                4.1. File trees and mount points
                4.2. Bind mounts
                4.3. In-memory storage
                4.4. Docker volumes
                4.5. Shared mount points and sharing files
                4.6. Cleaning up volumes
                4.7. Advanced storage with volume plugins

        Chapter 5. Single-host networking
                5.1. Networking background (for beginners)
                5.2. Docker container networking
                5.3. Special container networks: host and none
                5.4. Handling inbound traffic with NodePort publishing
                5.5. Container networking caveats and customizations

        Chapter 6. Limiting risk with resource controls
                6.1. Setting resource allowances
                6.2. Sharing memory
                6.3. Understanding users
                6.4. Adjusting OS feature access with capabilities
                6.5. Running a container with full privileges
                6.6. Strengthening containers with enhanced tools
                6.7. Building use-case-appropriate containers

Part 2. Packaging software for distribution

        Chapter 7. Packaging software in images
                7.1. Building Docker images from a container
                7.2. Going deep on Docker images and layers
                7.3. Exporting and importing flat filesystems
                7.4. Versioning best practices


        Chapter 8. Building images automatically with Dockerfiles
                8.1. Packaging Git with a Dockerfile
                8.2. A Dockerfile primer
                8.3. Injecting downstream build-time behavior
                8.4. Creating maintainable Dockerfiles
                8.5. Using startup scripts and multiprocess containers
                8.6. Building hardened application images


        Chapter 9. Public and private software distribution
                9.1. Choosing a distribution method
                9.2. Publishing with hosted registries
                9.3. Introducing private registries
                9.4. Manual image publishing and distribution
                9.5. Image source-distribution workflows


        Chapter 10. Image pipelines
                10.1. Goals of an image build pipeline
                10.2. Patterns for building images
                10.3. Record metadata at image build time
                10.4. Testing images in a build pipeline
                10.5. Patterns for tagging images


Part 3. Higher-level abstractions and orchestration

        Chapter 11. Services with Docker and Compose
                11.1. A service “Hello World!”
                11.2. Declarative service environments with Compose V3
                11.3. Stateful services and preserving data
                11.4. Load balancing, service discovery, and networks with Compose


        Chapter 12. First-class configuration abstractions
                12.1. Configuration distribution and management
                12.2. Separating application and configuration
                12.3. Secrets—A special kind of configuration


        Chapter 13. Orchestrating services on a cluster of Docker hosts with Swarm
                13.1. Clustering with Docker Swarm
                13.2. Deploying an application to a Swarm cluster
                13.3. Communicating with services running on a Swarm cluster
                13.4. Placing service tasks on the cluster

```