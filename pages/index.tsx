import WorkExperienceTag from "../components/WorkExperienceTag";
import RoundedImage from "../components/RoundedImage";
import Link from "../components/Link";
import PreviewLink from "../components/PreviewLink";
import config from "../config";

const { urls } = config;

export default function Home() {
  return (
    <div>
      <header className="h-screen lg:h-auto flex flex-col justify-around appear-in">
        <div className="text-center text-white md:py-20 font-thin tracking-widest">
          <div className="flex justify-center mb-5">
            <RoundedImage src="/profile-1.jpg" alt="Nicholas profile picture" size={200} />
          </div>

          <h1 className="text-4xl font-sans">Nicholas Peretti</h1>
          <div className="flex flex-row justify-center">
            <div className="w-1/3 lg:w-1/6 flex flex-col justify-center items-end">
              <hr className="w-full stretch-in" />
            </div>
            <div className="px-3 rotate-in">&#10005;</div>
            <div className="w-1/3 lg:w-1/6 flex flex-col justify-center">
              <hr className="w-full stretch-in" />
            </div>
          </div>
          <p className="text-base font-sans xs:text-3xl md:text-base">
            Frontend engineer
          </p>
        </div>
      </header>

      <div className="container mx-auto xl:w-2/3 text-white px-10 flex flex-col md:flex-row">
        <section className="md:w-1/2 lg:w-1/3">
          <h2 className="text-3xl mb-5">Work experiences</h2>
          <WorkExperienceTag
            company="eBay - mobile.de"
            jobTitle="Senior Frontend Engineer"
            imageSrc="/ebay.jpg"
            startDate={new Date("2020-07-01")}
          />
          <WorkExperienceTag
            company="Auto1"
            jobTitle="Senior Frontend Engineer"
            imageSrc="/auto1.png"
            endDate={new Date("2020-03-30")}
            startDate={new Date("2019-02-01")}
          />
          <WorkExperienceTag
            company="CyBrain"
            jobTitle="Full Stack Javascript Engineer"
            imageSrc="/cybrain.jpg"
            endDate={new Date("2019-01-30")}
            startDate={new Date("2017-05-01")}
          />
          <WorkExperienceTag
            company="Interplanet"
            jobTitle="Junior Full Stack Engineer"
            imageSrc="/iplanet.png"
            endDate={new Date("2017-04-30")}
            startDate={new Date("2015-10-01")}
          />
          <Link href="/">Find out more on my LinkedIn</Link>
        </section>

        <div className="flex flex-col md:w-1/2 lg:w-2/3 md:ml-10">
          <section className="mb-5">
            <h2 className="text-3xl mb-5">About me</h2>
            <div className="font-sans font-extralight">
              <p className="mb-3">
                I'm a passionate frontend developer focused on delivering the
                best user experience.
              </p>
              <p className="mb-3">
                If you want to have a chat with me about code, career
                opportunities or anything else, feel free to contact me!
                <br />
                You can drop an email to{" "}
                <Link href="mailto:peretti.nicholas@gmail.com">
                  peretti.nicholas@gmail.com
                </Link>
                , I'll replay as soon as I can!
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-3xl mb-5">More about me on</h2>
            <div className="flex flex-row flex-wrap">
              <PreviewLink
                imgSrc="/github-preview.png"
                href={urls.github}
                title="GitHub"
              />
              <PreviewLink
                imgSrc="/linkedin-statistiken.jpg"
                href={urls.linkedin}
                title="LinkedIn"
              />
              <PreviewLink
                imgSrc="/twitter-preview.jpg"
                href={urls.twitter}
                title="Twitter"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
