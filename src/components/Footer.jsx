import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ram Gopal Reddy. All rights
          reserved.
        </p>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://devpost.com/your-devpost"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300 transition"
          >
            <FaDev />
          </a>
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FiGlobe />
          </a>
        </div>
      </div>
    </footer>
  );
}
