Docker Networking Cookbook

1. Linux Networking Constructs
     
        Introduction
        Working with interfaces and addresses
        Configuring Linux host routing
        Exploring bridges
        Making connections
        Exploring network namespaces
       
         
2. Configuring and Monitoring Docker Networks
     
        Introduction
        Verifying host-level settings that impact Docker networking
        Connecting containers in bridge mode
        Exposing and publishing ports
        Connecting containers to existing containers
        Connecting containers in host mode
        Configuring service-level settings
        docker0 bridge addressing
        Docker interface binding for published ports
        Container interface MTU
        Container default gateway

3. User-Defined Networks
     
        Introduction
        Viewing the Docker network configuration
        Bridge
        None
        Host
        Creating user-defined networks
        Connecting containers to networks
        Defining a user-defined bridge network
        Example 1
        Example 2
        Creating a user-defined overlay network
        A key-value store
        Linux kernel version of 3.16
        Open ports
        Docker service configuration options
        Isolating networks
        Creating internal user-defined bridges
        Creating internal user-defined overlays


4. Building Docker Networks
     
        Introduction
        Manually networking containers
        Specifying your own bridge
        Using an OVS bridge
        Using an OVS bridge to connect Docker hosts
        OVS and Docker together
     
       
         
5. Container Linking and Docker DNS
     
        Introduction
        Verifying a host-based DNS configuration inside a container
        Overriding the default name resolution settings
        Configuring links for name and service resolution
        Leveraging Docker DNS
        Creating Docker DNS aliases
         
6. Securing Container Networks
     
        Introduction
        Enabling and disabling ICC
        Disabling outbound masquerading
        Managing netfilter to Docker integration
        Manually creating the required iptables rules
        Creating custom iptables rules
        Exposing services through a load balancer
     
       
         
7. Working with Weave Net
     
        Introduction
        Installing and configuring Weave
        Running Weave-connected containers
        Understanding Weave IPAM
        Working with WeaveDNS
        Weave security
     
       
         
8. Working with Flannel
     
        Introduction
        Installing and configuring Flannel
        Integrating Flannel with Docker
        Using the VXLAN backend
        Using the host gateway backend
        Specifying Flannel options
     
       
         
9. Exploring Network Features
     
        Introduction
        Working with prerelease versions of Docker
        Understanding MacVLAN interfaces
        Working with the Docker MacVLAN network driver
        Understanding IPVLAN interfaces
        Working with the Docker IPVLAN network driver
        Tagging VLAN IDs with MacVLAN and IPVLAN networks
     
       
         
10. Leveraging IPv6
     
        Introduction
        IPv6 command-line basics
        Enabling IPv6 capabilities in Docker
        Working with IPv6-enabled containers
        Configuring NDP proxying
        User-defined networks and IPv6
     
       
         
11. Troubleshooting Docker Networks
     
        Introduction
        Using tcpdump to verify network paths
        Verifying VETH pairs
        Verifying published ports and outbound masquerading
        Verifying name resolution
        Building a test container
        Resetting the local Docker network database
     
       
         