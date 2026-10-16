
import { Arrow } from "@/assets/icons";
import { useId } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void;
};

export default function FaqItem({
  question,
  answer,
  isExpanded,
  onToggle,
}: FaqItemProps) {
  const contentId = useId();

  return (
    <div
      className="group py-5"
      data-expanded={isExpanded}
    >
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 text-left"
          >
            <h3>
          <span className="text-balance text-2xl font-semibold uppercase text-support-400 transition-colors duration-300 group-data-[expanded=true]:text-support-200 2xl5:text-4xl">
            {question}
          </span>
          </h3>
          <Arrow
            aria-hidden="true"
            className="size-6 shrink-0 fill-support-400 transition-transform duration-300 ease-in-out group-data-[expanded=true]:rotate-90 group-data-[expanded=true]:fill-support-200 2xl5:size-7.5"
          />
        </button>

      <div
        id={contentId}
        inert={!isExpanded}
        className="
          grid grid-rows-[0fr]
          transition-[grid-template-rows]
          duration-300 ease-in-out
          group-data-[expanded=true]:grid-rows-[1fr]
          motion-reduce:transition-none
        "
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className="
              max-w-[75ch] text-lg leading-relaxed
              text-base-400 text-pretty
              opacity-0 pt-0
              transition-[opacity,padding]
              duration-300 ease-in-out
              group-data-[expanded=true]:opacity-100
              group-data-[expanded=true]:pt-4
              motion-reduce:transition-none  2xl5:text-xl
            "
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
