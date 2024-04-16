# Burgir | NextJS

Welcome to the Burgir project! This is a modern food brand landing page crafted with the sleek TailwindCSS framework and the powerful Next.js library.

![Burgir](https://github.com/sorenblank/burgir-nextjs/blob/main/public/og-image.png "This site looks cool doesn't it?")

## Overview

Burgir is designed to be a food brand landing page that leverages the best of modern web technologies. It's built on Next.js, styled with TailwindCSS, and structured to provide an intuitive user experience.

### Project Structure

The project follows a standard Next.js application structure with a few custom additions:

```
.
├── app                     # Application core files
│   ├── components          # Reusable UI components
│   │   └── ... 
│   ├── lib                 # Utility functions and constants
│   │   └── ... 
│   ├── pages               # Page components for routing
│   │   └── ... 
│   ├── favicon.ico
│   ├── globals.css
│   ├── page.jsx
│   └── layout.jsx          # Page layouts and routing
│
├── public                  # Static assets
├── LICENSE
└── README.md
```
### Dependencies

Burgir's functionality is powered:

- **next**: The React framework for production.
- **react** & **react-dom**: Libraries for building user interfaces.
- **react-just-parallax**: Parallax effects for React components.
- **react-router-dom**: DOM bindings for React Router.
- **scroll-lock**: Prevent scrolling on the body element.
- **react-icons**: Icons for the project.

For development, we use:

- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes.
- **eslint**: The pluggable linting utility for JavaScript and JSX.
- **postcss**: A tool for transforming CSS with JavaScript.
- **tailwindcss**: A utility-first CSS framework for rapid UI development.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository.
2. Install project dependencies with `npm install`.
3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the application in action.

## Editing

To make changes to the application:

- Edit page layouts in `app/layout.jsx`.
- Modify or create new components within the `app/components/` directory.
- Add or update styles in `app/globals.css`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [TailwindCSS Documentation](https://tailwindcss.com/docs) - Learn how to style your app efficiently.

## Deployment

Deploying your Next.js app is straightforward with the Vercel Platform, optimized for Next.js projects.

- [Vercel Deployment](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) - Deploy with zero configuration.

## Contributing

We welcome contributions from the community. Here's how you can contribute:

1. Fork the project repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See [LICENSE](https://github.com/sorenblank/burgir-nextjs/blob/main/LICENSE) for more information.