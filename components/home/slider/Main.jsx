import DeepBloodBackground from "@/components/common/DeepBloodBackground";
import Headline from "@/components/common/Headline";
import ImageSlider from "@/components/home/slider/Slider";

export default function GrafitiSlider({ dictionary }) {
  return (
    <DeepBloodBackground>
      <div className="container py-12">
        <div className="flex flex-col items-center">
          <Headline header={dictionary.graffiti} />
          <ImageSlider />
        </div>
      </div>
    </DeepBloodBackground>
  );
}
