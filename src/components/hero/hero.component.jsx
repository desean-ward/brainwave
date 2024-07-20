"use client";
import React, { useRef } from "react";
import Section from "../section/section.component";
import {
  HeroContainer,
  HeroImageContainer,
  HeroWrapper,
  RobotBackgroundContainer,
} from "./hero.styles";
import Image from "next/image";
import { curve, heroBackground, robot } from "@/assets";
import Button from "../button/button.component";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import { heroIcons } from "@/constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "../design/Generating";
import Notification from "../design/Notification";
import CompanyLogos from "../company-logos/company-logos.component";

const Hero = () => {
  {
    /* Reference for parallax effect */
  }
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <HeroContainer ref={parallaxRef}>
        <HeroWrapper>
          {/* Heading */}
          <h1 className="mb-6 h1">
            Explore The Possibilites of&nbsp;AI&nbsp;Chatting With{" "}
            <span className="relative inline-block">
              Brainwave{" "}
              <Image
                src={curve}
                alt="curve"
                className="absolute left-0 w-full top-full xl:-mt-2"
                width={624}
                height={28}
              />
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          {/* Call to action button */}
          <Button href="/pricing" white>
            Get Started
          </Button>
        </HeroWrapper>

        {/* Gradient Background Image Container */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative p-0.5 z-1 rounded-2xl bg-conic-gradient">
            <div className="relative rounded-[1rem] bg-n-8">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              {/* Robot Background Image */}
              <HeroImageContainer>
                <Image
                  src={robot}
                  alt="AI"
                  width={1024}
                  height={490}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                />
              </HeroImageContainer>

              {/* AI Is Generating Component */}
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

              {/* Hero Icons Component w/ parallax effect */}
              <ScrollParallax isAbsolutelyPositioned>
                <ul className="absolute hidden -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                  {heroIcons.map((icon, index) => (
                    <li className="p-5" key={index}>
                      <Image src={icon} width={24} height={25} alt={icon} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax>

              {/* Code Genration Notification Component w/ parallax effect */}
              <ScrollParallax isAbsolutelyPositioned>
                <Notification
                  className="absolute hidden -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                  title="Code Generation"
                />
              </ScrollParallax>
            </div>

            {/* Background gradient below the robot image */}
            <Gradient />
          </div>

          {/* Hero Robot Background Image */}
          <RobotBackgroundContainer>
            <Image
              src={heroBackground}
              alt="hero bg"
              className="w-full"
              width={1440}
              height={1800}
            />
          </RobotBackgroundContainer>

          {/* Circles Background */}
          <BackgroundCircles />
        </div>
        
        <CompanyLogos className="relative z-10 hidden mt-20 lg:block" />
      </HeroContainer>

      <BottomLine />
    </Section>
  );
};

export default Hero;
