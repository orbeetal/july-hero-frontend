function Headline({ header }) {
  return (
    <div className="flex justify-center w-full text-center pb-4">
      <h2
        className="text-xl md:text-3xl font-bold text-white p-2  rounded-sm 
                   bg-gradient-to-r from-[#800709] via-[#9b0d0d] to-[#c51114]"
        dangerouslySetInnerHTML={{ __html: header }} 
      />
    </div>
  );
}

export default Headline;
