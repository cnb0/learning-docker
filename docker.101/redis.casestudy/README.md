## Redis Dockerfile


 **Dockerfile** of [Redis](http://redis.io/)  published to the public [Docker Hub Registry](https://registry.hub.docker.com/).


 
### Installation

1. Install [Docker](https://www.docker.com/).
    (alternatively, you can build an image from Dockerfile: `docker build -t="redis" redis`)


### Usage

#### Run `redis-server`

    docker run -d --name redis -p 6379:6379 redis

#### Run `redis-server` with persistent data directory. (creates `dump.rdb`)

    docker run -d -p 6379:6379 -v <data-dir>:/data --name redis redis

#### Run `redis-server` with persistent data directory and password.

    docker run -d -p 6379:6379 -v <data-dir>:/data --name redis redis redis-server /etc/redis/redis.conf --requirepass <password>

#### Run `redis-cli`

    docker run -it --rm --link redis:redis redis bash -c 'redis-cli -h redis'
