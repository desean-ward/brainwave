import tw from "tailwind-styled-components";

export const BenefitsContainer = tw.section`
    container 
    relative
`;

export const BenefitsWrapper = tw.div`
    
`;

export const BenefitsCardContainer = tw.div`
    flex 
    flex-wrap 
    gap-10 
    mb-10
`;

export const BenefitsCard = tw.div`
    block 
    relative 
    p-0.5 
    bg-no-repeat 
    bg-[length:100%_100%] 
    md:max-w-[24rem] 
    z-10
    mb-6
`;

export const CardContent = tw.div`
    relative 
    flex 
    flex-col 
    min-h-[22rem] 
    p-[2.4rem] 
    pointer-events-none 
    -mt-2
`;

export const CardIconAndLink = tw.div`
    relative 
    flex 
    items-center 
    mx-auto 
    t-auto 
    md:max-w-[19rem]
`;

export const BgImageContainer = tw.div`
    absolute 
    inset-0 
    opacity-0 
    trnsition-opacity 
    hover:opacity-10
`;