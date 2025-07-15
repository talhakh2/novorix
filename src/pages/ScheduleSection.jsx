"use client";

import { useEffect } from "react";

export default function ScheduleSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="schedule"
      className="bg-black relative w-full min-h-screen text-white flex items-center justify-center py-20 px-4"
    >
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">
          Book a Call with Us
        </h2>
        <p className="text-lg text-center text-gray-400 max-w-xl mx-auto">
          Let's explore how Novorix can help your brand scale with powerful design and tech.
        </p>
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/talha-prostructengineering/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=101010&text_color=ffffff&primary_color=ffffff"
          style={{ minWidth: "320px", height: "800px" }}
        />
      </div>
    </section>
  );
}
