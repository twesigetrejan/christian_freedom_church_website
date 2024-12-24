import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa6";
import { ReactNode } from "react"; 

interface SocialLink {
  id: number;
  icon: ReactNode;
  route: string;
}

const SocialLinks = () => {
  const links: SocialLink[] = [
    {
      id: 1,
      icon: <FaYoutube />,
      route: "https://www.youtube.com/channel/UCaxRmKjl2mz-qGKRTmkqrtQ",
    },
    {
      id: 2,
      icon: <FaFacebook />,
      route:
        "https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbUZDVmhfcHNXZm9IQlhhQ183QWJsOWJTSDJ5UXxBQ3Jtc0ttVFQtLW9VM0Q5MTFqQTVqbkRnSTBnX2NydUtmTjhCcl9IYm5wemdXNjNTWEJUUk5JMk50UFNvU1JiMFR1WlVpRWd2c1hzOXIwWjdTdGpWT3duaV9vc1lGWTNEVWhkb0tPOEhBWUlwcjV2Yi1BcGpTbw&q=https%3A%2F%2Fwww.facebook.com%2Fcfcministriesug",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      route:
        "https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbnZhYTl0TnJ1N0x5Q1hGa3lvYWR6VkdZVXdKd3xBQ3Jtc0tuY2tWWExmeHZaWWpoUzgtZzNyckpvWUc5OV9XMmJ1NnVuN3JyLVFQZnYxRGIxX3FWQ0NMMHJ4STIyX1Y5X0hpb1ZDTTBaQnAtY2RkWDdpVElBUW5kejNZT3dkZjE0eHIxakRONnZkckdGRjExNUlCZw&q=https%3A%2F%2Fwww.instagram.com%2Fcfcministriesug",
    },
    {
      id: 4,
      icon: <FaTiktok />,
      route:
        "https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbDlTZzNxb2dvOHlRalpKQ2k2eTRyRG12RDg4UXxBQ3Jtc0tsNVpFbmw4SzZQZmU2QnI3aEVqQkJiMjBoVzJiOE0xMXF2NUs4M0pzMFB0RTh5OFIwMGNIVEh5Zk1ObGk3UWdTeWRtdm9kcDV2djNhTGN2M2hucVNMV0ZZV2FwVQ&q=https%3A%2F%2Fwww.tiktok.com%2F%40cfcministries",
    },
  ];

  return (
    <nav className="flex justify-end text-[14px] gap-6">
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
