import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
  Stethoscope,
  Video,
  X,
} from "lucide-react";

/* =========================================================
   DEFAULT APPOINTMENTS
========================================================= */

const defaultAppointments = [
  {
    id: 1,
    doctor: "Dr. Priya Mehta",
    speciality: "Dermatologist",
    date: "28 Sept 2026",
    time: "10:30 AM",
    type: "Video Consultation",
    status: "Today",
    fee: 700,
    image: "/images/doctors/doctor-female-1.jpg",
  },
  {
    id: 2,
    doctor: "Dr. Arjun Sharma",
    speciality: "Cardiologist",
    date: "30 Sept 2026",
    time: "04:00 PM",
    type: "Clinic Visit",
    status: "Upcoming",
    fee: 900,
    image: "/images/doctors/doctor-male-1.jpg",
  },
  {
    id: 3,
    doctor: "Dr. Neha Gupta",
    speciality: "Gynecologist",
    date: "22 Sept 2026",
    time: "09:00 AM",
    type: "Video Consultation",
    status: "Completed",
    fee: 800,
    image: "/images/doctors/doctor-female-3.webp",
  },
  {
    id: 4,
    doctor: "Dr. Rahul Verma",
    speciality: "Neurologist",
    date: "02 Oct 2026",
    time: "01:30 PM",
    type: "Clinic Visit",
    status: "Upcoming",
    fee: 1100,
    image: "/images/doctors/doctor-male-2.jpg",
  },
];

/* =========================================================
   LOAD APPOINTMENTS
========================================================= */

const getInitialAppointments = () => {
  try {
    const saved = localStorage.getItem("medicare_appointments");

    if (!saved) {
      return defaultAppointments;
    }

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : defaultAppointments;
  } catch (error) {
    console.error("Failed to load appointments:", error);
    return defaultAppointments;
  }
};

/* =========================================================
   COMPONENT
========================================================= */

