import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Arjun Sharma",
    gender: "Male",
    speciality: "Cardiologist",
    qualification: "MBBS, MD, DM",
    experience: 14,
    rating: 4.9,
    reviews: 328,
    fee: 900,
    location: "Apollo Medical Centre, Delhi",
    available: "Available Today",
    image: "/images/doctors/doctor-male-1.jpg",
  },
  {
    id: 2,
    name: "Dr. Priya Mehta",
    gender: "Female",
    speciality: "Dermatologist",
    qualification: "MBBS, MD Dermatology",
    experience: 11,
    rating: 4.8,
    reviews: 246,
    fee: 700,
    location: "Fortis Clinic, Gurgaon",
    available: "Available Today",
    image: "/images/doctors/doctor-female-1.jpg",
  },
  {
    id: 3,
    name: "Dr. Rahul Verma",
    gender: "Male",
    speciality: "Neurologist",
    qualification: "MBBS, MD, DM Neurology",
    experience: 16,
    rating: 4.9,
    reviews: 412,
    fee: 1100,
    location: "Max Healthcare, Delhi",
    available: "Available Tomorrow",
    image: "/images/doctors/doctor-male-2.jpg",
  },
  {
    id: 4,
    name: "Dr. Ananya Kapoor",
    gender: "Female",
    speciality: "Pediatrician",
    qualification: "MBBS, MD Pediatrics",
    experience: 9,
    rating: 4.8,
    reviews: 198,
    fee: 600,
    location: "Medanta Clinic, Gurgaon",
    available: "Available Today",
    image: "/images/doctors/doctor-female-5.jpg",
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    gender: "Male",
    speciality: "Orthopedic",
    qualification: "MBBS, MS Orthopedics",
    experience: 18,
    rating: 4.9,
    reviews: 521,
    fee: 1000,
    location: "Artemis Hospital, Gurgaon",
    available: "Available Today",
    image: "/images/doctors/doctor-male-3.jpg",
  },
  {
    id: 6,
    name: "Dr. Neha Gupta",
    gender: "Female",
    speciality: "Gynecologist",
    qualification: "MBBS, MS, DNB",
    experience: 13,
    rating: 4.9,
    reviews: 367,
    fee: 800,
    location: "Cloudnine Hospital, Delhi",
    available: "Available Tomorrow",
    image: "/images/doctors/doctor-female-3.webp",
  },
  {
    id: 7,
    name: "Dr. Aditya Malhotra",
    gender: "Male",
    speciality: "General Physician",
    qualification: "MBBS, MD Medicine",
    experience: 10,
    rating: 4.7,
    reviews: 184,
    fee: 500,
    location: "City Care Clinic, Noida",
    available: "Available Today",
    image: "/images/doctors/doctor-male-4.jpg",
  },
  {
    id: 8,
    name: "Dr. Sneha Iyer",
    gender: "Female",
    speciality: "Psychiatrist",
    qualification: "MBBS, MD Psychiatry",
    experience: 12,
    rating: 4.8,
    reviews: 275,
    fee: 900,
    location: "Mind Wellness Centre, Delhi",
    available: "Available Today",
    image: "/images/doctors/doctor-female-4.jpg",
  },
];

const specialities = [
  "All Specialities",
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Pediatrician",
  "Orthopedic",
  "Gynecologist",
  "General Physician",
  "Psychiatrist",
];

const Doctors = () => {
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("All Specialities");
  const [gender, setGender] = useState("All");
  const [sortBy, setSortBy] = useState("Recommended");

  const filteredDoctors = useMemo(() => {
    let result = doctors.filter((doctor) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        doctor.name.toLowerCase().includes(searchText) ||
        doctor.speciality.toLowerCase().includes(searchText) ||
        doctor.location.toLowerCase().includes(searchText);

      const matchesSpeciality =
        speciality === "All Specialities" ||
        doctor.speciality === speciality;

      const matchesGender =
        gender === "All" || doctor.gender === gender;

      return matchesSearch && matchesSpeciality && matchesGender;
    });

    if (sortBy === "Rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "Experience") {
      result = [...result].sort((a, b) => b.experience - a.experience);
    }

    if (sortBy === "Fee: Low to High") {
      result = [...result].sort((a, b) => a.fee - b.fee);
    }

    return result;
  }, [search, speciality, gender, sortBy]);

  return (
    <main className="relative min-h-screen bg-transparent">

  {/* ================= PREMIUM BACKGROUND ================= */}
    <div className="fixed inset-0 -z-10 overflow-hidden">

  {/* Background Image */}
  <img
    src="/images/bg-team.jpg"
    alt="Medical Team"
    className="h-full w-full object-cover object-center scale-105"
  />

  {/* Luxury Dark Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-900/20 to-slate-950/45" />

  {/* Premium Cyan Glow */}
  <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />

  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />

  {/* Cinematic Vignette */}
  <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(2,6,23,0.45)]" />

