import RoundedImage from "./RoundedImage";
import { format, formatDuration, differenceInMonths } from "date-fns";

type WorkExperienceTagProps = {
  company: string;
  jobTitle: string;
  imageSrc: string;
  startDate: Date;
  endDate?: Date;
};

export default function WorkExperienceTag({
  company,
  jobTitle,
  imageSrc,
  startDate,
  endDate,
}: WorkExperienceTagProps) {
  const durationInMonths = differenceInMonths(endDate || new Date(), startDate);
  const years = Math.floor(durationInMonths / 12);
  const months = Math.floor(durationInMonths % 12);

  return (
    <div className="flex place-items-start mb-10">
      <RoundedImage
        src={imageSrc}
        size={70}
        alt={`${company} logo`}
      ></RoundedImage>
      <div className="pl-5 flex-1">
        <h3 className="text-xl">{company}</h3>
        <p className="font-light">{jobTitle}</p>

        <p className="font-light text-xs italic">
          {formatDuration({
            years,
            months,
          })}
        </p>

        <p className="font-light text-xs italic">
          {endDate instanceof Date ? (
            <>
              {format(startDate, "MMM yyyy")} – {format(endDate, "MMM yyyy")}
            </>
          ) : (
            <>Present since {format(startDate, "MMM yyyy")}</>
          )}
        </p>
      </div>
    </div>
  );
}
