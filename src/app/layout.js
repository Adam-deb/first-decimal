import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "FirstDecimal Consulting | Empowering Startups & SMEs",
  description: "FirstDecimal offers consulting services to startups and SMEs, helping businesses secure funding, optimize operations, and grow through strategic partnerships.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
