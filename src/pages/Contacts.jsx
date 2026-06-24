import { useRef } from "react";
import emailjs from "@emailjs/browser";
import PageContainer from "../components/PageContainer";
import Hero from "../components/Hero";

export default function Contact() {
  const form = useRef();

  return (
    <div className="min-h-screen bg-[#05070d] text-white px-6 py-24">

      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get in Touch
        </h1>

        <p className="mt-6 text-white/60">
          Send us a message or reach out directly.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* FORM */}
          <form
            ref={form}
            onSubmit={(e) => {
              e.preventDefault();

              emailjs.sendForm(
                "service_t2aetxt",
                "template_g0iv6ro",
                form.current,
                "YOUR_PUBLIC_KEY"
              ).then(() => {
                alert("Message sent 🚀");
                form.current.reset();
              }).catch(() => {
                alert("Failed to send ❌");
              });
            }}
            className="space-y-4"
          >

            <input
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
              required
            />

            <input
              name="user_email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
              required
            />

            <button
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Send Message
            </button>

          </form>

          {/* CONTACT LINKS (like before) */}
          <div className="space-y-4">

            <a href="https://wa.me/27700000000"
              className="block p-5 rounded-xl bg-green-500/10 border border-green-400/20"
            >
              WhatsApp → Instant Chat
            </a>

            <a href="https://facebook.com"
              className="block p-5 rounded-xl bg-blue-500/10 border border-blue-400/20"
            >
              Facebook → Follow
            </a>

            <a href="https://linkedin.com"
              className="block p-5 rounded-xl bg-indigo-500/10 border border-indigo-400/20"
            >
              LinkedIn → Connect
            </a>

          </div>

        </div>
      </div>

    </div>
  );
}