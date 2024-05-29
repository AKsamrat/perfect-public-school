import { FaEnvelope, FaFacebook, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddressBar = () => {
  return (
    <div>
      <header className="bg-[#00c1cba4] shadow-lg text-white  w-full dark:bg-[#120505]  px-8  z-10 fixed h-10 pt-2 ">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium flex justify-center  items-center gap-2">
            <FaEnvelope className="font-bold text-xl"></FaEnvelope>{' '}
            perfectpublicschoolnakla2016@gmail.com
          </p>
          <div className="flex justify-center items-center gap-4 text-lg">
            <p className="flex justify-center items-center pr-2 gap-2 border-r-4 ">
              <FaPhoneAlt className=" font-bold text-xl"></FaPhoneAlt>{' '}
              +8801958400201
            </p>
            <Link to={'https://www.facebook.com/perfectpublicschool'}>
              <FaFacebook className="text-2xl font-bold"></FaFacebook>
            </Link>
            <Link to={'https://www.facebook.com/perfectpublicschool'}>
              <FaYoutube className="text-3xl font-bold "></FaYoutube>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AddressBar;
