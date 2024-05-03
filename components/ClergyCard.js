import cardBg from "@/images/cardBg.svg";
import img1 from "@/images/about/clergy/1.png";
import Image from "next/image";

const ClergyCard = () => {
  return (
    <div className='bg-[#FFF5E1] w-[400px] h-80 rounded-[30px] relative'>
      <Image src={cardBg} width={80} alt='Logo' className='w-full absolute' />
      <div className='relative p-2 flex flex-col justify-center items-center'>
        <h4 className='text-[#FFF5E1] text-center'>
          Fr. Geraldo Aleixo Antonio Da Costa
        </h4>
        <Image src={img1} width={200} alt='Photo' className=' ' />
      </div>
    </div>
  );
};

export default ClergyCard;