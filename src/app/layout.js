import Navbar from "@/components/Navbar"
import "./globals.css";
import AuthContextProvider from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <main >
            {children}
          </main>
        <ToastContainer/>
        </AuthContextProvider>
        </body>
    </html>
  )
}
