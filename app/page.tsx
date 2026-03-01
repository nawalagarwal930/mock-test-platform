export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          MockTest Pro
        </h1>

        <div className="space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Master Competitive Exams with Real Mock Tests
        </h2>

        <p className="max-w-xl mt-6 text-lg text-gray-600">
          Practice free and premium mock tests, track your performance,
          and compete with thousands of aspirants in real-time rankings.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700">
            Start Free Test
          </button>

          <button className="px-6 py-3 text-lg font-semibold text-blue-600 border border-blue-600 rounded-xl hover:bg-blue-50">
            View Test Series
          </button>
        </div>
      </section>
    </main>
  );
}