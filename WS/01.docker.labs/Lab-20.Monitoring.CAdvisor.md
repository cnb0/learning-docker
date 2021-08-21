# see docker stats of running images

  docker stats

# start cadvisor for monitoring
```
docker run \
  --volume=/:/rootfs:ro \
  --volume=/var/run:/var/run:ro \
  --volume=/sys:/sys:ro \
  --volume=/var/lib/docker/:/var/lib/docker:ro \
  --volume=/dev/disk/:/dev/disk:ro \
  --publish=8080:8080 \
  --detach=true \
  --name=cadvisor \
  google/cadvisor:latest
```
# open statistics
http://localhost:8080/containers/


# Portainer
```
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9000:9000 \
   --name=portainer --restart=always \
   -v /var/run/docker.sock:/var/run/docker.sock \
   -v portainer_data:/data portainer/portainer-ce                                                                                                                                                                     
