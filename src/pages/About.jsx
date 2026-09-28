import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Activity,
  Clock3,
  Award,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    value: "50K+",
    label: "Patients Served",
    icon: Users,
  },
  {
    value: "1,200+",
    label: "Healthcare Specialists",
    icon: Stethoscope,
  },
  {
    value: "98%",
    label: "Patient Satisfaction",
    icon: HeartPulse,
  },
  {
    value: "24/7",
    label: "Care & Support",
    icon: Clock3,
  },
];

const values = [
  {
    icon: HeartPulse,
    title: "Patient First",
    description:
      "Every experience is designed around patient comfort, safety, trust, and better healthcare outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Secure",
    description:
      "We prioritize privacy, secure healthcare experiences, and responsible handling of sensitive information.",
  },
  {
    icon: Sparkles,
    title: "Modern Healthcare",
    description:
      "Technology and thoughtful design come together to make healthcare simpler, faster, and more accessible.",
  },
  {
    icon: Activity,
    title: "Better Outcomes",
    description:
      "We help patients connect with the right care while making the healthcare journey more transparent.",
  },
];

const highlights = [
  "Easy specialist discovery",
  "Simple appointment scheduling",
  "Personalized healthcare experience",
  "Modern and intuitive interface",
  "Secure patient experience",
  "Designed for long-term care",
];

function About() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ========================= HERO ========================= */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Decorative background */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Hero content */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Reimagining Healthcare
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Healthcare,
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  designed around you.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                We are building a simpler, smarter, and more human healthcare
                experience—connecting patients with trusted professionals and
                making every step of care easier.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/appointments"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Book an Appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/specialities"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
                >
                  Explore Specialities
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Premium visual card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-indigo-500/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Your Healthcare
                      </p>
                      <h3 className="mt-1 text-xl font-semibold text-slate-900">
                        All in one place
                      </h3>
                    </div>

                    <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
                      <HeartPulse className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-7 space-y-3">
                    {[
                      ["Find a Specialist", "Connect with trusted doctors"],
                      ["Book Appointment", "Choose a time that works"],
                      ["Manage Your Care", "Keep everything organized"],
                    ].map(([title, subtitle]) => (
                      <div
                        key={title}
                        className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                          <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {title}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-500">
                            {subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 rounded-2xl bg-slate-950 p-4 text-white">
                    <div className="rounded-xl bg-white/10 p-2.5">
                      <ShieldCheck className="h-5 w-5 text-cyan-300" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Care you can trust
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        Built with security and patient experience in mind
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= STATS ========================= */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-8 sm:px-8 lg:grid-cols-4 lg:px-12">
          {stats.map(({ value, label, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex items-center gap-4 px-4 py-5 ${
                index !== 0 ? "border-slate-100 lg:border-l" : ""
              }`}
            >
              <div className="rounded-xl bg-slate-50 p-3 text-cyan-600">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <p className="text-2xl font-bold tracking-tight text-slate-900">
                  {value}
                </p>
                <p className="mt-0.5 text-xs font-medium text-slate-500">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= STORY ========================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Our Story
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Healthcare should feel simple, not overwhelming.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Finding the right doctor, understanding available specialities,
              and managing appointments can often feel unnecessarily
              complicated. Our platform is built to bring these experiences
              together in one thoughtful digital healthcare ecosystem.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              From discovering the right specialist to scheduling care, every
              interaction is designed with clarity, accessibility, and patient
              trust at its core.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Story visual */}
          <div className="relative">
            <div className="rounded-[2rem] bg-slate-950 p-5 shadow-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950">
                    <Stethoscope className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-white">
                      Human-centered care
                    </p>
                    <p className="text-sm text-slate-400">
                      Technology that works for people
                    </p>
                  </div>
                </div>

                <div className="mt-8 h-px bg-white/10" />

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/[0.06] p-5">
                    <Award className="h-6 w-6 text-cyan-300" />
                    <p className="mt-5 text-2xl font-bold text-white">01</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Patient-first philosophy
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.06] p-5">
                    <ShieldCheck className="h-6 w-6 text-cyan-300" />
                    <p className="mt-5 text-2xl font-bold text-white">02</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Privacy-conscious design
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.06] p-5">
                    <Activity className="h-6 w-6 text-cyan-300" />
                    <p className="mt-5 text-2xl font-bold text-white">03</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Smarter healthcare journeys
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.06] p-5">
                    <Users className="h-6 w-6 text-cyan-300" />
                    <p className="mt-5 text-2xl font-bold text-white">04</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Connected care ecosystem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= MISSION ========================= */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              What Drives Us
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Better care starts with a better experience.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Our mission is to make quality healthcare easier to discover,
              easier to access, and easier to manage through thoughtful
              technology.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= EXPERIENCE ========================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
                The Experience
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Everything you need to navigate your care.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
              A modern healthcare platform should remove friction—not add
              another layer of complexity. That is why we focus on intuitive
              navigation, meaningful information, and clear next steps.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] bg-slate-950 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Discover",
                  text: "Explore specialists and healthcare services based on your needs.",
                },
                {
                  number: "02",
                  title: "Connect",
                  text: "Choose a professional and find an appointment that fits your schedule.",
                },
                {
                  number: "03",
                  title: "Continue Care",
                  text: "Keep your healthcare journey organized through a seamless experience.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-7"
                >
                  <span className="text-sm font-bold text-cyan-300">
                    {item.number}
                  </span>

                  <h3 className="mt-8 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>

                  <div className="mt-7 h-px bg-white/10" />

                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    Designed for simplicity
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================= CTA ========================= */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Your Care, Your Way
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Ready to take the next step?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Find the right specialist and make your next healthcare
                appointment with confidence.
              </p>
            </div>

            <a
              href="/appointments"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;