
> A curated list of Docker Compose Workshop

- starting point for how to integrate different services using a Compose file and to manage their deployment with Docker Compose.

## Getting started

These instructions will get you through the bootstrap phase of creating and
deploying samples of containerized applications with Docker Compose.

### Prerequisites

- Make sure that you have Docker and Docker Compose installed

### Running a sample

The root directory of each sample contains the `docker-compose.yaml` which
describes the configuration of service components. All samples can be run in
a local environment by going into the root directory of each one and executing:

```console
docker-compose up -d
```

To stop and remove all containers of the sample application run:

```console
docker-compose down
```
## Contents

- [Single service samples](#single-service-samples).
- [Samples of Docker Compose applications with multiple integrated services](#samples-of-docker-compose-applications-with-multiple-integrated-services).


## Single service samples
- [`Angular`] 
- [`Spark`]
- [`VueJS`]
- [`Flask`]
- [`PHP`]
- [`Traefik`]
- [`Django`]


## Samples of Docker Compose applications with multiple integrated services
- [`ASP.NET / MS-SQL`] Sample ASP.NET core application with MS SQL server database.
- [`Elasticsearch / Logstash / Kibana`]) - Sample Elasticsearch, Logstash, and Kibana stack.
- [`Go / NGINX / MySQL`] - Sample Go application with an Nginx proxy and a MySQL database.
- [`Go / NGINX / PostgreSQL`] - Sample Go application with an Nginx proxy and a PostgreSQL database.
- [`Java Spark / MySQL`]- Sample Java application and a MySQL database.
- [`NGINX / Flask / MongoDB`] - Sample Python/Flask application with Nginx proxy and a Mongo database.
- [`NGINX / Flask / MySQL`] - Sample Python/Flask application with an Nginx proxy and a MySQL database.
- [`NGINX / Go`]- Sample Nginx proxy with a Go backend.
- [`React / Spring / MySQL`]- Sample React application with a Spring backend and a MySQL database.
- [`React / Express / MySQL`] - Sample Reactapplication with a Node.js backend and a MySQL database.
- [`React / Rust / PostgreSQL`]- Sample React application with a Rust backend and a Postgres database.
- [`Spring / PostgreSQL`] - Sample Java application with Spring framework and a Postgres database.  

## Basic setups for different platforms 
- [`Gitea / PostgreSQL`]
- [`Nextcloud / PostgreSQL`]
- [`Nextcloud / Redis / MariaDB`]
- [`Wordpress / MySQL`]
- [`Prometheus / Grafana`]