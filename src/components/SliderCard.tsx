import { motion } from 'framer-motion';

interface SliderCardProps {
  image: string;
  title: string;
}

const SliderCard = ({ image, title }: SliderCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="px-3">
        <div className="bg-amber-50 p-3 text-end overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
          <img src={image} className="w-[500px] h-[500px] object-cover" alt={title} />
          <p className="mt-4 me-5 text-lg font-medium">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderCard;
