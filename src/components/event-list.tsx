import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./pagination-controls";

type EventListProps = {
  city: string;
  page?: number;
};

export default async function EventList({ city, page = 1 }: EventListProps) {
  const { events, totalCount } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  return (
    <>
      <ul className="max-w-[1100px] flex flex-wrap gap-10 justify-center">
        {events.map((event: EventoEvent) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ul>
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </>
  );
}
