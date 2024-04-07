import { CImage1, CImage2, CImage3, CImage4 } from "@/assets/images"
import Autoplay from "embla-carousel-autoplay"


import
{
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"


const CarouselC = () =>
{
  return (
    <Carousel
      orientation="horizontal"
      plugins={[
        Autoplay({
          delay: 3000,

        }),
      ]}
      className=" max-w-[80vw] translate-x-[60px]"
    >
      <CarouselContent className="" >
        <CarouselItem><img className="  bg-yellow-200 object-contain  w-[70vw] " src={CImage1} /></CarouselItem>
        <CarouselItem><img className="  bg-yellow-200 object-contain w-[70vw]  " src={CImage2} /></CarouselItem>
        <CarouselItem><img className="  bg-yellow-200 object-contain w-[70vw]" src={CImage3} /></CarouselItem>
        <CarouselItem><img className="  bg-yellow-200 object-contain w-[70vw]  " src={CImage4} /></CarouselItem>
      </CarouselContent>

    </Carousel>
  )
}

export default CarouselC
