import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: i * 0.2,
    },
  }),
};

const About = () => {
  const sections = [
    {
      title: 'رؤيتنا',
      text: 'نؤمن بأن كل مساحة تحكي قصة، وهدفنا هو تحويل رؤيتك إلى واقع ينبض بالجمال والتناغم، سواء داخل المنزل أو خارجه.',
    },
    {
      title: 'ما الذي يميزنا؟',
      text: 'نهتم بأدق التفاصيل، ونمزج بين الذوق الراقي والوظائف العملية لنخلق مساحات مريحة، أنيقة، ومعبرة عن شخصيتك',
    },
    {
      title: 'من نحن',
      text: 'نحن في منقلة نقدم خدمات تصميم داخلي، خارجي، وتصميم مناظر طبيعية (Landscape) بلمسة فنية عصرية.',
    },
  ];

  return (
    <section id="about-us" className="about-us py-30 px-6">
      <div className="flex justify-center">
        <img src="../public/manqla-about.png" alt="" />
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 text-center xl:ms-15 sm:ms-0 mt-96">
        {sections.map((item, i) => (
          <motion.p
            key={i}
            className="m-5 max-w-md flex flex-col"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <span className="text-4xl text-primary font-extrabold">{item.title}</span>
            <br />
            <span className="text-white text-[22px]">{item.text}</span>
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
