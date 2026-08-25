import { useEffect, useMemo, useState } from "react";
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

function IconBtn({ href, title, children, onClick }) {
  const common =
    "grid h-10 w-10 place-items-center rounded-xl border border-zinc-800 bg-zinc-950/60 transition hover:-translate-y-0.5 hover:border-amber-400/50 hover:shadow-[0_0_24px_rgba(245,158,11,0.16)]";
  if (onClick) {
    return (
      <button type="button" onClick={onClick} title={title} className={common}>
        {children}
      </button>
    );
  }
  return (
    <a
      href={href}
      title={title}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={common}
    >
      {children}
    </a>
  );
}

function Cta({ href, label, sub, icon, onClick }) {
  const cls =
    "cta-btn group inline-flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-left";
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cls}>
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
      </button>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={cls}
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

/** GH Pages-safe: works with or without leading "/" in your data.js paths */
function withBasePath(p) {
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(p || "").replace(/^\/+/, "");
  return `${base}${clean}`;
}

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
  // ---------- normalized links ----------
  const linkedinUrl = useMemo(() => getLinkedInUrl(data.linkedin), []);
  const githubUrl = useMemo(
    () => (data.github ? `https://github.com/${String(data.github).trim()}` : ""),
    []
  );

  // assets (pdf + image) should be served from GH pages base
  const photoUrl = useMemo(() => withBasePath(data.photo), []);
  const emailText = useMemo(() => String(data.email || "").trim(), []);
  const emailUrl = useMemo(() => (emailText ? `mailto:${emailText}` : ""), [emailText]);

  // ---------- role text animation ----------
  // (your CSS does the role-scroll; this is just the markup)

  // ---------- Email UX ----------
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [toast, setToast] = useState(null); // {title, desc}

  function showToast(title, desc) {
    setToast({ title, desc });
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), 2200);
  }

  async function copyEmail() {
    if (!emailText) return;

    try {
      await navigator.clipboard.writeText(emailText);
      showToast("Copied!", emailText);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = emailText;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast("Copied!", emailText);
    }
  }

  function openMailto() {
    if (!emailUrl) return;
    window.location.href = emailUrl;
    showToast("Opening mail app…", "If nothing opens, use Gmail or Copy.");
  }

  function openGmailCompose() {
    if (!emailText) return;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      emailText
    )}`;
    window.open(gmail, "_blank", "noreferrer");
    showToast("Opening Gmail…", emailText);
  }

  // close modal on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setEmailModalOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-5 py-10">
        {/* ✨ Premium Top Header */}
        <header className="sticky top-0 z-20 -mx-5 mb-10 px-5 pt-3">
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/70 backdrop-blur">
            <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Left brand */}
              <div className="rounded-2xl border border-zinc-900 bg-zinc-950/60 px-4 py-3">
                <div className="text-xs text-zinc-400">{data.location}</div>
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(245,158,11,0.55)]" />
                  <div className="text-base font-semibold tracking-tight">
                    {data.name}
                  </div>
                </div>
              </div>

              {/* Center nav pill */}
              <nav className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-zinc-900 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-300">
                <a className="rounded-full px-3 py-1 hover:bg-zinc-900/60 hover:text-white" href="#about">About</a>
                <a className="rounded-full px-3 py-1 hover:bg-zinc-900/60 hover:text-white" href="#experience">Experience</a>
                <a className="rounded-full px-3 py-1 hover:bg-zinc-900/60 hover:text-white" href="#projects">Projects</a>
                <a className="rounded-full px-3 py-1 hover:bg-zinc-900/60 hover:text-white" href="#skills">Skills</a>
                <a className="rounded-full px-3 py-1 hover:bg-zinc-900/60 hover:text-white" href="#education">Education</a>
                <a className="rounded-full px-3 py-1 hover:bg-zinc-900/60 hover:text-white" href="#highlights">Achievements</a>
                <a className="rounded-full px-3 py-1 hover:bg-zinc-900/60 hover:text-white" href="#contact">Contact</a>
              </nav>

              {/* Right quick actions */}
              <div className="flex items-center justify-start gap-2 sm:justify-end">
                {/* Email opens modal (creative + reliable) */}
                <IconBtn
                  title="Email"
                  onClick={() => setEmailModalOpen(true)}
                >
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
        <div className="mb-12 overflow-visible rounded-2xl border border-zinc-900 bg-gradient-to-b from-zinc-900/40 to-zinc-950 p-6 sm:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center overflow-visible">
            <div className="avatar-pop">
              <img
                src={photoUrl}
                alt={data.name}
                className="h-28 w-28 rounded-full object-cover border border-zinc-800"
              />
            </div>

            <div className="min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
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

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {/* Email CTA opens modal (same experience as header icon) */}
            <Cta
              onClick={() => setEmailModalOpen(true)}
              label="Email"
              sub="Let’s talk"
              icon={<span>✉️</span>}
            />

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
                <button
                  type="button"
                  className="contact-btn rounded-2xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-sm font-semibold"
                  onClick={() => setEmailModalOpen(true)}
                >
                  Email Me
                </button>
                <a className="contact-btn rounded-2xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-sm font-semibold" href={linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="contact-btn rounded-2xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-sm font-semibold" href={githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </Section>
        </main>

        <footer className="mt-14 border-t border-zinc-900 pt-6 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} {data.name}. Built with React + Vite + Tailwind.</div>
        </footer>
      </div>

      {/* ---------------------------
          Email Modal (creative + reliable)
      --------------------------- */}
      {emailModalOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={() => setEmailModalOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow-[0_0_40px_rgba(0,0,0,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">Email Priyanshi</div>
                <div className="mt-1 text-sm text-zinc-400">
                  Pick your favorite way. Works even if mailto is not configured.
                </div>
              </div>
              <button
                type="button"
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-3 py-2 text-sm text-zinc-200 hover:border-zinc-600"
                onClick={() => setEmailModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-900 bg-zinc-950/60 p-4">
              <div className="text-xs text-zinc-500">Email</div>
              <div className="mt-1 break-all text-sm text-zinc-200">{emailText}</div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <button
                type="button"
                className="contact-btn rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm font-semibold"
                onClick={() => {
                  openGmailCompose();
                  setEmailModalOpen(false);
                }}
              >
                Open Gmail
              </button>

              <button
                type="button"
                className="contact-btn rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm font-semibold"
                onClick={() => {
                  openMailto();
                  // keep modal open so user can choose another option if nothing happens
                }}
              >
                Open Mail App
              </button>

              <button
                type="button"
                className="contact-btn rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm font-semibold"
                onClick={copyEmail}
              >
                Copy Email
              </button>
            </div>

            <div className="mt-3 text-xs text-zinc-500">
              Tip: If “Open Mail App” does nothing, choose “Open Gmail” or “Copy Email”.
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------
          Toast
      --------------------------- */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 w-[min(360px,calc(100%-40px))]">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-4 shadow-[0_0_30px_rgba(245,158,11,0.12)] backdrop-blur">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.55)]" />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-zinc-100">{toast.title}</div>
                <div className="mt-0.5 truncate text-xs text-zinc-400">{toast.desc}</div>
              </div>
              <button
                type="button"
                className="ml-auto rounded-lg border border-zinc-800 bg-zinc-900/40 px-2 py-1 text-xs text-zinc-200 hover:border-zinc-600"
                onClick={() => setToast(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
