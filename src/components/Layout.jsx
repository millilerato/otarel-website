import { useLocation, Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import BackgroundLines from "./BackgroundLines";



export default function Layout() {
    const location = useLocation(); 
    
  return (
    <div className="bg-[#05070d] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

          <div className="flex items-center gap-2">
            <Logo size={32} />
            <h1 className="font-bold">Otarel Solutions</h1>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
              <Link
    to="/services"
    className={location.pathname === "/services" ? "text-white" : "text-white/60"}
  >
    Services
  </Link>

  <Link
    to="/about"
    className={location.pathname === "/about" ? "text-white" : "text-white/60"}
  >
    About
  </Link>

            {/* <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/about">About</Link> */}
            {/* <Link to="/contact">Contact</Link> */}
            <Link
  to="/contact"
  className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium
  shadow-lg shadow-blue-600/30
  hover:scale-105 hover:shadow-purple-500/40
  transition-all duration-300"
>
  Contact
</Link>
          </div>

        </div>
      </nav>
          {/* 🌌 BACKGROUND ANIMATION (GLOBAL) */}
      <BackgroundLines /> 

      {/* PAGE CONTENT */}
      <div className="pt-20">
        <Outlet />
      </div>

    </div>
  );
}