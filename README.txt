# GlowUp Journey — PWA package

This is an installable web app package, not a native App Store binary.

## Data storage
The tracker uses browser `localStorage` on the device/browser where it is used. Data stays in that browser profile and is not automatically synced to other devices. Clearing browser/site data may erase it. Use the in-app JSON export regularly.

## To run
- For a quick preview, open `index.html` in a browser. Some PWA/offline features require serving it over HTTPS or localhost.
- To install as an app on iPhone, publish these files to an HTTPS website, open that URL in Safari, tap Share, then Add to Home Screen.
- To install on desktop, serve it over HTTPS or localhost and use the browser's Install app / Add to desktop option if offered.

## Important limitations
- The app currently has in-app schedule settings, but it does not yet deliver guaranteed notifications when closed. iOS web push requires a properly hosted PWA, user permission, and push infrastructure; dependable local alarms may need a native iOS app.
- Food calories are a small starter list of estimates, not a complete verified nutrition database.
- No cloud sync or account system is included.
