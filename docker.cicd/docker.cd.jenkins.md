
### Docker and Jenkins -  DevOps workflow

```
- Build reliable and secure applications using Docker containers.
- Deliver your applications directly on the Docker Swarm cluster.
- Create more complex solutions using multi-containers and database migrations.
- dockerize an application for the Continuous Delivery process
- Configure Jenkins and scale it using Docker-based agents
- Understand the principles and the technical aspects of a successful Continuous Delivery pipeline
- Create a complete Continuous Delivery process using modern tools: Docker, Jenkins, and Ansible
- Write acceptance tests using Cucumber and run them in the Docker ecosystem using Jenkins
- Create multi-container applications using Docker Compose
- Managing database changes inside the Continuous Delivery process and understand effective frameworks such as Cucumber and Flyweight
- Build clustering applications with Jenkins using Docker Swarm
- Publish a built Docker image to a Docker Registry and deploy cycles of Jenkins pipelines using community best practices


```
1. Introducing Continuous Delivery

                    What is Continuous Delivery?
                        The traditional delivery process
                             Introducing the traditional delivery process
                             Shortcomings of the traditional delivery process
                        Benefits of Continuous Delivery
                    The automated deployment pipeline
                         Continuous Integration
                         Automated acceptance testing
                                The Agile testing matrix
                                The testing pyramid
                    Configuration management
                    Prerequisites to Continuous Delivery
                            Organizational prerequisites
                                DevOps culture
                                Client in the process
                                Business decisions
                            Technical and development prerequisites
                    Building the Continuous Delivery process
                    Introducing tools
                        Docker ecosystem
                        Jenkins
                        Ansible
                        GitHub
                        Java/Spring Boot/Gradle
                    Creating a complete Continuous Delivery system
                        Introducing Docker
                        Configuring Jenkins
                        Continuous Integration Pipeline
                        Automated acceptance testing
                        Configuration management with Ansible/Continuous Delivery pipeline
                        Clustering with Docker Swarm/Advanced Continuous Delivery

2. Introducing Docker

                    What is Docker?
                    Containerization versus virtualization
                    The need for Docker
                    Environment
                    Isolation
                    Organizing applications
                    Portability
                    Kittens and cattle
                    Alternative containerization technologies
                    Docker installation
                    Prerequisites for Docker
                    Installing on a local machine
                    Docker for Ubuntu
                    Docker for Linux
                    Testing Docker installation
                    Installing on a server
                    Dedicated server
                    Running Docker hello world>
                    Docker components
                    Docker client and server
                    Docker images and containers
                    Docker applications
                    Building images
                    Docker commit
                    Dockerfile
                    Complete Docker application
                    Write the application
                    Prepare the environment
                    Build the image
                    Run the application
                    Environment variables
                    Docker container states
                    Docker networking
                    Running services
                    Container networks
                    Exposing container ports
                    Automatic port assignment
                    Using Docker volumes
                    Using names in Docker
                    Naming containers
                    Tagging images
                    Docker cleanup
                    Cleaning up containers
                    Cleaning up images
                    Docker commands overview


3. Configuring Jenkins

                    What is Jenkins?
                    Jenkins installation
                    Requirements for installation
                    Installing on Docker
                    Installing without Docker
                    Initial configuration
                    Jenkins hello world
                    Jenkins architecture
                    Master and slaves
                    Scalability
                    Vertical scaling
                    Horizontal scaling
                    Test and production instances
                    Sample architecture
                    Configuring agents
                    Communication protocols
                    Setting agents
                    Permanent agents
                    Configuring permanent agents
                    Understanding permanent agents
                    Permanent Docker agents
                    Configuring permanent Docker agents
                    Understanding permanent Docker agents
                    Jenkins Swarm agents
                    Configuring Jenkins Swarm agents
                    Understanding Jenkins Swarm agents
                    Dynamically provisioned Docker agents
                    Configuring dynamically provisioned Docker agents
                    Understanding dynamically provisioned Docker agents
                    Testing agents
                    Custom Jenkins images
                    Building Jenkins slave
                    Building Jenkins master
                    Configuration and management
                    Plugins
                    Security
                    Backup
                    Blue Ocean UI

4. Continuous Integration Pipeline

                    Introducing pipelines
                        Pipeline structure
                        Multi-stage Hello World
                        Pipeline syntax
                            Sections
                            Directives
                            Steps
                    Commit pipeline
                        Checkout
                            Creating a GitHub repository
                            Creating a checkout stage
                    Compile
                            Creating a Java Spring Boot project
                            Pushing code to GitHub
                            Creating a compile stage
                    Unit test
                            Creating business logic
                            Writing a unit test
                            Creating a unit test stage
                    Jenkinsfile
                            Creating Jenkinsfile
                            Running pipeline from Jenkinsfile
                    Code quality stages
                            Code coverage
                            Adding JaCoCo to Gradle
                            Adding a code coverage stage
                            Publishing the code coverage report
                    Static code analysis
                            Adding the Checkstyle configuration
                            Adding a static code analysis stage
                            Publishing static code analysis reports
                            SonarQube
                    Triggers and notifications
                        Triggers
                            External
                            Polling SCM
                            Scheduled build
                        Notifications
                            Email
                            Group chat
                            Team space
                    Team development strategies
                        Development workflows
                            Trunk-based workflow
                            Branching workflow
                            Forking workflow
                    Adopting Continuous Integration
                            Branching strategies
                            Feature toggles
                    Jenkins Multibranch
                    Non-technical requirements

