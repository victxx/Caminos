export default function RootLayout({ children }) {
    return (
      <html>
        <head>
          <title>Caminos</title>
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body>{children}</body>
      </html>
    );
  }
  