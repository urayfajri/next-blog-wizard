import "@/styles/globals.css";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Next Blog Wizard",
  description: "Multi-step blog creation wizard (TypeScript + Tailwind)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="flex items-center justify-between mb-6">
            <div className="text-xl font-semibold">Next Blog Wizard</div>
            <nav className="flex gap-3">
              <Link href="/" className="text-sm text-slate-700">
                Home
              </Link>
              <Link href="/create" className="text-sm text-slate-700">
                Create
              </Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
