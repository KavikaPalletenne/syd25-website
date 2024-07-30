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
        <title>About | AMSA National Convention Sydney 2025 - SYD25</title>
        <meta name="description" content="AMSA's 66th National Convention is heading to Sydney in 2025, bringing together 800+ medical students from across Australia and New Zealand!" />

        <meta property="og:title" content="About | AMSA National Convention Sydney 2025 - SYD25" />
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
                <h1>About SYD25</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-950 lg:px-36">
          <div className="flex flex-col items-center text-white  mx-10 my-10 bg-slate-900 rounded-xl px-5 lg:px-10 py-5 lg:py-10 drop-shadow-lg">
            <img alt="SYD25 Logo" src="/placeholder.png" className="w-[65vw] lg:w-[50vw] pb-5 lg:pb-10"/>
            <div>
              <h1 className="text-2xl lg:text-4xl font-medium pb-5 opacity-80">Our Convention</h1>
            </div>
            <div className="justify-center text-sm lg:text-lg opacity-80">
              <h1>
                In 2025, AMSA's 66th National Convention is heading to Sydney. SYD25 will be the arena for relentless innovation, where you will be inspired to embark upon an expedition into the multitude of opportunities awaiting you right outside the doors of medical school.
                <br/>
                <br/>
                Our theme for SYD25 is On The Lookout. Our mission is to
                <br/>
                <ul className="list-disc pl-10">
                    <li>Inspire a new you: to nurture a new generation of leaders that recognise their capabilities and challenge their boundaries;</li>
                    <li>Inspire a new future: to empower delegates to find their passion and goals with future-focused academic sessions;</li>
                    <li>Inspire a new Convention: to create a career-oriented event with diverse, tangible, and meaningful outcomes for all.</li>
                </ul>
                <br/>
                <br/>
                National Convention 2025 is brought to you by the collaborative efforts of the SYD25 team - we are a group of NSW medical students who have been working for almost two years to bring to you an unforgettable conference filled with opportunities for connection, collaboration and innovation.
                <br/>
                <br/>
                The SYD25 team is composed of our dedicated Core Team, consisting of our Convenor, two Deputy Convenors, Treasurer, and Secretary. Working alongside them, we have our invaluable Management Team, including leading officers in the Academics, Logistics, Socials, CON Games, Creatives & Marketing, IT, Sponsorship and Risk & Welfare portfolios. Additionally, we owe a great deal of gratitude to our seven Subcommittees, who make up the remaining members of our team. With their collective efforts, totaling around 60 individuals, SYD25 is made a reality.
              </h1>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
