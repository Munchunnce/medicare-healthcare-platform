import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const specialities = [
  {
    id: 1,
    title: "Cardiology",
    icon: "❤️",
    doctors: 42,
    desc: "Heart & blood vessel specialists",
    color: "from-rose-500 to-red-500",
  },
  {
    id: 2,
    title: "Neurology",
    icon: "🧠",
    doctors: 28,
    desc: "Brain & nervous system experts",
    color: "from-violet-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Dermatology",
    icon: "✨",
    doctors: 35,
    desc: "Skin, hair & cosmetic care",
    color: "from-pink-500 to-fuchsia-500",
  },
  {
    id: 4,
    title: "Orthopedic",
    icon: "🦴",
    doctors: 31,
    desc: "Bones, joints & spine treatment",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 5,
    title: "Pediatrics",
    icon: "👶",
    doctors: 26,
    desc: "Healthcare for infants & children",
    color: "from-cyan-500 to-sky-500",
  },
  {
    id: 6,
    title: "Gynecology",
    icon: "🌸",
    doctors: 24,
    desc: "Women's reproductive healthcare",
    color: "from-rose-400 to-pink-500",
  },
  {
    id: 7,
    title: "Psychiatry",
    icon: "💙",
    doctors: 18,
    desc: "Mental wellness & therapy",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 8,
    title: "General Physician",
    icon: "🩺",
    doctors: 56,
    desc: "Primary care & routine consultation",
    color: "from-emerald-500 to-teal-500",
  },
];

const Specialities = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return specialities.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-950">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bg-team.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-cyan-950/40" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-semibold text-cyan-200">
                50+ Verified Medical Specialities
              </span>
            </div>

            <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Choose Your
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Medical Speciality
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Find experienced doctors across every major speciality and book
              appointments with trusted healthcare professionals.
            </p>

            {/* Search */}
            <div className="mt-10 rounded-3xl border border-white/20 bg-white/10 p-3 backdrop-blur-2xl">

              <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4">

                <svg
                  className="h-5 w-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search speciality..."
                  className="w-full bg-transparent text-slate-700 outline-none"
                />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SPECIALITIES GRID ================= */}
      <section className="relative -mt-12 z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        <div className="mb-10 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Departments
          </p>

          <h2 className="mt-3 text-4xl font-black text-white">
            Explore All Specialities
          </h2>

          <p className="mt-3 text-slate-400">
            {filtered.length} premium healthcare departments available
          </p>

        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {filtered.map((item) => (
            <div
              key={item.id}
              className="group rounded-[30px] border border-white/10 bg-white/10 p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:bg-white/15 hover:shadow-[0_20px_60px_rgba(6,182,212,0.25)]"
            >

              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-3xl shadow-lg`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-black text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.desc}
              </p>

              <div className="mt-5 flex items-center justify-between">

                <div>
                  <p className="text-xs text-slate-400">
                    Available Doctors
                  </p>
                  <p className="text-lg font-bold text-cyan-300">
                    {item.doctors}+
                  </p>
                </div>

                <Link
                  to="/doctors"
                  className="rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-cyan-500"
                >
                  Explore
                </Link>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="border-y border-white/10 bg-white/5">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-4">

          {[
            ["500+", "Verified Doctors"],
            ["25+", "Hospitals Connected"],
            ["24/7", "Online Support"],
            ["4.9★", "Average Patient Rating"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <h3 className="text-4xl font-black text-cyan-300">
                {value}
              </h3>
              <p className="mt-2 text-slate-400">
                {label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="overflow-hidden rounded-[36px] border border-cyan-400/20 bg-gradient-to-r from-cyan-600 to-blue-700 p-10 shadow-2xl">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Need help choosing a doctor?
              </h2>

              <p className="mt-3 max-w-2xl text-cyan-100">
                Our verified specialists are ready to provide personalized
                healthcare consultations with secure appointment booking.
              </p>

            </div>

            <Link
              to="/doctors"
              className="rounded-2xl bg-white px-7 py-4 text-base font-black text-cyan-700 transition hover:scale-105"
            >
              Find Doctors →
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Specialities;