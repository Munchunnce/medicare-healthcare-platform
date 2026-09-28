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
  User,
} from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      alert("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    // Backend registration will be connected here later.
    console.log("Registration submitted");
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* =====================================================
            LEFT — REGISTER FORM
        ====================================================== */}
        <section className="order-2 flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:order-1 lg:px-16 xl:px-24">
          <div className="w-full max-w-md">
            {/* Mobile brand */}
            <div className="mb-10 flex items-center justify-center lg:hidden">
              <Link to="/" className="flex items-center gap-3">
                {/* <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-xl font-black text-white">
                  +
                </div> */}
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                  <HeartPulse className="h-6 w-6" strokeWidth={2.5} />
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
                Get started
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Join MediCare and take control of your healthcare experience.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full name
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="h-13 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="register-email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="register-email"
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
                <label
                  htmlFor="register-password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="register-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder="Create a strong password"
                    className="h-13 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    className="h-13 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-cyan-600"
                />

                <span className="text-xs leading-5 text-slate-500">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="font-semibold text-slate-700 hover:text-cyan-600"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="font-semibold text-slate-700 hover:text-cyan-600"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-2 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
              >
                Create account
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-400">
                OR SIGN UP WITH
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Social */}
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

            {/* Login */}
            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-cyan-600 transition-colors hover:text-cyan-700"
              >
                Sign in
              </Link>
            </p>

            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4" />
              Secure account experience
            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT — BRAND / EXPERIENCE
        ====================================================== */}
        <section className="relative order-1 hidden overflow-hidden bg-slate-950 lg:order-2 lg:flex">
          <div className="absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-[35rem] w-[35rem] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative flex w-full flex-col justify-between p-12 xl:p-16">
            {/* Brand */}
            <Link to="/" className="inline-flex w-fit items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl font-black text-slate-950">
                <HeartPulse className="h-6 w-6" strokeWidth={2.5} />
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

            {/* Content */}
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                <Sparkles className="h-4 w-4" />
                Designed Around You
              </div>

              <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-white xl:text-6xl">
                One account.
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  A simpler healthcare journey.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-slate-400">
                Create your account to discover specialists, manage
                appointments, and keep your healthcare experience organized.
              </p>

              {/* Feature cards */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Personalized experience",
                  "Easy appointment management",
                  "Specialist discovery",
                  "Privacy-conscious design",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />

                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              Built with your privacy in mind.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;