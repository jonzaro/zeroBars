import { FaCrosshairs } from "react-icons/fa";
import { motion } from "framer-motion";
import Sling2 from "../assets/Sling2.jpg";
import Backpack from "../assets/Backpack.jpg";

const timelineData = [
  {
    date: "00293092 TRANSMISSION –",
    time: "03:49 PM",
    title: "COMMENT #03",
    id: "sling-bag",
    img: Sling2,

    content:
      "Our urban sling blends modular storage, stealth access, and a low-vis profile built for the modern grid.",
  },
  {
    date: "LOGSTAT // 020930Z // RESTRICTED",
    time: "09:23 AM",
    title: "SUMMERY #02",
    id: "pack",
    img: Backpack,
    content:
      "Our largest bag is here — built for long hauls, big days, and everything in between. It’s available now, ready to move when you are.",
  },
  {
    date: "REDCON 1 // 300500Z MAR 25 –",
    time: "08:30 PM",
    title: "COMMENT #04",
    content:
      "Welcome to Zero Bars Outpost — where the mission starts when the signal dies. We build carry systems for those who move with intent: urban operators, off-grid explorers, and anyone who lives prepared. No flash, no compromise — just rugged gear built for real-world scenarios.",
  },
];

export default function Timeline() {
  return (
    <div className="flex justify-center py-3 px-4 rounded-xl w-full md:w-auto mx-auto max-w-4xl bg-gray-200/90 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-white rounded-full"></div>

      <div className="flex flex-col items-center space-y-10 w-2/3 relative max-w-full">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="w-full rounded-md md:w-1/3 sm:text-xl text-center md:text-right pr-0 md:pr-4 mb-2 md:mb-0 p-3">
              <p className="text-gray-500 text-xs sm:text-lg font-bold transform -translate-x-1/3">
                {item.date}
              </p>
              <p className="text-gray-400 text-xs sm:text-md transform -translate-x-1/3">
                {item.time}
              </p>
            </div>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center z-10 my-2 md:my-0">
              <FaCrosshairs className="text-black text-md" />
            </div>
            <motion.div
              className="w-full md:w-2/3 bg-white p-3 sm:p-4 rounded-xl shadow-lg md:ml-4 mt-2 md:mt-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <p className="font-bold font-custom2 text-xl lg:text-lg">
                {item.title}
              </p>
              <p className="text-gray-700 font-semibold font-custom3 text-xl lg:text-sm">
                {item.content}
              </p>
              {item.img && (
                <div className="mt-2">
                  <a href={`/products/${item.id}`} className="block">
                    <img
                      src={item.img}
                      alt={`${item.title} image`}
                      className="rounded-lg w-full opacity-100 hover:opacity-90 transition-opacity"
                      style={{ opacity: 1 }}
                    />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
