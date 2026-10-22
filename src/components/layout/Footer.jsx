import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiHeart,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "MERN Stack Development",
    "React Development",
    "Apps Development",
    "UI/UX Design",
    "Graphics Design",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub />,
      href: "https://github.com/Mohammadarman1357",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/mohammadarman1",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/armanhabib.17",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      href: "https://www.youtube.com/@armanhabib1357",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="
        relative
        overflow-hidden
        border-t border-gray-200
        bg-white
        text-gray-900
        dark:border-white/10
        dark:bg-[#050505]
        dark:text-white
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[300px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-purple-500/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -left-32
            h-72
            w-72
            rounded-full
            bg-blue-500/5
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -right-32
            top-1/3
            h-72
            w-72
            rounded-full
            bg-pink-500/5
            blur-[100px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            dark:opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =========================================
            CTA
        ========================================== */}

        <section className="py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border border-gray-200
              bg-gray-50
              p-7
              sm:p-10
              lg:p-14
              dark:border-white/10
              dark:bg-white/[0.035]
            "
          >
            {/* Decorative circles */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-60
                w-60
                rounded-full
                border
                border-purple-500/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-36
                w-36
                rounded-full
                border
                border-purple-500/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-24
                h-64
                w-64
                rounded-full
                bg-purple-500/5
                blur-3xl
              "
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                gap-8
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              {/* Text */}
              <div className="max-w-2xl">
                <div
                  className="
                    mb-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-purple-500/20
                    bg-purple-500/5
                    px-4
                    py-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-purple-600
                    dark:text-purple-400
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75" />
                    <span className="relative h-2 w-2 rounded-full bg-purple-500" />
                  </span>

                  Let's work together
                </div>

                <h2
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  Have an idea?
                  <br />

                  <span
                    className="
                      bg-gradient-to-r
                      from-purple-500
                      via-pink-500
                      to-blue-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Let's build it.
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-sm
                    leading-7
                    text-gray-600
                    sm:text-base
                    dark:text-gray-400
                  "
                >
                  Have a project in mind? Let's create something modern,
                  useful and memorable together.
                </p>
              </div>

              {/* Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  bg-[#061ebe]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:shadow-purple-500/20
                  dark:bg-white
                  dark:text-black
                "
              >
                Start a Project

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                    dark:bg-black/10
                  "
                >
                  <FiArrowUpRight size={17} />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* =========================================
            FOOTER CONTENT
        ========================================== */}

        <div
          className="
            grid
            gap-12
            border-b
            border-gray-200
            pb-14
            sm:grid-cols-2
            lg:grid-cols-12
            dark:border-white/10
          "
        >
          {/* =====================================
              BRAND
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-4"
          >
            {/* Logo */}
            <a
              href="home"
              className="group inline-flex items-center gap-3"
            >
              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-br
                  from-purple-500
                  via-pink-500
                  to-blue-500
                  shadow-lg
                  shadow-purple-500/20
                "
              >
                <img src="/profile.png" alt="" />

                <div
                  className="
                    absolute
                    inset-0
                    translate-y-full
                    bg-white/20
                    transition-transform
                    duration-500
                    group-hover:translate-y-0
                  "
                />
              </div>

              <div className="text-left">
                <h3 className="text-lg font-bold">
                  Mohammad Arman
                </h3>

                <p className="text-xs text-gray-500">
                  Full Stack Developer
                </p>
              </div>
            </a>

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-gray-600
                dark:text-gray-400
                text-center
                md:text-left
              "
            >
              Full Stack Web Developer passionate about building modern,
              responsive and scalable digital experiences with clean code
              and thoughtful design.
            </p>

            {/* Contact info */}
            <div className="mt-7 space-y-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=armanhabibweb@gmail.com"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  md:justify-start
                  gap-3
                  text-sm
                  text-gray-600
                  transition-colors
                  hover:text-purple-500
                  dark:text-gray-400
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-50
                    transition-all
                    group-hover:border-purple-500/30
                    group-hover:bg-purple-500/10
                    dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >
                  <FiMail size={15} />
                </span>

                armanhabibweb@gmail.com
              </a>

              <div
                className="
                  flex
                  items-center
                  justify-center
                  md:justify-start
                  gap-3
                  text-sm
                  text-gray-600
                  dark:text-gray-400
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-50
                    dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >
                  <FiMapPin size={15} />
                </span>

                Chattogram, Bangladesh
              </div>

              <a
                href="tel:+8801608283372"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  md:justify-start
                  gap-3
                  text-sm
                  text-gray-600
                  transition-colors
                  hover:text-purple-500
                  dark:text-gray-400
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-50
                    transition-all
                    group-hover:border-purple-500/30
                    group-hover:bg-purple-500/10
                    dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >
                  <FiPhone size={15} />
                </span>

                +880 1608-283372
              </a>
            </div>
          </motion.div>

          {/* =====================================
              NAVIGATION
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h4>

            <ul className="space-y-3.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-gray-500
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-purple-500
                      dark:text-gray-400
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-purple-500
                        transition-all
                        duration-300
                        group-hover:w-3
                      "
                    />

                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* =====================================
              SERVICES
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:col-span-2 lg:col-span-3"
          >
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider">
              Services
            </h4>

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="
                    group
                    flex
                    justify-center
                    md:justify-start
                    items-center
                    gap-2
                    text-sm
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-gray-400
                      transition-all
                      duration-300
                      group-hover:w-3
                      group-hover:bg-purple-500
                    "
                  />

                  <span className="transition-colors group-hover:text-purple-500">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* =====================================
              SOCIAL
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider">
              Connect
            </h4>

            <p
              className="
                mb-6
                text-sm
                leading-6
                text-gray-500
                dark:text-gray-400
              "
            >
              Follow my work, projects and learning journey across the web.
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 mt-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    group
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-500
                    transition-all
                    duration-300
                    hover:border-purple-500/30
                    hover:bg-purple-500/10
                    hover:text-purple-500
                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-gray-400
                  "
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <div
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-green-500/20
                bg-green-500/5
                px-3.5
                py-2
                text-xs
                text-green-600
                dark:text-green-400
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-green-500" />
              </span>

              Available for new projects
            </div>
          </motion.div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-gray-500">
            © {year} Mohammad Arman. All rights reserved.
          </p>

       

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Back to top"
            className="
              group
              flex
              h-10
              w-10
              items-center
              justify-center
              self-end
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              transition-all
              duration-300
              hover:border-purple-500/30
              hover:bg-purple-500/10
              hover:text-purple-500
              sm:self-auto
              dark:border-white/10
              dark:bg-white/[0.03]
            "
          >
            <FiArrowUp
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;