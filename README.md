# Interactive Email Signups

This repo holds the interactives for our email sign up pages. Each immersive/interactive is contained within it's own subfolder, along with everything needed to run and deploy.

The `readme` in each interactive will explain how to run and deploy.

Once deployed, these interactives can be inserted into an `immersive` article in Composer

If you want to deploy an interactive, you will need the correct credentials from Janus.

### Caveats

- It is best to avoid deploying updates to an interactive while a page is being actively promoted; there my be a small window where the interactive will only load a blank page.

- These interactives _ostensibly_ work in apps. Cross site links (including the email sub iFrames) need to be absolute links so that the app can find the correct resource.

- If you want to check how an interactive behaves in app, you will need a draft in Composer, and a device running the **app preview**.
