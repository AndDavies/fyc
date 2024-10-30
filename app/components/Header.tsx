

export default function Header() {
  return (
    <header className=" text-white py-4">
      {/* Navigation Bar */}
      <div className="navbar flex justify-between items-center py-4">
        {/* Logo */}
        <div className="logo text-2xl font-bold text-orange-400 tracking-tighter">Andrew.</div>

        {/* Navigation Links */}
        <div className="nav-links flex space-x-6 text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-white">Projects</a>
          <a href="#" className="hover:text-white">About Me</a>
          <a href="#" className="hover:text-white">Blog</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </header>
  );
}