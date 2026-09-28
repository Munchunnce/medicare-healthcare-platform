import React from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* ================= TOP CTA ================= */}
        <div className="border-b border-white/10 py-14 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                <ShieldCheck className="h-4 w-4" />
                Trusted Healthcare Experience
              </div>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Better healthcare starts
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  with a better experience.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Discover trusted healthcare professionals, explore
                specialities, and manage your appointments—all in one place.
              </p>
            </div>

            <a
              href="/appointments"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Book an Appointment
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-16">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg">
                <span className="text-xl font-black">+</span>
              </div>

              <div>
                <span className="block text-xl font-bold tracking-tight">
                  MediCare
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
                  Healthcare
                </span>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              A modern healthcare platform designed to make discovering,
              connecting, and managing healthcare simpler for everyone.
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-4">
              <a
                href="mailto:hello@medicare.com"
                className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Mail className="h-4 w-4" />
                </span>
                hello@medicare.com
              </a>

              <a
                href="tel:+18001234567"
                className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Phone className="h-4 w-4" />
                </span>
                +91-9708723622
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <MapPin className="h-4 w-4" />
                </span>
                New Delhi, India
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-white">Platform</h3>

            <ul className="mt-6 space-y-4">
              {[
                ["About Us", "/about"],
                ["Specialities", "/specialities"],
                ["Appointments", "/appointments"],
                ["Find a Doctor", "/doctors"],
                ["Healthcare Services", "/services"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>

            <ul className="mt-6 space-y-4">
              {[
                ["Health Articles", "/articles"],
                ["Patient Guide", "/patient-guide"],
                ["Help Center", "/help"],
                ["FAQs", "/faq"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>

            <ul className="mt-6 space-y-4">
              {[
                ["Our Story", "/about"],
                ["Careers", "/careers"],
                ["For Doctors", "/for-doctors"],
                ["Partners", "/partners"],
                ["Press", "/press"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div className="border-y border-white/10 py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Stay informed about your health.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Get useful healthcare insights and platform updates delivered
                to your inbox.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.05] pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-500 transition-all focus:border-cyan-400/50 focus:bg-white/[0.08]"
                />
              </div>

              <button
                type="submit"
                className="h-12 rounded-xl bg-white px-5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col gap-7 py-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Copyright */}
          <div className="text-xs leading-6 text-slate-500">
            © {currentYear} MediCare. All rights reserved.
          </div>

          {/* Legal */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
            <a
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </a>

            <a
              href="/accessibility"
              className="transition-colors hover:text-white"
            >
              Accessibility
            </a>

            <a
              href="/cookies"
              className="transition-colors hover:text-white"
            >
              Cookie Policy
            </a>
          </div>

          {/* Social */}
          {/* Social */}
<div className="flex items-center gap-2">
  {/* LinkedIn */}
  <a
    href="#"
    aria-label="LinkedIn"
    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.09] hover:text-white"
  >
    in
  </a>

  {/* Instagram */}
  <a
    href="#"
    aria-label="Instagram"
    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.09] hover:text-white"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  </a>

  {/* X / Twitter */}
  <a
    href="#"
    aria-label="X"
    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.09] hover:text-white"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.55l-5.13-6.72L5.19 22H1.93l7.61-8.69L1.5 2h6.72l4.64 6.14L18.244 2Zm-1.15 17.87h1.81L7.22 4.03H5.28L17.094 19.87Z" />
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="#"
    aria-label="Facebook"
    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.09] hover:text-white"
  >
    f
  </a>
</div>
        </div>

        {/* ================= TRUST STRIP ================= */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            Your privacy and security matter to us.
          </div>

          <p className="text-xs text-slate-600">
            Built for a simpler healthcare experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;