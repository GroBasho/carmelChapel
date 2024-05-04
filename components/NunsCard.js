import cardNunBg from "@/images/cardNunBg.svg";
import Image from "next/image";

const NunsCard = (props) => {
    return (
        <div className='bg-[#80011F] w-full h-[500px] rounded-[32px] relative p-5'>
            <Image src={cardNunBg} width={80} alt='Logo' className='w-full absolute top-0 left-0' />
            <div className='relative p-2 flex flex-col justify-center items-center'>
                <h4 className='Abril-Regular text-xl burgundy text-center'>
                    {props.name}
                </h4>
                <div className="Livvic-Semibold text-base"><b>Present Location:</b> {props.location}</div>
                <Image src={props.img} height={200} width={200} alt='Photo' className=' ' />
                <div className="Livvic-Semibold text-white text-base">Congregation: {props.cong}</div>
                <div className="Livvic-Semibold text-white text-base">Born: {props.dob} :: Profession: {props.prof} </div>
                <div className="Livvic-Semibold text-white text-base">Position Held: {props.pos}</div>
                <div className="Livvic-Semibold text-white text-base">Ward: {props.ward}</div>
            </div>
        </div>
    );
};

export default NunsCard;