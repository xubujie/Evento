"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const routers = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/events/all",
    name: "All Events",
  },
];

export default function Header() {
  const acitveLink = usePathname();
  return (
    <header className="flex justify-between items-center border-b h-14 border-white/10 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-3 h-full text-sm">
          {routers.map((router) => (
            <li
              key={router.path}
              className={clsx(
                "relative flex items-center text-sm hover:text-white transition",
                {
                  "text-white": acitveLink === router.path,
                  "text-white/50": acitveLink !== router.path,
                }
              )}
            >
              <Link href={router.path}>{router.name}</Link>
              {acitveLink === router.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
