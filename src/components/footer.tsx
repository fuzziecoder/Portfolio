import ReactGA from "react-ga4";
import SignUpSection from "@/app/_components/SignUpSection";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      {/* Sign Up Section */}
      <div className="py-16 px-4">
        <SignUpSection />
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-white/[0.1] py-4">
        <div className="text-center text-gray-400 text-sm">
          Always be caffeinated! | © Ramkumar (fuzziecoder)
        </div>
      </div>
    </div>
  );
}