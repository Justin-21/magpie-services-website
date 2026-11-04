import Services from "@/components/Home/Services";
import InfiniteTape from "@/components/InfiniteTape";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center font-sans pt-12 lg:pt-24">
      <div className="flex flex-1 w-full max-w-7xl flex-col text-black font-manrope">
        {/* Hero Section */}
        <span className="font-specialGothic text-7xl font-bold uppercase dark:text-white">
          Your Social Media
          <br />
          Growth Engine
        </span>

        <div className="w-full bg-neutral-200 rounded-3xl h-100 flex items-center *:h-full *:w-full overflow-clip mt-12">
          <div className="bg-radial-[90%_140%_at_0%_0%] from-black from-0% via-[#A5002C] via-45% to-accent to-100%"></div>

          <div className="bg-radial-[90%_140%_at_0%_0%] from-accent from-0% via-[#A5002C] via-75% to-black to-130%"></div>

          <div className="bg-radial-[90%_120%_at_0%_0%] from-black from-0% via-[#A5002C] via-55% to-accent to-130%"></div>

          <div className="bg-radial-[100%_100%_at_90%_10%] from-orange-600 from-10% via-[#A5002C] via-65% to-black to-140%"></div>
        </div>

        {/* Introduction */}
        <div className="w-full flex justify-between mt-24">
          <div className="max-w-2xl flex flex-col gap-6">
            <li className="font-bold list-inside">(Introduction)</li>

            <span className="w-full text-3xl font-medium leading-snug">
              We&apos;re a social media agency driven by creativity, curiosity,
              passion and innovation. Our mission is to help brands stand out
              with strategic content, thoughtful design, and impactful social
              experiences.
            </span>

            <Link
              href="/services"
              className="font-bold text-accent underline underline-offset-2 flex items-center gap-0"
            >
              Our Services <RiArrowRightUpLine size={20} />
            </Link>
          </div>

          <div className="aspect-square w-full max-w-md bg-accent rounded-3xl"></div>
        </div>

        {/* Metrics */}

        {/* React bits - Tape */}
        <InfiniteTape />

        {/* Core Services */}
        <Services />

        {/* Testimonials */}
        <div className="w-full flex flex-col gap-12 justify-between mt-24">
          <div className="max-w-2xl flex flex-col gap-6">
            <li className="font-bold list-inside">(Feedback)</li>

            <span className="font-specialGothic text-5xl font-bold dark:text-white max-w-xl">
              Why clients trust my team
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 w-full">
            <div className="aspect-4/5 w-full bg-accent rounded-2xl col-span-3"></div>

            <div className="col-span-6 bg-neutral-100 p-5 rounded-2xl flex flex-col justify-between">
              <div className="flex items-center gap-0.5 *:size-3.5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <span className="text-2xl font-medium leading-snug">
                &quot;We&apos;re a social media agency driven by creativity,
                curiosity, passion and innovation. Our mission is to help brands
                stand out with strategic content, thoughtful design, and
                impactful social experiences.&quot;
              </span>

              <div className="grid">
                <span className="text-sm font-semibold">Random Name</span>
                <span className="text-xs font-medium text-neutral-500">
                  Random title
                </span>
              </div>
            </div>

            <div className="aspect-4/5 w-full bg-accent rounded-2xl col-span-3"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
