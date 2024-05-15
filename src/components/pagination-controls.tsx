import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const btnStyle =
  "flex items-center text-white px-5 py-3 bg-white/5 gap-x-2 rounded-md opacity-75 hover:opacity-100 transition text-sm";
export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="w-full flex justify-between mt-10">
      {previousPath ? (
        <Link href={previousPath} className={btnStyle}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link href={nextPath} className={btnStyle}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
