export const metadata = {
  title: "Netflix-Verse",
  description: "a movie platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
