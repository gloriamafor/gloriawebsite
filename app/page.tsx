import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ===== Hero Section ===== */}
      <section className="hero min-h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Profile Image */}
        <div className="profile-picture mb-6">
          <Image
            src="/mypic.png"
            alt="Gloria Mafor"
            width={160}
            height={160}
            className="profile-img rounded-full"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="hero-title">Computer Science Graduate (Class of 2025) | Software Engineering & Data Science </h1>

        {/* Subheadline */}
        <p className="hero-subtitle max-w-2xl mt-4">
          I build scalable software applications and data-driven systems using Python, machine learning, and cloud-ready technologies.

        </p>

        {/* Proof Strip */}
        <ul className="mt-8 max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <li className="bg-white/70 backdrop-blur rounded-xl px-4 py-3 shadow-sm">
            🎓 <span className="font-semibold">Computer Science Graduate</span> (Class of 2025)
          </li>
          <li className="bg-white/70 backdrop-blur rounded-xl px-4 py-3 shadow-sm">
            🏫 <span className="font-semibold">Cleveland State University</span>
          </li>
          <li className="bg-white/70 backdrop-blur rounded-xl px-4 py-3 shadow-sm">
            📊 <span className="font-semibold">Strong background</span> in Software Engineering, Data Science, and Machine Learning
          </li>
          <li className="bg-white/70 backdrop-blur rounded-xl px-4 py-3 shadow-sm">
            🚀 <span className="font-semibold">Built and deployed</span> full-stack and data-driven personal projects
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="hero-buttons mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/projects" className="btn primary-btn">
            View Projects
          </Link>
          <a href="/resume.pdf" className="btn secondary-btn" download>
            Download Resume
          </a>
          <Link href="/contact" className="btn secondary-btn">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Projects (Preview) */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
        <p className="text-lg mb-10 text-black/70">
          A preview of a few personal projects that showcase machine learning, data-driven thinking, and full-stack development.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2">Movie AI Recommendation System</h3>
            <p className="text-black/70">
              Machine learning–based recommender that personalizes movie suggestions using user behavior and content features.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2">VibeNet Social Media App</h3>
            <p className="text-black/70">
              Social media application I’m building with a focus on clean UI, profiles, and a content discovery feed.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-2">Food Recommendation Application</h3>
            <p className="text-black/70">
              Full-stack web app that generates personalized food and recipe suggestions based on user preferences.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/projects" className="btn">
            View All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
