"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import React, { useState } from "react";

const services = [
  {
    title: "BRAND ACTIVATION & BTL",
    description: "Consumer engagement • RWA • field teams",
    imageUrl:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=85",
  },
  {
    title: "OUTDOOR, TRANSIT & TRADITIONAL",
    description: "Visibility media • mobile promotion • placements",
    imageUrl:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=85",
  },
  {
    title: "BRANDING, PRINT & PRODUCTION",
    description: "Retail • POSM • fabrication • installation",
    imageUrl:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=85",
  },
  {
    title: "DIGITAL MARKETING",
    description: "Social • paid campaigns • SEO • web support",
    imageUrl:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=85",
  },
  {
    title: "CONTENT, CREATOR & E-COMMERCE",
    description: "Video • UGC • influencer • marketplace content",
    imageUrl:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=85",
  },
];

const Services = () => {
  const [active, setActive] = useState(0);
  const activeService = services[active];

  return (
    <div className="w-full flex flex-col gap-12 justify-between mt-24">
      <div className="max-w-2xl flex flex-col gap-6">
        <li className="font-bold list-inside">(Services)</li>

        <span className="font-specialGothic text-5xl font-bold dark:text-white max-w-xl">
          Services we provide to brands
        </span>
      </div>

      <div className="flex gap-6 w-full">
        <div className="space-y-2 grid grid-rows-5">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={cn(
                "bg-accent/20 hover:bg-accent flex px-5 py-3 rounded-xl gap-10 transition-all hover:text-white",
                active === index && "bg-accent text-white",
              )}
            >
              <span>0{index + 1}</span>
              <span className="font-semibold text-lg basis-1/3">
                {service.title}
              </span>
              <span className="text-sm">{service.description}</span>
            </div>
          ))}
        </div>

        <motion.div
          key={activeService.imageUrl}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ ease: "easeInOut" }}
          className="aspect-4/5 w-full basis-1/3 bg-neutral-500 rounded-2xl overflow-clip"
        >
          <Image
            src={activeService.imageUrl}
            alt={activeService.title}
            height={500}
            width={400}
            className="object-cover bg-accent/50 h-full w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
