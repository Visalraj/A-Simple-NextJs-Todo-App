import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
		<head>
			<title>Todo App</title>
			<meta name="description" content='A Simple Todo App' />
			<link rel="icon" type="image/png" href="/favicon.ico"/>
		</head>
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar/>
          <div className="mt-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
