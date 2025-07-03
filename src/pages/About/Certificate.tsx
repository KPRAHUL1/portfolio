"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// Importing all certificates dynamically
import * as certificates from "../../assets/certificates/certificate";

// Convert imported certificates to an array
const certificateArray = Object.values(certificates);

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <>
      {/* Certificates Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h1 className="text-xl font-bold mb-3">Certificates:</h1>

        {/* Marquee Effect */}
        <Marquee
          pauseOnHover
          speed={50}
          
          // White fade effect
          className=" p-2  overflow-hidden"
        >
          {certificateArray.map((cert, index) => (
            <motion.div
              key={index}
              className="w-48 h-32 mx-4 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>

      {/* Modal for Full Certificate View */}
      {selectedCert && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-60 z-50"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-5 rounded-lg shadow-lg max-w-2xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full rounded-lg z-50"
            />
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setSelectedCert(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Certificates;
