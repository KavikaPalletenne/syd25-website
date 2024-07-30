import { Html, Head, Main, NextScript } from "next/document";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { NavigationBar } from "@/components/navigation";

import NavBar from "@/components/navbar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import Link from "next/link"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#02050f]">
        {/* <div className="fixed z-50">
          <NavigationMenuDemo />
        </div> */}
        {/* <NavigationBar /> */}
        {/* <NavBar /> */}
        <Main />
        <NextScript />
        <div className="flex flex-col items-center justify-center lg:px-10 py-5 lg:py-10 text-gray-400 bg-[#02050f]">
          <div className="flex flex-col items-center justify-center px-[20vw]">
            <div className="text-center text-xs lg:text-md">
              <h1>AMSA acknowledges our First Nations peoples as the Traditional Custodians of Australia and pay our respects to Elders past, present and emerging. We recognise the ongoing impact of colonisation on our healthcare systems and strive for a future free from racism.</h1>
            </div>
            <div className="flex flex-row pt-5">
              <img src="/flag1.jpeg" className="w-9 lg:w-12 mx-2" />
              <img src="/flag2.jpeg" className="w-9 lg:w-12 mx-2" />
              <img src="/flag3.jpeg" className="w-9 lg:w-12 mx-2" />
            </div>
          </div>
          {/* <div>
            <img src="/logo.png" className="pt-10 w-[10vw]" />
          </div> */}
        </div>
        <div className="flex justify-center text-center py-5 items-center bg-black text-gray-700 text-sm">
          <div>
            Copyright © 2024-2025 AMSA National Convention - Sydney
            <br/>
            <h1 className="text-xs">Made by Kavika Palletenne</h1>
          </div>
        </div>
      </body>
    </Html>
  );
}
