import React from "react";

const Education = () => {
  return (
    <section className="relative w-full px-6 py-16 bg-gradient-to-br from-cyan-100 via-white to-blue-100 overflow-hidden">
      {/* Glowing Background Accent */}
      <div className="absolute top-10 right-10 w-52 h-52 bg-cyan-300 opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center text-cyan-500 mb-10">
          Education
        </h2>

        <div className="bg-white/50 backdrop-blur-md border border-gray-300 shadow-xl rounded-3xl p-8 md:p-12 text-center space-y-4 transition hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-gray-800">
            International Islamic University Chittagong (IIUC)
          </h3>
          <p className="text-gray-700 text-lg font-medium">
            Department: Computer Science & Engineering (CSE)
          </p>
          <p className="text-gray-600">Semester: 5th</p>
          <p className="italic text-sm text-gray-500">
            Studying at International Islamic University, Chattogram
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
