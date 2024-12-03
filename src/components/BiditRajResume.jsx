import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const BiditRajResume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#1c1c1c] text-gray-300 min-h-screen flex justify-center items-start py-12 px-6 relative">
      <div className="w-full space-y-12">
        {/* Home Button */}
        <div className="absolute top-6 right-6">
          <Link
            to="/" // The link goes to the homepage
            className="inline-block bg-[#4c9dd0] text-white px-6 py-2 rounded-lg shadow-md transition-colors duration-300 hover:bg-[#93c5fd] group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M14.828 10l-4-4m0 0l-4 4m4-4v8" />
            </svg>
            Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="group bg-[#1c1c1c] text-white p-8 text-center rounded-md shadow-md transition-colors duration-300">
          <img
            src="/profile.jpeg" // Path to the image in the public folder
            alt="Bidit Raj"
            className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg group-hover:border-[#4c9dd0] transition-colors duration-300"
          />
          <h1 className="text-4xl font-bold mb-2 group-hover:text-[#4c9dd0] transition-colors duration-300">Bidit Raj</h1>
          <p className="text-lg opacity-80 text-gray-400 group-hover:text-[#93c5fd] transition-colors duration-300">Frontend Developer & UI/UX Designer</p>

          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="mailto:biditraj@gmail.com"
              className="hover:text-[#93c5fd] transition-colors flex items-center group-hover:text-[#4c9dd0]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              biditraj@gmail.com
            </a>
            <a
              href="tel:+919337718826"
              className="hover:text-[#93c5fd] transition-colors flex items-center group-hover:text-[#4c9dd0]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 9337718826
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Education Section */}
          <section data-aos="fade-up" className="group hover:bg-[#2a2a2a] transition-all duration-300">
            <h2 className="text-2xl font-semibold pb-2 mb-4 group-hover:text-[#4c9dd0] transition-colors duration-300">Education</h2>
            <div className="p-4 bg-[#2a2a2a] rounded-lg shadow-sm group-hover:bg-[#3a3a3a] transition-all duration-300">
              <h3 className="font-bold text-lg group-hover:text-[#4c9dd0] transition-colors duration-300">National Institute of Science and Technology</h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">B.Tech in Computer Science</p>
              <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">Expected Graduation: May 2025</p>
            </div>
          </section>

          {/* Professional Summary Section */}
          <section data-aos="fade-up" className="group hover:bg-[#2a2a2a] transition-all duration-300">
            <h2 className="text-2xl font-semibold pb-2 mb-4 group-hover:text-[#4c9dd0] transition-colors duration-300">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
              Aspiring Frontend Developer and UI/UX Designer with a strong foundation in web technologies. 
              Skilled in creating responsive and intuitive web interfaces using modern frameworks and design principles.
            </p>
          </section>

          {/* Experience Section */}
          <section data-aos="fade-up" className="group hover:bg-[#2a2a2a] transition-all duration-300">
            <h2 className="text-2xl font-semibold pb-2 mb-4 group-hover:text-[#4c9dd0] transition-colors duration-300">Experience</h2>
            <div className="space-y-4">
              <div className="p-4 bg-[#2a2a2a] rounded-lg shadow-sm group-hover:bg-[#3a3a3a] transition-all duration-300">
                <h3 className="font-bold text-lg group-hover:text-[#4c9dd0] transition-colors duration-300">Freelance Graphic Designer</h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">TSM, Mumbai</p>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">June - August 2022</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 text-sm group-hover:text-gray-100 transition-colors duration-300">
                  <li>Created compelling visual designs for diverse client needs</li>
                  <li>Delivered high-quality graphics for print and web platforms</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section data-aos="fade-up" className="group hover:bg-[#2a2a2a] transition-all duration-300">
            <h2 className="text-2xl font-semibold pb-2 mb-4 group-hover:text-[#4c9dd0] transition-colors duration-300">Projects</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#2a2a2a] rounded-lg hover:shadow-md transition-shadow duration-300 group-hover:bg-[#3a3a3a]">
                <h3 className="font-bold text-lg text-[#4c9dd0] group-hover:text-[#93c5fd] transition-colors duration-300">Portfolio Website</h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">React.js, HTML, CSS, JavaScript</p>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">Personal portfolio showcasing design and development skills</p>
              </div>
              <div className="p-4 bg-[#2a2a2a] rounded-lg hover:shadow-md transition-shadow duration-300 group-hover:bg-[#3a3a3a]">
                <h3 className="font-bold text-lg text-[#4c9dd0] group-hover:text-[#93c5fd] transition-colors duration-300">E-commerce Platform</h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">React.js, HTML, CSS, JavaScript</p>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">Collaborative responsive e-commerce web application</p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section data-aos="fade-up" className="group hover:bg-[#2a2a2a] transition-all duration-300">
            <h2 className="text-2xl font-semibold pb-2 mb-4 group-hover:text-[#4c9dd0] transition-colors duration-300">Skills</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-[#2a2a2a] rounded-lg group-hover:bg-[#3a3a3a] transition-all duration-300">
                <h3 className="font-bold mb-2 group-hover:text-[#93c5fd] transition-colors duration-300">Web Technologies</h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">HTML5, CSS, JavaScript, React.js</p>
              </div>
              <div className="p-4 bg-[#2a2a2a] rounded-lg group-hover:bg-[#3a3a3a] transition-all duration-300">
                <h3 className="font-bold mb-2 group-hover:text-[#93c5fd] transition-colors duration-300">Design Skills</h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">UI/UX Design, Wireframing, Prototyping</p>
              </div>
              <div className="p-4 bg-[#2a2a2a] rounded-lg group-hover:bg-[#3a3a3a] transition-all duration-300">
                <h3 className="font-bold mb-2 group-hover:text-[#93c5fd] transition-colors duration-300">Tools</h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">Git, WordPress, Microsoft Office</p>
              </div>
              <div className="p-4 bg-[#2a2a2a] rounded-lg group-hover:bg-[#3a3a3a] transition-all duration-300">
                <h3 className="font-bold mb-2 group-hover:text-[#93c5fd] transition-colors duration-300">Soft Skills</h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">Communication, Teamwork, Problem-solving</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BiditRajResume;
