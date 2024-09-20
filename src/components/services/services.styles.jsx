import tw from "tailwind-styled-components";
import Section from "../section/section.component";
import Generating from "../design/Generating";

export const ServicesWrapper = tw(Section)`

`;

export const ServicesContainer = tw.div`
    container
`;

export const BentoWrapper = tw.div`
    relative
`;

export const BentoContainer = tw.div`
    relative 
    flex 
    items-center 
    z-1 
    h-[39rem] 
    mb-5 
    p-8 
    border 
    border-n-1/10 
    rounded-3xl  
    overflow-hidden 
    lg:p-20 
    xl:h-[46rem]
`;

export const Services1Container = tw.div`
    absolute
    top-0
    left-0 
    size-full 
    pointer-events-none 
    md:w-3/5 
    xl:w-auto 
`;

export const Services1Content = tw.div`
    relative 
    z-1 
    max-w-[17rem] 
    ml-auto
`;

export const GeneratingContainer = tw(Generating)`
    absolute 
    left-4 
    right-4 
    bottom-4 
    border-n-1/10 
    border 
    lg:left-1/2 
    lg-right-auto 
    lg:bottom-8
    lg:-translate-x-1/2
`;

export const Bento2Container = tw.div`
    relative 
    z-1 
    grid 
    gap-5 
    lg:grid-cols-2
`;

export const Services2Container = tw.div`
    relative 
    min-h-[39rem] 
    border 
    border-n-1/10 
    rounded-3xl 
    overflow-hidden
`;

export const Services2Content = tw.div`
    absolute 
    inset-0 
    flex 
    flex-col 
    justify-end 
    p-8 
    bg-gradient-to-b 
    from-n-8/0 
    to-n-8/90 
    lg:p-15
`;

export const Bento3Container = tw.div`
    p-4 
    bg-n-7 
    rounded-3xl 
    overflow-hidden 
    lg:min-h-[46rem]
`;

export const Services3Content = tw.div`
    py-12 
    px-4 
    xl:px-8
`

export const Service3RobotContent = tw.div`
    relative 
    h-[20rem] 
    bg-n-8 
    rounded-xl 
    overflow-hidden  
    md:h-[25rem]
`
