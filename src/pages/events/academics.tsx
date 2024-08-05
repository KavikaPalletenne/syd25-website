import { Inter } from "next/font/google";
import Head from "next/head";

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
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AMSA National Convention Sydney 2025 | Academics Events</title>
        <meta name="description" content="If you are 'On the Lookout' for academic development, turn your eyes towards Sydney! A metropolis at the very forefront of biomedical and clinical research on a global scale, our SYD25 Academics team will be highlighting the very cutting edge of this city's contribution to the world of medicine, with an academic program that draws upon the greatest minds our corner of Australia has to offer - and beyond!" />

        <meta property="og:title" content="Academics Events at AMSA National Convention Sydney 2025" />
        <meta property="og:url" content="https://syd25.org/" />
        <meta property="og:image" content="https://syd25.org.au/academics.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="If you are 'On the Lookout' for academic development, turn your eyes towards Sydney! A metropolis at the very forefront of biomedical and clinical research on a global scale, our SYD25 Academics team will be highlighting the very cutting edge of this city's contribution to the world of medicine, with an academic program that draws upon the greatest minds our corner of Australia has to offer - and beyond!" />
        <meta property="og:locale" content="en_AU" />
      </Head>
    
      <body>
        <div className="flex flex-col justify-center items-center h-[7.5vh] lg:h-[10vh] w-screen bg-slate-950 bg-[url('/syd25_white_0.1.svg')] bg-contain bg-no-repeat bg-center">
          <div className="text-white font-bold">
            <div id="headline-text">
              <div className="text-4xl md:text-6xl">
                <h1>Academics</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-950 lg:px-36">
          <div className="flex flex-col items-center text-white  mx-10 my-10 bg-slate-900 rounded-xl px-5 lg:px-10 py-5 lg:py-10 drop-shadow-lg">
            <img alt="SYD25 Logo" src="/academics.jpg" className="w-[65vw] lg:w-[50vw] pb-5 lg:pb-10"/>
            <div className="justify-center text-sm lg:text-lg opacity-80">
              <h1>
                If you are <i>On the Lookout</i> for academic development, turn your eyes towards Sydney! A metropolis at the very forefront of biomedical and clinical research on a global scale, our SYD25 Academics team will be highlighting the very cutting edge of this city's contribution to the world of medicine, with an academic program that draws upon the greatest minds our corner of Australia has to offer - and beyond!
                <br/>
                <br/>
                Our program has been tailored to not only address the insatiable desire many students have to expand their knowledge about the world of clinical medicine, but our carefully curated breakout sessions, plenary speakers, and academic activities will open your eyes to a whole world of understanding that goes beyond any university curricula. Whether you go into Syd25 with an open mind - or enter it already <i>On the Lookout</i> for profound insight into medicine, our program aims to leave everyone with a revolutionised comprehension of medicine at its most fundamental level. Don't miss out on our diverse and inspirational program - there really is something for everyone!
              </h1>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
