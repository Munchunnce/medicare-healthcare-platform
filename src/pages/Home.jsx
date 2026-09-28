import React from "react";
import { Link } from "react-router-dom";
import Doctors from "../components/Doctors/Doctors";


const Home = () => {
  return (
    <>
      <main className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src='/images/homepage.mp4'
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* Premium Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/55" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/20" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

        {/* Hero Content */}
        <section className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="grid w-full items-center gap-14 lg:grid-cols-2">

            {/* Left Content */}
            <div className="max-w-3xl">

              {/* Premium Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                </span>

                <span className="text-sm font-medium tracking-wide text-white/90">
                  Trusted Healthcare, Anytime
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Your Health.
                <br />

                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Our Priority.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                Connect with trusted doctors, discover the right specialist,
                and book your appointment in just a few clicks.
                Quality healthcare is now closer than ever.
              </p>

              {/* CTA Buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/doctors"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 text-base font-bold text-white shadow-2xl shadow-cyan-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
                >
                  Find a Doctor

                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-6-6 6 6-6 6"
                    />
                  </svg>
                </Link>

                <Link
                  to="/appointments"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  View Appointments
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/75">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  Verified Doctors
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 2"
                    />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  Easy Booking
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Secure & Reliable
                </div>
              </div>
            </div>

            {/* Right Glass Card */}
            <div className="hidden justify-end lg:flex">

              <div className="w-full max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">

                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/60">
                      Healthcare at your fingertips
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-white">
                      Find the right doctor
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20">
                    <svg
                      className="h-6 w-6 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s8-4.35 8-10a8 8 0 10-16 0c0 5.65 8 10 8 10z"
                      />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>
                  </div>
                </div>

                {/* Search */}
                <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                    </svg>

                    <span className="text-sm text-white/60">
                      Search doctors or speciality
                    </span>
                  </div>
                </div>

                {/* Quick Options */}
                <div className="mt-4 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                      +
                    </div>

                    <p className="text-sm font-semibold text-white">
                      General Physician
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                      Consult a doctor
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                      +
                    </div>

                    <p className="text-sm font-semibold text-white">
                      Specialist
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                      Find a specialist
                    </p>
                  </div>

                </div>

                {/* Bottom Stats */}
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-xl font-bold text-white">24/7</p>
                    <p className="text-xs text-white/50">Healthcare access</p>
                  </div>

                  <div className="h-8 w-px bg-white/10" />

                  <div>
                    <p className="text-xl font-bold text-white">Easy</p>
                    <p className="text-xs text-white/50">Appointment booking</p>
                  </div>

                  <div className="h-8 w-px bg-white/10" />

                  <div>
                    <p className="text-xl font-bold text-white">Secure</p>
                    <p className="text-xs text-white/50">Patient experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
            Explore
          </span>

          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 p-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/80" />
          </div>
        </div>
      </main>

      {/* Docotrs list */}
      <div>
        <Doctors/>
      </div>
    </>
  );
};

export default Home;
