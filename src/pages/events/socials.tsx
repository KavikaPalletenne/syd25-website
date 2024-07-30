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
        <title>SYD25 - AMSA National Convention Sydney 2025</title>
        <meta name="description" content="AMSA's 66th National Convention is heading to Sydney in 2025, bringing together 800+ medical students from across Australia and New Zealand!" />

        <meta property="og:title" content="SYD25 - AMSA National Convention Sydney 2025" />
        <meta property="og:url" content="https://syd25.org/" />
        <meta property="og:image" content="https://syd25.org.au/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="AMSA's 66th National Convention is heading to Sydney in 2025, bringing together 800+ medical students from across Australia and New Zealand!" />
        <meta property="og:locale" content="en_AU" />
      </Head>
    
      <body>
        <div className="flex flex-col justify-center items-center h-[7.5vh] lg:h-[10vh] w-screen bg-slate-950 bg-[url('/syd25_white_0.1.svg')] bg-contain bg-no-repeat bg-center">
          <div className="text-white font-bold">
            <div id="headline-text">
              <div className="text-4xl md:text-6xl">
                <h1>Socials</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-950 lg:px-36">
          <div className="flex flex-col items-center text-white  mx-10 my-10 bg-slate-900 rounded-xl px-5 lg:px-10 py-5 lg:py-10 drop-shadow-lg">
            <img alt="SYD25 Logo" src="/placeholder.png" className="w-[65vw] lg:w-[50vw] pb-5 lg:pb-10"/>
            <div className="justify-center text-sm lg:text-lg opacity-80">
              <h1>
                The National Convention's social nights offer delegates the chance to unwind, mingle and explore the vibrant nightlife of Sydney. Our dedicated SYD25 Socials Team have curated five themed evenings at some of Sydney's most glamorous venues, promising a creative atmosphere where dazzling costumes are encouraged.
                <br/>
                <br/>
                As the convention week progresses, excitement builds towards the grand finale: the prestigious Gala Ball. This elegant event marks the pinnacle of SYD25, providing delegates with a luxurious setting to enjoy a sumptuous three-course meal, complimentary drinks, and plenty of dancing. It's an ideal occasion to dress to impress, reconnect with old friends, and make new ones.
                <br/>
                <br/>
                While ensuring everyone has a fantastic time is a priority, the SYD25 team places utmost importance on safety. The Risk & Welfare team remains vigilant throughout the conference, ensuring delegates' security and well-being during all social activities.
                <br/>
                <br/>
                The social night program promises to be an unforgettable experience, blending diverse themes, exciting venues, and the glamour of the Gala Ball. It's an exceptional opportunity for delegates to immerse themselves in Sydney's nightlife, forge meaningful connections, and create enduring memories within the SYD25 community.
              </h1>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
