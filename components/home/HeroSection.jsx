function HeroSection({ dictionary, lang }) {
  return (
    <>
      <div className="bg-brand">
        <div className="container flex h-60 items-center justify-center">
          <div className="flex w-full flex-col items-center justify-between gap-y-10 md:flex-row">
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="flex items-center justify-between gap-4 rounded-3xl border border-white p-4 text-white md:px-8">
                <h2 className="text-xs font-semibold lg:text-xl">
                  {dictionary.martyr}
                </h2>
                <p className="text-md font-bold lg:text-2xl">
                  {Number(650).toLocaleString(lang === "bn" ? "bn-BD" : "en")}+
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-3xl border border-white p-4 text-white md:px-8">
                <h2 className="text-xs font-semibold lg:text-xl">
                  {dictionary.injured}
                </h2>
                <p className="text-md font-bold lg:text-2xl">
                  {Number(33000).toLocaleString(lang === "bn" ? "bn-BD" : "en")}
                  +
                </p>
              </div>
            </div>
            <div className="cursor-pointer rounded-full border border-brand bg-white px-16 py-4 text-brand hover:opacity-95">
              <h2 className="text-xs font-semibold lg:text-xl">
                {dictionary.submitInformation}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
