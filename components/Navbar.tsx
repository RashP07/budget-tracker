"use client";

import React,{useState} from 'react'
import Logo, { LogoMobile } from './Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { UserButton } from "@clerk/nextjs";
import { buttonVariants, Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger,SheetTitle } from "./ui/sheet";
import { Menu } from "lucide-react";
//import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";


import { ThemeSwitcherBtn } from './ThemeSwitcherBtn';

 function Navbar() {
  return (
    <>
    <DesktopNavbar/>
    <MobileNavbar/>
    </>
  )
}

const items = [
    {
      label: "Dashboard",
      link: "/",
    },
    {
      label: "Transactions",
      link: "/transactions",
    },
    {
      label: "Manage",
      link: "/manage",
    },
  ];

  const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="block border-separate bg-background md:hidden">
        <nav className="container flex items-center justify-between px-8">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]" side="left">
            <SheetTitle>
    <VisuallyHidden>Mobile Navigation</VisuallyHidden>
  </SheetTitle>
              <Logo />
              <div className="flex flex-col gap-1 pt-4">
                {items.map((item) => (
                  <NavbarItem
                    key={item.label}
                    link={item.link}
                    label={item.label}
                    clickCallback={() => setIsOpen((prev) => !prev)}
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
            <LogoMobile/>
                      </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcherBtn />
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </nav>
      </div>
    );
  };
  
function DesktopNavbar(){
    return(
        <div className='hidden border-separate border-b-[0.05px] border-gray-600
        bg-background md:block px-8'>
         <nav className='container flex items-center justify-between px-4 sm:px-6 lg:px-0 mx-auto'>
           <div className='flex h-[80px] min-h-[60px] items-center gap-x-4'>
        <Logo/>
        <div className='flex h-full ml-9'>
     {items.map(item =>(
        <NavbarItem
        key={item.label}
        link={item.link}
            label={item.label}
            />
        ))}
        </div>
           </div>
           <div className='flex items-center gap-2'>
         <ThemeSwitcherBtn/>
            <UserButton  afterSignOutUrl="/sign-in"/>
   

           </div>
         </nav>
        </div>
    )
}

function NavbarItem({link,label,clickCallback}:{
    link:string;
    label:string, 
    clickCallback? : () => void;
}){
    const pathname = usePathname();
    const isActive = pathname===link;
    return(
        <div className='relative flex items-center'>
<Link href={link} className={
   cn(
    buttonVariants({ variant: "ghost" }),
    "w-full justify-start text-lg text-muted-foreground hover:text-foreground",isActive && "text-foreground"
   )}
   onClick={() => {
    if(clickCallback) clickCallback();
   }}
   >
{label}
</Link>
{isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block">
        
        </div>
      )}

    </div>
    )
}
export default Navbar;