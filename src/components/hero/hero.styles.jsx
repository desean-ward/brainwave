import tw from "tailwind-styled-components";

export const HeroContainer = tw.div`
    container 
    relative
`;

export const HeroWrapper = tw.div`
    relative
    z-1 
    max-w-[62rem]
    mx-auto 
    text-center 
    mb-[4rem] md:mb-20 lg:mb-[6rem]
`;

export const HeroImageContainer = tw.div`
    aspect-[33/40]
    md:aspect-[688/490] 
    lg:aspect-[1024/490]
    rounded-b-[0.9rem] 
    overflow-hidden 
`;

export const RobotBackgroundContainer = tw.div`
    absolute 
    -top-[54%] 
    left-1/2 
    w-[234%] 
    -translate-x-1/2 
    md:-top-[46%] 
    md:w-[138%] 
    lg:-top-[100%]
`;