5. Automated Acceptance Testing

                    Introducing acceptance testing
                    Docker registry
                            Artifact repository
                            Installing Docker registry
                                Docker Hub
                                Private Docker registry
                                    Installing the Docker registry application
                                    Adding a domain certificate
                                    Adding an access restriction
                                Other Docker registries
                            Using Docker registry
                                Building an image
                                Pushing the image
                                Pulling the image
                    Acceptance test in pipeline
                            The Docker build stage
                                Adding Dockerfile
                                Adding the Docker build to the pipeline
                            The Docker push stage
                                Acceptance testing stage
                                    Adding a staging deployment to the pipeline
                                    Adding an acceptance test to the pipeline
                                    Adding a cleaning stage environment
                    Docker Compose
                            What is Docker Compose?
                            Installing Docker Compose
                            Defining docker-compose.yml
                            Using the docker-compose command
                            Building images
                            Scaling services
                    Acceptance testing with Docker Compose
                              Using a multi-container environment
                                    Adding a Redis client library to Gradle
                                    Adding a Redis cache configuration
                                    Adding Spring Boot caching
                                    Checking the caching environment
                            Method 1 – Jenkins-first acceptance testing
                                    Changing the staging deployment stage
                                    Changing the acceptance test stage
                            Method 2 – Docker-first acceptance testing
                    Creating a Dockerfile for acceptance test
                                    Creating docker-compose.yml for acceptance test
                                    Creating an acceptance test script
                                    Running the acceptance test
                                    Changing the acceptance test stage
                                    Comparing method 1 and method 2
                    Writing acceptance tests
                            Writing user-facing tests
                                Using the acceptance testing framework
                                    Creating acceptance criteria
                                    Creating step definitions
                                    Running an automated acceptance test
                    Acceptance test-driven development



6. Configuration Management with Ansible

                    Introducing configuration management
                            Traits of good configuration management
                            Overview of configuration management tools
                    Installing Ansible
                            Ansible server requirements
                            Ansible installation
                            Docker-based Ansible client
                    Using Ansible
                            Creating inventory
                            Ad hoc commands
                            Playbooks
                                Defining a playbook
                                Executing the playbook
                                Playbook's idempotency
                                Handlers
                                Variables
                    Roles
                            Understanding roles
                            Ansible Galaxy
                    Deployment with Ansible
                            Installing Redis
                            Deploying a web service
                                Configuring a project to be executable
                                Changing the Redis host address
                                Adding calculator deployment to the playbook
                            Running deployment
                    
                    Ansible with Docker
                        Benefits of Ansible
                        Ansible Docker playbook
                            Installing Docker
                            Running Docker containers
                            Using Docker Compose
                  
7. Continuous Delivery Pipeline
                    Environments and infrastructure
                        Types of environment
                            Production
                            Staging
                            QA
                            Development
                        Environments in Continuous Delivery
                        Securing environments
                    Nonfunctional testing
                            Types of nonfunctional test
                                Performance testing
                                Load testing
                                Stress testing
                                Scalability testing
                                Endurance testing
                                Security testing
                                Maintainability testing
                                Recovery testing
                    Nonfunctional challenges
                            Application versioning
                                Versioning strategies
                                Versioning in the Jenkins pipeline
                    Complete Continuous Delivery pipeline
                                Inventory
                                Acceptance testing environment
                                Release
                                Smoke testing
                                Complete Jenkinsfile


8. Clustering with Docker Swarm

                    Server clustering
                    Introducing server clustering
                    Introducing Docker Swarm
                    Docker Swarm features overview
                    Docker Swarm in practice
                    Setting up a Swarm
                    Adding worker nodes
                    Deploying a service
                    Scaling service
                    Publishing ports
                    Advanced Docker Swarm
                    Rolling updates
                    Draining nodes
                    Multiple manager nodes
                    Scheduling strategy
                    Docker Compose with Docker Swarm
                    Introducing Docker Stack
                    Using Docker Stack
                    Specifying docker-compose.yml
                    Running the docker stack command
                    Verifying the services and containers
                    Removing the stack
                    Alternative cluster management systems
                    Kubernetes
                    Apache Mesos
                    Comparing features
                    Scaling Jenkins
                    Dynamic slave provisioning
                    Jenkins Swarm
                    Comparison of dynamic slave provisioning and Jenkins Swarm


9. Advanced Continuous Delivery

                    Managing database changes
                    Understanding schema updates
                    Introducing database migrations
                    Using Flyway
                    Configuring Flyway
                    Defining  the SQL migration script
                    Accessing database
                    Changing database in Continuous Delivery
                    Backwards-compatible changes
                    Non-backwards-compatible changes
                    Adding a new column to the database
                    Changing the code to use both columns
                    Merging the data in both columns
                    Removing the old column from the code
                    Dropping the old column from the database
                    Separating database updates from code changes
                    Avoiding shared database
                    Preparing test data
                    Unit testing
                    Integration/acceptance testing
                    Performance testing
                    Pipeline patterns
                    Parallelizing pipelines
                    Reusing pipeline components
                    Build parameters
                    Shared libraries
                    Creating a shared library project
                    Configure the shared library in Jenkins
                    Use shared library in Jenkinsfile
                    Rolling back deployments
                    Adding manual steps
                    Release patterns
                    Blue-green deployment
                    Canary release
                    Working with legacy systems
                    Automating build and deployment
                    Automating tests
                    Refactoring and introducing new features
                    Understanding the human element

```
