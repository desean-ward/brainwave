import Link from "next/link";
import tw from "tailwind-styled-components";

export const HeaderContainer = tw.header`
    fixed 
    top-0
    left-0
    w-full
    z-50 
    border-b
    border-n-6
    lg:bg-n-8/90 
    lg:backdrop-blur-sm
`;

export const HeaderContent = tw.div`
    flex 
    items-center 
    px-5 
    lg:px-7.5
    xl:px-10 
    max-lg:py-4
`;

export const HeaderNav = tw.nav`
    fixed 
    top-[5rem]
    left-0 
    right-0 
    bottom-0 
    bg-n-8 
    lg:static 
    lg:flex 
    lg:mx-auto 
    lg:bg-transparent
`;

export const NavLinksContainer = tw.div`
    relative 
    z-2 
    flex 
    flex-col 
    items-center 
    justify-center 
    m-auto 
    lg:flex-row
`;

export const NavLink = tw(Link)`
    relative 
    flexblock 
    text-2xl
    uppercase 
    transition-colors
    font-code 
    text-n-1
    hover:text-color-1
    px-6 
    py-6 
    md:py-8 
l   g:mr-0.25 
    lg:text-xs 
    ont-semibold
`