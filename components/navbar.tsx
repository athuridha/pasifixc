import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-red-900/30 bg-black/50 backdrop-blur-sm z-50 relative">
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-red-600 transition-colors font-medium tracking-wider">
          Home
        </Link>
        <Link href="/members" className="hover:text-red-600 transition-colors font-medium tracking-wider">
          Members
        </Link>
        <Link href="/socials" className="hover:text-red-600 transition-colors font-medium tracking-wider">
          Socials
        </Link>
      </div>
      <div>
        <Link href="/" className="text-xl font-bold text-red-600 tracking-widest">
          PSFX
        </Link>
      </div>
    </nav>
  )
}

