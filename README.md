# Next.js Quick Start
The Next.js quick start project launches a blog app with content from Prepr.

Look at the [Next Quick start guide](https://docs.prepr.io/connecting-front-end-apps/next-quick-start-guide) to learn more, or check out the [Stackblitz demo](https://stackblitz.com/edit/next-quick-start) for zero installation.

>This branch is based on the new next app directory, want to view this project with the pages directory? Switch to the [next-pages](https://github.com/preprio/next-complete-starter/tree/next-pages) branch.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Add the environment file
Copy the .env.example file in this directory to .env (which will be ignored by Git) by running the following command:
```bash
cp .env.example .env
```

## Update the environment file
In the .env file replace `<YOUR-ACCESS-TOKEN>` with the Prepr access token from your environment with demo content.

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more information.

## The end result

![blog site end result](https://assets-site.prepr.io//5oz8w28ybxje-screenshot-2023-05-10-at-111353.png)
