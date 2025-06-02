import { useState } from 'react';
import PatternCard from './PatternCard';
import ImageModal from './ImageModal';

// Define pattern data with additional images for the modal
const patternData = [
  {
    id: 1,
    src: '/card1.png',
    label: 'تجاري',
    hoverLabel: 'تصميم تجاري',
    images: [
      '/Commercial-pattern/IMG_E0851.png',
      '/Commercial-pattern/IMG_E0849.png',
      '/Commercial-pattern/IMG_E0848.png',
    ],
  },
  {
    id: 2,
    src: '/card6.png',
    label: 'كلاسيك',
    hoverLabel: 'تصميم كلاسيكي',
    images: [
      '/Classic-pattern/1.png',
      '/Classic-pattern/2.png',
      '/Classic-pattern/3.png',
      '/Classic-pattern/4.png',
      '/Classic-pattern/5.png',
    ],
  },
  {
    id: 3,
    src: '/card2.png',
    label: 'مودرن',
    hoverLabel: 'تصميم مودرن',
    images: [
      '/modern-pattern/1.png',
      '/modern-pattern/2.png',
      '/modern-pattern/3.png',
    ],
  },
  {
    id: 4,
    src: '/card5.png',
    label: 'مودرن',
    hoverLabel: 'تصميم عصري',
    images: [
      '/modern2-pattern/1.png',
      '/modern2-pattern/2.png',
      '/modern2-pattern/3.png',
    ],
  },
  {
    id: 5,
    src: '/card4.png',
    label: 'مكاتب',
    hoverLabel: 'تصميم مكاتب',
    images: [
      '/Office-pattern/1.png',
      '/Office-pattern/2.png',
      '/Office-pattern/3.png',
    ],
  },
  {
    id: 6,
    src: '/card3.png',
    label: 'نجدي',
    hoverLabel: 'تصميم نجدي',
    images: [
      '/Najdi-pattern/1.png',
      '/Najdi-pattern/2.png',
      '/Najdi-pattern/3.png',
    ],
  },
];

const PatternSection = () => {
  const [selectedPattern, setSelectedPattern] = useState<null | {
    images: string[];
    label: string;
  }>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePatternClick = (pattern: (typeof patternData)[0]) => {
    setSelectedPattern({
      images: pattern.images,
      label: pattern.hoverLabel,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section id="patterns" className="pattern-section pb-10">
        <div>
          <h1 className="text-center text-4xl text-primary font-extrabold py-10 backdrop-grayscale-50 ">
            انماط التصميم
            <div className="bg-primary h-[1px] w-1/12 mt-4 mx-auto"></div>
          </h1>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8 mx-5 xl:mx-20 md:mx-10">
          {patternData.map((pattern) => (
            <PatternCard
              key={pattern.id}
              src={pattern.src}
              label={pattern.label}
              hoverLabel={pattern.hoverLabel}
              onClick={() => handlePatternClick(pattern)}
            />
          ))}
        </div>

        {/* Modal for displaying pattern images */}
        {selectedPattern && (
          <ImageModal isOpen={isModalOpen} onClose={closeModal} images={selectedPattern.images} />
        )}
      </section>
    </>
  );
};

export default PatternSection;
