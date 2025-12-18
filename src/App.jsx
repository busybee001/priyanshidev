import { data } from "./data";

function Pill({ children }) {
  return (
    <span className="pill-spark inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-200">
      {children}
    </span>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <div className="h-px flex-1 bg-zinc-900" />
      </div>
      {children}
    </section>
  );
}

function LinkA({ href, children }) {
  if (!href) return <span className="text-zinc-500">{children}</span>;
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
    >
      {children}
    </a>
  );
}

function Cta({ href, label, sub, icon }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="cta-btn group inline-flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3"
    >
      <span className="cta-ic grid h-10 w-10 place-items-center rounded-xl border border-zinc-800 bg-zinc-900/40">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold tracking-tight text-zinc-100">
          {label}
        </span>
        <span className="block truncate text-xs text-zinc-400">{sub}</span>
      </span>
      <span className="ml-auto text-zinc-600 transition group-hover:text-zinc-300">
        →
      </span>
    </a>
  );
}

function IconBtn({ href, title, children }) {
  return (
    <a
      href={href}
      title={title}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="icon-btn"
    >
      {children}
    </a>
  );
}

/** ✅ Normalize LinkedIn so it works whether you pass username or full URL */
function getLinkedInUrl(linkedin) {
  const raw = (linkedin ?? "").trim();
  if (!raw) return "";
  if (raw.startsWith("http")) return raw.replace(/\/+$/, "") + "/";

  const clean = raw
    .replace(/^@/, "")
    .replace(/^linkedin\.com\/in\//i, "")
    .replace(/^www\.linkedin\.com\/in\//i, "")
    .replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//i, "")
    .replace(/\/+$/, "")
    .trim();

  return `https://www.linkedin.com/in/${clean}/`;
}

export default function App() {
  const linkedinUrl = getLinkedInUrl(data.linkedin);
  const githubUrl = data.github ? `https://github.com/${String(data.github).trim()}` : "";
  const emailUrl = data.email ? `mailto:${String(data.email).trim()}` : "";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-5 py-10">
        {/* ✨ Premium Top Header */}
        <header className="sticky top-0 z-20 -mx-5 mb-10 px-5 pt-3">
          <div className="header-shell rounded-2xl border border-zinc-900 bg-zinc-950/70 backdrop-blur">
            <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Left brand */}
              <div className="brand-card">
                <div className="text-xs text-zinc-400">{data.location}</div>
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(245,158,11,0.55)]" />
                  <div className="text-base font-semibold tracking-tight">
                    {data.name}
                  </div>
                </div>
              </div>

              {/* Center nav pill */}
              <nav className="nav-pill flex flex-wrap items-center justify-center gap-2 sm:gap-1">
                <a className="nav-link" href="#about">About</a>
                <a className="nav-link" href="#experience">Experience</a>
                <a className="nav-link" href="#projects">Projects</a>
                <a className="nav-link" href="#skills">Skills</a>
                <a className="nav-link" href="#education">Education</a>
                <a className="nav-link" href="#highlights">Achievements</a>
                <a className="nav-link" href="#contact">Contact</a>
              </nav>

              {/* Right quick actions */}
              <div className="flex items-center justify-start gap-2 sm:justify-end">
                <IconBtn href={data.resumeUrl} title="Resume">
                  <span className="text-lg">📄</span>
                </IconBtn>
                <IconBtn href={emailUrl} title="Email">
                  <span className="text-lg">✉️</span>
                </IconBtn>
                <IconBtn href={githubUrl} title="GitHub">
                  <span className="text-lg">💻</span>
                </IconBtn>
                <IconBtn href={linkedinUrl} title="LinkedIn">
                  <span className="text-lg">🔗</span>
                </IconBtn>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </div>
        </header>

        {/* Hero */}
        <div className="mb-12 rounded-2xl border border-zinc-900 bg-gradient-to-b from-zinc-900/40 to-zinc-950 p-6 sm:p-10 overflow-visible hero-card">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center overflow-visible">
            <div className="avatar-pop">
              <img
                src={data.photo}
                alt={data.name}
                className="h-28 w-28 rounded-full object-cover border border-zinc-800"
              />
            </div>

            <div className="min-w-0">
              <h1 className="hero-title text-4xl font-semibold tracking-tight sm:text-5xl">
                Priyanshi
              </h1>

              <div className="mt-2 flex items-center gap-3 text-2xl sm:text-3xl font-medium text-zinc-200">
                <span className="text-zinc-300">A</span>

                <span className="role-mask">
                  <span className="role-track">
                    <span>CS Master’s</span>
                    <span>Student</span>
                    <span>Developer</span>
                    <span>Ping Pong Player</span>
                    <span>CS Master’s</span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Cta href={data.resumeUrl} label="Resume" sub="One click PDF" icon={<span>📄</span>} />
            <Cta href={emailUrl} label="Email" sub="Fast reply" icon={<span>✉️</span>} />
            <Cta href={githubUrl} label="GitHub" sub={`@${String(data.github ?? "").trim()}`} icon={<span>💻</span>} />
            <Cta href={linkedinUrl} label="LinkedIn" sub="/priyanshidev" icon={<span>🔗</span>} />
          </div>
        </div>

        <main className="space-y-12">
          <Section id="about" title="About">
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
              <p className="text-zinc-300">{data.headline}</p>
            </div>
          </Section>

          <Section id="experience" title="Experience">
            <div className="space-y-4">
              {data.experience.map((job) => (
                <div key={job.company} className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="text-lg font-semibold">{job.company}</div>
                    <div className="text-sm text-zinc-400">{job.dates}</div>
                  </div>
                  <div className="text-sm text-zinc-300">{job.title}</div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
                    {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="projects" title="Projects">
            <div className="grid gap-4 md:grid-cols-2">
              {data.projects.map((p) => (
                <div key={p.name} className="spark-card rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.stack.map((s) => <Pill key={s}>{s}</Pill>)}
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
                    {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    {p.links.map((l) => <LinkA key={l.label} href={l.href}>{l.label}</LinkA>)}
                    <span className="text-zinc-500">(Add repo links later in src/data.js)</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="skills" title="Skills">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
                <div className="font-semibold">Languages</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {data.skills.languages.map((x) => <Pill key={x}>{x}</Pill>)}
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
                <div className="font-semibold">Developer Tools</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {data.skills.tools.map((x) => <Pill key={x}>{x}</Pill>)}
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
                <div className="font-semibold">Tech / Frameworks</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {data.skills.frameworks.map((x) => <Pill key={x}>{x}</Pill>)}
                </div>
              </div>
            </div>
          </Section>

          <Section id="education" title="Education">
            <div className="space-y-4">
              {data.education.map((e) => (
                <div key={e.school} className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="text-lg font-semibold">{e.school}</div>
                    <div className="text-sm text-zinc-400">{e.dates}</div>
                  </div>
                  <div className="text-sm text-zinc-300">{e.degree}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="highlights" title="Achievements & Leadership">
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
              <ul className="list-disc space-y-2 pl-5 text-zinc-300">
                {data.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
              <div className="text-zinc-300">Want to collaborate or chat? Reach out.</div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a className="contact-btn rounded-2xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-sm font-semibold" href={emailUrl}>Email Me</a>
                <a className="contact-btn rounded-2xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-sm font-semibold" href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="contact-btn rounded-2xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-sm font-semibold" href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </Section>
        </main>

        <footer className="mt-14 border-t border-zinc-900 pt-6 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} {data.name}. Built with React + Vite + Tailwind.</div>
        </footer>
      </div>
    </div>
  );
}
