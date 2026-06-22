import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialsMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-[20px] text-[#4e525a]">
        <li className="hover:text-primary-600">
          <Link
            href="https://www.linkedin.com/in/muhammad-abdullah-9400b5319"
            target="_blank"
          >
            <Linkedin />
          </Link>
        </li>
        <li className="hover:text-primary-600">
          <Link href="https://github.com/Abdullah-070/" target="_blank">
            <Github />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
