import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Chrome } from "lucide-react";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-gray-400">
            Sign in to continue your growth journey
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#242833] border border-gray-700/60 rounded-2xl p-8 shadow-2xl"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 mb-6 bg-[#2B303B] border border-gray-700/60 rounded-lg text-white font-medium hover:bg-[#333846] transition"
          >
            <Chrome size={20} />
            Continue with Google
          </motion.button>

          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700/60"></div>
            </div>
            <div className="relative bg-[#242833] px-4 text-sm text-gray-400">
              or
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-[#2B303B] border border-gray-700/60 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#028CC0] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 bg-[#2B303B] border border-gray-700/60 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#028CC0] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-[#028CC0] hover:text-[#0279A6] transition"
              >
                Forgot password?
              </Link>
            </div>

            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(2, 140, 192, 0.35)",
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-[#028CC0] text-white rounded-lg font-semibold hover:bg-[#0279A6] transition"
            >
              Sign in
            </motion.button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#028CC0] hover:text-[#0279A6] font-medium transition"
            >
              Sign up
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signin;
