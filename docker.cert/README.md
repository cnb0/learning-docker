# Docker Certified Associate
Reference material for the first & only Official Docker certification launched at DockerCon EU'2017


## Official Certification Links

  * [Study Guide](https://training.mirantis.com/wp-content/uploads/2020/10/Docker-Study-Guide_v1.5-October.pdf)
  * [Book Certification Slot](https://prod.examity.com/docker/)
  
## Certification Concepts

### Section-1: Orchestration

  ```
         - • Complete the setup of a swarm mode cluster, with managers and worker nodes
           • State the differences between running a container vs running a service
           • Demonstrate steps to lock a swarm cluster
           • Extend the instructions to run individual containers into running services under swarm
           • Interpret the output of "docker inspect" commands
           • Convert an application deployment into a stack file using a YAML compose file with "docker stack deploy"
           • Manipulate a running stack of services
           • Increase # of replicas
           • Add networks, publish ports
           • Mount volumes
           • Illustrate running a replicated vs global service
           • Identify the steps needed to troubleshoot a service not deploying
           • Apply node labels to demonstrate placement of tasks
           • Sketch how a Dockerized application communicates with legacy systems
           • Paraphrase the importance of quorum in a swarm cluster
           • Demonstrate the usage of templates with "docker service create" 
  ```
  
  
### Section-2: Image Management
 
          • Describe Dockerfile options [add, copy, volumes, expose, entrypoint, etc]
          • Show the main parts of a Dockerfile
          • Give examples on how to create an efficient image via a Dockerfile
          • Inspect images and report specific attributes using filter and format
          • Demonstrate tagging an image
          • Utilize a registry to store an image
          • Display layers of a Docker image
          • Apply a file to create a Docker image
          • Modify an image to a single layer
          • Describe how image layers work
          • Deploy a registry (not architect)
          • Configure a registry
          • Log into a registry
          • Utilize search in a registry
          • Tag an image
          • Push an image to a registry
          • Sign an image in a registry
          • Pull an image from a registry
          • Describe how image deletion works
          • Delete an image from a registry


### Section-3: Installation & Configuration
```
        • Demonstrate the ability to upgrade the Docker engine
        • Complete setup of repo, select a storage driver, and complete installation of Docker
          engine on multiple platforms
        • Configure logging drivers (splunk, journald, etc)
        • Setup swarm, configure managers, add nodes, and setup backup schedule
        • Create and manage user and teams
        • Interpret errors to troubleshoot installation issues without assistance
        • Outline the sizing requirements prior to installation
        • Understand namespaces, cgroups, and configuration of certificates
        • Use certificate-based client-server authentication to ensure a Docker daemon 
          has the rights to access images on a registry
        • Consistently repeat steps to deploy Docker engine, UCP, and DTR on AWS and on premises in an HA config
        • Complete configuration of backups for UCP and DTR
        • Configure the Docker daemon to start on boot
  
  ```

### Section-4: Networking
 ```
      • Create a Docker bridge network for a developer to use for their containers
      • Troubleshoot container and engine logs to understand a connectivity issue between containers
      • Publish a port so that an application is accessible externally
      • Identify which IP and port a container is externally accessible on
      • Describe the different types and use cases for the built-in network drivers
      • Understand the Container Network Model and how it interfaces with the Docker engine and network and
        IPAM drivers
      • Configure Docker to use external DNS
      • Use Docker to load balance HTTP/HTTPS traffic to an application (Configure L7 load balancing with Docker EE)
      • Understand and describe the types of traffic that flow between the Docker engine, registry, and UCP controllers
      • Deploy a service on a Docker overlay network
      • Describe the difference between "host" and "ingress" port publishing mode
  
  ```
  
### Section-5: Security
```
      • Describe the process of signing an image
      • Demonstrate that an image passes a security scan
      • Enable Docker Content Trust
      • Configure RBAC in UCP
      • Integrate UCP with LDAP/AD
      • Demonstrate creation of UCP client bundles
      • Describe default engine security
      • Describe swarm default security
      • Describe MTLS
      • Identify roles
      • Describe the difference between UCP workers and managers
      • Describe process to use external certificates with UCP and DTR
  * [Docker - Secrets] 
 ```
 
### Section-6: Volumes
```
      • State which graph driver should be used on which OS
      • Demonstrate how to configure devicemapper
      • Compare object storage to block storage, and explain which one is preferable when available
      • Summarize how an application is composed of layers and where those layers reside on the filesystem
      • Describe how volumes are used with Docker for persistent storage
      • Identify the steps you would take to clean up unused images on a filesystem, also on DTR
      • Demonstrate how storage can be used across cluster nodes
```

## Certification Preparation Material

  * [Nigel Poulton's Docker Deep Dive - PaperBack](https://www.amazon.com/Docker-Deep-Dive-Nigel-Poulton-ebook/dp/B01LXWQUFF)
  * [Terry Cox's Docker Certified Associate prep Course - LinuxAcademy](https://linuxacademy.com/linux/training/course/name/docker-certified-associate-prep-course)
  
## Free Docker Practice Environment

  * [Practice Docker](https://labs.play-with-docker.com/)
  
## Free Docker Practice Labs

  * [Katacoda Labs](https://www.katacoda.com/courses/docker)
  
## Free Practice Tests
    
  * [djitz.com](https://djitz.com/certification/docker-certified-associate-dca-test-review-questions-set-9-security/)
  
 
