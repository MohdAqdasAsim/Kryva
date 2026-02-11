import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-between px-16 pt-10"
    >
      <motion.div whileHover={{ x: -3 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-inter font-medium">Back</span>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link
          to="/docs"
          className="px-4 py-2 rounded-lg font-medium text-white border border-[#0288B8]/40 bg-[#0288B8]/30 hover:bg-[#0288B8]/20 hover:border-[#0288B8] transition flex items-center gap-2"
        >
          <BookOpen size={18} />
          Documentation
        </Link>
      </motion.div>
    </motion.header>
  );
};

export default Header;
