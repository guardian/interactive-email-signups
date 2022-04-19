# Interactive Email Signups

This repo holds the interactives for our email sign up pages. Each immersive/interactive is contained within it's own subfolder, along with everything needed to run and deploy.

The `readme` in each interactive will explain how to run and deploy.

Once deployed, these interactives can be inserted into an `immersive` article in Composer (overview below). Within the subfolder for the interactive running ``npx gulp url`` will output the CAPI url of the interactive.

## Credentials
If you want to deploy an interactive, you will need the correct credentials from Janus.

The deployment scripts use a gulp plugin gulp-s3-upload, which by default looks for AWS credentials in your environment for the "default" (unnamed) profile. Janus saves credentials to a named profiles (e.g frontend, interactives etc) so you may need to prefix the deploy commands with the AWS_PROFILE parameter so the plugins uses the credntials from "interactives" profile. I.E 
```
AWS_PROFILE=interactives gulp deploylive
```
See documentations at: https://github.com/clineamb/gulp-s3-upload#including--setting-up-config

## Composer
**Note** - this is only a brief description of how to configure an interactive page for review/approval, not a complete guide to using composer. 

- Open [composer](https://composer.gutools.co.uk/) and click 'create new', then 'interactive'
- paste the CAPI url into the 'enter text' field, select 'embed' from the options that appear on the right of the field
- on menu go to advanced/Display hint, select "`Immersive`"
- Set the appropriate parameters on the 'furniture' menu (should include the tag "Newsletter sign-up page")
- The page can then be previewed using the 'preview' option:
  - To view the page without the preview frame, add "proxy/" to the start of the preview page path (I.E. viewer.gutools.co.uk/proxy/preview/{article url})
  - If sharing a link to the (unpublished) page for review, use the URL for the composer page, not the preview page (the preview urls are not stable and do not allow the user to go 'back' to the composer page)

### Caveats

- It is best to avoid deploying updates to an interactive while a page is being actively promoted; there my be a small window where the interactive will only load a blank page.

- These interactives _ostensibly_ work in apps. Cross site links (including the email sub iFrames) need to be absolute links so that the app can find the correct resource.

- If you want to check how an interactive behaves in app, you will need a draft in Composer, and a device running the **app preview**.
