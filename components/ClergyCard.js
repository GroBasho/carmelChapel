import cardBg from "@/images/cardBg.svg";
import Image from "next/image";

const ClergyCard = (props) => {
  return (
    <div className='bg-[#FFF5E1] w-full h-[400px] rounded-3xl relative p-5'>
      <Image src={cardBg} width={80} alt='Logo' className='w-full absolute top-0 left-0' />
      <div className='relative p-2 flex flex-col justify-center items-center'>
        <h4 className='text-[#FFF5E1] text-center'>
          {props.name}
        </h4>
        <Image src={props.img} height={200} width={200} alt='Photo' className=' ' />
        <div className="Livvic-Semibold burgundy text-base">{props.location}</div>
        <div className="Livvic-Semibold burgundy text-base">Born: {props.dob} :: Ordination: {props.ordained} </div>
        <div className="Livvic-Semibold burgundy text-base">{props.ward}</div>
      </div>
    </div>
  );
};

export default ClergyCard;