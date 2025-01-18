# Next.js 15 App Directory: Unexpected Rendering Behavior with Dynamic Routes

This repository demonstrates a bug encountered in Next.js 15's App directory when using dynamic routes. The page renders correctly on the initial load, but subsequent navigations or re-renders result in incorrect content being displayed.  The issue seems related to data fetching and component rehydration. 

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`
3. Run `npm run dev`
4. Navigate to `/`
5. Observe the correct content
6. Navigate to another page
7. Observe that content is not updating correctly

## Potential Causes

* Issues with data fetching in the `getServerSideProps` or equivalent within App Router.
* Incorrect usage of React's state management or hooks.
* Caching issues in the App Router.

## Solution

The solution involves ensuring that data fetching is correctly handled within the app directory and that state is properly managed to prevent unexpected rendering behaviour.
