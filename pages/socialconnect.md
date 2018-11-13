# SocialConnect for Joomla

## How to setup Facebook login and autoposting

https://developers.facebook.com/apps/

Click on: + Add a New App

/Users/fevangelou/Desktop/Screen Shot 2018-11-13 at 16.23.59.png

A)
Add a Product: Facebook Login - click "Set Up" >> Web

Then

1. Tell Us about Your Website
	>> Fill in "Site URL", click Save and Next
2. Set Up the Facebook SDK for Javascript
	>> Next
3. Check Login Status
	>> Next
4. Add the Facebook Login Button
	>> Next
5. Next Steps
	(nothing)
	
B) Under "Products >> Facebook Login", click on "Settings" and enter the following URLs in the "Valid OAuth Redirect URIs" field:

https://YOUR\_DOMAIN\_HERE/index.php?option=com_socialconnect&view=login&task=facebookoauth
https://YOUR\_DOMAIN\_HERE/administrator/index.php?option=com_socialconnect&view=authorize&service=facebook

Important: Make sure you use "https://" and that your site also runs under HTTPS.

This will cover strict URL checking for both logins and autoposting in Facebook.

Click on "Save Changes"
	
/Users/fevangelou/Desktop/Screen Shot 2018-11-13 at 16.33.42.png


C) Under "Settings >> Basic", first make sure you have copied:
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

Then top right, click the toggle on the right of "Status: In Development" to make your App public.
/Users/fevangelou/Desktop/Screen Shot 2018-11-13 at 16.47.42.png

If all has gone well, you should now see "Status: Live"
/Users/fevangelou/Desktop/Screen Shot 2018-11-13 at 16.49.52.png

You are now ready to accept logins via Facebook as well as allow autoposting to your Facebook account or page.

If you now switch back to the "Dashboard" and see "Finish Facebook Login Quickstart" showing, you can go ahead and click to close that notification as it's not required.
/Users/fevangelou/Desktop/Screen Shot 2018-11-13 at 16.52.00.png
