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
        <title>Con Games Events | AMSA National Convention Sydney 2025 - SYD25</title>
        <meta name="description" content="AMSA's 66th National Convention is heading to Sydney in 2025, bringing together 800+ medical students from across Australia and New Zealand!" />

        <meta property="og:title" content="Con Games Events | AMSA National Convention Sydney 2025 - SYD25" />
        <meta property="og:url" content="https://syd25.org/" />
        <meta property="og:image" content="https://syd25.org.au/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="AMSA's 66th National Convention is heading to Sydney in 2025, bringing together 800+ medical students from across Australia and New Zealand!" />
        <meta property="og:locale" content="en_AU" />
      </Head>
    
      <body>
        <div className="flex flex-col justify-center items-center h-[7.5vh] lg:h-[10vh] w-screen bg-slate-950 bg-[url('/syd25_white_0.1.svg')] bg-contain bg-no-repeat bg-center">
          {/* <img alt="SYD25 Frame Logo" className="opacity-10 h-[15vh] md:h-[20vh]" src="syd25_white.svg" /> */}
          <div className="text-white font-bold">
            <div id="headline-text">
              <div className="text-4xl md:text-6xl">
                <h1>Con Games</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-950 lg:px-36">
          <div className="flex flex-col items-center text-white  mx-10 my-10 bg-slate-900 rounded-xl px-5 lg:px-10 py-5 lg:py-10 drop-shadow-lg">
            <img alt="SYD25 Logo" src="/placeholder.png" className="w-[65vw] lg:w-[50vw] pb-5 lg:pb-10"/>
            <div className="justify-center text-sm lg:text-lg opacity-80">
              <h1>
                Prepare yourself for an extraordinary day at the AMSA 2025 National Convention's Con Games in Sydney! This event is designed to offer a dynamic break from the academic sessions, combining sports and emergency medicine challenges into a day filled with excitement and camaraderie. Our dedicated CON Games team has crafted a lineup of activities that will push your limits and deepen the bonds of friendship formed throughout the week. Join your university delegation to compete in a range of sports, from basketball to chess, and participate in engaging challenges that appeal to diverse interests.
                <br/>
                <br/>
                One of the standout features of the CON Games is the prestigious Emergency Medical Challenge, the largest emergency simulation event in the nation. This competition is your chance to showcase your clinical expertise and practical skills in medicine. Teams will face a series of intricate medical scenarios, with the top performers advancing to an intense final round. The grand finale, held on the convention's last day, will see the best teams vie for the title of champions in a spectacular showdown.
                <br/>
                <br/>
                Show your university spirit in full force with creative costumes, whether it's themed outfits, mascots, or innovative designs. Each activity during the CON Games contributes points towards the esteemed Convention Cup, awarded to the university delegation with the highest score at the Closing Ceremony. To keep you energised, our Logistics team has ensured that delicious meals will be available throughout the day. Join us at the CON Games for a day brimming with thrilling competitions, team-building activities, and a vibrant celebration of medical excellence and university pride.
              </h1>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
