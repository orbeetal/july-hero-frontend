function Headline({ header }) {
  return (
    <div className="container flex w-full justify-center pb-4 text-left">
      <h2
        className="rounded-sm bg-gradient-to-r from-[#800709] via-[#9b0d0d] to-[#c51114] px-8 py-2 text-xl font-bold text-white md:text-3xl"
        dangerouslySetInnerHTML={{ __html: header }}
      />
    </div>
  );
}

export default Headline;
