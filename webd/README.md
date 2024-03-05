## Setup

Replace all your information in the .env file:
```
API_KEY = "LASTFMAPIHERE"
LASTFM_USERNAME = "LASTFMUSERHERE"
DISCORD = "LINKDISCORDHERE"
GITHUB = "LINKGITHUBHERE"
TELEGRAM = "LINKTELEGRAMHERE"
```
Replace the text or what you want in the index.tsx file for you 
```
Directory: src/pages/index.tsx
```
Fuck you and find your own stuff to replace but heres a list of stuff to find
```
1. discord attachment png
2. The description
3. The username
```
Sign up for cloudflare and deploy on cloudflare pages with these build settings
```
Build command: next build && next export
Build output directory: /out
Build system version: 1 (latest)
Root directory: /

Environment variables:
Variable name	Value
NODE_VERSION  16.14.2
```
Obviously connect it to a github rep for easy updating or don't I could not care

## Getting Started (disregard unless you wanna do it)
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
