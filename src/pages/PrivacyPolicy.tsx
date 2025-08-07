// import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  InformationCircleIcon,
  PaperClipIcon,
  PhoneIcon,
  EnvelopeIcon,
  HomeIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const PrivacyPolicy: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#0f0f0f] py-12 px-4 sm:px-6 lg:px-8 text-white" dir="rtl">
      {/* <Helmet>
        <title>سياسة الخصوصية - منقلة</title>
        <meta name="description" content="سياسة الخصوصية لشركة منقلة - كيف نجمع ونستخدم ونحمي بياناتك الشخصية." />
        <meta name="keywords" content="سياسة الخصوصية، منقلة، حماية البيانات، تصميم داخلي" />
      </Helmet> */}

      <div className="fixed inset-0 opacity-5 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d7a675' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.div
          className="text-center mb-12 bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-[#d7a675]/20 shadow-2xl"
          variants={fadeInUp}
        >
          <div className="flex justify-center mb-4">
            <ShieldCheckIcon className="h-16 w-16 text-[#d7a675]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#d7a675] mb-4 bg-gradient-to-r from-[#d7a675] to-[#b8865a] bg-clip-text text-transparent">
            سياسة الخصوصية
          </h1>
          <p className="text-gray-300 text-lg">آخر تحديث: 7 أغسطس 2024</p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[#d7a675] to-[#b8865a] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          <motion.section
            className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-[#d7a675]/20 hover:border-[#d7a675]/40 transition-all duration-300"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4">
              <InformationCircleIcon className="h-8 w-8 text-[#d7a675] ml-3" />
              <h2 className="text-2xl font-bold text-[#d7a675]">مقدمة</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              نحن في شركة منقلة نحرص على خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام ومشاركة معلوماتك الشخصية عند زيارتك لموقعنا.
            </p>
          </motion.section>

          <motion.section
            className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-[#d7a675]/20 hover:border-[#d7a675]/40 transition-all duration-300"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4">
              <PaperClipIcon className="h-8 w-8 text-[#d7a675] ml-3" />
              <h2 className="text-2xl font-bold text-[#d7a675]">المعلومات التي نجمعها</h2>
            </div>
            <ul className="list-disc pr-5 space-y-2 text-gray-300">
              <li>معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف) التي تقدمها لنا.</li>
              <li>بيانات التصفح وسجل الزيارات لفهم كيفية استخدامك للموقع.</li>
              <li>أي معلومات أخرى تقدمها لنا طواعية عبر نماذج الاتصال.</li>
            </ul>
          </motion.section>

          <motion.section
            className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-[#d7a675]/20 hover:border-[#d7a675]/40 transition-all duration-300"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-6">
              <PhoneIcon className="h-8 w-8 text-[#d7a675] ml-3" />
              <h2 className="text-2xl font-bold text-[#d7a675]">تواصل معنا</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              إذا كانت لديك أي أسئلة بخصوص سياسة الخصوصية، يرجى التواصل معنا:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#d7a675]/10 to-transparent p-4 rounded-lg border border-[#d7a675]/20">
                <div className="flex items-center mb-2">
                  <EnvelopeIcon className="h-5 w-5 text-[#d7a675] ml-2" />
                  <span className="text-lg font-semibold text-[#d7a675]">البريد الإلكتروني</span>
                </div>
                <button
                  className="text-gray-300 hover:text-[#d7a675] transition-colors cursor-pointer"
                  onClick={() => handleCopy('info@manqla.com')}
                >
                  info@manqla.com
                  {copiedText === 'info@manqla.com' && (
                    <span className="text-green-400 text-sm mr-2">✓ تم النسخ</span>
                  )}
                </button>
              </div>
              <div className="bg-gradient-to-br from-[#d7a675]/10 to-transparent p-4 rounded-lg border border-[#d7a675]/20">
                <div className="flex items-center mb-2">
                  <PhoneIcon className="h-5 w-5 text-[#d7a675] ml-2" />
                  <span className="text-lg font-semibold text-[#d7a675]">الهاتف</span>
                </div>
                <button
                  className="text-gray-300 hover:text-[#d7a675] transition-colors cursor-pointer"
                  onClick={() => handleCopy('+966 59 153 7978')}
                  dir="ltr"
                >
                  +966 59 153 7978
                  {copiedText === '+966 59 153 7978' && (
                    <span className="text-green-400 text-sm ml-2">✓ تم النسخ</span>
                  )}
                </button>
              </div>
            </div>
          </motion.section>

          <motion.div
            className="mt-12 pt-6 border-t border-[#d7a675]/20 text-center"
            variants={fadeInUp}
          >
            <Link
              to="/"
              className="inline-flex items-center text-[#d7a675] hover:text-[#b8865a] transition-all duration-300 text-lg font-semibold group"
            >
              <HomeIcon className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
              العودة للصفحة الرئيسية
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;