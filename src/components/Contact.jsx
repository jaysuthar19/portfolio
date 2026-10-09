import Reveal from './Reveal'

function Contact() {
  const contacts = [
    { label: 'Email', value: 'jaysuthar1012@gmail.com', href: 'mailto:jaysuthar1012@gmail.com' },
    { label: 'GitHub', value: 'github.com/jaysuthar19', href: 'https://github.com/jaysuthar19' },
    { label: 'LinkedIn', value: 'View Profile', href: 'https://www.linkedin.com/in/jay-suthar-79256b400/' },
  ]

  return (
    <Reveal>
      <section id="contact" className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 uppercase tracking-[6px] text-gray-500 md:tracking-[8px]">Contact</p>
          <h2 className="mb-8 text-4xl font-black md:text-6xl">Let’s Work<br />Together</h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400 md:mb-14">
            Open to developer opportunities, internships, collaborations, and building useful web applications.
          </p>
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:grid-cols-3 md:gap-8 md:p-10">
            {contacts.map((contact) => (
              <div key={contact.label} className="min-w-0">
                <h3 className="mb-3 text-xl font-bold">{contact.label}</h3>
                <a href={contact.href} target={contact.label === 'Email' ? undefined : '_blank'} rel={contact.label === 'Email' ? undefined : 'noreferrer'} className="break-words text-gray-400 transition hover:text-white">
                  {contact.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default Contact
