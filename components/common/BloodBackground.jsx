function BloodBackground({ children }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Left Blood Image */}
      <img
        src="/left-blood.svg"
        alt="Blood Left"
        className="absolute  left-0 top-1/2 w-[150px] -translate-y-1/2 opacity-80 md:w-[250px]"
      />

      {/* Right Blood Image */}
      <img
        src="/right-blood.svg"
        alt="Blood Right"
        className="absolute right-0 top-1/2 w-[150px] -translate-y-1/2 opacity-80 md:w-[250px]"
      />

      {/* Content Inside */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default BloodBackground;
