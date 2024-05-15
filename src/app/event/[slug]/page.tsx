import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import H1 from "@/components/h1";
import { EventoEvent } from "@prisma/client";
import { Metadata } from "next";
import { getEvent } from "@/lib/utils";

type Props = {
  params: {
    slug: string;
  };
};
export function generateMetadata({ params }: Props): Metadata {
  const slug = params.slug;
  return {
    title: `Event: ${slug}`,
  };
}
type EventsPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventsPageProps) {
  const { slug } = params;
  const data = await getEvent(slug);
  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          src={data.imageUrl}
          alt="Event background"
          className="object-cover blur-3xl z-0"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="z-1 relative flex flex-col gap-6 lg:gap-16 lg:flex-row">
          <Image
            src={data.imageUrl}
            alt="Event image"
            width={300}
            height={200}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            {/* Get date in the format, Friday, Month, day */}
            <p className="text-white/75">
              {new Date(data.date).toDateString()}
            </p>
            <H1 className="mt-1 mb-2 whitespace-nowrap lg:text-5xl">
              {data.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{data.organizerName}</span>
            </p>
            <button
              className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] rounded-md 
            border-white/10 border-2 sm:w-full py-2 state-effects"
            >
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-16">
        <section>
          <h2 className="text-2xl">About this Event</h2>
          <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
            {data.description}
          </p>
        </section>
        <section className="mt-24">
          <h2 className="text-2xl">Location</h2>
          <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
            <span className="italic">{data.location}</span>
          </p>
        </section>
      </div>
    </main>
  );
}