</div>

  {/* ================= ALL PAGE CONTENT ================= */}
  <div className="relative z-10">

    {/* ================= HEADER ================= */}
    <section className="relative overflow-hidden">

      {/* Decorative glass glow */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="max-w-3xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/70 px-4 py-2 shadow-lg shadow-cyan-100/40 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

            <span className="text-sm font-bold text-cyan-800">
              Trusted Healthcare Professionals
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find the right
            <span className="block bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 bg-clip-text text-transparent">
              doctor for you.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Browse verified healthcare professionals by speciality,
            experience, rating and availability. Choose a doctor and
            book your appointment with ease.
          </p>

        </div>

        {/* ================= PREMIUM SEARCH BOX ================= */}
        <div className="mt-10 rounded-[2rem] border border-white/70 bg-white/55 p-3 shadow-2xl shadow-slate-300/40 backdrop-blur-2xl">

          <div className="flex flex-col gap-3 lg:flex-row">

            {/* Search */}
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm transition focus-within:ring-2 focus-within:ring-cyan-400/30">

              <svg
                className="h-5 w-5 text-cyan-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search doctor, speciality or location..."
                className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>

            {/* Speciality */}
            <select
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              className="cursor-pointer rounded-2xl border border-slate-100 bg-white px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm outline-none transition hover:border-cyan-200 focus:ring-2 focus:ring-cyan-400/30"
            >
              {specialities.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Gender */}
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="cursor-pointer rounded-2xl border border-slate-100 bg-white px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm outline-none transition hover:border-cyan-200 focus:ring-2 focus:ring-cyan-400/30"
            >
              <option value="All">All Doctors</option>
              <option value="Male">Male Doctors</option>
              <option value="Female">Female Doctors</option>
            </select>

          </div>
        </div>

      </div>
    </section>


    {/* ================= DOCTORS ================= */}
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

      {/* Section Header */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-600">
            Our Specialists
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Meet our doctors
          </h2>

          <p className="mt-2 text-slate-600">
            {filteredDoctors.length} doctors available
          </p>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-xl border border-white/80 bg-white/80 px-4 py-3 text-sm font-bold text-slate-700 shadow-lg backdrop-blur-xl outline-none"
        >
          <option>Recommended</option>
          <option>Rating</option>
          <option>Experience</option>
          <option>Fee: Low to High</option>
        </select>

      </div>

      {/* ================= DOCTOR GRID ================= */}
      {filteredDoctors.length > 0 ? (

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredDoctors.map((doctor) => (

            <article
              key={doctor.id}
              className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-xl shadow-slate-300/30 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-200/30"
            >

              {/* Doctor Image */}
              <div className="relative h-64 overflow-hidden bg-slate-100">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                />

                {/* Image bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/30 to-transparent" />

                {/* Availability */}
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-lg backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    {doctor.available}
                  </span>
                </div>

                {/* Favourite */}
                <button
                  type="button"
                  aria-label={`Save ${doctor.name}`}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/90 text-slate-500 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:text-red-500"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
                    />
                  </svg>
                </button>

              </div>

              {/* Content */}
              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {doctor.name}
                    </h3>

                    <p className="mt-1 text-sm font-bold text-cyan-600">
                      {doctor.speciality}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex shrink-0 items-center gap-1 rounded-xl bg-amber-50 px-2.5 py-1.5 ring-1 ring-amber-100">
                    <span className="text-sm text-amber-500">
                      ★
                    </span>

                    <span className="text-sm font-black text-amber-700">
                      {doctor.rating}
                    </span>
                  </div>

                </div>

                <p className="mt-3 text-xs font-semibold text-slate-500">
                  {doctor.qualification}
                </p>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-2">

                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-400">
                      Experience
                    </p>

                    <p className="mt-1 text-sm font-black text-slate-800">
                      {doctor.experience}+ Years
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-400">
                      Reviews
                    </p>

                    <p className="mt-1 text-sm font-black text-slate-800">
                      {doctor.reviews}
                    </p>
                  </div>

                </div>

                {/* Location */}
                <div className="mt-4 flex items-start gap-2 text-xs font-medium text-slate-500">

                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600"
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

                  <span>{doctor.location}</span>
                </div>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">

                  <div>
                    <p className="text-xs text-slate-400">
                      Consultation
                    </p>

                    <p className="text-lg font-black text-slate-900">
                      ₹{doctor.fee}
                    </p>
                  </div>

                  <Link
                    to={`/doctors/${doctor.id}`}
                    className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-cyan-200"
                  >
                    View Profile
                  </Link>

                </div>

              </div>
            </article>

          ))}

        </div>

      ) : (

        <div className="rounded-3xl border border-white/70 bg-white/80 px-6 py-20 text-center shadow-xl backdrop-blur-xl">

          <h3 className="text-xl font-black text-slate-900">
            No doctors found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Try another doctor name, speciality or location.
          </p>

        </div>

      )}

    </section>

  </div>
    </main>
  );
};

export default Doctors;