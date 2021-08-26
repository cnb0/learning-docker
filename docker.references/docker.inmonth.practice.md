Part 1 Understanding Docker containers and images 
                     
            1 Before you begin 
            1 Building new cloud-native apps 
            1 Is this book for you? 
               
            2 Understanding Docker and running Hello World 
            2 Connecting to a container like a remote computer 
            2 Hosting a website in a container 
            2 Understanding how Docker runs containers 
        
            3 Building your own Docker images 
            3 Writing your first Dockerfile 
            3 Understanding Docker images and image layers 
            3 Optimizing Dockerfiles to use the image layer cache 

            4 Packaging applications from source code into Docker Images 
            4 App walkthrough: Java source code 
            4 App walkthrough: Node.js source code 
            4 App walkthrough: Go source code 

            5 Sharing images with Docker Hub and other registries 
            5 Running and using your own Docker registry 
            5 Using image tags effectively 
            6 Using Docker volumes for persistent storage 
            6 Running containers with Docker volumes 
            6 Limitations of filesystem mounts 
                     
Part 2 Running distributed applications in containers 
                            
            7 Running multi-container apps with Docker Compose 
            7 Running a multi-container application with Compose 
            7 How Docker plugs containers together 
            7 Application configuration in Docker Compose 

            8 Supporting reliability with health checks and dependency checks 
            8 Starting containers with dependency checks 
            8 Defining health checks and dependency checks in Docker Compose 

            9 Adding observability with containerized monitoring 
            9 Exposing metrics from your application 
            9 Running a Prometheus container to collect metrics 
            9 Running a Grafana container to visualize metrics 
                            
            10 Running multiple environments with Docker Compose 
                            
            10 Using Docker Compose override files 
            10 Injecting configuration with environment variables and secrets 
            10 Reducing duplication with extension fields 
            11 Building and testing applications with Docker and Docker Compose 
            11 Capturing build settings with Docker Compose 
            11 Writing CI jobs with no dependencies except Docker 
                     
 
Part 3 Running at scale with a container orchestrator 
                     
            12 Understanding orchestration: Docker Swarm and Kubernetes 
            12 Running applications as Docker Swarm services 
            12 Managing network traffic in the cluster 
            12 Understanding the choice between Docker Swarm and Kubernetes 

            13 Deploying distributed applications as stacks in Docker Swarm 
            13 Managing app configuration with config objects 
            13 Managing confidential settings with secrets 
            13 Storing data with volumes in the Swarm 
            14 Automating releases with upgrades and rollbacks 
                            
            14 Configuring production rollouts with Compose 
            14 Configuring service rollbacks 
            14 Managing downtime for your cluster 
            15 Configuring Docker for secure remote access and CI/CD 
            15 Configuring Docker for secure remote access 
            15 Adding continuous deployment to your CI pipeline 
                            
            16 Building Docker images that run anywhere: Linux, Windows, Intel, and Arm 
            16 Building multi-arch images from one or more Dockerfiles 
            16 Pushing multi-arch images to registries with manifests 
            16 Building multi-arch images with Docker Buildx 



                     
Part 4 Getting your containers ready for production 
                     
            17 Optimizing your Docker images for size, speed, and security 
            17 Choosing the right base images 
            17 Minimizing image layer count and layer size 
            17 Taking your multi-stage builds to the next level 
                            
            18 Application configuration management in containers 
            18 Packaging config for every environment 
            18 Loading configuration from the runtime 
            18 Configuring legacy apps in the same way as new apps 

            19 Writing and managing application logs with Docker 
            19 Relaying logs from other sinks to stdout 
            19 Collecting and forwarding container logs 
            19 Managing your log output and collection 

            20 Controlling HTTP traffic to containers with a reverse proxy 
            20 Handling routing and SSL in the reverse proxy 
            20 Improving performance and reliability with the proxy 
            20 Using a cloud-native reverse proxy 
                            
            21 Asynchronous communication with a message                      
            21 Using a cloud-native message                      
            21 Adding new features with message handlers