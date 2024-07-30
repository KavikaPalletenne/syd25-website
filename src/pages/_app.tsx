import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function App({ Component, pageProps }: AppProps) {
  return (
  
    <>
    <script defer data-domain="syd25.org.au" src="https://plausible.taprobanas.com/js/script.js"></script>
    <nav className="flex flex-row bg-[#02050f] drop-shadow-xl text-white px-5 pt-0 text-sm lg:text-xl w-screen">
      <div className="flex font-bold items-center justify-end flex-row bg-[#02050f] rounded-full w-screen py-5 px-5">
        <Link className="px-1 lg:px-5" href={"/"}>
            <h1 className="drop-shadow-lg opacity-80 hover:opacity-100 duration-500">HOME</h1>
        </Link>
        <Link className="px-1 lg:px-5" href={"/about"}>
            <h1 className="drop-shadow-lg opacity-80 hover:opacity-100 duration-500">ABOUT</h1>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="px-1 lg:px-5 drop-shadow-lg opacity-80 hover:opacity-100 duration-500">EVENTS</DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#02050f] text-white font-bold opacity-80 hover:opacity-100 duration-500 border-transparent">
            <DropdownMenuItem>
              <Link className="px-1 lg:px-5 text-sm lg:text-xl" href={"/events/academics"}>
                <h1 className="drop-shadow-lg opacity-80 hover:opacity-100 duration-500">ACADEMICS</h1>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="px-1 lg:px-5 text-sm lg:text-xl" href={"/events/socials"}>
                <h1 className="drop-shadow-lg opacity-80 hover:opacity-100 duration-500">SOCIALS</h1>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link className="px-1 lg:px-5 text-sm lg:text-xl" href={"/events/con-games"}>
              <h1 className="drop-shadow-lg opacity-80 hover:opacity-100 duration-500">CON GAMES</h1>
            </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>

    <Component {...pageProps} />

    </>
);
}
