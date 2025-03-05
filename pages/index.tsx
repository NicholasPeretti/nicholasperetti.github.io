import Head from "next/head";
import Section from "../components/Section";
import SvgArrowDown from "../components/SvgArrowDown";
import SvgContact from "../components/SvgContact";
import SvgExternalLink from "../components/SvgExternalLink";
import SvgFeedback from "../components/SvgFeedback";
import SvgFlexible from "../components/SvgFlexible";
import SvgReferences from "../components/SvgReferences";
import SvgUxOriented from "../components/SvgUxOriented";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicholas Peretti</title>
        <meta
          name="description"
          content="Nicholas Peretti, frontend engineer"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="snap-y snap-mandatory w-full h-full fixed overflow-y-scroll">
        <header className="flex flex-col w-full justify-between items-center h-screen overflow-x-hidden snap-start">
          <div className="flex flex-col mt-[150px]">
            <h1 className="text-[40px] w-fit font-bold bg-gradient-animation mb-[-15px] md:text-[60px] xl:text-[100px]">
              Nicholas Peretti
            </h1>
            <p className="text-[18px] md:text-[30px] xl:text-[50px] font-extralight">
              Frontend engineer
              <span className="animate-blink" aria-hidden>
                _
              </span>
            </p>
          </div>
          <SvgArrowDown
            className="mb-[150px] w-[50px] animate-bounce"
            aria-hidden
          />
        </header>
        <main>
          <Section
            title="UX oriented"
            illustration={<SvgUxOriented className="w-full h-full" />}
          >
            {
              "I really appreciate a good user experience. Therefore I like to work closely with designers from the ideation process to the mockup's finishing touches."
            }
          </Section>
          <Section
            reverse={true}
            title="Feedback seeker"
            illustration={<SvgFeedback className="w-full h-full" />}
          >
            I feel at home in a company with a strong feedback culture.
            <br aria-hidden />
            <br aria-hidden />I regularly seek honest feedback from my peers and
            I am always available to do my best to reciprocate with constructive
            comments.
          </Section>
          <Section
            title="Flexible and curious"
            illustration={<SvgFlexible className="w-full h-full" />}
          >
            Even though I am a frontend engineer, I really enjoy exploring all
            the areas of a product.
            <br aria-hidden />
            <br aria-hidden />I appreciate a stimulating environment where I can
            be exposed to new technologies and ways of working.
          </Section>
          <Section
            reverse={true}
            title="Work experiences"
            illustration={<SvgReferences className="w-full h-full" />}
          >
            {`I've been working as a software engineer since 2015. I started out as
          a full-stack developer and I've been focusing on frontend since 2019.`}
            <br aria-hidden />
            <br aria-hidden />
            You can{" "}
            <a
              href="https://www.linkedin.com/in/nicholas-peretti-210aa6130/"
              target="_blank"
              rel="noreferrer"
              className="text-[#F9A826] hover:underline"
            >
              take a look at my work experience on Linkedin
              <span aria-hidden>
                <SvgExternalLink className="h-[1em] inline" />
              </span>
            </a>
          </Section>
          {/* <Section
          title="Portfolio"
          illustration={<SvgPortfolio className="w-full" />}
        >
          Here are some of my projects
        </Section> */}
          <Section
            // reverse={true}
            title="Contact me"
            illustration={<SvgContact className="w-full h-full" />}
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="w-full text-[14px] xl:text-[24px] flex flex-col xl:w-[500px]"
            >
              <input
                type="hidden"
                name="access_key"
                value="88e0a43e-8858-47dc-961f-a6db6c705901"
              />

              <label htmlFor="email">
                Your email:
                <br aria-hidden />
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mb-[18px]"
                />
              </label>
              <label htmlFor="message">
                Your message:
                <br aria-hidden />
                <textarea
                  required
                  id="message"
                  name="message"
                  className="w-full"
                  rows={5}
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-[#F9A826] h-[60px] text-black font-normal mt-[18px]"
              >
                SEND MESSAGE
              </button>
            </form>
          </Section>
        </main>
      </div>
    </>
  );
}
