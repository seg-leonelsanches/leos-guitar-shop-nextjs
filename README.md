# Leo's Guitar Shop

This is a [Next.js](https://nextjs.org/) 13 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Motivation

Hilarity, I guess. This project simulates a Guitar Shop. Every login attempt with any email/password will log in a random user successfully. 

This is used to validate Segment application onboarding using React/Next.js archetype. 

## Architecture

- [Bootstrap 5](https://getbootstrap.com/)
- [MobX](https://mobx.js.org/)
- [Yarn](https://yarnpkg.com/)
- [Jest](https://jestjs.io/)

### Integration with Segment

This app uses [@segment/analytics-next](https://github.com/segmentio/analytics-next) to send events to Segment. The following events are tracked:

- User Log In
- User Sign Up
- Visit to main page
- Visit to guitar
- Product Added to Cart
- Product Added to Wishlist
- Checkout
- Completing Checkout

## Running

### Prerequisites

This is a [Node.js](https://nodejs.org/en/download/) application, so it requires Node.js to be installed locally. 

After installing Node.js you'll need to install [Yarn](https://yarnpkg.com/), the package manager for this project:

```sh
npm i -g yarn
```

### Running locally

To test with Segment, make sure to create a `.env.local` file with the following:

```ini
NEXT_PUBLIC_SEGMENT_WRITE_KEY='your-write-key'
```

You can get your source's write key at Connections > Sources > Your source > Settings > API Keys. 

Then run the app using:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit files.

Back-end simulated by mock [API routes](https://nextjs.org/docs/api-routes/introduction). The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Using Staging Environment

You'll need to set another environment variable:

```ini
NEXT_PUBLIC_SEGMENT_CDN='https://cdn.segment.build'
```

## Deployment

The easiest way to deploy a Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Google Tag Manager Testing

Make sure to set a `NEXT_PUBLIC_GTM_ID` environment variable with the value equal to you GTM ID. The sites does the rest, initializing the Google data layer.

## Consent

When this app was implemented, [Segment Consent Manager](https://github.com/segmentio/consent-manager) was still active. There's a tag that shows what is the most recent version of this project implementing the Consent Manager. Since it is outdated and not active anymore, the Consent Manager was removed from this project, opting for an [Analytics Consent Tools](https://segment.com/docs/privacy/consent-management/configure-consent-management/#step-2-integrating-your-cmp-with-segment) custom wrapper. 
