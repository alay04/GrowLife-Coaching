import { FiPhoneCall } from "react-icons/fi";

const data = [
  {
    icon: <FiPhoneCall size={45} color="#f37608" />,
    title: "1000+",
    subtitle: "Suitibility Calls",
  },
  {
    icon: <img width={55} height={55} src="/icons/badge.png" alt="" />,
    title: "10+",
    subtitle: "Years Experience",
  },
  {
    icon: <img width={55} height={55} src="/icons/handshake.png" alt="" />,
    title: "1000+",
    subtitle: "Collaborations",
  },
  {
    icon: <img width={55} height={55} src="/icons/stars.png" alt="" />,
    title: "97%",
    subtitle: "Client Success Rate",
  },
];

const Statistics = () => {
  return (
    <div className="p-10 bg-[#e7e45c] flex flex-col lg:flex-row justify-center gap-8 lg:gap-48 items-center">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-1">
          {item.icon}
          <p className="text-green-800 font-bold text-lg">{item.title}</p>
          <p className="text-green-800 text-sm">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
