import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  HeartPulse,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend authentication will be connected here later.
    console.log("Login submitted", { rememberMe });
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* =====================================================
            LEFT — BRAND / EXPERIENCE
        ====================================================== */}
        <section className="relative hidden overflow-hidden bg-slate-950 lg:flex">
          {/* Background glow */}
          <div className="absolute -left-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-[35rem] w-[35rem] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative flex w-full flex-col justify-between p-12 xl:p-16">
            {/* Brand */}
            <Link to="/" className="inline-flex w-fit items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl font-black text-slate-950">
                +
              </div>

              <div>
                <span className="block text-xl font-bold tracking-tight text-white">
                  MediCare
                </span>

                <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
                  Healthcare
                </span>
              </div>
            </Link>

            {/* Main content */}
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                <Sparkles className="h-4 w-4" />
                Your Health, Connected
              </div>

              <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-white xl:text-6xl">
                Welcome back to
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  better healthcare.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-slate-400">
                Access your appointments, discover trusted specialists, and
                manage your healthcare journey from one secure place.
              </p>

              {/* Benefits */}
              <div className="mt-10 space-y-4">
                {[
                  "Manage appointments effortlessly",
                  "Connect with trusted specialists",
                  "Keep your healthcare journey organized",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Trust card */}
              <div className="mt-12 flex max-w-md items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <ShieldCheck className="h-5 w-5 text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Privacy-conscious experience
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Your account experience is designed with security and
                    privacy in mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} MediCare Healthcare
            </p>
          </div>
        </section>

        {/* =====================================================
            RIGHT — LOGIN FORM
        ====================================================== */}
        <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:px-16 xl:px-24">
          <div className="w-full max-w-md">
            {/* Mobile brand */}
            <div className="mb-10 flex items-center justify-center lg:hidden">
              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-xl font-black text-white">
                  +
                </div>

                <div>
                  <span className="block text-xl font-bold tracking-tight text-slate-950">
                    MediCare
                  </span>

                  <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
                    Healthcare
                  </span>
                </div>
              </Link>
            </div>

            {/* Heading */}
            <div>
              <p className="text-sm font-semibold text-cyan-600">
                Welcome back
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Sign in to your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your details below to continue your healthcare journey.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-9 space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-13 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs font-semibold text-cyan-600 transition-colors hover:text-cyan-700"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="h-13 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 accent-cyan-600"
                />

                <span className="text-sm text-slate-600">
                  Remember me
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
              >
                Sign in
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-400">
                OR CONTINUE WITH
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Social login */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                <span className="text-lg font-bold">G</span>
                Google
              </button>

              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
              >
                <span className="text-lg font-bold"></span>
                Apple
              </button>
            </div>

            {/* Register */}
            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-cyan-600 transition-colors hover:text-cyan-700"
              >
                Create an account
              </Link>
            </p>

            {/* Security */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4" />
              Secure account experience
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;