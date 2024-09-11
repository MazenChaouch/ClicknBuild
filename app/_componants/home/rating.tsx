import Image from "next/image";
import star from "@/app/assets/home/section9/star.svg";
import emptyStar from "@/app/assets/home/section9/empty-star.svg";
interface RatingProps {
  rate: number;
}
export const Rating = ({ rate }: RatingProps) => {
  const emptyStars = 5 - rate;
  return (
    <div className="flex gap-1 items-center h-fit w-fit">
      {[...Array(rate)].map((_, index) => (
        <Image src={star} alt="star" key={index} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <Image src={emptyStar} alt="star" key={index} />
      ))}
    </div>
  );
};
