import "@/styles/globals.css";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Next Blog Wizard",
  description: "Multi-step blog creation wizard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <div className="container mx-auto max-w-5xl px-6">
          {/* Header */}
          <header className="flex items-center justify-between py-4 border-b border-gray-200 mb-8">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Next Blog Wizard
              </Link>
            </div>
            <nav>
              <Link
                href="/"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </nav>
          </header>

          {/* Main Content */}
          <main className="min-h-[70vh]">{children}</main>

          {/* Footer */}
          <footer className="border-t border-gray-200 mt-10 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Uray Widiansyah
          </footer>
        </div>
      </body>
    </html>
  );
}
