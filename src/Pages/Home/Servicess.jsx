import { useRef, useState } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../assets/monir vai.jpg';
import SectionTitle from '../../Component/SectionTitle';
import { Link } from 'react-router-dom';

const Servicess = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
      <div className="col-span-2">
        <SectionTitle
          subHeading={'top notch'}
          heading={'Servicess'}
        ></SectionTitle>
        <div>
          <section className="grid grid-cols-1 gap-8  py-4  max-w-7xl lg:px-16  md:grid-cols-2 lg:grid-cols-3 mx-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 mb-4 text-[#00C2CB]"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
                Unify your payments stack
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                Manage all your online and offline sales in one place with a
                single integration, simplifying reporting and reconciliation.
                Terminal works seamlessly with Payments, Connect, and Billing.
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 mb-4 text-[#00C2CB]"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
              <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
                Own your in-store experience
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                Provide a seamless customer experience across channels, like
                reserving online and picking up in store. Our SDKs make it easy
                to integrate into your own mobile and web applications to accept
                in-store payments.
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 mb-4 text-[#00C2CB]"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                />
              </svg>
              <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
                Grow your platform’s revenue
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                Add in-person payments to your platform or marketplace. Using
                Terminal with Connect, you can onboard users for online and
                in-person payments, and unify their payouts across channels.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* notice section */}

      <div className="col-span-1 ">
        <div className="bg-[#00c1cb8f] p-4 mt-16">
          <h3 className="text-center text-2xl font-bold">NOTICE</h3>
        </div>
        <div className="">
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            // spaceBetween={5}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            direction={'vertical'}
            modules={[Autoplay]}
            className="mySwiper h-[400px]"
          >
            <SwiperSlide>
              <Link>
                <div className="flex justify-center items-center gap-4  border-2 rounded-xl border-[#00C2CB] ">
                  <div className="bg-[#00C2CB] h-16  p-2 rounded-lg">
                    <p className="text-lg text-center">21</p>
                    <p className="font-bold text-xl">NOV</p>
                  </div>
                  <p>
                    ২০২৩ শিক্ষাবর্ষে ১ম শ্রেণিতে ভর্তির জন্য আবেদন ফরম জমা
                    সংক্রান্ত বিজ্ঞপ্তি
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center gap-4  border-2 rounded-xl border-[#00C2CB] ">
                <div className="bg-[#00C2CB] h-16 w-[px] p-2 rounded-lg">
                  <p className="text-lg text-center">21</p>
                  <p className="font-bold text-xl">NOV</p>
                </div>
                <p>
                  ২০২৩ শিক্ষাবর্ষে ১ম শ্রেণিতে ভর্তির জন্য আবেদন ফরম জমা
                  সংক্রান্ত বিজ্ঞপ্তি
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center gap-4  border-2 rounded-xl border-[#00C2CB] ">
                <div className="bg-[#00C2CB] h-16 w-[px] p-2 rounded-lg">
                  <p className="text-lg text-center">21</p>
                  <p className="font-bold text-xl">NOV</p>
                </div>
                <p>
                  ২০২৩ শিক্ষাবর্ষে ১ম শ্রেণিতে ভর্তির জন্য আবেদন ফরম জমা
                  সংক্রান্ত বিজ্ঞপ্তি
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center gap-4  border-2 rounded-xl border-[#00C2CB] ">
                <div className="bg-[#00C2CB] h-16 w-[px] p-2 rounded-lg">
                  <p className="text-lg text-center">21</p>
                  <p className="font-bold text-xl">NOV</p>
                </div>
                <p>
                  ২০২৩ শিক্ষাবর্ষে ১ম শ্রেণিতে ভর্তির জন্য আবেদন ফরম জমা
                  সংক্রান্ত বিজ্ঞপ্তি
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center gap-4  border-2 rounded-xl border-[#00C2CB] ">
                <div className="bg-[#00C2CB] h-16 w-[px] p-2 rounded-lg">
                  <p className="text-lg text-center">21</p>
                  <p className="font-bold text-xl">NOV</p>
                </div>
                <p>
                  ২০২৩ শিক্ষাবর্ষে ১ম শ্রেণিতে ভর্তির জন্য আবেদন ফরম জমা
                  সংক্রান্ত বিজ্ঞপ্তি
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center gap-4  border-2 rounded-xl border-[#00C2CB] ">
                <div className="bg-[#00C2CB] h-16 w-[px] p-2 rounded-lg">
                  <p className="text-lg text-center">21</p>
                  <p className="font-bold text-xl">NOV</p>
                </div>
                <p>
                  ২০২৩ শিক্ষাবর্ষে ১ম শ্রেণিতে ভর্তির জন্য আবেদন ফরম জমা
                  সংক্রান্ত বিজ্ঞপ্তি
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Servicess;
