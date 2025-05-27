import Slider from 'react-slick';
import SliderCard from './SliderCard';

const SliderSection = () => {
  const setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
    rtl: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          centerMode: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const slides = [
    {
      image: '../public/IMG_E0767.png',
      title: 'غرفة معيشة مودرن',
    },
    {
      image: '../public/IMG_E0758.png',
      title: 'مجلس شرقي',
    },
    {
      image: '../public/IMG_E0882.png',
      title: 'صالون رجالي',
    },
  ];

  return (
    <section className="cards-section py-30 px-6">
      <div>
        <Slider {...setting} className="cards-slider">
          {slides.map((slide, index) => (
            <SliderCard key={index} image={slide.image} title={slide.title} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderSection;
