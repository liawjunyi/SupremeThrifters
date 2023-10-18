import { inter } from "./font";
import "./globals.css";

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
      <body className={inter.className}>{children}</body>
      {/* <script>
        {((g) => {
          var h,
            a,
            k,
            p = "The Google Maps JavaScript API",
            c = "google",
            l = "importLibrary",
            q = "__ib__",
            m = document,
            b = window;
          b = b[c] || (b[c] = {});
          var d = b.maps || (b.maps = {}),
            r = new Set(),
            e = new URLSearchParams(),
            u = () =>
              h ||
              (h = new Promise(async (f, n) => {
                await (a = m.createElement("script"));
                e.set("libraries", [...r] + "");
                for (k in g)
                  e.set(
                    k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                    g[k]
                  );
                e.set("callback", c + ".maps." + q);
                a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
                d[q] = f;
                a.onerror = () => (h = n(Error(p + " could not load.")));
                a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                m.head.append(a);
              }));
          d[l]
            ? console.warn(p + " only loads once. Ignoring:", g)
            : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
        })({
          key: "AIzaSyB7VnhdFUqZiSbJ_em-PsgI6zxrfcgeOnw",
          v: "weekly",
          // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
          // Add other bootstrap parameters as needed, using camel case.
        })}
      </script> */}
    </html>
  );
}
