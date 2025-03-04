import cns from "classnames";

export interface Props {
  title: string;
  illustration: React.ReactElement;
  children?: any;
  reverse?: boolean;
}

export default function Section({
  children,
  illustration,
  title,
  reverse,
}: Props): JSX.Element {
  return (
    <section
      className={cns(
        `w-full min-h-screen flex flex-col justify-center md:justify-start lg:justify-center items-center px-[20px] md:px-[40px] snap-start container mx-auto`,
        {
          "lg:flex-row-reverse": reverse,
          "lg:flex-row": !reverse,
        }
      )}
    >
      <div className="flex items-center justify-center w-[220px] md:w-[450px] md:h-[50vh] mt-[40px] min-h-[]" aria-hidden>
        {illustration}
      </div>
      <div
        className={cns(
          "flex flex-col justify-start items-start mt-[40px] lg:max-w-[50%] w-full xl:w-fit",
          {
            "lg:pl-[40px]": !reverse,
            "lg:pr-[40px]": reverse,
          }
        )}
      >
        <h2 className="text-[24px] font-bold mb-[10px] md:text-[50px] xl:text-[64px] w-full">
          {title}
          <span aria-hidden className="animate-blink font-extralight">_</span>
        </h2>
        <div className="pl-[10px] md:pl-[60px] lg:pl-[40px] xl:text-[36px] text-[14px] md:text-[24px] w-full font-extralight pb-[50px]">
          {children}
        </div>
      </div>
    </section>
  );
}
