import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center bg-slate-50 px-5">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-600">
              Error 404
            </span>

            <h1 className="mt-6 text-7xl font-extrabold text-cyan-600 md:text-8xl">
              404
            </h1>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Page Not Found
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
              Sorry, the page you are looking for doesn't exist or has been
              moved. Please return to the homepage or explore our services.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/"
                className="rounded-full bg-cyan-600 px-8 py-4 font-semibold text-white transition hover:bg-cyan-700"
              >
                Back Home
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-cyan-600 px-8 py-4 font-semibold text-cyan-600 transition hover:bg-cyan-50"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="flex h-[320px] w-[320px] items-center justify-center rounded-full bg-cyan-100">
              <div className="text-center">
                <h1 className="text-8xl font-extrabold text-cyan-600">
                  404
                </h1>
                <p className="mt-2 text-lg font-medium text-slate-700">
                  Oops! Page Missing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;