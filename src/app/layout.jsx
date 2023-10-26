import { inter, tiltneon } from "./font";
import "./globals.css";
import "@algolia/autocomplete-theme-classic";
import NextAuthProvider from "./context/NextAuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v6.4.2/css/all.css"
        ></link>
        <link rel="stylesheet" type="text/css" href="style.css"></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudfare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Tilt+Neon&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body className={`${tiltneon.className}`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
