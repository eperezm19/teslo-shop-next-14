"use client";
import { titleFont } from "@/config/fonts";

import Link from "next/link";
import React, { SVGProps } from "react";
import { Button } from "./button";
import { useUIStore } from "@/store/ui/ui-store";

interface NavigationItem {
  label: string;
  link: string;
}

const navigation: NavigationItem[] = [
  {
    label: "Hombres",
    link: "/gender/men",
  },
  {
    label: "Mujeres",
    link: "/gender/women",
  },
  {
    label: "Niños",
    link: "/gender/kid",
  },
];

export function CartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
      />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
      />
    </svg>
  );
}

export const TopMenu = () => {
  const openSidebar = useUIStore((state) => state.openSidebar);
  return (
    <div className="flex px-5 py-4 justify-between items-center w-full bg-black">
      {/* Logo */}
      <div>
        <Link href="/" className="flex items-center gap-2 uppercase">
          <span
            className={`${titleFont.className} antialiased font-bold text-slate-100 mr-2`}
          >
            Teslo
          </span>
          <span className="text-primary-500 text-slate-100">|</span>
          <Button variant="ghost" className="text-slate-100 uppercase">
            Shop
          </Button>
        </Link>
      </div>
      {/* Navigation */}
      <ul className="hidden sm:flex gap-2">
        {navigation.map((item) => (
          <li key={item.link}>
            <Button asChild variant="ghost" className="text-slate-100">
              <Link href={item.link}>{item.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Button variant="ghost" className="text-slate-100">
          <SearchIcon className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="text-slate-100">
          <CartIcon className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          className="text-slate-100"
          onClick={openSidebar}
        >
          Menu
        </Button>
      </div>
    </div>
  );
};
