import BannerText from "../utils/BannerText";

function HeroSection({ dictionary }) {
  return (
    <>
      <div
        className="h-44 sm:h-52 md:h-72 xl:h-96 bg-[url('/july-banner.svg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="container">
          <div className="flex w-full  items-start md:flex-row p-[5%] pb-0 pl-0">
          <BannerText htmlContent={dictionary.bannerText} />

          </div>
          <div className="pt-8">
            {/* Submit Information Button */}
          <div className="w-fit">
            <div className="cursor-pointer rounded-full border-2 border-white  bg-[#690508] px-8 py-3 text-white hover:opacity-95">
              <h2 className="text-xs font-semibold lg:text-xl">
                {dictionary.submitInformation}
              </h2>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
