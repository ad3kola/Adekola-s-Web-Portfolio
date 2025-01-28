"use client";
import emailjs from "@emailjs/browser";
import {
  FormEventHandler,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { ContactsProps } from "@/utils/typings";
import { fetchContactsData } from "@/utils/fetchSanityData";
import { socialLinks } from "@/utils/data";
import Link from "next/link";

type EmailMessageProps = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [content, setContent] = useState<null | ContactsProps>(null);
  const messageDetails: EmailMessageProps = {
    fullName: name,
    email,
    subject,
    message,
  };
  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
    setLoading(false);
    setName("");
    setSubject("");
    setMessage("");
    setEmail("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContactsData();
      setContent(data[0]);
    };
    fetchData();
  }, []);

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center relative bg-zinc-200 dark:bg-dark text-gray-100 pb-10"
    >
      <div className="w-full h-16 flex items-center justify-center dark:bg-dark absolute top-0 left-0">
        <div className="w-full h-16 flex items-center justify-center dark:bg-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2880 320" /* Doubled width for a longer wave */
            className="w-full h-full"
          >
            <path
              d="M0,160 C240,200 480,120 720,160 C960,200 1200,120 1440,160 C1680,200 1920,120 2160,160 C2400,200 2640,120 2880,160"
              fill="none"
              className="stroke-black dark:stroke-gold" /* Black in light mode, gold in dark mode */
              strokeWidth="10"
            ></path>
          </svg>
        </div>
      </div>
      <h3 className="dark:text-gray-100 text-dark tracking-[10px] font-bold text-center w-full uppercase mt-24">
        Connect with me
      </h3>
      <h3 className="text-2xl tracking-widerr font-bold text-dark dark:text-gray-100 mt-3 capitalize text-center w-full">
        Let's Get In Touch
      </h3>
      <div className="w-full flex items-center justify-center gap-8 mt-5 ">
            {socialLinks.map(({ Icon, name, path }, id) => (
                <Link href={`${path}`} key={id}>
                  <div className="bg-dark/95 p-3 shadow-md rounded-xl duration-200 transition transform ease-in-out hover:scale-125 cursor-pointer border dark:border-gold">
                    <Icon className="h-6 w-6 text-gray-200 dark:text-gold" />
                  </div>
                </Link>
              ))}
          </div>
      <motion.form
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl space-y-3 mx-auto flex flex-col items-center justify-center mt-7 p-4 rounded-lg bg-slate-200/10"
      >
        <div className="w-full flex items-center justify-stretch space-x-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full focus:outline-2 focus:outline-dark/60 px-4 border-dark border-2 dark:border-gold/60 text-sm placeholder:text-dark placeholder:font-bold dark:placeholder:text-gray-300 placeholder:text-sm tracking-wider text-dark dark:text-gray-200 rounded-lg  h-12"
            placeholder={"Name"}
          />
        </div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          required
          className="w-full focus:outline-2 focus:outline-dark/60 px-4 border-dark border-2 dark:border-gold/60 text-sm placeholder:text-dark placeholder:font-bold dark:placeholder:text-gray-300 placeholder:text-sm tracking-wider text-dark dark:text-gray-200 rounded-lg  h-12"
          placeholder={"Email Address"}
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          required
          className="w-full focus:outline-2 focus:outline-dark/60 px-4 border-dark border-2 dark:border-gold/60 text-sm placeholder:text-dark placeholder:font-bold dark:placeholder:text-gray-300 placeholder:text-sm tracking-wider text-dark dark:text-gray-200 rounded-lg  h-12"
          placeholder={"Subject"}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 focus:outline-2 focus:outline-dark/60 border-dark border-2 dark:border-gold/60 text-sm min-h-28 placeholder:text-dark placeholder:font-bold dark:placeholder:text-gray-300 placeholder:text-sm tracking-wider text-dark dark:text-gray-200 rounded-sm rounded-b-lg  h-40"
          placeholder={"Message"}
        ></textarea>
        <button
          onClick={sendEmail}
          type="submit"
          className="dark:bg-gold dark:text-dark dark:font-bold bg-dark text-gray-50 font-semibold ml-auto p-3 rounded-xl rounded-tl-none w-fit tracking-wider capitalize mt-2"
        >
          {loading ? "Redirecting to inbox..." : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
}

export default ContactMe;
