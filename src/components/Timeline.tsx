import { FaCrosshairs } from "react-icons/fa";
import { motion } from "framer-motion";

const timelineData = [
  {
    date: "00293092 TRANSMISSION –",
    time: "03:49 PM",
    title: "COMMENT #03",
    img: "src/assets/Sling2.jpg",

    content:
      " Your everyday grind demands gear that keeps up. Our tactical bags are built for action—tough, versatile, and ready for                     anything life throws your way. Pack it, strap it, own        it—because staying ready isn't a choice, it's a mindset.",
  },
  {
    date: "LOGSTAT // 020930Z // RESTRICTED",
    time: "09:23 AM",
    title: "SUMMERY #02",
    img: "src/assets/Backpack.jpg",
    content:
      "The best animation, the best tutorials you would ever see here only. You can learn how to animate and how to use SVG. Even else you can add your own animations.",
  },
  {
    date: "REDCON 1 // 300500Z MAR 25 –",
    time: "08:30 PM",
    title: "COMMENT #04",
    content:
      "The best animation, the best tutorials you would ever see. What about canvas?? Do you like it?",
  },
];

export default function Timeline() {
  return (
    <div className="flex justify-center py-3 px-4 rounded-3xl w-auto mx-auto max-w-4x opacity-90 bg-gray-200 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-white rounded-full"></div>

      <div className="flex flex-col items-center opacity-100 space-y-10 w-2/3 relative max-w-full">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="w-full rounded-md md:w-1/3 text-center md:text-right pr-0 md:pr-4 mb-2 md:mb-0 p-3">
              <p className="text-gray-500 text-xs sm:text-xs font-bold transform -translate-x-1/3">
                {item.date}
              </p>
              <p className="text-gray-400 text-xs sm:text-xs transform -translate-x-1/3">
                {item.time}
              </p>
            </div>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center z-10 my-2 md:my-0">
              <FaCrosshairs className="text-black text-xs" />
            </div>
            <motion.div
              className="w-full md:w-2/3 bg-white p-3 sm:p-4 rounded-xl shadow-lg md:ml-4 mt-2 md:mt-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <p className="font-bold font-custom2 text-sm sm:text-base lg:text-lg">
                {item.title}
              </p>
              <p className="text-gray-700 font-semibold font-custom3 text-xs sm:text-sm lg:text-base">
                {item.content}
              </p>
              {item.img && (
                <img
                  src={item.img}
                  alt={`${item.title} image`}
                  className="mt-2 max-md:1/ rounded-lg "
                />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
