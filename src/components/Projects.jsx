import { motion } from 'framer-motion'
import habitImage from '../assets/habit.png'
import notesImage from '../assets/notes.png'
import blogImage from '../assets/blog.png'

const projects = [
  {
    title: 'Ojas Couture',
    eyebrow: 'Client E-commerce Website',
    description: 'A full-stack fashion e-commerce website with product and collection browsing, customer accounts, cart and checkout workflows, order management, payment options, coupons, memberships, rewards, and administrative tools.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Blade', 'JavaScript'],
    live: 'https://ojascouture.com/',
    visual: 'OJAS COUTURE',
    featured: true,
  },
  {
    title: 'RADIANT SYNERGY',
    eyebrow: 'Corporate & Training Website',
    description: 'A corporate platform for services, solutions, portfolio projects, training programs, career opportunities, testimonials, and enquiry workflows backed by a Laravel application.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Blade', 'CSS'],
    live: 'https://radiantsynergy.in/',
    visual: 'RADIANT SYNERGY',
  },
  {
    title: 'DevHire',
    eyebrow: 'Full-Stack Recruitment Platform',
    description: 'A recruitment platform with recruiter and developer workflows, job posting, application tracking, resume uploads, role-based authentication, notifications, and in-app messaging.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: 'https://dev-hire-liard-five.vercel.app/',
    github: 'https://github.com/jaysuthar19/DevHire',
    visual: 'DEVHIRE',
  },
  {
    title: 'Habit Tracker',
    eyebrow: 'Productivity Application',
    description: 'A full-stack habit tracker with JWT authentication, protected routes, CRUD operations, streak tracking, activity logs, and calendar heatmap visualization.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: 'https://habit-tracker-asn5.vercel.app/',
    github: 'https://github.com/jaysuthar19/habit-tracker',
    image: habitImage,
  },
  {
    title: 'Notes App',
    eyebrow: 'Full-Stack CRUD Application',
    description: 'A notes application for creating, viewing, editing, and deleting notes through a responsive interface and backend API integration.',
    tech: ['React', 'JavaScript', 'REST APIs', 'MongoDB'],
    live: 'https://notes-website-amber.vercel.app',
    github: 'https://github.com/jaysuthar19/Notes_website',
    image: notesImage,
  },
  {
    title: 'Blog Platform',
    eyebrow: 'Content Application',
    description: 'A responsive blog application focused on dynamic content presentation and a clean reading experience.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/jaysuthar19/Blogs_website',
    image: blogImage,
  },
]

function ProjectVisual({ project }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.title} project preview`} className="h-full max-h-64 w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
  }

  return (
    <div className="flex min-h-52 w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_65%)] p-8">
      <div className="text-center">
        <div className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-500">Selected Work</div>
        <div className="text-2xl font-black tracking-wide md:text-3xl">{project.visual}</div>
        <div className="mx-auto mt-4 h-px w-16 bg-white/40" />
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true, amount: 0.12 }}
      className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-white/30 ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className={`flex items-center justify-center border-b border-white/10 bg-black/50 p-5 md:p-7 ${project.featured ? 'min-h-64' : 'min-h-52'}`}>
        <ProjectVisual project={project} />
      </div>
      <div className="p-6 md:p-8">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-gray-500">{project.eyebrow}</p>
        <h3 className="mb-4 text-2xl font-bold md:text-3xl">{project.title}</h3>
        <p className="mb-6 leading-relaxed text-gray-400">{project.description}</p>
        <div className="mb-7 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300">{tech}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-white px-5 py-3 text-sm transition hover:bg-white hover:text-black">
              Live Website <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white px-5 py-3 text-sm text-black transition hover:bg-gray-200">
              GitHub <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }}>
          <p className="mb-4 text-center uppercase tracking-[6px] text-gray-500 md:tracking-[8px]">Projects & Experience</p>
          <h2 className="mb-5 text-center text-4xl font-black md:text-6xl">Featured Work</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center leading-relaxed text-gray-400 md:mb-20">
            Client websites and full-stack applications built with Laravel and the MERN stack.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
