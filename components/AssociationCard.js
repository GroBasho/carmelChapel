const Footer = ({ associationName, info, members }) => {
  return (
    <div className='bg-[#80011F] min-h-fit w-[90%] sm:max-w-[700px] p-[10px] rounded-[30px] text-center Livvic-Regular text-[#FFF5E1]'>
      <div className='border-4 border-[#FFF5E1] max-h-fit w-full rounded-3xl p-4'>
        <h3 className='text-4xl uppercase font-bold mb-6'>{associationName}</h3>
        <p>{info}</p>
        <hr className='bg-[#FFD800] text-[#FFD800] h-[3px] border-0 rounded-full w-[90%] ml-[5%] my-7' />
        <div>
          <h4 className='uppercase font-bold text-xl mb-4'>Members</h4>
          <p>{members}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
