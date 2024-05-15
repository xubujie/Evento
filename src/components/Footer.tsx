import React from "react";
const routers = [
  {
    path: "/terms-onditions",
    name: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-between items-center px-3 sm:px-9 h-16 border-t border-white/10 text-xs text-white/25">
      <small className="text-xs">
        &copy; {new Date().getFullYear()}. All rights reserved
      </small>
      <ul className="flex gap-x-3">
        {routers.map((router) => (
          <li key={router.path} className="hover:text-white transition">
            <a href={router.path}>{router.name}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
