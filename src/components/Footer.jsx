
function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-black tracking-[4px]">
            JAY
          </h2>
          <p className="mt-2 text-gray-500">
            PHP Laravel Developer Intern · Full Stack Developer
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a
            href="https://github.com/jaysuthar19"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jay-suthar-79256b400/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:jaysuthar1012@gmail.com"
            className="transition hover:text-white"
          >
            Email
          </a>

          <a
            href="/resume.pdf"
            className="transition hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Jay Suthar — Built with React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;
