import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul className="flex space-x-4 bg-gray-800 text-white p-4">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
          <div className="bg-gray-200 p-4">
            <h1 className="text-2xl">My Application</h1>
            <p className="text-gray-600">Welcome to my application!</p>
          </div>
          <div className="bg-gray-100 p-4">
            <h2 className="text-xl">Main Content</h2>
            <p className="text-gray-700">
              This is where the main content of the application will go.
            </p>
          </div>
          <div className="bg-gray-50 p-4">
            <h2 className="text-xl">Footer</h2>
            <p className="text-gray-500">© 2023 My Application</p>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
