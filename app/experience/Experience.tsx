export default function Experience() {
  return (
    <section className="px-6 pt-36 pb-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Experience</h1>
      <p className="text-lg mb-10 text-center text-black/70">Experience &amp; Academic Work</p>

      <div className="space-y-8">
        <article className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold">Data Engineering Intern (Global Tech Experience)</h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-black/80">
            <li>Analyzed, visualized, and reported data findings using Python and Jupyter Notebook to uncover trends and insights</li>
            <li>Conducted exploratory data analysis (EDA) and summary statistics to analyze user behavior and motivation across multiple industries</li>
            <li>Created clear and impactful data visualizations using Tableau to communicate analytical results to stakeholders</li>
            <li>Collaborated with a globally distributed team to complete data analysis tasks and deliver project outcomes</li>
          </ul>
        </article>


       <article className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold">Engineering Peer Teacher (Cleveland State University)</h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-black/80">
            <li>Supported undergraduate engineering students in introductory computing courses by explaining core programming concepts and problem-solving strategies</li>
            <li>Assisted students with Python-based assignments, debugging, and understanding foundational computer science principles</li>
            <li>Reinforced topics such as variables, control flow, functions, and basic data structures through one-on-one and group instruction</li>
          </ul>
        </article>


        <article className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold">Academic & Personal Projects</h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-black/80">
            <li>Designed and implemented machine learning models as part of data science and artificial intelligence coursework, applying techniques such as decision trees, neural networks, and model evaluation</li>
            <li>Worked with relational and NoSQL databases (SQL, MongoDB) to store, query, and analyze structured and semi-structured data</li>
            <li>Developed backend applications using Python and Java to handle data processing, API integration, and server-side logic</li>
            <li>Developed web applications using HTML, CSS, JavaScript, and modern frameworks to create responsive user interfaces and dynamic content</li>
            <li>Applied version control with Git and collaborated on team-based projects using agile-style workflows, documentation, and presentations</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

