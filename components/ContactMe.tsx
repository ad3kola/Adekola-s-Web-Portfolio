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
      className="w-full flex flex-col items-center relative pt-10 pb-6 bg-dark text-gray-100"
    >
      <h3 className="text-gray-100 tracking-[10px] font-bold text-center w-full uppercase">
        Connect with me
      </h3>
      <h3 className="text-2xl tracking-wider font-bold text-gray-100 mt-3 capitalize text-center w-full">
        Let's Get In Touch
      </h3>
      <div className="w-full mx-auto flex items-center justify-center space-x-5 mt-3">
        <a href="https://wa.me/2349124552201" target="_blank">
          <Image
            src={"/assets/whatsapp-logo.png"}
            alt="chat-img"
            width={40}
            height={40}
            className="cursor-pointer hover:scale-105 duration-100 transition 4object-cover"
          />
        </a>
        <a href="mailto:adedejiadekola19@gmail.com" target="_blank">
          <Image
            src={"/assets/gmail-logo.png"}
            alt="chat-img"
            width={40}
            height={40}
            className="cursor-pointer hover:scale-105 duration-100 transition 4object-cover"
          />
        </a>
        <a href="https://t.me/ad3kola" target="_blank">
          <Image
            src={"/assets/telegram-logo.webp"}
            alt="chat-img"
            width={40}
            height={40}
            className="cursor-pointer hover:scale-105 duration-100 transition 4object-cover"
          />
        </a>
      </div>
      <motion.form
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-[600px] space-y-3 mx-auto flex flex-col items-center justify-center mt-5 px-5"
      >
        <div className="w-full flex items-center justify-stretch space-x-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full focus:outline-2 focus:outline-dark/60 px-4 border-gray-800/50 text-sm placeholder:text-gray-300 placeholder:text-sm tracking-wide text-gray-200 rounded-lg bg-slate-200/10 h-12"
            placeholder={"Name"}
          />
        </div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          required
          className="w-full focus:outline-2 focus:outline-dark/60 px-4 border-gray-800/50 text-sm placeholder:text-gray-300 placeholder:text-sm tracking-wide text-gray-200 rounded-lg bg-slate-200/10 h-12"
          placeholder={"Email Address"}
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          required
          className="w-full focus:outline-2 focus:outline-dark/60 px-4 border-gray-800/50 text-sm placeholder:text-gray-300 placeholder:text-sm tracking-wide text-gray-200 rounded-lg bg-slate-200/10 h-12"
          placeholder={"Subject"}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 focus:outline-2 focus:outline-dark/60 border-gray-800/50 text-sm min-h-28 placeholder:text-gray-300 placeholder:text-sm tracking-wide text-gray-200 rounded-sm rounded-b-lg bg-slate-200/10 h-40"
          placeholder={"Message"}
        ></textarea>
        <button
          onClick={sendEmail}
          type="submit"
          className="bg-gray-100 text-dark/90 font-semibold ml-auto px-3 py-2 rounded-lg w-fit tracking-wide capitalize mt-2"
        >
          {loading ? "Redirecting to inbox..." : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
}

export default ContactMe;
