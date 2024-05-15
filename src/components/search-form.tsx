"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText.trim() === "") return;
    router.push(`/events/${searchText.toLocaleLowerCase()}`);
  };
  return (
    <form className="w-full sm:w-[580px]" onSubmit={handleSubmit}>
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 
    outline-none ring-accent transition focus:ring-2 focus:bg-white/10"
        placeholder="Search events in any city..."
        spellCheck={false}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
