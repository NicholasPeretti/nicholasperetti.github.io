import { h } from 'preact'
import Background from './components/Background'
import TopSection from './components/TopSection'
import ContainerRoll from './components/ContainerRoll'
import AppearInAnimationContainer from './components/AppearInAnimationContainer'
import Title from './components/Title'
import Link from './components/Link'

import './index.css'

export default function App() {
  return (
    <Background>
      <AppearInAnimationContainer>
        <TopSection />
      </AppearInAnimationContainer>
      <ContainerRoll className="md:w-5/6 max-w-3xl md:mb-32 p-5">
        <section>
          <Title>About me</Title>
          <p>Hi, I'm Nicholas Peretti.</p>
          <p>
            I’m a passionate front-end developer who likes to focus on
            delivering the best user experience he can. I usually think more
            about how the UI can be a better tool for whoever is using it,
            rather than create useless abstractions and additional code without
            a concrete reason.
          </p>
          <p>
            This very webapp has been created from scratch by me. I wanted to
            give you the best experience I’m able to deliver, both graphics and
            performance wise.
          </p>
          <p>
            You can learn more about this on{' '}
            <Link href="https://github.com/NicholasPeretti/nicholasperetti.github.io">
              GitHub
            </Link>
            .
          </p>
        </section>
        <section>
          <Title>Working experience</Title>
          <p>
            I’ve had the pleasure to work with great companies since I’ve became
            a web developer. During this period I’ve been able to learn a lot,
            not only about the job itself, but about what I like to do: deliver
            great user interfaces.
          </p>
          <p>
            Every single company I’ve worked with gave me the knowledge to be
            the developer that I’m today, and I cannot thank enough all the
            colleagues that helped me along the way.
          </p>
          <div className="bg-gray-300 px-5 py-1 mb-5">
            <Title>Auto 1</Title>
            <p>
              In Auto1 I’ve been able to work with some amazing people from all
              over the world. This kind of experience allowed me to share my
              ideas with a lot of developers and get a lot of feedback. This
              helped me open my mind to new ways of thinking about problems,
              ways I didn’t know before.
            </p>
            <p>
              Since I had to work with such an international group of people, my
              english skills had to level up. I’ve spent quite some time
              studying, improving and practicing and, after a while, it paid
              back!
            </p>
            <p>
              From the tech-stack side, the company gave me the chance to work
              with the latest technologies, such as
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>GraphQL</li>
                <li>Webpack</li>
              </ul>
              Nevertheless, I was always free to try new technologies and
              methodologies to improve the codebase quality and the web-app
              performance.
            </p>
          </div>
          <p>
            If you want to read more about my working experiences, feel free to
            checkout my{' '}
            <Link href="https://www.linkedin.com/in/nicholas-peretti-210aa6130/">
              LinkedIn profile
            </Link>
            .
          </p>
        </section>
        <section>
          <Title>Portfolio</Title>
          <p>
            I like to work on pet projects from time to time. They don't always
            end well and I don't always publish them on GitHub.
          </p>
          <p>
            That being said, my GitHub profile is quite a mess! I use it to fork
            and star projects that I like and that I might be interested in, but
            I don’t put a lot of quality code up in there. <br />
            This happens mostly because I usually put all my efforts on projects
            I maintain at work.
          </p>
          <p>
            <u>
              <em>I’m currently working on cleaning it up!</em>
            </u>
          </p>
          <p>
            In the meantime, let me point you to some projects that would worth
            your time!
            <ul className="pb-0">
              <li>
                <Link href="https://github.com/NicholasPeretti/nicholasperetti.github.io">
                  This personal portforlio
                </Link>
              </li>
              <li>
                <Link href="https://github.com/NicholasPeretti/tetris">
                  Tetris
                </Link>
                &nbsp;(
                <Link href="https://the-tetris.netlify.com/">play it</Link>)
              </li>
            </ul>
          </p>
          <Title>Contacts</Title>
          <p>
            If you want to have a chat with me about code, career opportunities
            or anything else, feel free to contact me!
          </p>
          <p>
            You can drop an email to{' '}
            <Link href="mailto:peretti.nicholas@gmail.com">
              peretti.nicholas@gmail.com
            </Link>
            , I'll replay as soon as I can! <br />
            In the meanwhile, I wish you the best.
          </p>
          <p className="text-gray-600 italic font-light">Nicholas Peretti</p>
        </section>
      </ContainerRoll>
    </Background>
  )
}
