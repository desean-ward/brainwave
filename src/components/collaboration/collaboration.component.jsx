import React from "react";
import {
  AppsContainer,
  CollaborationContainer,
  CollaborationSection,
  GradientRing,
  ImageContainer,
  Ring,
  TechGraphicContainer,
} from "./collaboration.styles";
import { collabApps, collabContent, collabText } from "@/constants";
import Image from "next/image";
import { brainwaveSymbol, check } from "@/assets";
import Button from "../button/button.component";
import { LeftCurve, RightCurve } from "../design/Collaboration";

const Collaboration = () => {
  return (
    <CollaborationSection crosses>
      <CollaborationContainer>
        <div className="max-w-[25rem]">
          <h2 className="mb-4 h2 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="py-3 mb-3">
                <div className="flex items-center">
                  <Image src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-9">{item.title}</h6>
                </div>

                {/* Text */}
                {item.text && (
                  <p className="mt-2 body-2 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          {/* Try it now button */}
          <Button>Try it now</Button>
        </div>

        {/* Right Side */}
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="mb-4 body-2 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <AppsContainer>
            {/* Ring 1 */}
            <Ring>
              {/* Gradient Ring */}
              <GradientRing>
                {/* Image Container */}
                <ImageContainer>
                  <Image
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </ImageContainer>
              </GradientRing>
            </Ring>

            { /* Apps */}
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex size-[3.2rem] bg-n-7 border-n-1/15 border rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <Image
                      src={app.icon}
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* Lines */}
            <LeftCurve />
            <RightCurve />
          </AppsContainer>
        </div>
      </CollaborationContainer>
    </CollaborationSection>
  );
};

export default Collaboration;
