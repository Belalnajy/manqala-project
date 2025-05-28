import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const TestimonialSection = () => {
  return (
    <>
            <section className="testimonials-section py-16 bg-[#201F1F]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl text-primary font-extrabold mb-12">
            آراء العملاء
            <div className="bg-primary h-[1px] w-1/12 mt-4 mx-auto"></div>
          </h2>

          <div className="relative max-w-6xl mx-auto">
            {/* Testimonials Slider */}
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                el: '.testimonials-pagination',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="testimonials-swiper pb-14"
            >
              {/* Testimonial 1 */}
              <SwiperSlide>
                <div className="testimonial-card border border-primary/30 rounded-lg p-12 h-[400px] flex flex-col">
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src="/profile.png"
                      alt="فهد العتيبي"
                      className="w-24 h-24 rounded-full object-cover mb-3"
                    />
                    <h3 className="text-white text-xl font-bold">فهد العتيبي</h3>
                    <div className="flex text-primary text-3xl mt-2">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-center">
                    "فريق محترف لأبعد حد. قدروا يحولوا أفكاري لمساحة أنيقة وعملية بتفاصيل ما كنت
                    أتخيلها."
                  </p>
                </div>
              </SwiperSlide>

              {/* Testimonial 2 */}
              <SwiperSlide>
                <div className="testimonial-card border border-primary/30 rounded-lg p-12 h-[400px] flex flex-col">
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src="/profile.png"
                      alt="نورة السبيعي"
                      className="w-24 h-24 rounded-full object-cover mb-3"
                    />
                    <h3 className="text-white text-xl font-bold">نورة السبيعي</h3>
                    <div className="flex text-primary text-3xl mt-2">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-center">
                    "أنا سعيدة جداً بالتجربة! شغل نظيف، تعامل راقي، وهيئتهم تفهم تفضيل كل ما أدخل
                    البيت."
                  </p>
                </div>
              </SwiperSlide>

              {/* Testimonial 3 */}
              <SwiperSlide>
                <div className="testimonial-card border border-primary/30 rounded-lg p-12 h-[400px] flex flex-col">
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src="/profile.png"
                      alt="عبدالله القحطاني"
                      className="w-24 h-24 rounded-full object-cover mb-3"
                    />
                    <h3 className="text-white text-xl font-bold">عبدالله القحطاني</h3>
                    <div className="flex text-primary text-3xl mt-2">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>☆</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-center">
                    "التصميم كان فوق التوقعات. كل زاوية في البيت بقت تحكي ذوقي وتعبر عن شخصيتي. لكم
                    جداً."
                  </p>
                </div>
              </SwiperSlide>

              {/* Additional Testimonials */}
              <SwiperSlide>
                <div className="testimonial-card border border-primary/30 rounded-lg p-12 h-[400px] flex flex-col">
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src="/profile.png"
                      alt="سارة الدوسري"
                      className="w-24 h-24 rounded-full object-cover mb-3"
                    />
                    <h3 className="text-white text-xl font-bold">سارة الدوسري</h3>
                    <div className="flex text-primary text-3xl mt-2">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>☆</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-center">
                    "تعاملت معهم لتصميم مكتبي الخاص وكانت تجربة استثنائية. الاهتمام بالتفاصيل والذوق
                    الراقي ميزهم."
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Custom Pagination */}
            <div className="testimonials-pagination flex justify-center space-x-2 mt-8"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialSection
