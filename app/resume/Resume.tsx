export default function Resume() {
  return (
    <section className="px-6 pt-36 pb-24 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Resume</h1>

      <div className="bg-white rounded-2xl p-6 shadow max-w-2xl mx-auto">
        <p className="text-lg text-black/80 mb-6">📄 Download My Resume (PDF)</p>

        <a href="/resume.pdf" className="btn" download>
          Download Resume
        </a>

        <p className="mt-6 text-black/70">
          This resume highlights my technical skills, personal projects, academic background, and readiness for full-time roles.
        </p>
      </div>
    </section>
  );
}
