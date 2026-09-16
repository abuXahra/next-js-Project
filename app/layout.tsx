import "./globals.css";
import React from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <nav>
          <Link href={"/"}>Home</Link> | <Link href="/about">About</Link> |{" "}
          <Link href="/services">Services</Link> |{" "}
          <Link href="/products">Products</Link> |{" "}
          <Link href="/blog">Blog</Link> |
          <Link href="/contact">Contact</Link>{" "}
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
