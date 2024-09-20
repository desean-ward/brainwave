import React from "react";
import {
    Date,
  RoadmapCardsContainer,
  RoadmapContainer,
  RoadmapWrapper,
  Status,
} from "./roadmap.styles";
import Heading from "../heading/heading.component";
import { roadmap } from "@/constants";
import Image from "next/image";
import { check2, grid, loading } from "@/assets";
import Tagline from "../tagline/tagline.component";

const RoadMap = () => {
  return (
    <RoadmapWrapper id="roadmap">
      <RoadmapContainer>
        {/* Heading */}
        <Heading tag="Ready to get started" title="What we're working on" />

        {/* Cards */}
        <RoadmapCardsContainer>
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] rounded-[2.5rem] border-n-6 border ${
                  item.colorful ? "bg-conic-gradient p-0.25" : ""
                }`}
              >
                {/* Grid Background */}
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <Image
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>

                  {/* Dates */}
                  <div className="relative z-1">
                    <Date>
                      <Tagline>{item.date}</Tagline>

                      {/* Status */}
                      <Status>
                        <Image
                          src={item.status === "done" ? check2 : loading}
                          className="mr-2.5"
                          width={16}
                          height={16}
                          alt="Status"
                        />
                        <div className="tagline">{status}</div>
                      </Status>
                    </Date>

                    {/* Card Background Image */}
                    <div className="mb-10 -my-10 -mx-15">
                      <Image
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>

                    {/* Title */}
                    <h4 className="mb-4 h4">{item.title}</h4>

                    {/* Text */}
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </RoadmapCardsContainer>
      </RoadmapContainer>
    </RoadmapWrapper>
  );
};

export default RoadMap;
