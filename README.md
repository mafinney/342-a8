## Live URLs

- **Client:** https://342-a8.vercel.app
- **Server:** https://platescout-matthew-finney.onrender.com
- **Server health check:** https://platescout-matthew-finney.onrender.com/api/health

## Local setup

1. Clone the repo
2. Copy `server/.env.example` to `server/.env` and fill in `MONGO_URI` + `JWT_SECRET`
3. From the root: `npm install` (client) and `cd server && npm install` (server)
4. Two terminals: `npm run dev` (root, client) + `npm run dev` (server)
5. Open http://localhost:5173

## What I learned during deployment

I was surprised with how easy the hosting tools were to use, I expected more hoops to jump through for the free versions at least.
The longest part to debug was fixing api routes now that the vite proxy isn't being used. Next time, I'd design my application with deployement
more in mind with api routes.