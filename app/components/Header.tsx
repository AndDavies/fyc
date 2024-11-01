import Link from "next/link";

export default function Header() {
  
  return (
    <header className=" text-white py-4">
      {/* Navigation Bar */}
      <div className="navbar flex justify-between items-center py-4">
        {/* Logo */}
        <div className="logo text-6xl font-bold text-pink-600 tracking-tighter">Andrew.</div>

        {/* Navigation Links */}
        <div className="font-sans nav-links flex space-x-6 text-gray-400 tracking-widest">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 "><Link href="#" className="hover:text-white">Projects</Link></li>
            <li className="mr-3 "><Link href="/about" className="hover:text-white">About Me</Link></li>
            <li className="mr-3 "><Link href="#" className="hover:text-white">Blog</Link></li>
            <li className="mr-3 "><Link href="#" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}