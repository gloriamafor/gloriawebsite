export default function Skills() {
  return (
    <section className="px-6 pt-36 pb-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Skills</h1>
      <p className="text-lg mb-10 text-center text-black/70">Technical Skills I Use to Build Real Applications</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">Programming</h2>
          <ul className="list-disc list-inside space-y-2 text-black/80">
            <li>Python</li>
            <li>Java</li>
            <li>C / C++</li>
            <li>SQL</li>
            <li>Javascript</li>
            <li>Swift</li>
            <li>Typescript</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">Data Science &amp; Machine Learning</h2>
          <ul className="list-disc list-inside space-y-2 text-black/80">
            <li>Pandas, NumPy</li>
            <li>Scikit-learn</li>
            <li>Exploratory Data Analysis (EDA)</li>
            <li>Data Cleaning & Preprocessing</li>
            <li>Feature Engineering</li>
            <li>Supervised Learning (Classification & Regression)</li>
            <li>Unsupervised Learning (Clustering)</li>
            <li>Artificial Neural Networks</li>
            <li>Decision Trees</li>
            <li>Model Evaluation</li>
            <li>Cross-Validation</li>
            <li>Handling Imbalanced Data</li>
          </ul>
        </div>

      
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">Database & Data Storage</h2>
          <ul className="list-disc list-inside space-y-2 text-black/80">
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">Data Formats & Parsing</h2>
          <ul className="list-disc list-inside space-y-2 text-black/80">
            <li>JSON</li>
            <li>XML (DOM, XPATH) </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
           <ul className="list-disc list-inside space-y-2 text-black/80">
            <li>HTML/CSS</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Flask</li>
            <li>FastAPI</li>
            <li>Streamlit</li>
          </ul>
        </div>


        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">Cloud, DevOps, & Tools </h2>
          <ul className="list-disc list-inside space-y-2 text-black/80">
            <li>Linux</li>
            <li>Bash</li>
            <li>Git/Github</li>
            <li>Docker</li>
            <li>AWS</li>
          </ul>
        </div>

          <p className="mt-6 text-black/70">
            All listed skills are demonstrated through my coursework and personal projects.
          </p>
        </div>

    </section>
  );
}

