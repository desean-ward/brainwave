import tw from 'tailwind-styled-components' 
import Section from '../section/section.component'

export const FooterWrapper = tw(Section)`
    !px-0
    !py-10
`

export const FooterContainer = tw.div`
    container 
    flex 
    sm:justify-between
    justify-center 
    items-center 
    gap-10
    max-sm:flex-col
`