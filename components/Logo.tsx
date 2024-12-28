import { Wallet } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Wallet className="h-9 w-9 text-teal-500" />
      <p className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
        TrackBudget
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Wallet className="h-9 w-9 text-teal-500" />
      <p className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
        TrackBudget
      </p>
    </a>
  );
}

export default Logo;
