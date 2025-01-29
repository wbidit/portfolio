import React from "react";
import { FileText, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const PortfolioHero = () => {
  return (
    <>
      <style>
        {`
          .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
            letter-spacing: 0.2Dem;
            text-transform: uppercase;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .vertical-labels {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            padding: 2rem;
            gap: 1.5rem;
          }

          .content-grid {
            display: grid;
            grid-template-columns: 1fr 2px 1fr;
            height: 100%;
            min-height: 400px;
            position: relative;
            gap: 2rem;
          }

          .left-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 16px;
          }

          .right-column {
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 1rem;
            height: 100%;
          }

          .bottom-text {
            grid-column: span 3;
            text-align: center;
            padding-top: 2rem;
            padding-bottom: 2rem;
            font-size: 0.875rem;
            color: #e5e7eb;
          }

          .content-wrapper {
            background-color: #1f2937;
            position: relative;
            overflow-x: hidden;
          }

          .vertical-text:hover {
            color: #d1d5db;
            transform: scale(1.1);
          }

          .link:hover {
            background-color: #374151;
            color: #e5e7eb;
            transition: background-color 0.3s ease;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
            transform: scale(1.1);
          }

          .link {
            padding: 0.5rem;
            border-radius: 0.25rem;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          .vertical-text {
            color: #e5e7eb;
          }

          .text-gray-600 {
            color: #e5e7eb;
          }

          .text-gray-700 {
            color: #e5e7eb;
          }

          .text-gray-800 {
            color: #e5e7eb;
          }

          .text-teal-500 {
            color: #6ee7b7;
          }

          .text-sm {
            font-size: 0.875rem;
          }

          .text-xs {
            font-size: 0.75rem;
          }

          @media (max-width: 768px) {
            .content-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }

            .vertical-labels {
              display: none;
            }

            .left-column,
            .right-column {
              padding: 1rem;
              text-align: left;
            }

            .left-column h1 {
              font-size: 3rem;
            }

            .text-gray-600,
            .text-gray-700,
            .text-gray-800 {
              font-size: 1rem;
            }

            .bottom-text {
              font-size: 1rem;
              padding-top: 1.5rem;
              padding-bottom: 1.5rem;
            }
          }

          @media (max-width: 480px) {
            .left-column h1 {
              font-size: 2.5rem;
            }

            .left-column p {
              font-size: 0.875rem;
            }

            .bottom-text {
              font-size: 0.75rem;
            }

            .text-sm {
              font-size: 0.75rem;
            }

            .text-xs {
              font-size: 0.625rem;
            }
          }
        `}
      </style>

      <div className="min-h-screen bg-gray-50 p-8 content-wrapper">
        <div className="w-full h-full">
          <div className="content-grid">
            {/* Left Column */}
            <div className="left-column">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-12"
              >
                <p className="text-gray-600 mb-2 text-lg">Welcome,</p>
                <h1 className="text-5xl font-extrabold text-gray-800">
                  I'm Bidit
                  <span className="text-teal-500">*</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-gray-700 text-base leading-relaxed max-w-md"
              >
                I’m a UX/UI Designer and Frontend Web Developer from New Delhi, focused on creating user-friendly, responsive web experiences. Skilled in HTML, CSS, JavaScript, React, and Next.js, I design interfaces that balance form and function for seamless performance.
              </motion.p>
            </div>

            {/* Vertical Divider */}
            <div className="border-l-2 border-gray-300 h-full" />

            {/* Right Column */}
            <div className="right-column">
              <div className="space-y-6">
                <motion.a
                  href="/resume"
                  className="link flex items-center space-x-3 text-gray-600 hover:text-white transition-colors"
                  aria-label="View my resume"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText className="w-5 h-5" />
                  <span className="text-sm">View My Resume</span>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/shutup.bidit/"
                  className="link flex items-center space-x-3 text-gray-600 hover:text-white transition-colors"
                  aria-label="Let’s connect"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">Let’s Connect</span>
                </motion.a>
              </div>
            </div>

            {/* Bottom Text (Centered Below Divider) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="bottom-text"
            >
              <p>* Open to freelance projects and collaborative opportunities.</p>
              <p>** Let’s build something amazing together!</p>
            </motion.div>

            {/* Vertical Labels on the Right (Clickable Links) */}
            <div className="vertical-labels">
              <motion.a
                href="https://www.linkedin.com/in/your-profile"
                className="vertical-text text-xs text-gray-500 hover:text-white transition-colors"
                target="_blank"
                whileHover={{ x: 5 }}
                rel="noopener noreferrer"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://dribbble.com/your-profile"
                className="vertical-text text-xs text-gray-500 hover:text-white transition-colors"
                target="_blank"
                whileHover={{ x: 5 }}
                rel="noopener noreferrer"
              >
                Dribbble
              </motion.a>
              <motion.a
                href="https://twitter.com/your-profile"
                className="vertical-text text-xs text-gray-500 hover:text-white transition-colors"
                target="_blank"
                whileHover={{ x: 5 }}
                rel="noopener noreferrer"
              >
                Twitter
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;
