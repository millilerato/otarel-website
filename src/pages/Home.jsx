 import emailjs from "@emailjs/browser";
 import { useRef } from "react";
 import BackgroundLines from "../components/BackgroundLines";
 import { motion } from "framer-motion";
 import Logo from "../components/Logo";
 import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import Hero from "../components/Hero";

export default function Home() {
      const form = useRef(); 

  return (
    <div>
       <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full bottom-[-200px] right-[-200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="text-center max-w-4xl z-10 px-2">
          

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
            Build. Automate. Scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-white/60 text-lg"
          >
            Otarel Solutions builds modern web systems, automation tools, and business platforms that help companies grow faster.
          </motion.p>

         <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5 }}
  className="mt-8 flex justify-center"
>
  <Link
    to="/about"
    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
               hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/20"
  >
    Get Started
  </Link>
</motion.div>

        </div>
      </section>


      {/* ABOUT */}
<section className="py-32 px-6 border-t border-white/10">
  <div className="max-w-5xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
      Why Otarel Solutions?
    </h2>

    {/* Subtitle */}
    <p className="mt-8 text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
      We don’t just build websites — we design and engineer intelligent systems
      that automate operations, improve efficiency, and help businesses scale
      faster with modern technology.
    </p>

    {/* Cards Section */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {[
        "Clean Architecture",
        "Automation Focused",
        "Scalable Systems"
      ].map((item) => (
        <div
          key={item}
          className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                     hover:bg-white/10 hover:border-white/20 hover:-translate-y-2
                     transition-all duration-300 shadow-lg shadow-black/20"
        >
          <h4 className="font-semibold text-lg">{item}</h4>

          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Built for performance, scalability, and real-world business use.
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
   {/* CONTACT SECTION */}
<div className="mt-14 flex justify-center items-center">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="w-full max-w-xl p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
  >

    {/* HEADER */}
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Get in Touch
      </h2>

      <p className="text-white/60 mt-2 text-sm md:text-base">
        Have a project in mind? Send a message or chat with our assistant for instant help.
      </p>
    </div>

    {/* FORM */}
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_t2aetxt",
            "template_g0iv6ro",
            form.current,
            "aMjvNoXzQihrZBoI6"
          )
          .then(
            () => {
              alert("Message sent successfully 🚀");
              form.current.reset();
            },
            (error) => {
              alert("Failed to send message ❌");
              console.log(error);
            }
          );
      }}
      className="space-y-4"
    >

      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500"
        required
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message..."
        rows="5"
        className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500"
        required
      />

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
                   hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/20"
      >
        Send Message
      </button>

    </form>

  </motion.div>
</div>

    </div>
  );
}