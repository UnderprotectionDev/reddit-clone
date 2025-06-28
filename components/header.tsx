"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import ReddishLogo from "@/public/images/Reddish Full.png";
import ReddishLogoOnly from "@/public/images/Reddish Logo Only.png";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  const { user } = useUser();

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <MenuIcon className="w-6 h-6" />
        <Image
          src={ReddishLogo}
          width={150}
          height={150}
          alt="Logo"
          className="hidden md:block"
        />
        <Image
          src={ReddishLogoOnly}
          width={40}
          height={40}
          alt="Logo"
          className="block md:hidden"
        />
      </div>

      {/* Right Side */}
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Button asChild variant={"outline"}>
          <SignInButton />
        </Button>
      </SignedOut>
    </header>
  );
};
