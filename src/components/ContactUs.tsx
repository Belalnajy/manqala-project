import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'جميع الحقول مطلوبة'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'تم إرسال رسالتك بنجاح!'
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'حدث خطأ أثناء الاتصال بالخادم. يرجى المحاولة مرة أخرى.'
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
          className="bg-[#49494980] rounded-lg min-h-[500px] w-[90%] md:w-[50%] lg:w-50%] xl:w-[30%] p-8 backdrop-blur-xs mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center items-center">
            <img className="w-32" src="/LOGO.png" alt="Logo" />
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
