import { Inter } from "next/font/google";
import Head from "next/head";

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
    
      <body className="relative flex flex-col justify-center items-center h-screen w-screen bg-slate-950">
        <div className="absolute z-100 text-white font-bold">
          <div id="headline-text">
            <div className="justify-start text-2xl md:text-7xl">
              <h1>AMSA</h1>
            </div>
            <div className="text-5xl md:text-9xl">
              <h1>NATIONAL</h1>
            </div>
            <div className="flex justify-end text-2xl md:text-6xl">
              <div>
                <h1>CONVENTION</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-white font-medium text-lg md:text-4xl pt-2">
            <div>
              <h1>Sydney 2025</h1>
            </div>
          </div>
        </div>
        <img className="opacity-10 h-screen" src="syd25_white.svg" />
      </body>
    </>
  );
}
