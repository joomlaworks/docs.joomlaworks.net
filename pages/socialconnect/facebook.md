## Facebook Integration in SocialConnect

### How to setup Facebook login and autoposting

#### Step 1

![Add a New App](images/socialconnect/1.png)

Go to: [https://developers.facebook.com/apps/](https://developers.facebook.com/apps/)

Click on: **+ Add a New App**

After you fill in the details proceed to add a "product".

In this case, choose **"Facebook Login"**, click "Set Up" and the choose "Web".

On **"Tell Us about Your Website"**, fill in "Site URL", click Save and "Next"


#### Step 2

![Facebook Login Settings](images/socialconnect/2.png)

Under "Products >> Facebook Login", click on "Settings" and enter the following URLs in the "Valid OAuth Redirect URIs" field:

* https://YOUR\_DOMAIN\_HERE/index.php?option=com_socialconnect&view=login&task=facebookoauth
* https://YOUR\_DOMAIN\_HERE/administrator/index.php?option=com_socialconnect&view=authorize&service=facebook

Make sure you replace YOUR\_DOMAIN\_HERE with your actual domain.

**Important**: Make sure you use "https://" and that your site also runs under HTTPS.

This will cover strict URL checking for both logins and autoposting in Facebook.

Click on "Save Changes".


#### Step 3

![Basic Settings](images/socialconnect/3.png)

Under "Settings >> Basic", first make sure you have copied:

- App ID
- App Secret

You will use these in SocialConnect's settings for Facebook.

Then, while you are at that page, make sure the following fields are filled in:

- Display name
- App Domains (just your "naked" domain or a specific subdomain if you wish to restrict access to such a subdomain)
- Contact Email
- Privacy Policy URL (required to change the App to "Public" from "In Development")
- Terms of Service URL (optional but nice to have)
- App Icon (1024x1024) (optional but nice to have)
- Category (here choose "Business and Pages")
- Business Use (here choose "Support my own business" - this is crucial to have your app approved faster for both login and autoposting)

Scrolling a bit lower, make sure the section "Website" has a "Site URL" filled in.

Click on "Save Changes".


#### Step 4

Finally top right, click the toggle on the right of "Status: In Development" to make your App public.

![Status: In Development](images/socialconnect/4.png)

If all has gone well, you should now see "Status: Live"

![Status: Live](images/socialconnect/5.png)

You are now ready to accept logins via Facebook as well as allow autoposting to your Facebook account or page.

If you now switch back to the "Dashboard" and see "Finish Facebook Login Quickstart" showing, you can go ahead and click to close that notification as it's not required.

![Status: Live](images/socialconnect/6.png)


### How to setup Facebook Comments
If you wish to enable Facebook Comments on your site, you can simply re-use your "App ID" which you got when setting up your Facebook application before.

The settings in detail:
- Facebook comments application ID: Just copy the Facebook "App ID" here.
- Facebook comments width: The width of the Facebook Comments block in pixels.
- Facebook comments color scheme: The color scheme of the Facebook Comments block.
- Facebook number of comments: The number of comments to show when the Facebook Comments block is loaded.
- Facebook comments ordering: The ordering of the comments in the Facebook Comments block.
