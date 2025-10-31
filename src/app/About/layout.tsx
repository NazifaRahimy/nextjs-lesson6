import type { Metadata } from "next";


export const metadata: Metadata = {
    title:"About",
    description: "Learn more about the Next.js tutorial site and its mission."
};

export default function AboutLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <>
        {children}
        </>
    );
}
