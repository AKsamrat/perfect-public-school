import React from 'react';
import img1 from '../../assets/monir vai.jpg';
// import img2 from '../../assets/plogo.png';
import SectionTitle from '../../Component/SectionTitle';
import './Featureds.css';
import { Parallax } from 'react-parallax';

const DIrectorCorner = () => {
  return (
    <div className="mt-28 mx-w-6xl mx-auto ">
      <SectionTitle
        subHeading={'valuable quote'}
        heading={'Director Corner'}
      ></SectionTitle>
      <section className="p-4 lg:p-8 dark:bg-gray-300 dark:text-gray-800">
        <div className="flex flex-col  justify-center   rounded-md shadow-sm lg:flex-row">
          <div className="flex-1 lg:w-6/12 text-right">
            <img
              src={img1}
              alt=""
              className="h-80 lg:h-[550px] w-11/12 dark:bg-gray-500 "
            />
          </div>
          <div className="flex flex-col justify-center  p-6 dark:bg-gray-50 flex-1">
            <div className="border-l-4 border-[#00C2CB]">
              <p className="text-xl pl-3">Quote</p>
            </div>

            <p className="my-6 text-[16px] text-gray-400 font-medium ">
              1st January2016 was a landmark month in the academic world of
              nakla,sherpur. A new school opened its doors – Perfect Public
              School. From that day, I have been the Director. I keep a careful
              watch that the ethos of Perfect Public School – extra-curricular
              activities with outdoor and indoor Sports, Art and Music periods,
              celebrations of all the nationally and internationally important
              days, Clubs and excellent academic lessons with little homework
              and no pressure – are maintained. Our students receive world class
              results in their SSc and scholarship Examinations. Our Alumnae are
              scattered all around the world, leaving their mark in a variety of
              professions. I feel proud that the Perfect Public School Team
              brings up well-rounded individuals who shine as Bangladeshi
              citizens as well as global citizens. With these words, I welcome
              you to our Website.
            </p>
            <div className="text-[#00C2CB] *:text-lg mt-7">
              <p>Director</p>
              <p>Perfect Public School</p>
              <p>MD.Maniruzzaman</p>
              <p>B.S.c & M.S.c (Botani)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DIrectorCorner;
