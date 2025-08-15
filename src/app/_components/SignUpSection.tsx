"use client";
import React, { useState, useEffect } from "react";

export default function SignUpSection() {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById("signup-section");
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const validateEmail = (em: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(
      e.target.value && !validateEmail(e.target.value)
        ? "Enter a valid email"
        : ""
    );
  };

      const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !validateEmail(email)) return setEmailError("Enter a valid email");
      if (!query.trim()) return;

      setIsSubmitting(true);

      const payload = {
        mail: email,
        query,
        ratings: "★".repeat(rating) + "☆".repeat(5 - rating)
      };

      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbyYWE7bW618ScjIohLbEPVPbQt-Xm_mt4e1lP_HWu4xIvJL_zYHIbf3d3jvBw3TOscv/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          }
        );
        alert("Submitted — thank you!");
        setEmail("");
        setQuery("");
        setRating(0);
        setEmailError("");
      } catch (err) {
        console.error(err);
        alert("Submission error — please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <div
      id="signup-section"
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-black border-white/[0.2] border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Keep the Connection</h2>
          <p className="text-gray-400 text-lg md:text-xl">Sign up to get the latest news</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                  emailError
                    ? "border-red-500 focus:ring-red-500/50"
                    : "border-white/[0.2] focus:border-white/[0.4] focus:ring-white/[0.2]"
                } text-white placeholder-gray-500`}
                placeholder="Enter your email"
                required
              />
              {emailError && <p className="text-red-400 text-sm">{emailError}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="query" className="block text-sm font-medium text-gray-300">
                Query
              </label>
              <input
                id="query"
                type="text"
                value={query}
                onChange={({ target }) => setQuery(target.value)}
                className="w-full px-4 py-3 bg-black border border-white/[0.2] rounded-lg focus:outline-none focus:ring-2 focus:ring-white/[0.2] focus:border-white/[0.4] transition-all duration-200 text-white placeholder-gray-500"
                placeholder="Enter your query"
                required
              />
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting || !!emailError}
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {isSubmitting ? "Submitting..." : "Submit"}
              </span>
            </button>
          </div>
        </form>

        <div className="mt-8 pt-8 border-t border-white/[0.2] text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Rate your experience:</h3>
          <div className="flex justify-center items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="text-2xl transition-all duration-200 hover:scale-110 focus:outline-none"
              >
                <span className={star <= (hoveredRating || rating) ? "text-yellow-400" : "text-gray-400"}>
                  ★
                </span>
              </button>
            ))}
          </div>
          {rating > 0 && <p className="text-sm text-gray-400 mt-2">Thank you for your {rating}-star rating!</p>}
        </div>
      </div>
    </div>
  );
}

