import tw from "tailwind-styled-components";
import Section from "../section/section.component";

export const RoadmapWrapper = tw(Section)`
    overflow-hidden 
`;

export const RoadmapContainer = tw.div`
    container 
    md:pb-10
`;

export const RoadmapCardsContainer = tw.div`
    relative 
    grid 
    gap-6 
    md:grid-cols-2 
    md:gap-4 
    md:pb-[7rem]
`

export const Status = tw.div`
    flex 
    items-center 
    justify-end 
    px-4 
    py-1 
    rounded 
    bg-n-1 
    text-n-8
`

export const Date = tw.div`
    flex 
    items-center 
    justify-between 
    max-w-[27rem] 
    mb-8 
    md:mb-20
`
