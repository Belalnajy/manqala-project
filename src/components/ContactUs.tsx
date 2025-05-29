import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ImageWithSEO from './ImageWithSEO';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map EmailJS field names to our form data properties
    const fieldMapping: Record<string, keyof FormData> = {
      'firstName': 'firstName',
      'lastName': 'lastName',
      'phone': 'phone',
      'email': 'email',
      'message': 'message'
    };
    
    const formField = fieldMapping[name] || name as keyof FormData;
    
    setFormData(prev => ({
      ...prev,
      [formField]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'جميع الحقول مطلوبة'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      // Use EmailJS to send the email
      if (!formRef.current) return;
      
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      if (result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: 'تم إرسال رسالتك بنجاح!'
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.'
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="contact-section py-25">
        <form 
          ref={formRef}
          className="bg-[#49494980] rounded-lg min-h-[500px] w-[90%] md:w-[50%] lg:w-50%] xl:w-[30%] p-8 backdrop-blur-xs mx-auto"
          onSubmit={handleSubmit}
        >
          {/* EmailJS configuration - template variables */}
          <input type="hidden" name="name" value={`${formData.firstName} ${formData.lastName}`} />
          <input type="hidden" name="time" value={new Date().toLocaleString('ar-EG')} />
          <input type="hidden" name="reply_to" value={formData.email} />
          <div className="flex flex-col justify-center items-center">
            <ImageWithSEO
              className="w-32"
              src="/LOGO.png"
              alt="منقلة - شعار الشركة"
              width={128}
              height={128}
              loading="eager"
            />
            <h1 className="text-xl mt-2 text-white font-medium">يسعدنا تواصلكم معنا</h1>
          </div>
          
          {submitStatus.message && (
            <div className={`mt-4 p-2 text-center rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <div className="flex flex-row gap-4 justify-center items-center mt-4">
            <input
              className="bg-[#49494980] bg-opacity-50 w-full h-12 border border-[#4D4D4D] rounded-lg p-2 focus:placeholder-transparent placeholder-gray-400 placeholder:text-right text-white"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder=" الاسم الثاني"
            />
            <input
              className="bg-[#49494980] bg-opacity-50 w-full h-12 border border-[#4D4D4D] rounded-lg p-2 focus:placeholder-transparent placeholder-gray-400 placeholder:text-right text-white"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder=" الاسم الاول"
            />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center mt-4">
            <input
              className="bg-[#49494980] bg-opacity-50 w-full h-12 border border-[#4D4D4D] rounded-lg p-2 focus:placeholder-transparent placeholder-gray-400 placeholder:text-right text-white"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=" رقم الهاتف"
            />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center mt-4">
            <input
              className="bg-[#49494980] bg-opacity-50 w-full h-12 border border-[#4D4D4D] rounded-lg p-2 focus:placeholder-transparent placeholder-gray-400 placeholder:text-right text-white"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" البريد الإلكتروني"
            />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center mt-4">
            <textarea
              className="bg-[#49494980] bg-opacity-50 w-full border border-[#4D4D4D] rounded-lg p-2 focus:placeholder-transparent placeholder-gray-400 placeholder:text-right h-[150px] text-white"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" اترك لنا رساله "
            />
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`bg-primary text-white px-6 py-2 rounded-lg mt-4 w-full hover:cursor-pointer hover:bg-secondary transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'جاري الإرسال...' : 'ارسال'}
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
