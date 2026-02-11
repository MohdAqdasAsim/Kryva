import { Link } from "react-router-dom";
import { Mail, Lock, Eye } from "lucide-react";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Create an account
          </h1>
          <p className="text-gray-400">Start your growth journey today</p>
        </div>

        <div className="bg-[#242832] border border-[#2F3542] rounded-2xl p-8 shadow-2xl">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#2A2F3A] border border-[#3A404F] rounded-lg text-white font-medium hover:bg-[#323847] transition mb-6">
            <Mail size={18} />
            Continue with Google
          </button>

          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#3A404F]" />
            </div>
            <div className="relative bg-[#242832] px-4 text-sm text-gray-400">
              or
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-white mb-2">Email</label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-[#2A2F3A] border border-[#3A404F] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0288B8] transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white mb-2">Password</label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full pl-10 pr-12 py-3 bg-[#2A2F3A] border border-[#3A404F] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0288B8] transition"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0288B8] text-white rounded-lg font-semibold hover:bg-[#0277A3] transition"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#0288B8] hover:text-[#0277A3] font-medium transition"
            >
              Sign in
            </Link>
          </p>

          <p className="mt-6 text-center text-xs text-gray-500">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-[#0288B8] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-[#0288B8] hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
