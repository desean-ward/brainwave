import tw from 'tailwind-styled-components' 
import Section from '../section/section.component'

export const PricingWrapper = tw(Section)`
    overflow-hidden
`

export const PricingContainer = tw.div`
    container 
    relative 
    z-2
`
export const Orbit = tw.div`
    hidden 
    relative 
    justify-center 
    mb-[6.5rem] 
    lg:flex
`

export const StarsContainer = tw.div`
    absolute 
    top-1/2 
    left-1/2 
    w-[60rem] 
    -translate-x-1/2 
    -translate-y-1/2 
    pointer-events-none
`