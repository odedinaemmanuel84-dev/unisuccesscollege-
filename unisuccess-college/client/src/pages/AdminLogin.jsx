import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserShield,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      /*
       Backend Integration Later:

       const res = await axios.post(
         "/api/auth/admin-login",
         formData
       );

       localStorage.setItem(
         "adminToken",
         res.data.token
       );
      */

      setTimeout(() => {
        localStorage.setItem(
          "adminToken",
          "demo-admin-token"
        );

        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      alert(
        "Invalid login credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-blue-950
        via-blue-800
        to-yellow-500
        px-6
        py-12
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          w-full
          max-w-md
          bg-white
          rounded-3xl
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Header */}

        <div
          className="
            bg-blue-900
            text-white
            text-center
            px-8
            py-10
          "
        >
          <div
            className="
              w-20
              h-20
              mx-auto
              rounded-full
              bg-yellow-400
              text-blue-900
              flex
              items-center
              justify-center
              text-4xl
            "
          >
            <FaUserShield />
          </div>

          <h1
            className="
              text-3xl
              font-bold
              mt-5
            "
          >
            Admin Login
          </h1>

          <p className="mt-2">
            Authorized personnel only
          </p>
        </div>

        {/* Form */}

        <div className="p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Email */}

            <div>
              <label
                className="
                  block
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                Admin Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter email"
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-700
                  "
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <label
                className="
                  block
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  required
                  value={
                    formData.password
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter password"
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-4
                    pr-14
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-700
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>
              </div>
            </div>

            {/* Remember */}

            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <label
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                "
              >
                <input
                  type="checkbox"
                />

                Remember me
              </label>

              <button
                type="button"
                className="
                  text-blue-800
                  text-sm
                  font-medium
                "
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-yellow-400
                hover:bg-yellow-500
                text-slate-900
                font-bold
                py-4
                rounded-xl
                transition
                disabled:opacity-70
              "
            >
              {loading
                ? "Signing In..."
                : "Login"}
            </button>
          </form>

          <div
            className="
              mt-8
              text-center
              text-sm
              text-gray-500
            "
          >
            © {new Date().getFullYear()}{" "}
            Unisuccess College
          </div>
        </div>
      </motion.div>
    </section>
  );
                 }
