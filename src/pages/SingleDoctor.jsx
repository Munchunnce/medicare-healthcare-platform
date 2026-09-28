import React, { useMemo, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  GraduationCap,
  Heart,
  Languages,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Share2,
  ShieldCheck,
  Star,
  Stethoscope,
  Video,
} from "lucide-react";

/* =========================================================
   DOCTOR DATA
   ========================================================= */

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

    verified: true,
    consultation: "15–20 minutes",
    languages: ["English", "Hindi"],
    patients: "8,500+",

    about:
      "Dr. Arjun Sharma is an experienced cardiologist focused on preventive cardiology, heart disease management, hypertension, and comprehensive cardiovascular care. He believes in combining evidence-based medicine with clear communication so patients can make informed decisions about their health.",

    education: [
      {
        degree: "Doctor of Medicine (DM)",
        institute: "All India Institute of Medical Sciences",
        year: "2012",
      },
      {
        degree: "MD – General Medicine",
        institute: "Maulana Azad Medical College",
        year: "2009",
      },
      {
        degree: "MBBS",
        institute: "University of Delhi",
        year: "2006",
      },
    ],

    expertise: [
      "Preventive Cardiology",
      "Hypertension",
      "Heart Failure",
      "Coronary Artery Disease",
      "Cardiac Risk Assessment",
      "Cholesterol Management",
    ],

    services: [
      "Cardiac Consultation",
      "Heart Health Assessment",
      "Hypertension Management",
      "Preventive Cardiology",
      "ECG Consultation",
      "Second Opinion",
    ],

    awards: [
      "Excellence in Cardiology – 2023",
      "Outstanding Physician Award – 2021",
      "Best Clinical Practice Award – 2019",
    ],

    hospital: {
      name: "Apollo Medical Centre",
      address: "Saket, New Delhi, India",
      timing: "Mon – Sat · 9:00 AM – 6:00 PM",
    },
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

    verified: true,
    consultation: "15–20 minutes",
    languages: ["English", "Hindi"],
    patients: "6,200+",

    about:
      "Dr. Priya Mehta specializes in clinical and cosmetic dermatology with a patient-centered approach to skin, hair, and nail conditions. Her practice focuses on accurate diagnosis, personalized treatment plans, and long-term skin health.",

    education: [
      {
        degree: "MD – Dermatology",
        institute: "Government Medical College",
        year: "2014",
      },
      {
        degree: "MBBS",
        institute: "Delhi University",
        year: "2011",
      },
    ],

    expertise: [
      "Acne Treatment",
      "Hair Loss",
      "Cosmetic Dermatology",
      "Pigmentation",
      "Skin Allergy",
      "Anti-Aging Care",
    ],

    services: [
      "Skin Consultation",
      "Acne Management",
      "Hair & Scalp Consultation",
      "Pigmentation Treatment",
      "Skin Allergy Consultation",
      "Cosmetic Consultation",
    ],

    awards: [
      "Dermatology Excellence Award – 2024",
      "Young Dermatologist Recognition – 2022",
    ],

    hospital: {
      name: "Fortis Clinic",
      address: "Golf Course Road, Gurgaon, India",
      timing: "Mon – Sat · 10:00 AM – 5:00 PM",
    },
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

    verified: true,
    consultation: "20–30 minutes",
    languages: ["English", "Hindi"],
    patients: "9,700+",

    about:
      "Dr. Rahul Verma is a neurologist with extensive clinical experience in neurological disorders, migraine, epilepsy, stroke management, and neuro-rehabilitation. His approach combines detailed evaluation with individualized care plans.",

    education: [
      {
        degree: "DM – Neurology",
        institute: "AIIMS New Delhi",
        year: "2010",
      },
      {
        degree: "MD – Medicine",
        institute: "PGIMER Chandigarh",
        year: "2007",
      },
      {
        degree: "MBBS",
        institute: "University of Delhi",
        year: "2004",
      },
    ],

    expertise: [
      "Stroke Management",
      "Migraine",
      "Epilepsy",
      "Parkinson's Disease",
      "Neuropathy",
      "Neuro-Rehabilitation",
    ],

    services: [
      "Neurology Consultation",
      "Migraine Evaluation",
      "Stroke Follow-up",
      "Epilepsy Consultation",
      "Neurological Second Opinion",
    ],

    awards: [
      "National Neurology Excellence Award – 2023",
      "Clinical Research Recognition – 2020",
    ],

    hospital: {
      name: "Max Healthcare",
      address: "Saket, New Delhi, India",
      timing: "Mon – Sat · 8:00 AM – 4:00 PM",
    },
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

    verified: true,
    consultation: "15–20 minutes",
    languages: ["English", "Hindi"],
    patients: "5,400+",

    about:
      "Dr. Ananya Kapoor is a pediatrician dedicated to comprehensive child healthcare, preventive medicine, nutrition, vaccination, and developmental monitoring.",

    education: [
      {
        degree: "MD – Pediatrics",
        institute: "Lady Hardinge Medical College",
        year: "2015",
      },
      {
        degree: "MBBS",
        institute: "University of Delhi",
        year: "2012",
      },
    ],

    expertise: [
      "Child Healthcare",
      "Vaccination",
      "Child Nutrition",
      "Growth Monitoring",
      "Newborn Care",
      "Child Development",
    ],

    services: [
      "Pediatric Consultation",
      "Vaccination Consultation",
      "Child Nutrition",
      "Growth Assessment",
      "Newborn Consultation",
    ],

    awards: [
      "Child Healthcare Excellence Award – 2024",
      "Patient Care Recognition – 2022",
    ],

    hospital: {
      name: "Medanta Clinic",
      address: "Sector 38, Gurgaon, India",
      timing: "Mon – Sat · 9:00 AM – 5:00 PM",
    },
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

    verified: true,
    consultation: "20–30 minutes",
    languages: ["English", "Hindi"],
    patients: "11,000+",

    about:
      "Dr. Vikram Singh is an orthopedic specialist with extensive experience in joint health, sports injuries, arthritis, fracture management, and musculoskeletal disorders.",

    education: [
      {
        degree: "MS – Orthopedics",
        institute: "PGIMER Chandigarh",
        year: "2008",
      },
      {
        degree: "MBBS",
        institute: "University of Delhi",
        year: "2005",
      },
    ],

    expertise: [
      "Joint Replacement",
      "Sports Injuries",
      "Arthritis",
      "Fracture Management",
      "Knee Problems",
      "Shoulder Problems",
    ],

    services: [
      "Orthopedic Consultation",
      "Joint Pain Assessment",
      "Sports Injury Consultation",
      "Arthritis Management",
      "Second Opinion",
    ],

    awards: [
      "Orthopedic Excellence Award – 2023",
      "Surgical Excellence Recognition – 2021",
    ],

    hospital: {
      name: "Artemis Hospital",
      address: "Sector 51, Gurgaon, India",
      timing: "Mon – Sat · 9:00 AM – 6:00 PM",
    },
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

    verified: true,
    consultation: "20–30 minutes",
    languages: ["English", "Hindi"],
    patients: "7,800+",

    about:
      "Dr. Neha Gupta provides comprehensive women's healthcare with a focus on reproductive health, pregnancy care, menstrual disorders, and preventive gynecology.",

    education: [
      {
        degree: "DNB – Obstetrics & Gynecology",
        institute: "National Board of Examinations",
        year: "2013",
      },
      {
        degree: "MS – Gynecology",
        institute: "Government Medical College",
        year: "2011",
      },
      {
        degree: "MBBS",
        institute: "University of Delhi",
        year: "2008",
      },
    ],

    expertise: [
      "Women's Health",
      "Pregnancy Care",
      "PCOS",
      "Menstrual Disorders",
      "Infertility Consultation",
      "Preventive Gynecology",
    ],

    services: [
      "Gynecology Consultation",
      "Pregnancy Consultation",
      "PCOS Management",
      "Women's Health Checkup",
      "Preconception Counseling",
    ],

    awards: [
      "Women's Healthcare Excellence Award – 2024",
      "Patient Care Award – 2022",
    ],

    hospital: {
      name: "Cloudnine Hospital",
      address: "South Delhi, India",
      timing: "Mon – Sat · 10:00 AM – 6:00 PM",
    },
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

    verified: true,
    consultation: "15–20 minutes",
    languages: ["English", "Hindi"],
    patients: "4,800+",

    about:
      "Dr. Aditya Malhotra is a general physician providing comprehensive primary care, preventive healthcare, chronic disease management, and routine medical consultations.",

    education: [
      {
        degree: "MD – General Medicine",
        institute: "King George's Medical University",
        year: "2015",
      },
      {
        degree: "MBBS",
        institute: "University of Delhi",
        year: "2012",
      },
    ],

    expertise: [
      "Primary Care",
      "Diabetes Management",
      "Hypertension",
      "Fever & Infection",
      "Preventive Healthcare",
      "Chronic Disease Management",
    ],

    services: [
      "General Consultation",
      "Health Checkup",
      "Diabetes Consultation",
      "Hypertension Consultation",
      "Preventive Care",
    ],

    awards: [
      "Primary Care Excellence Award – 2023",
    ],

    hospital: {
      name: "City Care Clinic",
      address: "Sector 18, Noida, India",
      timing: "Mon – Sat · 9:00 AM – 7:00 PM",
    },
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

    verified: true,
    consultation: "30–40 minutes",
    languages: ["English", "Hindi"],
    patients: "6,700+",

    about:
      "Dr. Sneha Iyer is a psychiatrist focused on compassionate, evidence-based mental healthcare including anxiety, depression, stress management, and behavioral health.",

    education: [
      {
        degree: "MD – Psychiatry",
        institute: "NIMHANS",
        year: "2013",
      },
      {
        degree: "MBBS",
        institute: "Bangalore Medical College",
        year: "2010",
      },
    ],

    expertise: [
      "Anxiety",
      "Depression",
      "Stress Management",
      "Behavioral Health",
      "Sleep Disorders",
      "Mental Wellness",
    ],

    services: [
      "Psychiatric Consultation",
      "Stress Management",
      "Anxiety Consultation",
      "Sleep Consultation",
      "Mental Wellness Consultation",
    ],

    awards: [
      "Mental Healthcare Excellence Award – 2024",
      "Patient Experience Award – 2022",
    ],

    hospital: {
      name: "Mind Wellness Centre",
      address: "Vasant Vihar, New Delhi, India",
      timing: "Mon – Sat · 10:00 AM – 7:00 PM",
    },
  },
];

