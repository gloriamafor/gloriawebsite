export default function About() {
  return (
    <section className="px-6 pt-36 pb-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

      <div className="space-y-5 text-lg text-black/80">
        <p>
          I am a Computer Science graduate from Cleveland State University, Class of 2025, 
          with a strong interest in software engineering, particularly backend and frontend
          development, as well as data science roles that align with my technical background 
          and coursework. I am also developing an ongoing interest in DevOps and cloud engineering, 
          and I am eager to deepen my experience in this area as opportunities allow.

        </p>

        <p>
          I enjoy building reliable, user-focused applications and data-driven systems, 
          and I have hands-on experience designing and implementing machine learning models, 
          developing backend services, and creating full-stack applications. Through my 
          coursework and personal projects, I have worked with Python, Java, SQL, Swift, TypeScript,
          JavaScript, HTML/CSS, Linux, and modern web technologies, and I am increasingly interested
          in how these systems are deployed, scaled, and maintained in cloud environments.
        </p>

        <p>
          Beyond technical skills, I value purpose-driven work, continuous learning, and clear communication. 
          I bring a thoughtful and disciplined approach to problem-solving, shaped by my academic 
          training, teaching experience, and collaborative project work.
        </p>
      </div>

      <div className="mt-10 bg-white rounded-2xl p-6 shadow">
        <h2 className="text-2xl font-semibold mb-4">Current Focus</h2>
        <ul className="list-disc list-inside space-y-2 text-black/80">
          <li>Pursuing full-time opportunities in software engineering, with an emphasis on backend and frontend development and data science</li>
          <li>Applying data science and machine learning techniques to real-world datasets and applications</li>
          <li>Exploring DevOps and cloud engineering concepts, including deployment workflows, containerization, and scalable systems</li>
        </ul>
      </div>
    </section>
  );
}
