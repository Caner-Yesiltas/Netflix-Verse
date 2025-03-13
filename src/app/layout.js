import Navbar from "@/components/Navbar"
import "./globals.css";

export const metadata = {
  title: "Netflix-Verse",
  description: "a movie platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