/* =========================================================
   APPOINTMENT DATA
   ========================================================= */

const appointmentDates = [
  {
    day: "Today",
    date: "28",
    month: "Sep",
  },
  {
    day: "Tue",
    date: "29",
    month: "Sep",
  },
  {
    day: "Wed",
    date: "30",
    month: "Sep",
  },
  {
    day: "Thu",
    date: "01",
    month: "Oct",
  },
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:30 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:30 PM",
  "05:00 PM",
];

/* =========================================================
   REVIEWS
   ========================================================= */

const reviews = [
  {
    name: "Rahul Mehra",
    date: "2 weeks ago",
    rating: 5,
    text: "Very professional and patient. The consultation was detailed and all my questions were answered clearly.",
  },
  {
    name: "Aisha Khan",
    date: "1 month ago",
    rating: 5,
    text: "Excellent experience from booking to consultation. The doctor explained everything very clearly.",
  },
  {
    name: "Rohit Verma",
    date: "2 months ago",
    rating: 4,
    text: "The appointment process was smooth and the consultation was very helpful.",
  },
];

/* =========================================================
   COMPONENT
   ========================================================= */

const SingleDoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = useMemo(
    () => doctors.find((item) => item.id === Number(id)),
    [id]
  );

  const [selectedDate, setSelectedDate] = useState(appointmentDates[0]);
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("About");

  /* =======================================================
     DOCTOR NOT FOUND
  ======================================================= */

  if (!doctor) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto flex min-h-screen max-w-2xl items-center justify-center px-6 text-center">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 text-white">
              <Stethoscope className="h-9 w-9" />
            </div>

            <h1 className="mt-7 text-3xl font-black text-slate-900">
              Doctor not found
            </h1>

            <p className="mt-3 text-slate-500">
              The doctor profile you're looking for doesn't exist.
            </p>

            <Link
              to="/doctors"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Doctors
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute -right-40 top-96 h-[35rem] w-[35rem] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <section className="border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Link
              to="/"
              className="transition-colors hover:text-cyan-600"
            >
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <Link
              to="/doctors"
              className="transition-colors hover:text-cyan-600"
            >
              Doctors
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="font-semibold text-slate-700">
              {doctor.name}
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          HERO PROFILE
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-slate-200/70 bg-white">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* Main profile */}
            <div>
              <div className="flex flex-col gap-7 sm:flex-row">
                {/* Image */}
                <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl sm:h-72 sm:w-60">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover object-top"
                  />

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-lg backdrop-blur">
                    <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    {doctor.available}
                  </div>
                </div>

                {/* Information */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {doctor.verified && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700 ring-1 ring-cyan-100">
                        <CheckCircle2 className="h-4 w-4" />
                        Verified Doctor
                      </span>
                    )}

                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                      {doctor.speciality}
                    </span>
                  </div>

                  <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                    {doctor.name}
                  </h1>

                  <p className="mt-2 text-base font-semibold text-cyan-600">
                    {doctor.qualification}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 rounded-xl bg-amber-50 px-3 py-2 ring-1 ring-amber-100">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

                        <span className="font-black text-amber-700">
                          {doctor.rating}
                        </span>
                      </div>

                      <span className="text-sm font-medium text-slate-500">
                        {doctor.reviews} reviews
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <Clock3 className="h-4 w-4 text-cyan-600" />
                      {doctor.experience}+ years experience
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <UsersIcon />
                      {doctor.patients} patients
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-3 text-sm text-slate-500">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />

                    <span>{doctor.location}</span>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSaved(!saved)}
                      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition-all ${
                        saved
                          ? "border-red-200 bg-red-50 text-red-600"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          saved ? "fill-red-500" : ""
                        }`}
                      />
                      {saved ? "Saved" : "Save Doctor"}
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition-all hover:border-slate-300"
                    >
                      <Share2 className="h-4 w-4" />
                      Share
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition-all hover:border-slate-300"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Ask a Question
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white sm:grid-cols-4">
                <QuickStat
                  icon={<Clock3 />}
                  label="Experience"
                  value={`${doctor.experience}+ Years`}
                />

                <QuickStat
                  icon={<Star />}
                  label="Patient Rating"
                  value={`${doctor.rating}/5`}
                />

                <QuickStat
                  icon={<MessageCircle />}
                  label="Reviews"
                  value={`${doctor.reviews}+`}
                />

                <QuickStat
                  icon={<CalendarDays />}
                  label="Consultation"
                  value={doctor.consultation}
                />
              </div>
            </div>

            {/* Appointment CTA */}
            <div className="h-fit rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl lg:sticky lg:top-24">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Consultation Fee
                  </p>

                  <p className="mt-2 text-4xl font-black">
                    ₹{doctor.fee}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-3">
                  <Stethoscope className="h-6 w-6 text-cyan-300" />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-white/[0.06] p-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-300" />

                  <span className="text-sm text-slate-300">
                    Verified healthcare professional
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white/[0.06] p-3">
                  <Clock3 className="h-5 w-5 text-cyan-300" />

                  <span className="text-sm text-slate-300">
                    {doctor.consultation} consultation
                  </span>
                </div>
              </div>

              <a
                href="#book-appointment"
                className="group mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-black text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                Secure booking experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          {/* LEFT CONTENT */}
          <div>
            {/* Tabs */}
            <div className="sticky top-0 z-20 -mx-2 overflow-x-auto bg-[#f7f9fc]/95 px-2 py-2 backdrop-blur-xl">
              <div className="flex min-w-max gap-2 rounded-2xl border border-slate-200 bg-white p-1.5">
                {["About", "Experience", "Reviews"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all ${
                      activeTab === tab
                        ? "bg-slate-950 text-white shadow-lg"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* About */}
            {activeTab === "About" && (
              <div className="mt-8 space-y-8">
                <section className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9">
                  <SectionHeading
                    eyebrow="About the Doctor"
                    title="Compassionate care backed by experience"
                  />

                  <p className="mt-6 text-sm leading-8 text-slate-600">
                    {doctor.about}
                  </p>
                </section>

                {/* Expertise */}
                <section className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9">
                  <SectionHeading
                    eyebrow="Clinical Expertise"
                    title="Areas of specialization"
                  />

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {doctor.expertise.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
                          <Check className="h-4 w-4 text-cyan-600" />
                        </div>

                        <span className="text-sm font-semibold text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Services */}
                <section className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9">
                  <SectionHeading
                    eyebrow="Services"
                    title="How this doctor can help"
                  />

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {doctor.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center justify-between rounded-2xl border border-slate-100 p-4"
                      >
                        <span className="text-sm font-semibold text-slate-700">
                          {service}
                        </span>

                        <ChevronRight className="h-4 w-4 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9">
                  <SectionHeading
                    eyebrow="Education"
                    title="Academic background"
                  />

                  <div className="mt-7 space-y-5">
                    {doctor.education.map((item, index) => (
                      <div
                        key={item.degree}
                        className="relative flex gap-5"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                          <GraduationCap className="h-5 w-5" />
                        </div>

                        <div className="flex-1 border-b border-slate-100 pb-5 last:border-0">
                          <div className="flex flex-col justify-between gap-1 sm:flex-row">
                            <h3 className="font-bold text-slate-900">
                              {item.degree}
                            </h3>

                            <span className="text-xs font-bold text-slate-400">
                              {item.year}
                            </span>
                          </div>

                          <p className="mt-1 text-sm text-slate-500">
                            {item.institute}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Awards */}
                <section className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9">
                  <SectionHeading
                    eyebrow="Recognition"
                    title="Awards & achievements"
                  />

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {doctor.awards.map((award) => (
                      <div
                        key={award}
                        className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
                      >
                        <Award className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />

                        <span className="text-sm font-semibold text-slate-700">
                          {award}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Experience */}
            {activeTab === "Experience" && (
              <div className="mt-8 space-y-8">
                <section className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9">
                  <SectionHeading
                    eyebrow="Professional Experience"
                    title={`${doctor.experience}+ years of clinical experience`}
                  />

                  <div className="mt-8 space-y-5">
                    <ExperienceItem
                      title={`${doctor.speciality} Specialist`}
                      organization={doctor.hospital.name}
                      duration={`Current · ${doctor.experience}+ years`}
                    />

                    <ExperienceItem
                      title="Senior Consultant"
                      organization="Leading Healthcare Institution"
                      duration="Previous Position"
                    />

                    <ExperienceItem
                      title="Clinical Training & Fellowship"
                      organization="Specialized Medical Centre"
                      duration="Earlier Career"
                    />
                  </div>
                </section>

                <section className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9">
                  <SectionHeading
                    eyebrow="Languages"
                    title="Languages spoken"
                  />

                  <div className="mt-7 flex flex-wrap gap-3">
                    {doctor.languages.map((language) => (
                      <div
                        key={language}
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2.5 text-sm font-bold text-cyan-700"
                      >
                        <Languages className="h-4 w-4" />
                        {language}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Reviews */}
            {activeTab === "Reviews" && (
              <div className="mt-8 space-y-6">
                <section className="rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-9">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-5xl font-black text-slate-950">
                        {doctor.rating}
                      </p>

                      <div className="mt-2 flex gap-1">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <Star
                            key={item}
                            className="h-5 w-5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      <p className="mt-2 text-sm text-slate-500">
                        Based on {doctor.reviews} reviews
                      </p>
                    </div>

                    <div className="h-px flex-1 bg-slate-100 sm:h-20 sm:w-px" />

                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-700">
                        Patient experience
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Patients have shared their experiences after
                        consultations with this doctor.
                      </p>
                    </div>
                  </div>
                </section>

                {reviews.map((review) => (
                  <article
                    key={review.name}
                    className="rounded-[2rem] border border-slate-200 bg-white p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                          {review.name.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            {review.name}
                          </p>

                          <p className="text-xs text-slate-400">
                            {review.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <Star
                            key={item}
                            className={`h-4 w-4 ${
                              item <= review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-600">
                      "{review.text}"
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            {/* Hospital */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Practice Location
                  </p>

                  <h3 className="mt-1 font-black text-slate-900">
                    {doctor.hospital.name}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                {doctor.hospital.address}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-600">
                <Clock3 className="h-4 w-4 text-cyan-600" />
                {doctor.hospital.timing}
              </div>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition-all hover:border-cyan-200 hover:text-cyan-700"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </button>
              <button
                type="button"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition-all hover:border-cyan-200 hover:text-cyan-700"
                >
                <Phone className="h-4 w-4" />
                Contact Clinic
             </button>
            </div>
            

            {/* Languages */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <Languages className="h-5 w-5 text-cyan-600" />

                <h3 className="font-black text-slate-900">
                  Languages
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {doctor.languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-full bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Consultation modes */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
              <h3 className="font-black text-slate-900">
                Consultation options
              </h3>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <Stethoscope className="h-5 w-5 text-cyan-600" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      In-person
                    </p>

                    <p className="text-xs text-slate-400">
                      At {doctor.hospital.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <Video className="h-5 w-5 text-cyan-600" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Video consultation
                    </p>

                    <p className="text-xs text-slate-400">
                      Connect online
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          APPOINTMENT BOOKING
      ====================================================== */}

      <section
        id="book-appointment"
        className="border-y border-slate-200 bg-white py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            {/* Booking */}
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-600">
                Book your visit
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Choose a convenient time
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Select your preferred date and available consultation slot.
              </p>

              {/* Dates */}
              <div className="mt-8">
                <p className="mb-4 text-sm font-black text-slate-800">
                  Select date
                </p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {appointmentDates.map((date) => {
                    const active =
                      selectedDate.date === date.date &&
                      selectedDate.month === date.month;

                    return (
                      <button
                        key={`${date.date}-${date.month}`}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`rounded-2xl border p-4 text-left transition-all ${
                          active
                            ? "border-slate-950 bg-slate-950 text-white shadow-xl"
                            : "border-slate-200 bg-white hover:border-cyan-300"
                        }`}
                      >
                        <p
                          className={`text-xs font-bold ${
                            active
                              ? "text-cyan-300"
                              : "text-slate-400"
                          }`}
                        >
                          {date.day}
                        </p>

                        <p className="mt-1 text-2xl font-black">
                          {date.date}
                        </p>

                        <p
                          className={`text-xs font-semibold ${
                            active
                              ? "text-slate-400"
                              : "text-slate-500"
                          }`}
                        >
                          {date.month}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time */}
              <div className="mt-9">
                <p className="mb-4 text-sm font-black text-slate-800">
                  Available time slots
                </p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {timeSlots.map((time) => {
                    const active = selectedTime === time;

                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-xl border px-4 py-3 text-sm font-bold transition-all ${
                          active
                            ? "border-cyan-600 bg-cyan-600 text-white shadow-lg shadow-cyan-200"
                            : "border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-700"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="h-fit rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Appointment Summary
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-16 w-16 rounded-2xl object-cover object-top"
                />

                <div>
                  <h3 className="font-black">{doctor.name}</h3>

                  <p className="mt-1 text-xs text-cyan-300">
                    {doctor.speciality}
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4 border-y border-white/10 py-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Date</span>

                  <span className="font-bold">
                    {selectedDate.day}, {selectedDate.date}{" "}
                    {selectedDate.month}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Time</span>

                  <span className="font-bold">{selectedTime}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Consultation</span>

                  <span className="font-bold">₹{doctor.fee}</span>
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <span className="text-sm text-slate-500">
                  Total
                </span>

                <span className="text-3xl font-black">
                  ₹{doctor.fee}
                </span>
              </div>

              {/* <Link
                to={`/appointments?doctor=${doctor.id}`}
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-black text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Continue to Booking
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link> */}

              <button
                type="button"
                onClick={() =>
                    navigate("/appointments", {
                    state: {
                        doctor,
                        selectedDate,
                        selectedTime,
                    },
                    })
                }
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-black text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                Continue to Booking
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="mt-4 text-center text-[11px] leading-5 text-slate-600">
                You can review your appointment details before confirming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 sm:px-10 lg:px-16 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Ready when you are
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                Book your consultation with {doctor.name}.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Choose a convenient time and take the next step in your
                healthcare journey.
              </p>
            </div>

            <a
              href="#book-appointment"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

/* =========================================================
   SMALL COMPONENTS
   ========================================================= */

const QuickStat = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 border-b border-slate-100 p-5 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
        {React.cloneElement(icon, {
          className: "h-5 w-5",
        })}
      </div>

      <div>
        <p className="text-xs font-medium text-slate-400">{label}</p>

        <p className="mt-1 text-sm font-black text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
};

const SectionHeading = ({ eyebrow, title }) => {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
        {title}
      </h2>
    </div>
  );
};

const ExperienceItem = ({ title, organization, duration }) => {
  return (
    <div className="flex gap-4 rounded-2xl bg-slate-50 p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
        <Stethoscope className="h-5 w-5" />
      </div>

      <div>
        <h3 className="font-black text-slate-900">{title}</h3>

        <p className="mt-1 text-sm font-semibold text-cyan-600">
          {organization}
        </p>

        <p className="mt-1 text-xs text-slate-400">{duration}</p>
      </div>
    </div>
  );
};

const UsersIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 text-cyan-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
      />

      <circle cx="9" cy="7" r="4" />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
      />
    </svg>
  );
};

export default SingleDoctor;