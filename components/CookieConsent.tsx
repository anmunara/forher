"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("f1-cookie-consent");
    if (!accepted) setShow(true);
  }, []);

  function decide(value: "accepted" | "rejected") {
    localStorage.setItem("f1-cookie-consent", value);
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
      <div className="max-w-[1100px] mx-auto rounded-lg border border-f1gray/50 bg-f1black/95 backdrop-blur shadow-2xl">
        <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="font-bold text-white">We value your privacy</p>
            <p className="text-sm text-f1silver mt-1 max-w-2xl">
              We use cookies to enhance your browsing experience, serve personalised
              content and analyse our traffic. This is a fan recreation — no real
              tracking happens here.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => decide("rejected")}
              className="border border-white/40 hover:border-white transition text-white text-xs uppercase font-bold px-5 py-2.5 rounded-sm tracking-wide"
            >
              Reject All
            </button>
            <button
              onClick={() => decide("accepted")}
              className="bg-f1red hover:bg-red-700 transition text-white text-xs uppercase font-bold px-5 py-2.5 rounded-sm tracking-wide"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
