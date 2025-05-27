
const ContactUs = () => {
  return (
    <>
          <section id="contact" className="contact-section py-25">
        <form className="bg-[#49494980] rounded-lg h-[500px] w-[90%] md:w-[50%] lg:w-50%] xl:w-[30%] p-8 backdrop-blur-xs mx-auto ">
          <div className="flex flex-col justify-center items-center ">
            <img className="w-32 " src="../public/LOGO.png" alt="" />
            <h1 className="text-xl mt-2 text-white font-medium">يسعدنا تواصلكم معنا</h1>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center mt-4">
            <input
              className=" bg-[#49494980] bg-opacity-50 w-full h-12 border border-[#4D4D4D]  rounded-lg p-2 focus:placeholder-transparent placeholder-gray-400 placeholder:text-right"
              type="text"
              placeholder=" الاسم الثاني"
            />
            <input
              className=" bg-[#49494980] bg-opacity-50 w-full h-12 border border-[#4D4D4D] rounded-lg p-2 focus:placeholder-transparent placeholder-gray-400 placeholder:text-right"
              type="text"
              placeholder=" الاسم الاول"
            />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center mt-4">
            <input
              className=" bg-[#49494980] bg-opacity-50 w-full h-12 border border-[#4D4D4D]  rounded-lg p-2 focus:placeholder-transparent placeholder-gray-400 placeholder:text-right"
              type="text"
              placeholder=" رقم الهاتف"
            />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center mt-4">
            <textarea
              className=" bg-[#49494980] bg-opacity-50 w-full  border border-[#4D4D4D]  rounded-lg p-2 focus:placeholder-transparent placeholder-gray-400 placeholder:text-right h-[150px]"
              placeholder=" اترك لنا رساله "
            />
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-lg mt-4 w-full">ارسال</button>
        </form>
      </section>
    </>
  )
}

export default ContactUs
