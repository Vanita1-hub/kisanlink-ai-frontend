# KisanLink AI - Frontend Prototype

This repository contains a Vite + React frontend prototype for KisanLink AI — an agritech hackathon demo that demonstrates farmer/buyer/customer flows, deterministic matching, route-aware prototype logistics estimation and a Supabase demo-mode fallback so you can run the app without external keys.

Live deploy (one-click):
- Import the repository into Vercel: https://vercel.com/new/clone?repository-url=https://github.com/Vanita1-hub/kisanlink-ai-frontend

Demo mode:
- The app will run with demo data if VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are not provided.

How to deploy to Vercel (no local install):
1. Click the Vercel import link above.
2. Connect your GitHub account and import the repo.
3. Set environment variables (optional for full Supabase integration):
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
   - SPEECH_API_KEY (server-side, optional)
   - MAPS_API_KEY (optional)
4. Deploy. The site will be live on a Vercel subdomain.

Notes:
- Voice AI and real logistics require server-side keys and serverless endpoints; when not configured the app uses prototype estimators and shows clear messages.
- Demo data is stored in browser localStorage for the demo fallback and labeled as "Demo Data".

What's included:
- Landing page, Farmer, Buyer and Customer pages
- Produce listing form and marketplace
- Deterministic matching engine and prototype logistics estimator
- Supabase frontend client wrapper with demo fallback

Next steps I can do for you:
- Connect a Supabase project and add real persistence
- Create serverless functions for STT and maps
- Configure and trigger a Vercel deployment for you

