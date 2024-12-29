import { Wallet } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Wallet className="h-9 w-9 text-teal-500" />
      <p className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
        TrackBudget
      </p>
    </Link>
  );
}

export function LogoMobile() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Wallet className="h-9 w-9 text-teal-500" />
      <p className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
        TrackBudget
      </p>
    </Link>
  );
}

export default Logo;
