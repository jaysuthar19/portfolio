import Reveal from './Reveal'

const skills = [
  'PHP', 'Laravel', 'Blade', 'JavaScript', 'React', 'Node.js', 'Express.js',
  'MySQL', 'MongoDB', 'REST APIs', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git',
  'GitHub', 'Authentication', 'CRUD Operations', 'Responsive Design', 'Framer Motion',
]

function Skills() {
  return (
    <Reveal>
      <section id="skills" className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-center uppercase tracking-[6px] text-gray-500 md:tracking-[8px]">Skills</p>
          <h2 className="mb-14 text-center text-4xl font-black md:mb-20 md:text-6xl">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
            {skills.map((skill) => (
              <div key={skill} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-base transition-all duration-300 hover:scale-[1.03] hover:border-white/40 md:p-7 md:text-lg">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default Skills
