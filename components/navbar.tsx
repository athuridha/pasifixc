"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { DustEffect } from "./dust-effect";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-red-900/30 bg-black/50 backdrop-blur-sm z-50 relative">
      <div className="flex w-full md:w-auto justify-between items-center md:order-2">
        <Link href="/" className="text-xl font-bold text-red-600 tracking-widest">
          PSFX
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-red-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto mt-4 md:mt-0 md:order-1`}
      >
        <Link 
          href="/" 
          className="hover:text-red-600 transition-colors font-medium tracking-wider text-center relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/members" 
          className="hover:text-red-600 transition-colors font-medium tracking-wider text-center relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full"
          onClick={() => setIsOpen(false)}
        >
          Members
        </Link>
        <Link 
          href="/socials" 
          className="hover:text-red-600 transition-colors font-medium tracking-wider text-center relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full"
          onClick={() => setIsOpen(false)}
        >
          Socials
        </Link>
      </div>
    </nav>
  );
}
