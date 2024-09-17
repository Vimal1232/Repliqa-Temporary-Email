import { Manrope } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./provider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: ["--Manrope-font"],
  style: ["normal"],
});

export const metadata = {
  title: "Repliqa",
  description: "A Different Identity on Internet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} bg-Background`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
