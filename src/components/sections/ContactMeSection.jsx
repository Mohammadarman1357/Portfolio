import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const ContactMeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError("");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,

        // Your receiving email
        to_email: "armanhabibweb@gmail.com",
      };

      await emailjs.send(
        "service_id0dikk",
        "template_h7j74ue",
        templateParams,
        {
          publicKey: "ALlLmKO30H5EN37qU",
        }
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        err?.text ||
          "Something went wrong while sending your message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f8f7ff]
        py-10
        md:py-20
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_10%_15%,rgba(99,102,241,0.12),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(139,92,246,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.08),transparent_35%)]
          "
        />

        {/* Left glow */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-180px]
            top-[-160px]
            h-[430px]
            w-[430px]
            rounded-full
            bg-violet-300/20
            blur-[120px]
          "
        />

        {/* Right glow */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px]
            top-[20%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-indigo-300/20
            blur-[125px]
          "
        />

        {/* Bottom glow */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-250px]
            left-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-300/15
            blur-[130px]
          "
        />

        {/* Dot pattern */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.25]
            [background-image:radial-gradient(#8b7fc7_0.8px,transparent_0.8px)]
            [background-size:30px_30px]
            [mask-image:radial-gradient(ellipse_at_center,black_0%,black_55%,transparent_100%)]
          "
        />

        {/* Top line */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[75%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-violet-300/60
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mb-10 flex flex-col text-center md:mb-14">

            <span
              className="
                text-[20px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-violet-600
              "
            >
              Get In Touch
            </span>

            <span
              className="
                my-4
                text-4xl
                font-bold
                tracking-tight
                text-black
                md:text-5xl
              "
            >
              Let's Work Together
            </span>

            <span
              className="
                text-[14px]
                text-zinc-700
                md:text-[16px]
              "
            >
              Have a project in mind, an idea you'd like to discuss, or
              simply want to say hello? <br />
              Feel free to reach out. I'm always open to interesting
              opportunities and collaborations.
            </span>
          </div>
        </motion.div>

        {/* =======================================================
            CONTACT GRID
        ======================================================= */}

        <div
          className="
            mx-auto
            grid
            max-w-[1150px]
            grid-cols-1
            gap-7
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-8
          "
        >

          {/* =====================================================
              LEFT CONTACT INFO
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-violet-100
              bg-white/80
              p-6
              shadow-[0_20px_70px_rgba(76,29,149,0.07)]
              backdrop-blur-xl
              sm:p-8
              lg:p-9
            "
          >

            {/* Decorative gradient */}
            <div
              className="
                pointer-events-none
                absolute
                right-[-100px]
                top-[-100px]
                h-[250px]
                w-[250px]
                rounded-full
                bg-violet-200/30
                blur-[90px]
              "
            />

            <div className="relative z-10">

              {/* Small icon */}
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-violet-100
                  bg-gradient-to-br
                  from-violet-50
                  via-indigo-50
                  to-blue-50
                  text-violet-600
                  shadow-sm
                "
              >
                <FiMail className="text-2xl" />
              </div>

              <h3
                className="
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-slate-900
                "
              >
                Let's Talk
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  text-slate-500
                "
              >
                Whether you have a question, a project idea, or just
                want to connect, I'll be happy to hear from you.
              </p>

              {/* Contact Items */}

              <div className="mt-5 space-y-4">

                {/* Email */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=armanhabibweb@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-100
                    bg-slate-50/70
                    p-4
                    transition-all
                    duration-300
                    hover:border-violet-200
                    hover:bg-violet-50/60
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-violet-100
                      text-violet-600
                    "
                  >
                    <FiMail />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm font-semibold text-slate-700">
                      armanhabibweb@gmail.com
                    </p>
                  </div>

                  <FiArrowUpRight
                    className="
                      text-slate-300
                      transition-all
                      duration-300
                      group-hover:text-violet-500
                    "
                  />
                </motion.a>

                {/* Phone */}
                <motion.a
                  whileHover={{ x: 5 }}
                  href="tel:+8801608283372"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-100
                    bg-slate-50/70
                    p-4
                    transition-all
                    duration-300
                    hover:border-indigo-200
                    hover:bg-indigo-50/60
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-indigo-100
                      text-indigo-600
                    "
                  >
                    <FiPhone />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-slate-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      +8801608-283372
                    </p>
                  </div>

                  <FiArrowUpRight
                    className="
                      text-slate-300
                      transition-all
                      duration-300
                      group-hover:text-indigo-500
                    "
                  />
                </motion.a>

                {/* Location */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-100
                    bg-slate-50/70
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-100
                      text-blue-600
                    "
                  >
                    <FiMapPin />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-violet-100 via-indigo-100 to-transparent" />

              {/* Social */}
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  Connect With Me
                </p>

                <div className="mt-3 flex justify-center gap-3">

                  {/* WhatsApp */}
                  <motion.a
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/8801875903709"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      text-slate-600
                      shadow-sm
                      transition-all
                      hover:border-green-200
                      hover:bg-green-50
                      hover:text-green-600
                    "
                  >
                    <FaWhatsapp />
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/mohammadarman1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      text-slate-600
                      shadow-sm
                      transition-all
                      hover:border-indigo-200
                      hover:bg-indigo-50
                      hover:text-indigo-600
                    "
                  >
                    <FaLinkedinIn />
                  </motion.a>

                  {/* Facebook */}
                  <motion.a
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.facebook.com/armanhabib.17"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      text-slate-600
                      shadow-sm
                      transition-all
                      hover:border-blue-200
                      hover:bg-blue-50
                      hover:text-blue-600
                    "
                  >
                    <FaFacebookF />
                  </motion.a>

                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              CONTACT FORM
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-violet-100
              bg-white
              p-6
              shadow-[0_20px_70px_rgba(76,29,149,0.08)]
              sm:p-8
              lg:p-9
            "
          >

            {/* Top gradient */}
            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-1
                bg-gradient-to-r
                from-violet-500
                via-indigo-500
                to-blue-500
              "
            />

            <div className="mb-7">
              <h3
                className="
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-slate-900
                "
              >
                Send Me a Message
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Fill out the form below and I'll get back to you as
                soon as possible.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="
                  flex
                  min-h-[390px]
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-violet-100
                    to-indigo-100
                    text-violet-600
                  "
                >
                  <FiCheckCircle className="text-4xl" />
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                  Message Sent!
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  Thank you for reaching out. I'll get back to you
                  shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="
                        mb-2
                        block
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-slate-600
                        text-left
                      "
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50/60
                        px-4
                        text-sm
                        text-slate-800
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-400
                        focus:border-violet-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-violet-100
                      "
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="
                        mb-2
                        block
                        text-xs
                        text-left
                        font-bold
                        uppercase
                        tracking-wider
                        text-slate-600
                      "
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50/60
                        px-4
                        text-sm
                        text-slate-800
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-slate-400
                        focus:border-indigo-400
                        focus:bg-white
                        focus:ring-4
                        focus:ring-indigo-100
                      "
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="
                      mb-2
                      block
                      text-xs
                      text-left
                      font-bold
                      uppercase
                      tracking-wider
                      text-slate-600
                    "
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Let's work together"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50/60
                      px-4
                      text-sm
                      text-slate-800
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-violet-400
                      focus:bg-white
                      focus:ring-4
                      focus:ring-violet-100
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-xs
                      text-left
                      font-bold
                      uppercase
                      tracking-wider
                      text-slate-600
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about your project..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50/60
                      p-4
                      text-sm
                      leading-6
                      text-slate-800
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      focus:border-violet-400
                      focus:bg-white
                      focus:ring-4
                      focus:ring-violet-100
                    "
                  />
                </div>

                {/* Error */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      rounded-xl
                      border
                      border-red-100
                      bg-red-50
                      px-4
                      py-3
                      text-center
                      text-sm
                      font-medium
                      text-red-600
                    "
                  >
                    {error}
                  </motion.p>
                )}

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: sending ? 1 : 1.015 }}
                  whileTap={{ scale: sending ? 1 : 0.97 }}
                  type="submit"
                  disabled={sending}
                  className="
                    group
                    relative
                    flex
                    h-13
                    w-full
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    bg-gradient-to-r
                    from-[#4c1d95]
                    via-[#6d28d9]
                    to-[#4338ca]
                    px-6
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_30px_rgba(109,40,217,0.20)]
                    transition-all
                    duration-300
                    hover:shadow-[0_14px_35px_rgba(109,40,217,0.30)]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  {/* Hover shine */}
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />

                  <span className="relative z-10">
                    {sending ? "Sending..." : "Send Message"}
                  </span>

                  <FiSend
                    className="
                      relative
                      z-10
                      text-lg
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-0.5
                    "
                  />
                </motion.button>

              </form>
            )}
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 text-center"
        >
          <p className="text-xs font-medium text-slate-400 sm:text-sm">
            Usually respond within{" "}
            <span className="font-semibold text-violet-500">
              24 hours
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactMeSection;