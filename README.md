# Full Stack Stay-Casa rental application with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023


This is a repository for a Stay-Casa rental application with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.


Features:

- Tailwind design implementation
- Application of Tailwind animations and effects
- Ensuring complete responsiveness across various devices
- Implementation of credential authentication
- Integration of Google authentication
- Incorporation of GitHub authentication
- Utilization of Cloudinary CDN for image uploads
- Client-side form validation and management using react-hook-form
- Server-side error handling using react-toast
- Integration of calendars with react-date-range
- Management of page loading states
- Handling page empty states
- Implementation of a booking/reservation system
- Allowance for guest reservation cancellation
- Facilitation of owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation functionality
- Implementation of an advanced search algorithm based on category, date range, map location, number of guests, rooms, and bathrooms
- Filtering out properties with reservations within a specified date range
- Establishment of a favorites system
- Integration of shareable URL filters
- Ability to share a URL with selected category, location, and date range, providing consistent results to a logged-out friend in another browser
- Guidance on writing POST and DELETE routes in route handlers (app/api)
- Explanation of fetching data in server react components by directly accessing the database (without API, using methods like Magic!)
- Handling files such as error.tsx and loading.tsx, which are new Next 13 templating files aimed at unifying loading and error handling
- Guidance on managing relations between server and child components
### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone (https://github.com/alijarar/StayCasa.git)
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
