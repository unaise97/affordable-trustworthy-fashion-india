import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Affordable + Trustworthy Fashion India",
  description: "Discover affordable fashion through transparent evidence and honest product notes."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
