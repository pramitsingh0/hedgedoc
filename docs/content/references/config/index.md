# Configuration

HedgeDoc can be configured via environment variables either directly or via an `.env` file.

## The `.env` file

The `.env` file should be placed in the root of the project and contains key-value pairs of
environment variables and their corresponding value. This can for example look like this:

```ini
HD_BASE_URL="http://localhost:8080"
HD_SESSION_SECRET="change_me_in_production"
HD_DATABASE_TYPE="sqlite"
HD_DATABASE_NAME="./hedgedoc.sqlite"
HD_MEDIA_BACKEND="filesystem"
HD_MEDIA_BACKEND_FILESYSTEM_UPLOAD_PATH="uploads/"
```

We also provide an `.env.example` file containing a minimal configuration in the root of the project.
This should help you to write your own configuration.

!!! warning  
    The minimal configuration provided in `.env.example` is exactly that: minimal.  
    It will let you start HedgeDoc for local development,
    but it is **not** meant to be used in production without prior changes.




