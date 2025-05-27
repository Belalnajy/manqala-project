import React from 'react';
import PatternCard from './PatternCard';

const PatternSection = () => {
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
          <PatternCard src="../public/card1.png" label="تجاري" hoverLabel="تصميم تجاري" />
          <PatternCard src="../public/card6.png" label="كلاسيك" hoverLabel="تصميم كلاسيكي" />
          <PatternCard src="../public/card2.png" label="مودرن" hoverLabel="تصميم مودرن" />
          <PatternCard src="../public/card5.png" label="مودرن" hoverLabel="تصميم عصري" />
          <PatternCard src="../public/card4.png" label="مكاتب" hoverLabel="تصميم مكاتب" />
          <PatternCard src="../public/card3.png" label="نجدي" hoverLabel="تصميم نجدي" />
        </div>
      </section>
    </>
  );
};

export default PatternSection;
