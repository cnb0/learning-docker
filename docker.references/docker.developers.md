

###  Section 1: An Introduction To Docker – Containers And Local Development
       
        Chapter 1: Introduction To Docker

                    The drivers for Docker
                    Co-located hosting
                    Self-hosting
                    Data centers
                    Using virtualization to economize resource usage
                    Addressing the increasing power requirements
                    Using containers to further optimize data center resources

        Chapter 2: Using VirtualBox And Docker Containers For Development
            
                    Technical requirements
                    Host filesystem pollution problem
                    Using VirtualBox for virtual machines
                    Introduction to virtualization
                    Creating a virtual machine
                    Guest additions
                    Installing VirtualBox
                    Using Docker containers
                    Introduction to containers
                    Using Docker for development
                    Getting started with Docker
                    Automating Docker commands via sh scripts
            
        
        Chapter 3: Sharing Containers Using Docker Hub
            
                    Technical requirements
                    Introducing Docker Hub
                    Interacting with Docker Hub from the command line
                    Using the Docker Hub website
                    Implementing a MongoDB container for our application
                    Running a shell within a container
                    Introducing the microservices architecture
                    Scalability
                    Inter-container communication
                    Implementing a sample microservices application
                    Sharing your containers on Docker Hub
            
        
        Chapter 4: Composing Systems Using Containers
            
                    Technical requirements
                    Introduction to Docker Compose
                    The problem with .sh scripts
                    Docker Compose configuration files
                    Inheritance using multiple configuration files
                    The depends_on option
                    Adding port bindings using overrides
                    Using Docker local networking
                    Networking using .sh scripts
                    Networking with Docker Compose
                    Binding a host filesystem within containers
                    Optimizing our container size
                    Using the build.sh script
                    Other composition tools
                    Docker Swarm
                    Kubernetes
                    Packer
     
   
