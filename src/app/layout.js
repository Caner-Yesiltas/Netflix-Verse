import Navbar from "@/components/Navbar"
import "./globals.css";
import AuthContextProvider from "@/context/AuthContext";

export const metadata = {
  title: "Netflix-Verse",
  description: "a movie platform",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
        <Navbar/>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  )
}
