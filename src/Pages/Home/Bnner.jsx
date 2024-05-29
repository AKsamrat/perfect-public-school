import { Link } from 'react-router-dom';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import img1 from '../../assets/rsz_22stuff3.jpg';
import img2 from '../../assets/rsz_22.jpg';
import img3 from '../../assets/quran.jpg';
import img4 from '../../assets/prize.jpg';
import img5 from '../../assets/tree.jpeg';
import Summary from './Summary';

const Bnner = () => {
  return (
    <div className="">
      <div className=" relative pt-10">
        <Swiper
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="carousel-item relative w-full style h-[700px]">
              <img src={img1} className="w-full h-full " />
              <div className="absolute  flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
                <div className=" text-white space-y-10 ml-6 lg:ml-20 ">
                  <h2 className="text-5xl font-bold">
                    Searching for a job ?<br /> Find the{' '}
                    <span className="text-[#00C2CB]">best Startup</span> <br />{' '}
                    Job that fit you
                  </h2>
                  <p>
                    Expert hunter is your one-stop-center for Thousand of
                    digital <br /> Fulltime and Freelancer jobs
                  </p>
                  <div>
                    <Link to={'/allJobs'} className=" ">
                      <button className="mr-5 bg-[#00C2CB] rounded-xl px-12 text-white font-semibold text-lg py-2">
                        All Notice
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item relative w-full  style h-[700px]">
              <img src={img2} className="w-full h-full " />
              <div className="absolute  flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
                <div className=" text-white space-y-10 ml-6 lg:ml-20 ">
                  <h2 className="text-5xl font-bold">
                    Your dream job <br /> is Waiting{' '}
                    <span className="text-[#00C2CB]">Grape This</span> <br />{' '}
                    And Change your life
                  </h2>
                  <p>
                    Find your more startup job with your excellence <br /> All
                    category job are here
                  </p>
                  <div>
                    <Link to={'/allJobs'} className=" ">
                      <button className="mr-5 bg-[#00C2CB] rounded-xl px-12 text-white font-semibold text-lg py-2">
                        All Notice
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item relative w-full style h-[700px]">
              <img src={img3} className="w-full h-full " />
              <div className="absolute  flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
                <div className=" text-white space-y-10 ml-6 lg:ml-20 ">
                  <h2 className="text-5xl font-bold">
                    Discover your perfect <br /> Matching{' '}
                    <span className="text-[#00C2CB]">Your Interest</span> <br />{' '}
                    And Skill
                  </h2>
                  <p>
                    We will help you find exciting job opportunity <br /> From
                    first-growing startup over the continent
                  </p>
                  <div>
                    <Link to={'/allJobs'} className=" ">
                      <button className="mr-5 bg-[#00C2CB] rounded-xl px-12 text-white font-semibold text-lg py-2">
                        All Notice
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item relative w-full style h-[700px]">
              <img src={img4} className="w-full h-full " />
              <div className="absolute  flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
                <div className=" text-white space-y-10 ml-6 lg:ml-20 ">
                  <h2 className="text-5xl font-bold">
                    Discover your perfect <br /> Matching{' '}
                    <span className="text-[#00C2CB]">Your Interest</span> <br />{' '}
                    And Skill
                  </h2>
                  <p>
                    We will help you find exciting job opportunity <br /> From
                    first-growing startup over the continent
                  </p>
                  <div>
                    <Link to={'/allJobs'} className=" ">
                      <button className="mr-5 bg-[#00C2CB] rounded-xl px-12 text-white font-semibold text-lg py-2">
                        All Notice
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item relative w-full style h-[700px]">
              <img src={img5} className="w-full h-full " />
              <div className="absolute  flex  items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] from-10% via-[#151515] via-10%  to-[rgba(21, 21, 21, 0)]   ">
                <div className=" text-white space-y-10 ml-6 lg:ml-20 ">
                  <h2 className="text-5xl font-bold">
                    Discover your perfect <br /> Matching{' '}
                    <span className="text-[#00C2CB]">Your Interest</span> <br />{' '}
                    And Skill
                  </h2>
                  <p>
                    We will help you find exciting job opportunity <br /> From
                    first-growing startup over the continent
                  </p>
                  <div>
                    <Link to={'/allJobs'} className=" ">
                      <button className="mr-5 bg-[#00C2CB] rounded-xl px-12 text-white font-semibold text-lg py-2">
                        All Notice
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="carousel w-full h-[600px]  object-fill mt-7">
      </div> */}
        <Summary></Summary>
      </div>
    </div>
  );
};

export default Bnner;
