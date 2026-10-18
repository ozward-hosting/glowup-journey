GLOWUP JOURNEY — V3 VISUAL FIX + DEMO MODE

What changed
- Replaced the abstract stick-figure workout drawings with five clear full-body exercise illustrations. They are intentionally still images (not anatomically confusing animated stick figures).
- Enlarged the exercise image area and stopped cropping limbs inside the cards.
- Fixed the dashboard hero illustration to show the character from head to shoes.
- Added a “Lihat akun demo · data contoh 5 bulan” button on the login screen. Demo data includes a sample weight/waist trend, food journal, water log, and workout streak. A visible DEMO banner identifies it as sample data.
- Demo data saves to a separate localStorage key, so changes in demo mode do not overwrite the private Ovik profile data. “Reset demo” restores the sample data.

Deploy from iPhone
1. Download and extract this ZIP in the Files app.
2. Open the GitHub repository: https://github.com/ozward-hosting/glowup-journey
3. Choose Add file > Upload files. Upload all files from this folder and replace matching filenames. Include all new image files: hero-character.jpg and the five exercise-*.jpg files.
4. Commit changes to the main branch.
5. Wait for GitHub Pages to publish, then reload https://ozward-hosting.github.io/glowup-journey/ . If Safari shows old assets, close that tab and reopen the site.

Important limitations
- This remains a static web app. “Ovik” login is a local browser gate, not real secure authentication, and this does not synchronize to other devices. Do not rely on it to protect sensitive information.
- Demo data are invented illustrations for testing the dashboard, not real health records or a recommended weight-loss trajectory. Calories are estimates.
- Reminder times are preferences only; the site does not send scheduled push notifications by itself.
