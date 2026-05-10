function Footer() {
  return (

    <footer className="
      border-t border-white/10
      py-10 px-6
    ">

      <div className="
        max-w-7xl mx-auto
        flex flex-col md:flex-row
        justify-between
        items-center
        gap-6
      ">

        {/* Left */}
        <div>

          <h2 className="text-2xl font-black tracking-[4px]">
            JAY
          </h2>

          <p className="text-gray-500 mt-2">
            Full Stack MERN Developer
          </p>

        </div>

        {/* Right */}
        <div className="
          flex gap-6
          text-gray-400
          text-sm
        ">

          <a
            href="https://github.com/jaysuthar19"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/jay-suthar-79256b400"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:jaysuthar1012@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="
        text-center
        text-gray-600
        text-sm
        mt-10
      ">

        © 2026 Jay Suthar — Built with React & Tailwind

      </div>

    </footer>
  )
}

export default Footer