import "./globals.css";

export const metadata = {
  metadataBase: "https://burgir-nextjs.vercel.app", // Base URL for the website
  title: "Burgir | NextJS", // Title of the website
  description: "Burgir is a modern and stylish restaurant that offers a variety of delicious meals. Our menu includes a wide range of burgers, sandwiches, salads, and more. Visit us today and experience the best meals in town!", // Description of the website
  image: "https://burgir-nextjs.vercel.app/og-image.png", // Image for the website
  keywords: ["Burgir", "NextJS", "BurgirNextJS"], // Keywords for the website
  openGraph: { // Open Graph data for the website
    title: "Burgir | NextJS",
    description: "Burgir is a modern and stylish restaurant that offers a variety of delicious meals. Our menu includes a wide range of burgers, sandwiches, salads, and more. Visit us today and experience the best meals in town!",
    url: "https://burgir-nextjs.vercel.app",
    type: "website",
    images: [
      {
        url: "https://burgir-nextjs.vercel.app/og-image.png", // Open Graph image for the website
      },
    ],
  },
  twitter: { // Twitter card data for the website
    images: [
      {
        url: "https://burgir-nextjs.vercel.app/og-image.png", // Twitter card image for the website
      },
    ]
  },
}

export const viewport = {
  themeColor: '#f69a00', // Theme color for the website
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
