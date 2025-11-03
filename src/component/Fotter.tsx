// components/Footer.tsx
import Link from "next/link"
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-sm">&copy; 2025 Next.js Practice Project. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/About" className="hover:text-violet-400">About</Link>
          <Link href="/Prodcut" className="hover:text-violet-400">Product</Link>
          <Link href="/Contact" className="hover:text-violet-400">Contact</Link>
          <Link href="/Login" className="hover:text-violet-400">Login</Link>
        </div>
      </div>
    </footer>
  )
}
