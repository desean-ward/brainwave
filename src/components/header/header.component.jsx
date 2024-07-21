"use client";
import Image from "next/image";
import {
  HeaderContainer,
  HeaderContent,
  HeaderNav,
  NavLink,
  NavLinksContainer,
} from "./header.styles";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "@/assets";
import { navigation } from "@/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Button from "../button/button.component";
import MenuSvg from "@/assets/svg/MenuSvg";
import { HambugerMenu } from "../design/Header";

const Header = () => {
  const pathname = usePathname();

  const [activeLink, setActiveLink] = useState(null);
  const [openNavigation, setOpenNavigation] = useState(false);

  // Toggle Navigation
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  {
    /* Automatically close menu on link click */
  }
  const handleClick = (e) => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <HeaderContainer
      className={`${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <HeaderContent>
        <Link className="block w-[12rem] xl:mr-8" href="#hero">
          <Image src={brainwave} alt="Brainwave Logo" width={190} height={40} />
        </Link>

        <HeaderNav className={`${openNavigation ? "flex" : "hidden"}`}>
          <NavLinksContainer>
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                href={item.url}
                className={`${item.onlyMobile ? "lg:hidden" : ""} ${
                  item.url === activeLink ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                onClick={() => (setActiveLink(item.url), handleClick())}
              >
                {item.title}
              </NavLink>
            ))}
          </NavLinksContainer>
          <HambugerMenu />
        </HeaderNav>

        <a
          href="#signup"
          className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block"
        >
          New Account
        </a>

        {/* Sign In Button */}
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
