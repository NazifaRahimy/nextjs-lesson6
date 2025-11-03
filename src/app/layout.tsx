import type { Metadata } from "next";
import NavBar from "@/component/NavBar";
import "./globals.css";
import Footer from "@/component/Fotter";
export const metadata: Metadata = {
    title: {
        default: "Home",
        template: " NextJs آموزیش | %s"
    },
    description: "Home page of the Next.js tutorial site, providing access to all courses and content."
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
    return (
    <html lang="en">
        <body >
            <div className="w-full  p-5">
                <NavBar />
                {children}
                <Footer/>
            </div>
        </body>
    </html>
  );
}
