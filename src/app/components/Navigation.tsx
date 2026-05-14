import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ConfiguratorModal } from "./ConfiguratorModal";
import { cars } from "../data/cars";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [configuratorOpen, setConfiguratorOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/models", label: "Models" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-wider text-orange-500">McLAREN</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm tracking-wider transition-colors hover:text-orange-500 ${
                    location.pathname === item.path ? "text-orange-500" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button 
                onClick={() => setConfiguratorOpen(true)}
                className="px-6 py-2 bg-orange-500 text-black hover:bg-orange-400 transition-colors"
              >
                CONFIGURE
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black md:hidden"
            style={{ top: "80px" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl tracking-wider transition-colors hover:text-orange-500 ${
                    location.pathname === item.path ? "text-orange-500" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setConfiguratorOpen(true);
                  setIsOpen(false);
                }}
                className="px-8 py-3 bg-orange-500 text-black text-lg hover:bg-orange-400 transition-colors"
              >
                CONFIGURE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ConfiguratorModal
        isOpen={configuratorOpen}
        onClose={() => setConfiguratorOpen(false)}
        car={cars[0]}
      />
    </>
  );
}