import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useTheme } from '@mui/material';
type Props = {
  icon: 'prev' | 'next';
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
type ButtonGroupProps = {
  next: () => void; // Function to handle next button click
  previous: () => void; // Function to handle previous button click
  carouselState: {
    currentSlide: number; // Current slide index
    slidesToShow: number; // Number of slides to show
    totalItems: number; // Total number of items in the carousel
  };
};


const CarouselButton = (props: Props) => {
  const theme=useTheme()
  const icon =
    props.icon === 'prev' ? (
      <ArrowBackIosNewOutlinedIcon />
    ) : (
      <ArrowForwardIosOutlinedIcon />
    );
  return (
    <button
    style={{
      background:theme.palette.secondary.dark
        }}
      className=" h-8 w-8 _fab"
      type="button"
      onClick={props.onButtonClick}
    >
      {icon}
    </button>
  );
};

const CarouselButtonGroup = ({ next, previous, ...rest }:ButtonGroupProps) => {
  const {
    carouselState: { currentSlide, slidesToShow, totalItems },
  } = rest;

  return (
    <>
      <div className="w-9 flex items-center z-10 absolute right-auto top-0 bottom-0 -left-4">
        {currentSlide !== 0 && (
          <CarouselButton icon="prev" onButtonClick={() => previous()} />
        )}
      </div>
      <div className="w-9 flex items-center z-10 absolute top-0 -right-4 bottom-0 left-auto">
        {currentSlide < totalItems - slidesToShow && (
          <CarouselButton icon="next" onButtonClick={() => next()} />
        )}
      </div>
    </>
  );
};

export default CarouselButtonGroup;
