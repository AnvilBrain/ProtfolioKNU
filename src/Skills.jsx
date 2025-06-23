import React from 'react';
import { FaJsSquare } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiAndroid } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'JavaScript',      icon: <FaJsSquare    size={32} className="text-yellow-500" /> },
    { name: 'Python',          icon: <SiPython      size={32} className="text-blue-500"   /> },
    { name: 'C++ / ESP32',     icon: <SiCplusplus   size={32} className="text-purple-600" /> },
    { name: 'Android Studio',  icon: <SiAndroid     size={32} className="text-green-600"  /> },
  ];

  return (
    <section id="skills" className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Мої навички</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            {icon}
            <span className="mt-2 font-medium text-center">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
