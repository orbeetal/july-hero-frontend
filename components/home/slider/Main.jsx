import BloodBackground from "@/components/common/BloodBackground";
import Headline from "@/components/common/Headline";
import ImageSlider from "@/components/home/slider/Slider";

export default function GrafitiSlider({dictionary}) {
    return (
        <BloodBackground>
            <div className="container pt-6">
                <div className="flex flex-col items-center">
                    <Headline header={dictionary.graffiti}/>
                    <ImageSlider />
                </div>
            </div>
        </BloodBackground>
    );
}
