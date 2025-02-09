import React from "react";

function DeepBloodBackground({ children }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Left Blood Image */}
      <img
        src="/left-deep-blood.svg"
        alt="Blood Left"
        className="absolute top-0 left-0 w-[150px] md:w-[250px] opacity-80"
      />
      
      {/* Right Blood Image */}
      <img
        src="/right-deep-blood.svg"
        alt="Blood Right"
        className="absolute top-0 right-0 w-[150px] md:w-[250px] opacity-80"
      />

      {/* Content Inside */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default DeepBloodBackground;
