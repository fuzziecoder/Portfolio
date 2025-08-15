import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770);
    };

    // Check screen size on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  const data = [
    {
      title: (
        <Image
          src="/cosmic365.jpg"
          alt="COSMIC365.AI-LOGO"
          width={200}
          height={60}
        />
      ),
      duration: "2023 – Present",
      smallScreenLogo: (
        <Image
          src="/cosmic365.jpg"
          alt="COSMIC365.AI-LOGO"
          width={50}
          height={50}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Associate COSMIC365.AI Intern
              </p>

              {/* Show only if screen size is <= 770px */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">COSMIC365.AI </span>
                  (May 2023 – Present)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (May 2023 – Present)
                </p>
              )}
            </h1>


            <div className=" text-gray-400 font-medium text-sm">
              <span className="text-white ">COSMIC365.AI</span> is a global organization
              fostering innovation across multiple domains. It provides hands-on exposure
              to <span className=" text-white">live corporate projects</span> that help
              bridge the gap between academic learning and real-world implementation.
            </div>
            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                At <span className="text-white ">COSMIC365.AI</span>, I actively contribute to
                departments including{" "}
                <span className=" text-white">Product Development</span>,{" "}
                <span className=" text-white">IT Operations</span>,{" "}
                <span className=" text-white">Quality Assurance</span>, and{" "}
                <span className=" text-white">Human Resources</span>. My responsibilities
                involve working on <span className=" text-white">real-time business tasks</span>,
                collaborating with mentors and internal teams.
              </p>
              <p className="mt-2">
                I also engage in building and managing content-driven layouts using{" "}
                <span className=" text-white">Wix</span> for global deployment, while gaining
                exposure to <span className=" text-white">AI-based modules</span> and{" "}
                <span className=" text-white">data management systems</span> to support strategic
                operations. This role has helped strengthen my understanding of{" "}
                <span className=" text-white">scalable product delivery</span>,{" "}
                <span className=" text-white">cross-functional collaboration</span>, and{" "}
                <span className=" text-white">business communication</span>.
              </p>
              <p className="mt-2">
                As part of the program, I also participate in structured{" "}
                <span className=" text-white">SMART sessions</span> focused on
                performance-based learning and certification, driving continuous personal and
                professional growth.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: (
        <Image
          src="/PngItem_12080.png"
          alt="Amazon SSPL-logo"
          width={200}
          height={60}
        />
      ),
      smallScreenLogo: (
        <Image
          src="/PngItem_12080.png"
          alt="Amazon SSPL-logo"
          width={300}
          height={80}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Alpha Associate
              </p>
              {/* <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                (Aug 2020 - May 2022)
              </p> */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">Amazon</span>
                  (Jun 2025 - Aug 2025)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (Jun 2025 - Aug 2025))
                </p>
              )}
            </h1>

            <div className="text-gray-400 font-medium text-sm">
              <span className="text-white">Amazon Seller Services Private Limited</span>, part of Amazon’s global logistics network, provides <span className="text-white">fulfillment solutions</span> to sellers and customers across India. I worked as an <span className="text-white">Alpha Associate</span> in the <span className="text-white">Fulfillment Center (FC DOC)</span>, specifically in the <span className="text-white">Bagging Department</span>.
            </div>
            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                <span className="text-white">Role:</span> Alpha Associate – FC DOC (Bagging) <br />
                <span className="text-white">Location:</span> Bengaluru, India <br />
                <span className="text-white">MS ID:</span> GS20262686 <br />
                <span className="text-white">Start Date:</span> June 29, 2025 <br />
                <span className="text-white">Deployed By:</span> Quess Corp Ltd
              </p>

              <p className="mt-4">
                I executed <span className="text-white">order packaging</span> and <span className="text-white">bagging tasks</span> to ensure secure processing and dispatch. Maintained strict adherence to <span className="text-white">safety, hygiene, and efficiency protocols</span> in a high-volume environment.
              </p>

              <p className="mt-2">
                Collaborated with cross-functional teams to meet <span className="text-white">daily fulfillment targets</span> and reduce packaging errors.
              </p>

              <p className="mt-2">
                This hands-on experience helped me strengthen my <span className="text-white">attention to detail</span>, <span className="text-white">efficiency</span>, and <span className="text-white">task ownership</span> in a dynamic logistics setting.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 text-white">
          Experience
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}