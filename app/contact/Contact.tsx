import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="px-6 pt-36 pb-24 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Let’s Connect</h1>
      <p className="text-lg text-black/80 mb-10">I am actively seeking full-time roles in software engineering and data science.</p>

      <ContactForm />

       <p className="text-lg text-black/80 mb-10">Contact me using my information below: </p>
      <div className="mt-10 bg-white rounded-2xl p-6 shadow text-left max-w-2xl mx-auto">
        <ul className="space-y-4 text-lg">
          <li>
            ✉️ <span className="font-semibold">Email:</span> [glorianzoh@gmail.com]
          </li>
          <li>
            💼 <span className="font-semibold">LinkedIn:</span> [https://www.linkedin.com/in/gmafor/]
          </li>
          <li>
            🧠 <span className="font-semibold">GitHub:</span> [https://github.com/gloriamafor]
          </li>
        </ul>
      </div>
    </section>
  );
}
