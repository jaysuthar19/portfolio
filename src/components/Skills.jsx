
import Reveal from './Reveal'

const skills = [
  'PHP',
  'Laravel',
  'Blade',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'REST APIs',
  'Git',
  'GitHub',
  'Authentication',
  'CRUD Operations',
  'Responsive Design',
  'Framer Motion',
]

function Skills() {
  return (
    <Reveal>
      <section
        id="skills"
        className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-center uppercase tracking-[6px] text-gray-500 md:tracking-[8px]">
            Skills & Technologies
          </p>

          <h2 className="mb-6 text-center text-4xl font-black md:text-6xl">
            Tech Stack
          </h2>

          <p className="mx-auto mb-14 max-w-2xl text-center leading-relaxed text-gray-400 md:mb-20">
            Technologies and tools I use to build responsive interfaces,
            full-stack applications, and database-driven websites.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-base backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/40 hover:bg-white/[0.08] md:p-7 md:text-lg"
              >
                <span className="mb-2 block text-xs text-gray-600 transition-colors group-hover:text-gray-400">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="font-medium text-gray-300 transition-colors group-hover:text-white">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default Skills
