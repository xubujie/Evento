"use client";
import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const month = new Date(event.date).toLocaleString("default", {
    month: "short",
  });
  const day = new Date(event.date).getDate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  return (
    <MotionLink
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
      ref={ref}
      style={{
        //@ts-ignore
        scale: scaleProgress,
        //@ts-ignore
        opacity: opacityProgress,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
    >
      <section className="w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effects">
        <Image
          src={event.imageUrl}
          width={3000}
          height={250}
          alt={event.name}
        />
        <h2 className="text-lg font-bold mt-4">{event.name}</h2>
        <p className="text-sm text-white/90 italic">{event.organizerName}</p>
        <p className="text-sm text-white/50 mt-2">{event.location}</p>
        <div className="absolute top-[10px] left-[10px] bg-black text-sm">
          <p className="text-white">{day}</p>
          <p className="text-accent">{month}</p>
        </div>
      </section>
    </MotionLink>
  );
}
