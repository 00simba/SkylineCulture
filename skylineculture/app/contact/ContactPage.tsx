"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mphqx7",
        "template_nquyi7w",
        formRef.current!,
        "tMgSATKzaRQ4LzWTM"
      )
      .then(
        () => {
          setSubmitted(true);

          // Reset fields
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => console.error(error)
      );
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      {/* Breadcrumbs */}
      <div className="text-sm text-black mb-5">
        <Link href="/" className="text-black">Home</Link> /{" "}
        <span className="text-black">Contact</span>
      </div>

      <h1 className="text-3xl font-bold mb-4 text-black">Contact Us</h1>

      <p className="text-gray-700 mb-8">
        Please fill out the form below in order to get in touch about any
        inquiries, or email{" "}
        <a href="mailto:info@skylineculture.com" className="text-red-600 underline">
          info@skylineculture.com
        </a>
        . You can expect to receive a response within 24 hours.
      </p>

      {submitted ? (
        <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-md">
          Your message has been sent! We’ll get back to you within 24 hours.
        </div>
      ) : (
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 bg-white p-6 rounded-lg shadow"
        >
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-black">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              required
              placeholder="Your Name"
              className="border border-gray-300 rounded-md px-4 py-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1 text-black">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="you@example.com"
              className="border border-gray-300 rounded-md px-4 py-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1 text-black">Subject</label>
            <input
              type="text"
              name="subject"
              value={subject}
              required
              placeholder="What is this regarding?"
              className="border border-gray-300 rounded-md px-4 py-2"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1 text-black">Message</label>
            <textarea
              name="message"
              value={message}
              required
              rows={5}
              placeholder="Write your message..."
              className="border border-gray-300 rounded-md px-4 py-2 resize-none"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={!(name && email && subject && message)}
            className={`w-full py-3 rounded-md text-lg font-semibold transition ${
              name && email && subject && message
                ? "bg-red-600 hover:bg-red-500 text-white"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