### Section 2: Running Docker In Production
       
            Chapter 5: Alternatives For Deploying And Running Containers In Production
                
                        Technical requirements
                        Example application – ShipIt Clicker
                        Running Docker in production – many paths, choose wisely
                        What is the minimum realistic production environment?
                        Bare minimum – run Docker and Docker Compose on one host
                        Docker support
                        Problems with single-host deployment
                        Managed cloud services
                        Google Kubernetes Engine
                        AWS Elastic Beanstalk
                        AWS ECS and Fargate
                        AWS EKS
                        Microsoft Azure Kubernetes Service
                        Digital Ocean Docker Swarm
                        Running your own Kubernetes cluster – from bare metal to OpenStack
                        Deciding on the right Docker production setup
                        Exercise – join the ShipIt Clicker team
                        Exercise – choosing from reasonable deployment alternatives
                        Exercise – Dockerfile and docker-compose.yml evaluation
                
            Chapter 6: Deploying Applications With Docker Compose
                
                        Technical requirements
                        Example application – ShipIt Clicker v2
                        Selecting a host and operating system for single-host deployment
                        Requirements for single-host deployment
                        Preparing the host for Docker and Docker Compose
                        Using operating system packages to install Docker and Git
                        Deploying using configuration files and support scripts
                        Re-examining the initial Dockerfile
                        Re-examining the initial docker-compose.yml file
                        Preparing the production .env file
                        Supporting scripts
                        Exercise – keeping builds off the production server
                        Exercise – planning to secure the production site
                        Monitoring small deployments – logging and alerting
                        Limitations of single-host deployment
                        No automatic failover
                        Inability to scale horizontally to accept more load
                        Tracking down unstable behavior based on incorrect host tuning
                        Loss of single host could be disastrous – backups are essential
                        Case study – migrating from CoreOS and Digital Ocean to CentOS 7 and AWS
                
            
            Chapter 7: Continuous Deployment With Jenkins
                
                        Technical requirements
                        Example application – ShipIt Clicker v3
                        Using Jenkins to facilitate continuous deployment
                        Avoid these traps
                        Using an existing Jenkins server
                        Setting up a new Jenkins server
                        How Jenkins can support continuous deployment
                        The Jenkinsfile and host connectivity
                        Testing Jenkins and Docker with a pipeline script
                        Driving configuration changes through Jenkins
                        Using Git and GitHub to store your Jenkinsfile
                        Changing the origin of all checked out repositories
                        Creating Jenkins environment variables for production support
                        Building Docker containers and pushing them to Docker Hub
                        Pushing to Docker Hub and triggering a production deployment
                        Deploying to multiple environments through multiple branches
                        Creating a staging environment
                        Creating Jenkins environment variables for staging support
                        Deploying by force-pushing to the staging branch
                        Complexity and limits to scaling deployments through Jenkins
                        Managing multiple hosts
                        The complexity of build scripts
                        How do you know when you have hit the limit?
                
            
            Chapter 8: Deploying Docker Apps To Kubernetes
                
                        Technical requirements
                        Options for Kubernetes local installation
                        Minikube
                        Verifying that your Kubernetes installation works
                        Deploying a sample application – ShipIt Clicker v4
                        Deploying the NGINX Ingress Controller and ShipIt Clicker locally
                        Choosing a Kubernetes distribution
                        Google Kubernetes Engine
                        AWS EKS
                        Microsoft Azure Kubernetes Service
                        Reviewing other relevant options
                        Objects
                        ConfigMaps
                        Pods
                        Nodes
                        Services
                        Ingress Controllers
                        Secrets
                        Namespaces
                        Spinning up AWS EKS with CloudFormation
                        Introducing the AWS EKS Quick Start CloudFormation templates
                        Preparing an AWS account
                        Launching the AWS EKS Quick Start CloudFormation templates
                        Configuring the EKS cluster
                        Deploying an application with resource limits to Kubernetes on AWS EKS
                        Annotating ShipIt Clicker to use the ALB Ingress Controller
                        Using AWS Elastic Container Registry with AWS EKS
                        Creating an ECR repository
                        Local example – labeled environments in the default namespace
                        Staged environments – Dev, QA, staging, and production
                
            Chapter 9: Cloud-Native Continuous Deployment Using Spinnaker
                
                        Technical requirements
                        Improving your setup for Kubernetes application maintenance
                        Managing the EKS cluster from your local workstation
                        Troubleshooting kubectl connection failures
                        Switching between local and cluster contexts
                        Verifying that you have a working ALB Ingress Controller
                        Preparing a Route 53 domain and certificate
                        Building and deploying ShipIt Clicker v5
                        Spinnaker – when and why you might need more sophisticated deployments
                        Introduction to Spinnaker
                        Setting up Spinnaker in an AWS EKS cluster using Helm
                        Connecting to Spinnaker through the kubectl proxy
                        Exposing Spinnaker via ALB Ingress Controllers
                        Configuring Spinnaker using Halyard
                        Connecting Spinnaker to Jenkins
                        Setting up Jenkins to integrate with both Spinnaker and ECR
                        Connecting Spinnaker to GitHub
                        Connecting Spinnaker to Docker Hub
                        Troubleshooting Spinnaker issues
                        Deploying ShipIt Clicker with a simple deployment strategy in Spinnaker
                        Adding a Spinnaker application
                        Adding a Spinnaker pipeline
                        Setting up a DNS entry for the Ingress Controller
                        Surveying Spinnaker's deployment and testing features
                        Canary deployments
                        Red/black deployments
                        Rolling back
                        Testing with Spinnaker
                            
            
            Chapter 10: Monitoring Docker Using Prometheus, Grafana, And Jaeger
                
                        Technical requirements
                        Setting up a demo application – ShipIt Clicker v7
                        Docker logging and container runtime logging
                        Understanding Kubernetes container logging
                        Ideal characteristics for a log management system
                        Troubleshooting Kubernetes control plane issues with logs
                        Storing logs with CloudWatch Logs
                        Storing logs for the long term with AWS S3
                        Analyzing logs stored in S3 with AWS Athena
                        Using the liveness, readiness, and startup probes in Kubernetes
                        Using a liveness probe to see whether a container can respond
                        Changing ShipIt Clicker to support separate liveness and readiness probes
                        Exercise – forcing ShipIt Clicker to fail the readiness check
                        Gathering metrics and sending alerts with Prometheus
                        Prometheus' history
                        Exploring Prometheus through its query and graph web interface
                        Adding Prometheus metrics to an application
                        Querying Prometheus for a custom metric
                        Configuring Prometheus alerts
                        Sending notifications with the Prometheus Alertmanager
                        Exploring Prometheus queries and external monitoring in-depth
                        Visualizing operational data with Grafana
                        Gaining access to Grafana
                        Adding a community-provided dashboard
                        Adding a new dashboard with a custom query
                        Application performance monitoring with Jaeger
                        Understanding the OpenTracing API
                        Introduction to Jaeger
                        Exploring the Jaeger client with ShipIt Clicker
                        Installing the Jaeger Operator
                
            
            Chapter 11: Scaling And Load Testing Docker Applications
                
                        Technical requirements
                        Using the updated ShipIt Clicker v8
                        Scaling your Kubernetes cluster
                        Scaling the cluster manually
                        Scaling the cluster dynamically (autoscaling)
                        What is Envoy, and why might I need it?
                        Network traffic management with an Envoy service mesh
                        Setting up Envoy
                        Testing scalability and performance with k6
                        Recording and replaying network sessions
                        Hand-crafting a more realistic load test
                        Running a stress test
     
   
