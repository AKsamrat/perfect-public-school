import { FaAward } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { PiStudentBold } from 'react-icons/pi';

const Summary = () => {
  return (
    <div className="absolute -translate-y-20 z-10 left-32 hidden lg:flex ">
      <section className="px-4 py-12 mx-auto max-w-5xl">
        <div className="flex justify-center items-center gap-14">
          <div className="flex justify-center items-center gap-6 p-4 border-2 border-[#00C2CB] rounded-xl bg-pink-100 w-96">
            <div className="flex items-center justify-center w-10 h-10 text-pink-700  rounded">
              <HiUserGroup className="text-5xl"></HiUserGroup>
            </div>
            <div className="ml-3">
              <h2 className="mb-1 text-3xl font-bold leading-none text-gray-900 truncate">
                800+
              </h2>
              <p className="text-sm leading-none text-gray-600 font-bold">
                STUDENTS
              </p>
            </div>
          </div>
          <div className="w-[450px]">
            <div className="flex justify-center items-center gap-6 p-5  border-2 border-[#00C2CB] rounded-xl bg-green-100 w-full">
              <div className="flex items-center justify-center w-10 h-10 text-green-700  rounded">
                <LiaChalkboardTeacherSolid className="text-5xl"></LiaChalkboardTeacherSolid>
              </div>
              <div className="ml-3">
                <h2 className="mb-1 text-3xl font-bold leading-none text-gray-900 truncate">
                  85+
                </h2>
                <p className="text-sm leading-none text-gray-600 font-bold">
                  STAFFS
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 p-5 card bg-red-100 border-2 border-[#00C2CB] rounded-xl w-96">
            <div className="flex items-center justify-center w-10 h-10 text-red-700   rounded">
              <FaAward className="text-5xl"></FaAward>
            </div>
            <div className="ml-3">
              <h2 className="mb-1 text-3xl font-bold leading-none text-gray-900 truncate">
                25+
              </h2>
              <p className="text-sm leading-none text-gray-600 font-bold">
                AWARDS
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 p-5 card bg-yellow-100  border-2 border-[#00C2CB] rounded-xl w-96 ">
            <div className="flex items-center justify-center w-10 h-10 text-yellow-700   rounded">
              <PiStudentBold className="text-5xl"></PiStudentBold>
            </div>
            <div className="ml-3">
              <h2 className="mb-1 text-3xl font-bold leading-none text-gray-900 truncate">
                100%
              </h2>
              <p className="text-sm leading-none text-gray-600 font-bold">
                SUCCESS
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Summary;
