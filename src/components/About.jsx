import Reveal from './Reveal'

const specialties = [
  { title: 'Frontend', detail: 'React, JavaScript, HTML, CSS, Tailwind CSS, Blade' },
  { title: 'Backend', detail: 'PHP, Laravel, Node.js, Express.js, REST APIs' },
  { title: 'Databases', detail: 'MySQL, MongoDB, data modelling, CRUD workflows' },
]

function About() {
  return (
    <Reveal>
      <section id="about" className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 uppercase tracking-[6px] text-gray-500 md:tracking-[8px]">About Me</p>
            <h2 className="mb-8 text-4xl font-black leading-tight md:text-6xl">
              Building modern<br />full-stack<br />experiences.
            </h2>
            <p className="text-lg leading-relaxed text-gray-400">
              I’m a Full Stack Developer with hands-on experience building websites and web applications from scratch. As a PHP Laravel Developer Intern at Radiant Synergy, I’ve worked on an e-commerce platform and a corporate website with training and career features. I enjoy connecting clean, responsive interfaces with useful backend functionality and reliable database workflows.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-widest text-gray-500">Current Experience</p>
              <h3 className="mt-2 text-xl font-bold">PHP Laravel Developer Intern</h3>
              <p className="mt-1 text-gray-400">RADIANT SYNERGY · June 2026 – Present</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm md:p-10">
            <div className="space-y-8">
              {specialties.map((item) => (
                <div key={item.title}>
                  <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default About
