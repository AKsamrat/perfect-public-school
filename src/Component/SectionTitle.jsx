const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 mx-auto my-7">
      <p className="text-[#00C2CB] text-center mb-2">--- {subHeading} ---</p>
      <p className="text-4xl uppercase border-y-2 border-[#E8E8E8] py-4 text-center">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;
