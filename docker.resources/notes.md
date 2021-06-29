
# Docker Notes:

[Docker Handbook](https://www.freecodecamp.org/news/the-docker-handbook/#how-to-create-a-container-without-running)

```
    - Docker Install and Config
    - Docker Stack - [ BuildSystem,Hub,HostMgt,ConfigMgt,Deployment,Orchestration
    - Docker for Developers
    - Docker for sysadmins
    - Docker Images/Containers
    - Docker hub/registry
    - Docker CookBook
    - Docker Usage
    - Docker in Dev/Production
    - Docker Engine/Swarm/Compose
    - Docker and Vagrant
    - Docker and Kubernetes
    - Docker Networking
    - Docker Logging and Monitoring
    - Docker API
    - Docker Security
    - Docker CLI
    - Docker Service Discovery
    - Docker Volumes/Mounts
    - Docker Scheduling
    - Docker Load balancing
    - Docker Scaling services
    - Docker Config resources
    - Docker Rolling updates
    - Docker for Developers


- WHAT ARE CONTAINERS? It Depends Who You Ask

        - INFRASTRUCTURE
                - Application processes on a shared kernel  
                - Package apps with all dependencies
                - Simpler, lighter, and denser than VMs 

        - APPLICATIONS
                - Deploy to any environment in seconds
                - Portable across different environments
                - Easily accessed and shared


- PreDocker - Applications and Infra are Tightly coupled 
          - Optimized for stability

- PostDocker - Applications and Infra are loosely coupled 
           - Optimized for agility 


- Enabling Technology in Linux has been present for many years
         - Namespaces
            - Isolation / Modification of Container processes from host
                 PIDs ,Network,Filesystems,UID/GID ,IPC, Hostname / Domain
            - Process
                - Virtualizes the process ID space. 
                - technique to prevent processes from discovering that they’re containerized. 
                - Every container has a process with a PID of 1 (the init process) just like on a bare-metal server.

            - Network
                - Virtualizes all the networking resources, such as interfaces, sockets, routing table, MAC table, 
                - The Linux kernel creates a loopback interface in the netns when a new netns is created.
            - Filesystem - chroot - Clone / Replace list of mounted filesystems
                        - Virtualizes the filesystem mount points. 
                        - This allows each group of isolated processes to think they own the root filesystem, 
                          whereas in reality their root is usually just a constrained view of a larger filesystem.
            - User 
                   - Virtualizes the users and the user and group IDs. 
                   - Every isolated group of processes has a root user that acts as root only within that virtual instance.
                   - Replace / Extend UID / GID
                   - Delete unneeded UID / GID from container 
                   - Add / change UID / GID map inside container
                   - root privilege in container, user privilege in base OS
            - IPC
                - Virtualizes the various constructs for IPC, such as POSIX message queues, shared memory, semaphores 
                - This also prevents processes from reaching across their isolation unit to mess with another process’s state.
                - Separate interprocess communications resources
                    - Sys V IPC
                    - POSIX messaging
            - UTS (UNIX Technology Services)
                - Virtualizes the hostname and domain name such that each isolated unit can set its own hostname and 
                  domain name without affecting the others or the parent.
                - Change inside container:
                    - Hostname
                    - Domain
        - cgroups - Control Groups
                  - Way to allocate resources to processes running on a system
                  - Hierarchical and can be dynamically added, changed and removed
                  - Virtualizes the view of a process’s cgroups as seen via /proc/pid/cgroup and /proc/pid/mountinfo,
                  
                  - Made up of several subsystems also called Resource Controllers
                      - blkio — this subsystem sets limits on input/output access to and from block devices
                        such as physical drives (disk, solid state, USB, etc.).
                      - cpu — this subsystem uses the scheduler to provide cgroup tasks access to the CPU.
                      - cpuacct — this subsystem generates automatic reports on CPU resources used by
                                  tasks in a cgroup.
                      - cpuset — this subsystem assigns individual CPUs (on a multicore system) and memory
                                 nodes to tasks in a cgroup.
                      - devices — this subsystem allows or denies access to devices by tasks in a cgroup.
                      - freezer — this subsystem suspends or resumes tasks in a cgroup
                      - memory — this subsystem sets limits on memory use by tasks in a cgroup, and
                                generates automatic reports on memory resources used by those tasks.
                      - net_cls — this subsystem tags network packets with a class identifier (classid) that
                                   allows the Linux traffic controller ( tc) to identify packets originating 
                                   from a particular  cgroup task.
                      - net_prio — this subsystem provides a way to dynamically set the priority of network
                                    traffic per network interface.
                        - ns — the namespace subsystem.
        - Union (overlay) Filesystems
                  - Stacked / Layered Storage
                        - Copy on write
                        - Many available underlying implementations
                            - Aufs
                            - OverlayFS
                            - btrfs
                            - LVM
                            - Device mapper


- Container Networking 
                   - Diving InContainer networking has four operating modes:
                        - No network
                        - Host network
                        - Single-host network
                        - Multihost network

- Kernel Features for Containers :

            - Filesystem separation     ===>  Mount namespace (kernel 2.4.19)
            - Hostname separation       ===>  UTS namespace (kernel 2.6.19)
            - IPC separation            ===>  IPC namespace (kernel 2.6.19)
            - User (UID/GID) separation ===>  User namespace (kernel 2.6.23 〜 kernel 3.8)
            - Processtable separation   ===>  PID namespace (kernel 2.6.24)
            - Network separation        ===>  Network Namespace (kernel 2.6.24)
            - Usage limit of CPU/Memory ===>  Control groups



- CONTAINERS ARE NOT SECURE BY DEFAULT
        - Container Isolation with SELinux
        - Security and Limiting Containers
        - security issues should you be thinking about in a container-based environment
                -  Kernel exploits
                - Denial-of-service attacks
                - Container breakouts
                - Poisoned images
                - Compromising secrets
        - Defense in Depth
          - Least Privilege
                - no root access 
                - Run filesystems as read-only 
                - Cut down on the kernel calls that a container can make
                - Limit the resources that a container can use to avoid DoS attacks 
                - Remove setuid/setgid Binaries
                - Limit Memory/CPU
                - Limit Restarts
                - Limit file systems
                - Limit Capabilities 
                - apply resource limits (ulimits)
                        - nofile
                        - nproc
                - docker run -ti --rm --cap-add=NET_ADMIN ubuntu /bin/bash
                - SELinux
                - AppArmor
                - Auditing

        - Docker Content Trust
            - When content trust is enabled, the Docker engine will only operate on images that have been signed and
            -  will refuse to run any images whose signatures or digests do not match.


- Docker Security config
            - The host configuration
            - The Docker daemon configuration
            - The Docker daemon configuration files
            - Container images/runtime
            - Docker security operations

- VM vs Containers 
        Virtual Machine  - 
            Pro : VM Isolation
            Con :
                  - Complete OS
                  - Static Compute
                  - Static Memory
                  - High Resource Usage
                  - VMs are NOT portable across hypervisor 
                  - Do NOT provide portable packaging for applications
        Containers :
                  - Container Isolation 
                  - Container Portability
                  - Shared Kernel
                  - Burstable Compute
                  - Burstable Memory
                  - Low Resource Usage
                  - Linux Containers + Linux Host = Guaranteed Portability Across Any Infrastructure

Container :
        - A container is the smallest compute unit
        - Containers are created from container images

- Containers do not run ON docker. Containers are processes - they run on a container host. 
- The docker daemon is one of the many user space tools/libraries that talks to the kernel to set up containers
- CONTAINER HOST - Regular processes, daemons, and containers all run side by side

- Tightly coupled communication through the kernel - all or nothing feature support:
            - Operating System (kernel)
            - Container Runtime (runc)
            - Tools for orchestrate container in orchestrators like Kubernetes (CRI-O, Kubelet..)
-  KERNEL 
    - User space vs. kernel   
    - The kernel is the gatekeeper for all access to resources and data structures:
              - System calls
              - Memory
              - CPU
              - Devices
              - Drivers
              - Filesystems
    - Creating regular Linux processes
    - Normal processes are created, destroyed,and managed with system calls

- CONTAINER ENGINE Provides an API prepares data & metadata for runc
    - Regular processes, daemons, and containers all run side by side
    - Two major jobs:
               - Provide an API - can be consumed by users or robots
               - Prepares data & metadata from  container image
                    - Creates a manifest.json file
                    - Graph driver decodes the container
                    - images layers - maps to filesystem
                    - (overlay or device mapper) 
                    - Prepares a directory to be mounted
            - Takes command line options 
            - Creates and prepares manifest.json
            - Pulls image   
            - Decodes image on disk (graph drivers)
            - Hands directory and manifest.json to container runtime (runc)

OCI - Two Specifications
        - Runtime (runc) - How to run a “filesystem bundle” that is unpacked on disk
        - Image Format - How to create an OCI Image that contains 
                         sufficient information to launch the application on the target platform
                        Output includes :
                            - Image manifest
                            - Filesystem serialization
                                   - Image configuration which includes information
                                     such as application arguments, environments, etc

CONTAINER IMAGE
         - Open source code/libraries, in a Linux distribution, in a tarball
              - Even base images are made up of layers:
                    - Libraries (glibc, libssl)
                    - Binaries (httpd)
                    - Packages (rpms)
                    - Dependency Management (yum)
                    - Repositories (rhel7)
                    - Image Layer & Tags (rhel7:7.5-404)

        - container images are stored in an image registry

REGISTRY SERVERS - Better than virtual appliance market places 
        - An image repository contains all versions of an image in the image registry
        - Find images
        - Run images
        - Build new images
        - Share images
        - Pull images
        - Introspect images
        - Shell into running container



How to roll out a successful container strategy in your business?
        - Will this work with my existing storage and networking solutions?
        - How do you control access to the workloads?
        - How do you ensure the system is secure?
        - What kind of governance model is in place?
        - Where will my content/IP live?
        - What types of apps will I containerize?
        - Who on my staff will maintain, patch and operate this?
        - Do my developers know how to use Docker?


Critical Decisions for Running Docker in Production
      - Image Management
      - Selecting a cloud provider
      - Network Access and Security Patching
      - Load Balancing across Containers and Hosts
      - The Deployment Process
      - Service discovery
      - Log management
      - Container Monitoring
      - Database management


Key useCases :
        Simplifying Configuration
        Code Pipeline Management
        Developer Productivity
        App Isolation
        Server Consolidation
        Debugging Capabilities
        Multi-tenancy
        Rapid Deployment

key benefits :
        Portable deployment of applications as a single object versus process sandboxing;
        • Application-centric versus machine/server-centric;
        • Supports for automatic container builds;
        • Built-in version tracking;
        • Reusable components;
        • Public registry for sharing containers; and
        • A growing tools ecosystem from the published API.
