import Reveal from './Reveal'

function Contact() {

  return (

    <Reveal>

      <section
        id="contact"
        className="py-32 px-6 border-t border-white/10"
      >

        <div className="
          max-w-4xl mx-auto
          text-center
        ">

          <p className="
            uppercase
            tracking-[8px]
            text-gray-500
            mb-4
          ">

            Contact

          </p>

          <h2 className="
            text-5xl md:text-6xl
            font-black
            mb-8
          ">

            Let’s Work
            <br />
            Together

          </h2>

          <p className="
            text-gray-400
            text-lg
            leading-relaxed
            mb-14
            max-w-2xl
            mx-auto
          ">

            Interested in internships, collaborations,
            or building modern web applications together.

          </p>

          <div className="
            border border-white/10
            bg-white/5
            backdrop-blur-sm
            rounded-3xl
            p-10
          ">

            <div className="
              grid md:grid-cols-3
              gap-8
            ">

              <div>

                <h3 className="
                  text-xl
                  font-bold
                  mb-3
                ">

                  Email

                </h3>

                <a
                  href="mailto:jaysuthar1012@gmail.com"

                  className="
                    text-gray-400
                    hover:text-white
                    transition
                  "
                >

                  jaysuthar1012@gmail.com

                </a>

              </div>

              <div>

                <h3 className="
                  text-xl
                  font-bold
                  mb-3
                ">

                  GitHub

                </h3>

                <a
                  href="https://github.com/jaysuthar19"
                  target="_blank"

                  className="
                    text-gray-400
                    hover:text-white
                    transition
                  "
                >

                  github.com/jaysuthar19

                </a>

              </div>

              <div>

                <h3 className="
                  text-xl
                  font-bold
                  mb-3
                ">

                  LinkedIn

                </h3>

                <a
                  href="https://linkedin.com/in/jay-suthar-79256b400"
                  target="_blank"

                  className="
                    text-gray-400
                    hover:text-white
                    transition
                  "
                >

                  View Profile

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </Reveal>

  )
}

export default Contact