const Appointments = () => {
  const location = useLocation();
  const navigate = useNavigate();

  /* -------------------------------------------------------
     DATA FROM SINGLE DOCTOR PAGE
  ------------------------------------------------------- */

  const bookingDoctor = location.state?.doctor;
  const bookingDate = location.state?.selectedDate;
  const bookingTime = location.state?.selectedTime;

  /* -------------------------------------------------------
     STATE
  ------------------------------------------------------- */

  const [appointments, setAppointments] = useState(
    getInitialAppointments
  );

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [consultationType, setConsultationType] = useState(
    "Video Consultation"
  );

  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reason, setReason] = useState("");

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  /* -------------------------------------------------------
     SAVE TO LOCAL STORAGE
  ------------------------------------------------------- */

  useEffect(() => {
    localStorage.setItem(
      "medicare_appointments",
      JSON.stringify(appointments)
    );
  }, [appointments]);

  /* -------------------------------------------------------
     FILTERED APPOINTMENTS
  ------------------------------------------------------- */

  const filtered = useMemo(() => {
    return appointments.filter((item) => {
      const searchValue = search.toLowerCase().trim();

      const matchSearch =
        item.doctor.toLowerCase().includes(searchValue) ||
        item.speciality.toLowerCase().includes(searchValue) ||
        item.type.toLowerCase().includes(searchValue);

      const matchFilter =
        filter === "All" ? true : item.status === filter;

      return matchSearch && matchFilter;
    });
  }, [appointments, search, filter]);

  /* -------------------------------------------------------
     STATS
  ------------------------------------------------------- */

  const stats = {
    total: appointments.length,

    today: appointments.filter(
      (a) => a.status === "Today"
    ).length,

    upcoming: appointments.filter(
      (a) => a.status === "Upcoming"
    ).length,

    completed: appointments.filter(
      (a) => a.status === "Completed"
    ).length,
  };

  /* -------------------------------------------------------
     BADGE
  ------------------------------------------------------- */

  const badgeStyle = (status) => {
    switch (status) {
      case "Today":
        return "bg-emerald-100 text-emerald-700";

      case "Upcoming":
        return "bg-cyan-100 text-cyan-700";

      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  /* -------------------------------------------------------
     DATE FORMAT
  ------------------------------------------------------- */

  const formatDate = (date) => {
    if (!date) return "";

    return `${date.date} ${date.month} 2026`;
  };

  const getFee = (doctor) => {
    const fee = doctor?.consultation ?? doctor?.fee ?? 0;

    const numericFee = Number(
        String(fee).replace(/[^\d.]/g, "")
    );

    return Number.isFinite(numericFee) ? numericFee : 0;
 };

  /* -------------------------------------------------------
     CONFIRM BOOKING
  ------------------------------------------------------- */

  const handleConfirmBooking = (e) => {
    e.preventDefault();

    if (!bookingDoctor || !bookingDate || !bookingTime) {
      return;
    }

    if (!patientName.trim() || !phoneNumber.trim()) {
      return;
    }

    const newAppointment = {
      id: Date.now(),

      doctor: bookingDoctor.name,

      speciality: bookingDoctor.speciality,

      date: formatDate(bookingDate),

      time: bookingTime,

      type: consultationType,

      status: "Upcoming",

      fee: getFee(bookingDoctor),

      image: bookingDoctor.image,

      patientName: patientName.trim(),

      phoneNumber: phoneNumber.trim(),

      reason: reason.trim(),

      hospital:
        bookingDoctor.hospital?.name ||
        bookingDoctor.hospital ||
        "MediCare Hospital",

      createdAt: new Date().toISOString(),
    };

    setAppointments((previous) => [
      newAppointment,
      ...previous,
    ]);

    setBookingConfirmed(true);

    /*
      Clear router state so the same booking
      does not appear again after refresh.
    */

    navigate("/appointments", {
      replace: true,
      state: null,
    });
  };

  /* -------------------------------------------------------
     CANCEL BOOKING
  ------------------------------------------------------- */

  const handleCancelBooking = () => {
    navigate("/appointments", {
      replace: true,
      state: null,
    });
  };

  return (
    <main className="min-h-screen bg-slate-950">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/bg-team.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-cyan-950/40" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-xl">

              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              <span className="text-sm font-semibold text-cyan-200">
                Smart Appointment Management
              </span>

            </div>

            <h1 className="text-5xl font-black text-white sm:text-6xl">

              My

              <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Appointments
              </span>

            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              View, manage and schedule your doctor appointments
              with verified healthcare professionals.
            </p>

            {/* SEARCH */}

            <div className="mt-10 rounded-3xl border border-white/20 bg-white/10 p-3 backdrop-blur-2xl">

              <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4">

                <Search className="h-5 w-5 text-slate-400" />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search doctor or speciality..."
                  className="w-full bg-transparent text-slate-700 outline-none"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 lg:px-8">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon="📅"
            value={stats.total}
            label="Total"
          />

          <StatCard
            icon="🟢"
            value={stats.today}
            label="Today"
          />

          <StatCard
            icon="⏳"
            value={stats.upcoming}
            label="Upcoming"
          />

          <StatCard
            icon="✔️"
            value={stats.completed}
            label="Completed"
          />

        </div>

      </section>

      {/* =====================================================
          BOOKING CONFIRMATION
      ===================================================== */}

      {bookingDoctor &&
        bookingDate &&
        bookingTime &&
        !bookingConfirmed && (

          <section className="relative z-20 mx-auto mt-10 max-w-7xl px-6 lg:px-8">

            <div className="overflow-hidden rounded-[32px] border border-cyan-400/20 bg-white/10 shadow-[0_30px_100px_rgba(6,182,212,0.12)] backdrop-blur-2xl">

              {/* HEADER */}

              <div className="flex flex-col justify-between gap-5 border-b border-white/10 p-6 sm:p-8 lg:flex-row lg:items-center">

                <div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">

                    <CalendarDays className="h-4 w-4" />

                    Confirm Appointment

                  </div>

                  <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                    Complete your booking
                  </h2>

                  <p className="mt-2 text-sm text-slate-400">
                    Review your appointment details and provide
                    patient information.
                  </p>

                </div>

                <button
                  type="button"
                  onClick={handleCancelBooking}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                  Cancel
                </button>

              </div>

              <div className="grid lg:grid-cols-2">

                {/* ==========================================
                    DOCTOR SUMMARY
                ========================================== */}

                <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">

                  <div className="flex items-center gap-5">

                    <img
                      src={bookingDoctor.image}
                      alt={bookingDoctor.name}
                      className="h-24 w-24 rounded-2xl object-cover ring-4 ring-white/10"
                    />

                    <div>

                      <h3 className="text-xl font-black text-white">
                        {bookingDoctor.name}
                      </h3>

                      <p className="mt-1 font-semibold text-cyan-300">
                        {bookingDoctor.speciality}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">

                        <MapPin className="h-4 w-4" />

                        {bookingDoctor.hospital?.name ||
                          bookingDoctor.hospital ||
                          "MediCare Hospital"}

                      </div>

                    </div>

                  </div>

                  {/* DETAILS */}

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">

                    <BookingDetail
                      icon={<CalendarDays className="h-5 w-5" />}
                      label="Date"
                      value={formatDate(bookingDate)}
                    />

                    <BookingDetail
                      icon={<Clock3 className="h-5 w-5" />}
                      label="Time"
                      value={bookingTime}
                    />

                    <BookingDetail
                      icon={<ShieldCheck className="h-5 w-5" />}
                      label="Consultation Fee"
                      value={`₹${getFee(bookingDoctor).toLocaleString("en-IN")}`}
                    />

                    <BookingDetail
                      icon={<Stethoscope className="h-5 w-5" />}
                      label="Speciality"
                      value={bookingDoctor.speciality}
                    />

                  </div>

                  {/* SECURITY */}

                  <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">

                    <div className="flex gap-3">

                      <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />

                      <div>

                        <p className="text-sm font-black text-emerald-300">
                          Secure Appointment
                        </p>

                        <p className="mt-1 text-xs leading-5 text-emerald-200/70">
                          Your appointment information is securely
                          stored on this device.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                {/* ==========================================
                    FORM
                ========================================== */}

                <form
                  onSubmit={handleConfirmBooking}
                  className="p-6 sm:p-8"
                >

                  {/* CONSULTATION */}

                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                    Consultation Type
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">

                    <ConsultationButton
                      active={
                        consultationType ===
                        "Video Consultation"
                      }
                      icon={<Video className="h-5 w-5" />}
                      title="Video Consultation"
                      description="Consult online"
                      onClick={() =>
                        setConsultationType(
                          "Video Consultation"
                        )
                      }
                    />

                    <ConsultationButton
                      active={
                        consultationType ===
                        "Clinic Visit"
                      }
                      icon={
                        <Stethoscope className="h-5 w-5" />
                      }
                      title="Clinic Visit"
                      description="Visit clinic"
                      onClick={() =>
                        setConsultationType(
                          "Clinic Visit"
                        )
                      }
                    />

                  </div>

                  {/* PATIENT */}

                  <div className="mt-8">

                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                      Patient Information
                    </p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">

                      <Input
                        label="Patient Name"
                        value={patientName}
                        onChange={(e) =>
                          setPatientName(e.target.value)
                        }
                        placeholder="Enter patient name"
                        required
                      />

                      <Input
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(e) =>
                          setPhoneNumber(e.target.value)
                        }
                        placeholder="Enter phone number"
                        type="tel"
                        required
                      />

                    </div>

                    <div className="mt-4">

                      <label className="text-sm font-bold text-slate-300">
                        Reason for Consultation
                      </label>

                      <textarea
                        value={reason}
                        onChange={(e) =>
                          setReason(e.target.value)
                        }
                        rows={4}
                        placeholder="Briefly describe your concern..."
                        className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                      />

                    </div>

                  </div>

                  {/* TOTAL */}

                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5">

                    <div>

                      <p className="text-xs font-medium text-slate-400">
                        Total Consultation Fee
                      </p>

                      <p className="mt-1 text-2xl font-black text-white">
                        ₹{getFee(bookingDoctor).toLocaleString("en-IN")}
                      </p>

                    </div>

                    <ShieldCheck className="h-7 w-7 text-cyan-300" />

                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30"
                  >
                    Confirm Appointment

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                </form>

              </div>

            </div>

          </section>
        )}

      {/* =====================================================
          SUCCESS
      ===================================================== */}

      {bookingConfirmed && (

        <section className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">

          <div className="rounded-[32px] border border-emerald-400/20 bg-emerald-500/10 p-10 text-center backdrop-blur-xl">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20">

              <CheckCircle2 className="h-10 w-10 text-emerald-400" />

            </div>

            <p className="mt-6 text-sm font-black uppercase tracking-wider text-emerald-300">
              Appointment Confirmed
            </p>

            <h2 className="mt-2 text-3xl font-black text-white">
              Your appointment has been booked
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Your appointment has been successfully added
              to your appointment history.
            </p>

            <button
              type="button"
              onClick={() => setBookingConfirmed(false)}
              className="mt-7 rounded-xl bg-white px-6 py-3 font-black text-slate-950 transition hover:scale-105"
            >
              View Appointments
            </button>

          </div>

        </section>
      )}

      {/* =====================================================
          FILTER
      ===================================================== */}

      <section className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">

        <div className="flex flex-wrap gap-3">

          {[
            "All",
            "Today",
            "Upcoming",
            "Completed",
          ].map((item) => (

            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-5 py-2.5 font-semibold transition ${
                filter === item
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-white/10 text-slate-300 backdrop-blur-xl hover:bg-white/20"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

      </section>

      {/* =====================================================
          APPOINTMENTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="grid gap-6">

          {filtered.length > 0 ? (

            filtered.map((item) => (

              <div
                key={item.id}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-2xl transition hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(6,182,212,0.2)]"
              >

                <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center">

                  {/* DOCTOR */}

                  <div className="flex items-center gap-4 lg:w-[340px]">

                    <img
                      src={item.image}
                      alt={item.doctor}
                      className="h-24 w-24 rounded-2xl object-cover"
                    />

                    <div>

                      <h3 className="text-xl font-black text-white">
                        {item.doctor}
                      </h3>

                      <p className="font-semibold text-cyan-300">
                        {item.speciality}
                      </p>

                      <span
                        className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${badgeStyle(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>

                    </div>

                  </div>

                  {/* DETAILS */}

                  <div className="grid flex-1 grid-cols-2 gap-4 lg:grid-cols-4">

                    <AppointmentDetail
                      label="Date"
                      value={item.date}
                    />

                    <AppointmentDetail
                      label="Time"
                      value={item.time}
                    />

                    <AppointmentDetail
                      label="Type"
                      value={item.type}
                    />

                    <AppointmentDetail
                      label="Fee"
                      value={`₹${item.fee}`}
                      highlight
                    />

                  </div>

                  {/* ACTIONS */}

                  <div className="flex gap-3">

                    <button
                      type="button"
                      className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-bold text-white transition hover:bg-white/20"
                    >
                      Reschedule
                    </button>

                    <button
                      type="button"
                      className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-bold text-white transition hover:scale-105"
                    >
                      {item.type ===
                      "Video Consultation"
                        ? "Join Call"
                        : "View Details"}
                    </button>

                  </div>

                </div>

              </div>

            ))

          ) : (

            <div className="rounded-[30px] border border-white/10 bg-white/10 p-16 text-center backdrop-blur-xl">

              <CalendarDays className="mx-auto h-12 w-12 text-slate-500" />

              <h3 className="mt-5 text-xl font-black text-white">
                No appointments found
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Try changing your search or filter.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

        <div className="rounded-[36px] bg-gradient-to-r from-cyan-600 to-blue-700 p-10 text-center shadow-2xl">

          <h2 className="text-4xl font-black text-white">
            Need a New Appointment?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-cyan-100">
            Book appointments with verified specialists across
            multiple departments with secure online scheduling.
          </p>

          <button
            onClick={() => navigate("/doctors")}
            className="mt-8 rounded-2xl bg-white px-8 py-4 text-lg font-black text-cyan-700 transition hover:scale-105"
          >
            Book New Appointment →
          </button>

        </div>

      </section>

    </main>
  );
};

/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({ icon, value, label }) => {
  return (
    <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-2xl">

      <div className="text-3xl">
        {icon}
      </div>

      <h3 className="mt-3 text-3xl font-black text-white">
        {value}
      </h3>

      <p className="mt-1 text-slate-300">
        {label}
      </p>

    </div>
  );
};

/* =========================================================
   BOOKING DETAIL
========================================================= */

const BookingDetail = ({ icon, label, value }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
          {icon}
        </div>

        <div className="min-w-0">

          <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">
            {label}
          </p>

          <p className="mt-1 truncate text-sm font-bold text-white">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
};

/* =========================================================
   CONSULTATION BUTTON
========================================================= */

const ConsultationButton = ({
  active,
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${
        active
          ? "border-cyan-400 bg-cyan-500/10"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
    >

      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
          active
            ? "bg-cyan-500 text-slate-950"
            : "bg-white/10 text-slate-400"
        }`}
      >
        {icon}
      </div>

      <div className="flex-1">

        <p className="text-sm font-black text-white">
          {title}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>

      </div>

      {active && (
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400">
          <Check className="h-3 w-3 text-slate-950" />
        </div>
      )}

    </button>
  );
};

/* =========================================================
   INPUT
========================================================= */

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <div>

      <label className="text-sm font-bold text-slate-300">
        {label}

        {required && (
          <span className="ml-1 text-red-400">
            *
          </span>
        )}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
      />

    </div>
  );
};

/* =========================================================
   APPOINTMENT DETAIL
========================================================= */

const AppointmentDetail = ({
  label,
  value,
  highlight = false,
}) => {
  return (
    <div>

      <p className="text-xs uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p
        className={`mt-1 font-bold ${
          highlight
            ? "text-xl text-cyan-300"
            : "text-white"
        }`}
      >
        {value}
      </p>

    </div>
  );
};

export default Appointments;
