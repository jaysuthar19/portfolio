
import Reveal from './Reveal'

const specialties = [
  {
    title: 'Frontend',
    detail: 'React, JavaScript, HTML5, CSS3, Tailwind CSS, Blade',
  },
  {
    title: 'Backend',
    detail: 'PHP, Laravel, Node.js, Express.js, REST APIs, authentication',
  },
  {
    title: 'Databases',
    detail: 'MySQL, MongoDB, data modelling, CRUD operations',
  },
]

function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Introduction */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[6px] text-gray-500 md:tracking-[8px]">
              About Me
            </p>

            <h2 className="mb-8 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Building modern
              <br />
              full-stack
              <br />
              experiences.
            </h2>

            <p className="text-lg leading-relaxed text-gray-400">
              I’m a Full Stack Developer who enjoys building practical web
              applications with clean interfaces and reliable backend
              functionality. My experience includes React and the MERN stack,
              along with PHP and Laravel development. At Radiant Synergy,
              I’ve worked on an e-commerce platform and a corporate website
              featuring training and career sections. I focus on responsive
              design, authentication, REST APIs, and database-driven
              applications.
            </p>

            {/* Current Experience */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:border-white/20 sm:p-6">
              <p className="text-xs uppercase tracking-[3px] text-gray-500">
                Current Experience
              </p>

              <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                PHP Laravel Developer Intern
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Radiant Synergy · June 2026 – Present
              </p>
            </div>
          </div>

          {/* Right: Technical Skills */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm sm:p-8 md:p-10">
            <p className="mb-8 text-sm uppercase tracking-[4px] text-gray-500">
              What I Work With
            </p>

            <div className="space-y-8">
              {specialties.map((item, index) => (
                <div key={item.title}>
                  <div className="mb-3 flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      0{index + 1}
                    </span>

                    <h3 className="text-xl font-bold sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="pl-9 leading-relaxed text-gray-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm leading-relaxed text-gray-500">
                Interested in building useful products, solving real problems,
                and continuously improving as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default About
