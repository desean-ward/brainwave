import tw from "tailwind-styled-components";

export const PricingListWrapper = tw.div`
    flex 
    gap-[1rem] 
    max-lg:flex-wrap
`;

export const PricingListCard = tw.div`
    w-[19rem] 
    max-lg:w-full 
    h-full 
    px-6 
    bg-n-8 
    border 
    border-n-6 
    rounded-[2rem] 
    lg:w-auto 
    even:py-14 
    odd:py-8 
    odd:my-4
    [&>h4]:first:text-color-2
    [&>h4]:even:text-color-1
    [&>h4]:last:text-color-3
`;
