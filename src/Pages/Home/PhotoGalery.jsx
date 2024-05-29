import React from 'react';
import SectionTitle from '../../Component/SectionTitle';
import img1 from '../../assets/g1.jpg';
import img2 from '../../assets/g2.jpg';
import img3 from '../../assets/rally2.jpg';
import img4 from '../../assets/rsz_22stuff3.jpg';
import img5 from '../../assets/rsz_22.jpg';

const PhotoGalery = () => {
  return (
    <div>
      <SectionTitle
        subHeading={'exclusive'}
        heading={'Photo gallery'}
      ></SectionTitle>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={img5}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img1}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img4}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img2}
          />
        </div>
      </section>
    </div>
  );
};

export default PhotoGalery;
