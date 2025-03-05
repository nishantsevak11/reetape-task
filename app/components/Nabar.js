"use client"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false); // Closes the menu when a link is clicked
  };
  return (
    <header className="flex justify-between items-center px-8 py-8">
      <div className="flex items-center">
        <span className="text-orange-500 text-xl">Reetape</span>
        <p className="text-xl">Technologies</p>
      </div>
      
      {/* Mobile Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">☰</Button>
        </SheetTrigger>
        <SheetContent className="bg-black text-white">
          <SheetTitle className="text-white text-center text-xl py-5">Menu</SheetTitle> {/* Title in white */}
          <nav className="flex flex-col items-center space-y-4 mt-4">
          <Link href="/solutions" className="hover:text-orange-500" onClick={closeMenu}>Solutions</Link>
            <Link href="/about" className="hover:text-orange-500" onClick={closeMenu}>About Us</Link>
            <Link href="/contact" className="hover:text-orange-500" onClick={closeMenu}>Contact Us</Link>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/solutions" className="text-white hover:text-orange-500">Solutions</Link>
        <Link href="/about" className="text-white hover:text-orange-500">About Us</Link>
        <Link href="/contact" className="text-white hover:text-orange-500">Contact Us</Link>
      </nav>
    </header>
  );
}
