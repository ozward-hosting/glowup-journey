GLOWUP JOURNEY — ONLINE ACCOUNT STARTER
=======================================

What's included
---------------
- index.html + hero-art.png: v2 app prototype with local browser storage
- manifest/service worker/icons: PWA files
- supabase_schema.sql: starter schema for secure per-user data
- ACCOUNT_ROADMAP.txt: how to connect real signup/login and demo account

IMPORTANT
---------
This package does NOT yet have working online signup/login or cloud sync. The current app stores data in the browser on this device. Supabase needs to be created by the owner and connected to the app before those functions work. Never publish a Supabase service_role key in website code. Only use the project's public anon/publishable key in the browser, with RLS enabled.

Suggested free architecture
---------------------------
1. Host the static PWA on Cloudflare Pages or another static HTTPS host.
2. Create a Supabase project.
3. Run supabase_schema.sql in Supabase SQL Editor.
4. Enable email/password Auth and configure allowed redirect URLs to your deployed HTTPS app.
5. Connect the app to Supabase Auth and the `user_app_data` table using the project URL and public anon/publishable key.
6. Create the demo history as a separate read-only demo dataset; do not use a real user's profile as the demo.
7. Test with two separate accounts and confirm neither can read or modify the other's data.

Data to support
---------------
- User-owned JSON snapshot per account for weights, waist, meals, water, workouts, habits and settings.
- RLS ensures authenticated users can access only their own row.
- Demo dataset should be read-only and contain clearly fictional dates/data spanning five months.

For production, prefer normalized tables for weight measurements and diary entries rather than one JSON snapshot if analytics or long-term migration becomes important.
