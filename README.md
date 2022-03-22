This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Creation
```angular2html
npx create-next-app 
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Learnings

- Creating pages automatically adds the route
- Use `Link` to navigate to the pages
- Styles can be imported and applied
- Assets (images) can be handled better in terms of sizing etc
- js file chunking for faster loading
- Creating Layout components
- Use `classnames` library to switch classes

`npm install classnames --save`

### Static generation

- This method will run and build time to fetch data and generate static pages

```angular2html
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```
