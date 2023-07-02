After completing this tutorial you'll have your own production-ready HedgeDoc instance running.
We will use [docker][docker-docs] to accomplish this. 

1. Open the terminal of the machine you want to install HedgeDoc on.

2. Check if you have docker installed. The response should contain some version number greater than `20.10.13`. `docker --version`
   - If not please refer to [the docker install guide][docker-install] to install Docker.

3. Create a new directory for your HedgeDoc instance: `mkdir -p /opt/hedgedoc`
 
4. Change into the directory with `cd /opt/hedgedoc`.
 
5. Download these files:
   - `curl -o .env https://docs.hedgedoc.dev/files/setup-docker/config.env`
   - `curl -o Caddyfile https://docs.hedgedoc.dev/files/setup-docker/Caddyfile`
   - `curl -o docker-compose.yml https://docs.hedgedoc.dev/files/setup-docker/docker-compose.yml`
 
6. Open the file `.env` in the editor of your choice (for example with `nano`) and edit the following variables:
   - `HD_BASE_URL`: This should contain the full url you intend to run HedgeDoc on (e.g. for the demo this would be `https://demo.hedgedoc.org`). If you just want to run HedgeDoc on your local machine for now `https://hedgedoc.localhost` should be sufficient for testing.
   - `HD_SESSION_SECRET`: This should contain a long and random secret for your login sessions. You can generate it with `pwgen -s 64` or any other way you see fit.
   - `HD_DATABASE_PASS`: This should contain a stronger password than `password` for your database.

7. Start the docker containers by `docker compose up -d` to start the docker composition.
 
8. Navigate your browser to the url you chose in step 6. Your instance is now ready to use.

## Troubleshooting

### Port already used
```
Error response from daemon: driver failed programming external connectivity: Bind for 0.0.0.0:80 failed: port is already allocated.
```

If you see this error, it means there is already something running on your machine that uses port `80` or `443`.
The easiest fix for this is to stop the other application.
If you want to run multiple applications on that port on your server you may want to read our guide about [reverse proxying][reverse-proxying].

## Further reading 

- [Creating a user account][tutorials/user]
- [Creating your first note][tutorials/first-note]
- [Creating your first presentation][tutorials/first-presentation]
- [Advanced configuration options][how-to]

[docker-docs]: https://docs.docker.com/
[docker-install]: https://docs.docker.com/engine/install/

[docker-compose-file]: /files/setup-docker/docker-compose.yml
[config.env]: /files/setup-docker/config.env
[Caddyfile]: /files/setup-docker/Caddyfile

[reverse-proxying]: /how-to/reverse-proxy/

[tutorials/user]: tutorials/user/
[tutorials/first-note]: tutorials/first-note/
[tutorials/first-presentation]: tutorials/first-presentation/
[how-to]: how-to/
