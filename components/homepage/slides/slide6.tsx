import { useRouter } from "next/navigation";

const Slide6 = () => {
  const nav = useRouter();
  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <h1 className="text-[#08f345] text-3xl lg:text-6xl text-center font-bold">
        WHY CHOOSE US?
      </h1>
      <ul className="flex text-white flex-col font-semibold gap-2 text-xl lg:text-4xl text-center">
        <li>
          Tailored plans & goals for individuals, groups and organisations
        </li>
        <li> Proven strategies</li>
        <li> Guidance from lived experiences</li>
        <li> Empathy & understanding</li>
        <li> Inspirational & Action-orientated coaching</li>
        <li> Holistic approach</li>
      </ul>
      <button
        onClick={() => nav.push("/free-suitability-session")}
        className="bg-[#f37608] shadow-lg mt-10 hover:scale-[103%] transition-all hover:bg-[#d86908] cursor-pointer text-white px-12 text-2xl py-4 rounded-full"
      >
        Book Your Free Session
      </button>
    </div>
  );
};

export default Slide6;
