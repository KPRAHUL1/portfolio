import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { call, contact, leftarrow, mailbox, place } from "../../assets/icons/icon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [popupMessage, setPopupMessage] = useState(""); // To store success/fail message
  const [isPopupOpen, setIsPopupOpen] = useState(false); // To control popup visibility

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4yuo5la", // Replace with your EmailJS Service ID
        "template_lg02eq8", // Replace with your EmailJS Template ID
        formData,
        "zCpq8UF332OdHYBE5" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setPopupMessage("Message sent successfully! ✅");
        setIsPopupOpen(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setPopupMessage("Failed to send message ❌");
        setIsPopupOpen(true);
      });
  };

  return (
    <>
      <nav className="py-6 xl:px-36 border-b md:px-20 gap-3 px-5 border-gray-300 flex flex-col md:flex-row md:justify-between md:items-center">
        <button
          onClick={() => (window.location.href = "/")}
          className="flex flex-row gap-2 items-center cursor-pointer"
        >
          <img src={leftarrow} alt="" className="w-4" />
          <h1 className="font-medium text-xs">Back to home</h1>
        </button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-row gap-2 items-center"
        >
          <img src={contact} alt="" className="w-7" />
          <h1 className="font-semibold text-lg">Contact me</h1>
        </motion.div>
      </nav>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center xl:px-96 px-8 lg:px-34 py-20"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <h1>Name</h1>
            <input name="name" value={formData.name} onChange={handleChange} className="border rounded-lg w-full px-5 py-3 outline-gray-200" type="text" required />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
            <h1>Email Address</h1>
            <input name="email" value={formData.email} onChange={handleChange} type="email" className="border rounded-lg w-full px-5 py-3 outline-gray-200" required />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
            <h1>Message</h1>
            <textarea name="message" value={formData.message} onChange={handleChange} className="border rounded-lg w-full px-5 py-3 outline-gray-200" required></textarea>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
            <button type="submit" className="px-3 py-3 bg-black text-white rounded-xl cursor-pointer hover:bg-white hover:text-black hover:border-gray-300 border">
              Submit
            </button>
          </motion.div>
        </form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between gap-3 w-full my-10"
        >
          <div className="flex flex-row gap-3">
            <img src={call} className="w-7" alt="" />
            <p className="text-md hover:underline cursor-pointer">+91 7708468392</p>
          </div>
          <div className="flex flex-row gap-3">
            <img className="w-7" src={mailbox} alt="" />
            <p className="text-md hover:underline cursor-pointer">kprahul@gmail.com</p>
          </div>
          <div className="flex flex-row gap-3">
            <img className="w-7" src={place} alt="" />
            <p className="text-md hover:underline">Tirunelveli, TamilNadu, India</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <p className="text-lg font-semibold">{popupMessage}</p>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
