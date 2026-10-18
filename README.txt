GLOWUP JOURNEY — V5 BMI + REVIEW HISTORY

What's changed
- Fixes settings overlap on iPhone: schedule labels and time/number input fields stack vertically on narrow screens.
- Adds a BMI/IMT bar near the top of the dashboard. It updates using the latest saved weight and profile height. Adult categories follow Indonesia's Kemenkes RI thresholds: normal 18.5–<25, overweight 25–<27, obesity >=27. BMI is a screening indicator, not a standalone diagnosis.
- Adds a dashboard review for yesterday plus a rolling 7-day history. It checks missed/unchecked routines, calorie intake above the saved target, water intake below the saved target, and workout completion. Red is used for recorded shortfalls / unchecked items; amber means data is missing. No entry does not prove the activity was skipped.
- Keeps weekday / weekend routines: Monday–Friday has commute and work-start entries with 20 min treadmill; Saturday–Sunday has no work entries and 45 min treadmill.
- Keeps the existing localStorage keys so existing personal entries can stay on this device during a code update; the service-worker cache is bumped to v5.

Deploy from iPhone
1. Before replacing code, consider Setelan > Data & privasi > Ekspor backup if you have personal entries you need to keep.
2. Download this ZIP and extract it in Files.
3. Open https://github.com/ozward-hosting/glowup-journey
4. Add file > Upload files; upload all contents of this folder into the repository root, replacing matching filenames.
5. Commit directly to main. Wait for GitHub Pages to publish, then close the app/site tab and reopen https://ozward-hosting.github.io/glowup-journey/ .

Data safety / storage
- Weight, waist, food, water, checklists, workouts, and settings are stored locally in this browser/device. They are not uploaded to GitHub, and this static PWA does not sync them across devices.
- Updating HTML/code in GitHub normally does not delete localStorage because the origin and storage keys remain the same. But clearing website/site data (for example, Safari website data), changing browser/device, or browser storage eviction can make entries unavailable or delete them.
- Export a JSON backup before clearing website data. To restore, use Setelan > Data & privasi > Impor backup.
- This login is a local client-side gate, not secure online authentication. Avoid putting sensitive information in the public repository.

BMI calculation for the current example
At 75 kg and 165 cm, BMI = 75 / (1.65 x 1.65) = 27.5. Kemenkes RI's adult survey classification labels BMI >=27 as obesity. BMI is not a diagnosis on its own; a clinician may also consider waist circumference, body composition, and medical history.
