import { socials } from "@/constants";
import { FooterContainer, FooterWrapper } from "./footer.styles";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterWrapper crosses>
      <FooterContainer>
        <p className="caption text-n-4 lg:block">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a key={item.id} className="flex items-center justify-center rounded-full cursor-pointer size-10 transtion-colors hover:bg-n-6 bg-n-7">
              <Image src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
