import React from "react";

const Education = () => {
  return (
    <section className="max-w-7xl mx-auto my-10 p-6 bg-gray-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-cyan-500">
        Education
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-semibold mb-2">
          International Islamic University Chittagong (IIUC)
        </h3>
        <p className="text-gray-700 mb-1">
          Department: Computer Science & Engineering (CSE)
        </p>
        <p className="text-gray-700 mb-4">Semester: 5th</p>
        <p className="italic text-sm text-gray-500">
          Studying at International Islamic University, Chattogram
        </p>
      </div>
    </section>
  );
};

export default Education;
