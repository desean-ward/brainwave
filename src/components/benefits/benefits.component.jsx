import React from "react";
import {
  BenefitsCard,
  BenefitsCardContainer,
  BenefitsContainer,
  BenefitsWrapper,
  BgImageContainer,
  CardContent,
  CardIconAndLink,
} from "./benefits.styles";
import Heading from "../heading/heading.component";
import { benefits } from "@/constants";
import Image from "next/image";
import Arrow from "@/assets/svg/Arrow";
import { GradientLight } from "../design/Benefits";
import Card1 from "@/assets/svg/cards/Card1";
import Card2 from "@/assets/svg/cards/Card2";
import Card3 from "@/assets/svg/cards/Card3";
import Card4 from "@/assets/svg/cards/Card4";
import Card5 from "@/assets/svg/cards/Card5";
import Card6 from "@/assets/svg/cards/Card6";

const Benefits = () => {
  return (
    <BenefitsContainer id="features">
      <BenefitsWrapper className="">
        {/* Heading */}
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder With Brainwave"
        />

        {/* Cards */}
        <BenefitsCardContainer>
          {benefits.map((item) => (
            <BenefitsCard
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              {/* Content */}
              <CardContent>
                {/* Card Title */}
                <h5 className="mb-5 h5">{item.title}</h5>

                {/* Card Text */}
                <p className="mb-6 body-2 text-n-3 z-2">{item.text}</p>
              </CardContent>

              {/* Icon and Link */}
              <CardIconAndLink>
                <Image
                  src={item.iconUrl}
                  width={48}
                  height={48}
                  alt={item.title}
                />

                <p className="ml-auto text-xs font-bold tracking-wider uppercase font-code text-n-1">
                  Explore more
                </p>
                <Arrow />
              </CardIconAndLink>

              {/* Background Light - on some cards */}
              {item.light && <GradientLight />}

              {/* Background Image */}
              <div
                className="inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <BgImageContainer>
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  )}
                </BgImageContainer>
              </div>

              {/* Card Borders */}
              {item.id === "0" ? (
                <Card1 />
              ) : item.id === "1" ? (
                <Card2 />
              ) : item.id === "2" ? (
                <Card3 />
              ) : item.id === "3" ? (
                <Card4 />
              ) : item.id === "4" ? (
                <Card5 />
              ) : (
                <Card6 />
              )}
            </BenefitsCard>
          ))}
        </BenefitsCardContainer>
      </BenefitsWrapper>
    </BenefitsContainer>
  );
};

export default Benefits;
