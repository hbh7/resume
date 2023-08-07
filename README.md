# Resume
My resume in a webpage format.

See it live at [hbh7.com/resume](https://hbh7.com/resume)

## Other information

### CICD
This repo is configured with a GitHub Workflow to deploy this site to my webserver when changes are pushed/merged to master. It can be found in `.github/workflows/CD.yml`. This uses the `resources/update.php` script and a `.env` file to provide secure authentication. If you want to set up something similar for yourself, you'll need to tweak values in each of these files (and for the env file, copy/rename `.env.example` to `.env` on your webserver). You'll also need to configure the `CICD_KEY` secret in your repo settings. 
