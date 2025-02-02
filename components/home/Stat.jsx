import React from 'react';
import BloodBackground from '../common/BloodBackground';

function Stat({ dictionary, lang, type }) {
    return (
        <BloodBackground>
            <div className='p-4' style={{ backgroundColor: 'rgba(133, 15, 15, 0.6)' }}>
                <h2 className='text-[#5e0c0c] text-[24px] sm:text-[28px] py-3 text-center font-bold'>
                    {type === "M" ? dictionary.statsMHeader : dictionary.statsIHeader} {Number(650).toLocaleString(lang === "bn" ? "bn-BD" : "en")}+
                </h2>
                <div className='text-white w-full px-[20%] sm:px-[15%] lg:px-[30%] text-justify'>
                    {type === "M" ? dictionary.statsMdesc : dictionary.statsIdesc}
                </div>
            </div>
        </BloodBackground>
    );
}

export default Stat;
