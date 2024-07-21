import tw from "tailwind-styled-components";
import Section from "../section/section.component";

export const CollaborationSection = tw(Section)`

`;

export const CollaborationContainer = tw.div`
    container 
    lg:flex
`;

export const AppsContainer = tw.div`
   relative 
   left-1/2 
   flex 
   w-[22rem] 
   aspect-square 
   border 
   border-n-6 
   rounded-full 
   -translate-x-1/2 
   scale:75 
   md:scale-100
`;

export const Ring = tw.div`
    flex 
    m-auto 
    border 
    rounded-full 
    border-n-6 
    w-60 
    aspect-square
`;

export const GradientRing = tw.div`
    w-[6rem] 
    aspect-square 
    m-auto 
    p-[0.2rem] 
    bg-conic-gradient 
    rounded-full
`;

export const ImageContainer = tw.div`
    flex 
    items-center 
    justify-center 
    rounded-full 
    size-full 
    bg-n-8
`;
