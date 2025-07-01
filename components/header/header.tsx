"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ReddishLogo from "@/public/images/Reddish Full.png";
import ReddishLogoOnly from "@/public/images/Reddish Logo Only.png";
import Image from "next/image";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

export const Header = () => {
  const { toggleSidebar, open, isMobile } = useSidebar();

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* Left Side */}
      <div className="flex items-center h-10 ">
        {open && !isMobile ?
          <ChevronLeftIcon className="w-6 h-6" onClick={toggleSidebar} />
        : <div className="flex items-center gap-2">
            <MenuIcon className="w-6 h-6" onClick={toggleSidebar} />
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
        }
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
