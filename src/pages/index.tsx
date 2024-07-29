import { Inter } from "next/font/google";
import Head from "next/head";
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
        <div className="relative flex flex-col justify-center items-center h-[70vh] lg:h-screen w-screen bg-slate-950">
          <img alt="SYD25 Frame Logo" className="opacity-10 md:h-screen" src="syd25_white.svg" />
          <div className="absolute z-40 text-white font-bold">
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
                <h1 className="opacity-80">Sydney 2025</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center bg-slate-950 lg:px-36">
          <div className="opacity-80 flex flex-col items-center text-white  mx-10 my-10 bg-slate-900 rounded-xl px-5 lg:px-10 py-5 lg:py-10 drop-shadow-lg">
            <div>
              <h1 className="text-2xl lg:text-4xl font-medium pb-5">What is SYD25?</h1>
            </div>
            <div className="justify-center text-sm lg:text-lg pb-5 font-medium">
              <h1>
                AMSA National Convention is the largest student-run conference in the world and brings together over 800+ medical students from across Australia and New Zealand.
                <br/>
                <br/>
                In its 66th year, Convention will be held in Sydney from July 2 to July 7 2025. Over the week, students will enjoy a rewarding academic and social program, enhanced by intervarsity competitions, field trips, workshops and a trade show.
                <br/>
                <br/>
                Convention embodies the core values of AMSA and continues to be the highlight of the Association’s calendar every year. The Convention 2025 team aspires to host an event that invites delegates to reflect, advocate, and voice their ideas and opinions about the current and future of medicine, in an open, safe, and inclusive space.            
              </h1>
            </div>
            
            <Link href={"/about"} className="bg-slate-950 hover:bg-slate-800 duration-500 hover:drop-shadow-lg px-7 py-4 rounded-2xl font-bold">
              <div>
                LEARN MORE
              </div>
            </Link>
          </div>
          <img alt="SYD25 Logo" src="/logo.png" className="w-[70vw] lg:w-[35vw] pb-10 lg:pb-0"/>
        </div>
      </body>
    </>
  );
}
