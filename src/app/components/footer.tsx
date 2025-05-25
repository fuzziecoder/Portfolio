import ReactGA from "react-ga4";
import Image from "next/image";
import { FaSquareXTwitter } from "react-icons/fa6";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaMailBulk
} 
{
        {/* Social Icons - Centered on small screens */}
        <div className="flex space-x-5 md:space-x-8 items-center">
          <SocialLink
            href="https://github.com/fuzziecoder"
            icon={FaGithub}
            label="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/fuzziecoder/"
            icon={FaLinkedinIn}
            label="LinkedIn"
          />
          <SocialLink
            href="https://x.com/fuzziecoder"
            icon={FaSquareXTwitter}
            label="XTwitter"
          />
          <SocialLink
            href="https://instagram.com/fuzziecoder"
            icon={FaInstagram}
            label="Instagram"
          />
          <SocialLink
            href="mailto:ramvj2005@gmail.com"
            icon={FaMailBulk}
            label="Mail"
          />
        </div>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => {
  return (
    <div className="relative group">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {label}
        </span>
      </Link>
    </div>
  );
};