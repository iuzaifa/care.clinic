import bgImage from "../../assets/images/hero.jpg";

const HeroSection = () => {
  return (
   <section
  className="relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/70"></div>

  <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[4px] text-cyan-600 sm:text-sm">
          Welcome To CareClinic
        </p>

        <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Your Health,
          <br />
          Our <span className="text-cyan-600">Priority</span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-8 text-gray-700 sm:text-lg">
          We provide exceptional healthcare services with compassion and
          excellence for you and your family.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700">
            Book Appointment
          </button>

          <button className="rounded-full border border-cyan-600 px-8 py-4 font-semibold text-cyan-600 transition hover:bg-cyan-50">
            Learn More
          </button>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <h3 className="font-semibold">Easy</h3>
            <p className="text-sm text-gray-600">Appointment</p>
          </div>

          <div>
            <h3 className="font-semibold">Expert</h3>
            <p className="text-sm text-gray-600">Doctors</p>
          </div>

          <div>
            <h3 className="font-semibold">Quality</h3>
            <p className="text-sm text-gray-600">Treatment</p>
          </div>

          <div>
            <h3 className="font-semibold">24/7</h3>
            <p className="text-sm text-gray-600">Support</p>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8 lg:w-[420px]">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          Book Appointment
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-slate-200 p-3 focus:border-cyan-500 focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-slate-200 p-3 focus:border-cyan-500 focus:outline-none"
          />

          <select className="w-full rounded-lg border border-slate-200 p-3 focus:border-cyan-500 focus:outline-none">
            <option>Select Department</option>
            <option>Select Department</option>
            <option>Select Department</option>
            <option>Select Department</option>
            <option>Select Department</option>
          </select>

          <select className="w-full rounded-lg border border-slate-200 p-3 focus:border-cyan-500 focus:outline-none">
            <option>Select Doctor</option>
            <option>Select Doctor</option>
            <option>Select Doctor</option>
            <option>Select Doctor</option>
            <option>Select Doctor</option>
            <option>Select Doctor</option>
          </select>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="date"
              className="rounded-lg border border-slate-200 p-3 focus:border-cyan-500 focus:outline-none"
            />

            <input
              type="time"
              className="rounded-lg border border-slate-200 p-3 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <button
            className="w-full rounded-lg bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-700"
          >
            Book Now
          </button>
        </form>
      </div>

    </div>
  </div>
</section>
  );
};

export default HeroSection;


