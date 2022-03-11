# Interactive Email Signups

This repo holds the interactives for our email sign up pages. Each immersive/interactive is contained within it's own subfolder, along with everything needed to run and deploy.

The `readme` in each interactive will explain how to run and deploy.

Once deployed, these interactives can be inserted into an `immersive` article in Composer

## Credentials
If you want to deploy an interactive, you will need the correct credentials from Janus.

The deployment scripts use a gulp plugin gulp-s3-upload, which by default looks for AWS credentials in your environment for the "default" (unnamed) profile. Janus saves credentials to a named profiles (e.g frontend, interactives etc) so you may need to prefix the deploy commands with the AWS_PROFILE parameter so the plugins uses the credntials from "interactives" profile. I.E 
```
AWS_PROFILE=interactives gulp deploylive
```
See documentations at: https://github.com/clineamb/gulp-s3-upload#including--setting-up-config

### Caveats

- It is best to avoid deploying updates to an interactive while a page is being actively promoted; there my be a small window where the interactive will only load a blank page.

- These interactives _ostensibly_ work in apps. Cross site links (including the email sub iFrames) need to be absolute links so that the app can find the correct resource.

- If you want to check how an interactive behaves in app, you will need a draft in Composer, and a device running the **app preview**.
