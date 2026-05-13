import { motion } from 'framer-motion'

import habitImage from '../assets/habit.png'
import notesImage from '../assets/notes.png'
import blogImage from '../assets/blog.png'

function Projects() {

  return (

    <section
      id="projects"
      className="py-32 px-6 border-t border-white/10"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}

          viewport={{
            once: true
          }}
        >

          <p className="
            uppercase
            tracking-[8px]
            text-gray-500
            mb-4
            text-center
          ">

            Projects

          </p>

          <h2 className="
            text-5xl md:text-6xl
            font-black
            text-center
            mb-20
          ">

            Featured Work

          </h2>

        </motion.div>

        {/* Featured Project */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}

          viewport={{
            once: true
          }}

          className="
            border border-white/10
            rounded-[40px]
            overflow-hidden
            bg-white/5
            backdrop-blur-sm
            mb-10
            hover:border-white
            transition-all duration-500
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* Image */}
            <div className="
              bg-black
              flex items-center justify-center
              p-8
              border-b lg:border-b-0
              lg:border-r border-white/10
            ">

              <img
                src={habitImage}
                alt="Habit Tracker"

                className="
                  w-full
                  max-h-[500px]
                  object-contain
                  hover:scale-105
                  transition-all duration-500
                "
              />

            </div>

            {/* Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">

              <p className="
                uppercase
                tracking-[6px]
                text-gray-500
                mb-4
              ">

                Featured Project

              </p>

              <h3 className="
                text-4xl md:text-5xl
                font-black
                mb-6
              ">

                Habit Tracker

              </h3>

              <p className="
                text-gray-400
                text-lg
                leading-relaxed
                mb-8
              ">

                Full-stack MERN application featuring JWT authentication,
                protected routes, streak tracking, CRUD operations,
                and calendar heatmap visualization.

              </p>

              {/* Tech */}
              <div className="
                flex flex-wrap
                gap-3
                mb-10
              ">

                {[
                  'React',
                  'Node.js',
                  'Express',
                  'MongoDB',
                  'JWT'
                ].map((tech, index) => (

                  <span
                    key={index}

                    className="
                      border border-white/10
                      px-4 py-2
                      rounded-full
                      text-sm
                      text-gray-300
                    "
                  >

                    {tech}

                  </span>

                ))}

              </div>

              {/* Buttons */}
              <div className="
                flex gap-4
                flex-wrap
              ">

                <a
                  href="https://habit-tracker-asn5.vercel.app/"
                  target="_blank"
                  rel="noreferrer"

                  className="
                    border border-white
                    px-8 py-4
                    hover:bg-white
                    hover:text-black
                    transition-all duration-300
                  "
                >

                  Live Demo

                </a>

                <a
                  href="https://github.com/jaysuthar19/habit-tracker"
                  target="_blank"
                  rel="noreferrer"

                  className="
                    bg-white
                    text-black
                    px-8 py-4
                    hover:scale-105
                    transition-all duration-300
                  "
                >

                  GitHub

                </a>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Smaller Projects */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Notes App */}
          <motion.div

            initial={{
              opacity: 0,
              y: 40
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              delay: 0.1
            }}

            viewport={{
              once: true
            }}

            className="
              border border-white/10
              rounded-[32px]
              overflow-hidden
              bg-white/5
              backdrop-blur-sm
              hover:border-white
              hover:translate-y-[-5px]
              transition-all duration-500
            "
          >

            <div className="
              h-56
              bg-black
              flex items-center justify-center
              p-6
            ">

              <img
                src={notesImage}
                alt="Notes App"

                className="
                  max-w-full
                  max-h-full
                  object-contain
                "
              />

            </div>

            <div className="p-8">

              <h3 className="
                text-3xl
                font-bold
                mb-4
              ">

                Notes App

              </h3>

              <p className="
                text-gray-400
                leading-relaxed
                mb-8
              ">

                Full-stack CRUD notes system using REST APIs
                and MongoDB integration.

              </p>

              <div className="
                flex gap-4
                flex-wrap
              ">

                <a
                  href="https://notes-website-tan.vercel.app/"
                  target="_blank"
                  rel="noreferrer"

                  className="
                    border border-white
                    px-6 py-3
                    hover:bg-white
                    hover:text-black
                    transition-all duration-300
                  "
                >

                  Live Demo

                </a>

                <a
                  href="https://github.com/jaysuthar19/Notes_website"
                  target="_blank"
                  rel="noreferrer"

                  className="
                    bg-white
                    text-black
                    px-6 py-3
                    hover:scale-105
                    transition-all duration-300
                  "
                >

                  GitHub

                </a>

              </div>

            </div>

          </motion.div>

          {/* Blog App */}
          <motion.div

            initial={{
              opacity: 0,
              y: 40
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              delay: 0.2
            }}

            viewport={{
              once: true
            }}

            className="
              border border-white/10
              rounded-[32px]
              overflow-hidden
              bg-white/5
              backdrop-blur-sm
              hover:border-white
              hover:translate-y-[-5px]
              transition-all duration-500
            "
          >

            <div className="
              h-56
              bg-black
              flex items-center justify-center
              p-6
            ">

              <img
                src={blogImage}
                alt="Blog App"

                className="
                  max-w-full
                  max-h-full
                  object-contain
                "
              />

            </div>

            <div className="p-8">

              <h3 className="
                text-3xl
                font-bold
                mb-4
              ">

                Blog Platform

              </h3>

              <p className="
                text-gray-400
                leading-relaxed
                mb-8
              ">

                Responsive blog platform with dynamic content
                management and modern UI.

              </p>

              <div className="
                flex gap-4
                flex-wrap
              ">

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"

                  className="
                    border border-white
                    px-6 py-3
                    hover:bg-white
                    hover:text-black
                    transition-all duration-300
                  "
                >

                  Live Demo

                </a>

                <a
                  href="https://github.com/jaysuthar19/Blogs_website"
                  target="_blank"
                  rel="noreferrer"

                  className="
                    bg-white
                    text-black
                    px-6 py-3
                    hover:scale-105
                    transition-all duration-300
                  "
                >

                  GitHub

                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  )
}

export default Projects