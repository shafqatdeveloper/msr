import Navbar from "./Components/Navbar";
import Theme from "./Components/Theme/Theme";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MSR | Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html style={{ colorScheme: "light" }} suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <Theme>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
