import Reveal from './Reveal'

function About() {

  return (

    <Reveal>

      <section
        id="about"
        className="py-32 px-6 border-t border-white/10"
      >

        <div className="
          max-w-6xl mx-auto
          grid md:grid-cols-2
          gap-16
          items-center
        ">

          {/* Left */}
          <div>

            <p className="
              uppercase
              tracking-[8px]
              text-gray-500
              mb-4
            ">

              About Me

            </p>

            <h2 className="
              text-5xl md:text-6xl
              font-black
              mb-8
              leading-tight
            ">

              Building modern
              <br />
              full-stack
              <br />
              experiences.

            </h2>

            <p className="
              text-gray-400
              text-lg
              leading-relaxed
            ">

              I’m a Full Stack MERN Developer focused on
              creating scalable applications with clean UI,
              responsive design, authentication systems,
              and REST APIs.

            </p>

          </div>

          {/* Right */}
          <div className="
            border border-white/10
            rounded-3xl
            bg-white/5
            backdrop-blur-sm
            p-10
          ">

            <div className="space-y-8">

              <div>

                <h3 className="
                  text-2xl
                  font-bold
                  mb-2
                ">

                  Frontend

                </h3>

                <p className="text-gray-400">
                  React, JavaScript, Tailwind CSS
                </p>

              </div>

              <div>

                <h3 className="
                  text-2xl
                  font-bold
                  mb-2
                ">

                  Backend

                </h3>

                <p className="text-gray-400">
                  Node.js, Express.js, REST APIs
                </p>

              </div>

              <div>

                <h3 className="
                  text-2xl
                  font-bold
                  mb-2
                ">

                  Database

                </h3>

                <p className="text-gray-400">
                  MongoDB, MySQL
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </Reveal>

  )
}

export default About