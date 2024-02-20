import Image from "next/image";

const data = [
  {
    id: 1,
    social: "calendly",
    link: "https://calendly.com/tapan1/30min",
    image: "socials/calendly.svg",
  },
  {
    id: 2,
    social: "linkedin",
    link: "https://www.linkedin.com/in/tapan-rai/",
    image: "socials/linkedin.svg",
  },
  {
    id: 3,
    social: "twitter",
    link: "https://twitter.com/asyncninja",
    image: "socials/x.svg",
  },
  {
    id: 4,
    social: "github",
    link: "https://www.github.com/AceTheNinja",
    image: "socials/github.svg",
  },
];

const Socials = () => {
  return (
    <div className="flex gap-x-6">
      {data.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={item.image}
            alt={item.social}
            width={20}
            height={20}
            className="hover:scale-110 transition-all"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
