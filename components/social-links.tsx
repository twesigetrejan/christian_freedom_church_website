import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const SocialLinks = () => {
  const links: { id: number; icon: any; route: string }[] = [
    {
      id: 1,
      icon: <FaYoutube />,
      route: "https://twitter.com",
    },
    {
      id: 2,
      icon: <FaFacebook />,
      route: "https://linkedin.com",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      route: "https://instagram.com",
    },
    {
      id: 3,
      icon: <FaTiktok />,
      route: "https://instagram.com",
    },
  ];
  return (
    <nav className="flex gap-4 justify-end text-2xl">
      {links.map(({ id, icon, route }) => (
        <Link
          key={id}
          href={route}
          className="hover:text-white transition-all ease-in-out duration-300"
        >
          <div>{icon}</div>
        </Link>
      ))}
    </nav>
  );
};

export default SocialLinks;
