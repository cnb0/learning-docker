## Docker Security – Securing Your Containers
       
            Chapter 1: Introduction To Container Security
                
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
                
            Chapter 2: Docker Security Fundamentals And Best Practices
                
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
                
            Chapter 3: Advanced Docker Security – Secrets, Secret Commands, Tagging, And Labels
                
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
                
            Chapter 4: Scanning, Monitoring, And Using Third-Party Tools
                
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
     