### Section 3: Docker Security – Securing Your Containers
       
            Chapter 12: Introduction To Container Security
                
                        Technical requirements
                        Virtualization and hypervisor security models
                        Virtualization and protection rings
                        Docker and protection rings
                        Container security models
                        Docker Engine and containerd – Linux security features
                        PID namespaces
                        MNT namespaces
                        NET namespaces
                        IPC namespaces
                        UTS namespaces
                        USER namespaces
                        A note on cgroups
                        An overview of best practices
                        Keeping Docker patched
                        Securing the Docker daemon socket
                        Docker won't fix bad code
                        Always set an unprivileged user
                
            Chapter 13: Docker Security Fundamentals And Best Practices
                
                        Technical requirements
                        Docker image security
                        Image verification
                        Using minimal base images
                        Restricting privileges
                        Avoiding data leakages from your image
                        Security around Docker commands
                        COPY versus ADD – what's the story?
                        Recursive COPY – use with caution
                        Security around the build process
                        Using multi-stage builds
                        Limiting resources and capabilities when deploying your builds
                        Limiting resources
                        Dropping capabilities
                
            Chapter 14: Advanced Docker Security – Secrets, Secret Commands, Tagging, And Labels
                
                        Technical requirements
                        Securely storing secrets in Docker
                        The Raft log
                        Adding, inspecting, and removing secrets  
                        Creating
                        Inspecting
                        Deleting
                        Secrets in action – examples
                        Docker tags for security
                        Using labels for metadata application
                
            Chapter 15: Scanning, Monitoring, And Using Third-Party Tools
                
                        Technical requirements
                        Scanning and monitoring – cloud and DevOps security for containers
                        Scanning using Anchore Engine
                        A brief mention of Chef InSpec
                        Native monitoring locally using Docker stats
                        Aggregating monitoring data in the cloud with Datadog
                        Securing your containers using AWS
                        Security alerts for AWS with GuardDuty
                        Securing your containers using Azure
                        Container monitoring in Azure
                        Using Security Center to secure your containers in Azure
                        Securing your containers using GCP
                        Container Analysis and Binary Authorization in GCP
                        Understanding your attack surface with Security Command Center
     
   
