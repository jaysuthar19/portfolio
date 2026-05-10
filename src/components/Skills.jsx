import Reveal from './Reveal'

function Skills() {

  const skills = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'Tailwind CSS',
    'REST APIs',
    'Git',
    'Framer Motion',
    'Responsive Design'
  ]

  return (

    <Reveal>

      <section
        id="skills"
        className="py-32 px-6 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto">

          <p className="
            uppercase
            tracking-[8px]
            text-gray-500
            mb-4
            text-center
          ">

            Skills

          </p>

          <h2 className="
            text-5xl md:text-6xl
            font-black
            text-center
            mb-20
          ">

            Tech Stack

          </h2>

          <div className="
            grid grid-cols-2
            md:grid-cols-4
            gap-6
          ">

            {skills.map((skill, index) => (

              <div
                key={index}

                className="
                  border border-white/10
                  bg-white/5
                  rounded-3xl
                  p-8
                  text-center
                  text-lg
                  hover:border-white
                  hover:scale-105
                  transition-all duration-300
                  backdrop-blur-sm
                "
              >

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