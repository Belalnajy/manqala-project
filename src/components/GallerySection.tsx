
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ImageWithFallback } from './ImageWithFallback'

// Gallery images from public folder - using relative paths since they're in public
const galleryImagePaths = {
  masterpiece1: "/Artistic-masterpieces/1.png",
  masterpiece2: "/Artistic-masterpieces/2.png",
  masterpiece3: "/Artistic-masterpieces/3.png",
  masterpiece4: "/Artistic-masterpieces/4.png",
  masterpiece5: "/Artistic-masterpieces/5.png",
  masterpiece6: "/Artistic-masterpieces/6.png",
  masterpiece7: "/Artistic-masterpieces/7.png",
  masterpiece8: "/Artistic-masterpieces/8.png",
  masterpiece9: "/Artistic-masterpieces/9.png",
  masterpiece10: "/Artistic-masterpieces/10.png",
  masterpiece11: "/Artistic-masterpieces/11.png",

}

interface GalleryImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
}

function GalleryImage({ src, alt, className, aspectRatio }: GalleryImageProps) {
  return (
    <div className={`bg-gray-100 rounded-2xl overflow-hidden ${aspectRatio || 'aspect-square'} ${className || ''}`}>
      <ImageWithFallback
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        fallbackClassName="w-full h-full rounded-2xl"
      />
    </div>
  )
}

function SectionTitle() {
  return (
    <div dir='rtl' className="flex flex-col items-center gap-2" data-name="title">
      <h2 className="font-bold text-[#d1a784] text-4xl text-center">
        قسم التحف الفنية
      </h2>
      <div className="w-[186px] h-px bg-[#d1a784]" />
    </div>
  )
}

function ServicesList() {
  const services = [
    "دمج التحف مع ديكور داخلي فاخر يعكس هوية المكان",
    "توفير قطع Landmark جاهزة تناسب القصور والفلل",
    "تصميم وتنفيذ تحف فنية خاصة حسب طلبك"
  ]

  return (
    <div dir='rtl' className="rounded-lg p-8 w-full ">
      <h3 className="font-bold text-[#d1a784] text-3xl text-center mb-10">
        خدمتنا:
      </h3>
      <div className="flex flex-col items-center gap-8">
        <div className="flex gap-24 items-start justify-center flex-wrap">
          {services.slice(0, 2).map((service, index) => (
            <div key={index} className="max-w-md">
              <ul className="text-[#dedede] text-xl">
                <li className="list-disc mr-2">
                  <span>{service}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-md">
          <ul className="text-[#dedede] text-xl">
            <li className="list-disc mr-8">
              <span>{services[2]}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function GalleryGrid() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  // Animation variants for gallery grid

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const galleryImages = [
    // Column 1 - Classic & Modern Patterns
    [
      { src: galleryImagePaths.masterpiece1, alt: "لوحة فنية معاصرة بألوان زاهية", aspectRatio: "aspect-square" },
      { src: galleryImagePaths.masterpiece2, alt: "تمثال نحتي أزرق أنيق", aspectRatio: "aspect-square" },
      { src: galleryImagePaths.masterpiece3, alt: "عمل فني تجريدي متميز", aspectRatio: "aspect-[4/3]" },
      { src: galleryImagePaths.masterpiece4, alt: "منحوتة حديثة بتصميم هندسي", aspectRatio: "aspect-[3/4]" }
    ],
    // Column 2 - Commercial & Najdi Patterns
    [
      { src: galleryImagePaths.masterpiece8, alt: "تركيب فني خارجي مبتكر", aspectRatio: "aspect-[4/3]" },
      { src: galleryImagePaths.masterpiece5, alt: "قطعة فنية بطابع تراثي", aspectRatio: "aspect-square" },
      { src: galleryImagePaths.masterpiece7, alt: "عمل نحتي داخلي فاخر", aspectRatio: "aspect-square" },
      { src: galleryImagePaths.masterpiece6, alt: "تصميم معماري فني راقي", aspectRatio: "aspect-[3/4]" },
    ],
    // Column 3 - Office & Mixed Patterns
    [
      { src: galleryImagePaths.masterpiece9, alt: "رأس غزال ذهبي على جدار رمادي", aspectRatio: "aspect-square" },
      { src: galleryImagePaths.masterpiece10, alt: "تحفة فنية بألوان دافئة", aspectRatio: "aspect-square" },
      { src: galleryImagePaths.masterpiece11, alt: "معلم فني بارز ومميز", aspectRatio: "aspect-[4/3]" },
      { src: galleryImagePaths.masterpiece1, alt: "لوحة فنية ملونة متدرجة", aspectRatio: "aspect-[3/4]" }
    ]
  ]

  return (
    <motion.div 
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
    >
      {galleryImages.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-4">
          {column.map((image, imageIndex) => (
            <motion.div
              key={imageIndex}
              variants={imageVariants}
              className="w-full"
            >
              <GalleryImage
                src={image.src}
                alt={image.alt}
                aspectRatio={image.aspectRatio}
                className="w-full"
              />
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  )
}

export default function GallerySection() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section id="gallery" className="min-h-screen bg-gradient-to-b from-[#090909] to-[#201f1f] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-14 items-center">
          {/* Header Section */}
          <motion.div 
            ref={titleRef}
            initial="hidden"
            animate={titleInView ? 'visible' : 'hidden'}
            variants={titleVariants}
            className="flex flex-col gap-6 items-center text-center"
          >
            <SectionTitle />
            <p className="font-medium text-[#dedede] text-2xl max-w-4xl leading-relaxed">
              نقدّم تحف فنية فاخرة في شمال الرياض بتصاميم مميزة تجمع بين الإبداع والدقة. 
              كل قطعة لدينا ماستر بيس فريدة تشكّل لاند مارك يعبّر عن ذوقك الرفيع
            </p>
          </motion.div>

          {/* Services Section */}
          <ServicesList />

          {/* Gallery Grid */}
          <GalleryGrid />
        </div>
      </div>
    </section>
  )
}
