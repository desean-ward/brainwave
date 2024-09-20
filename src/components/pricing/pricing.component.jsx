import Image from "next/image";
import {
  Orbit,
  PricingContainer,
  PricingWrapper,
  StarsContainer,
} from "./pricing.styles";
import { smallSphere, stars } from "@/assets";
import Heading from "../heading/heading.component";
import PricingList from "../pricing-list/pricing-list.component";
import { LeftLine, RightLine } from "../design/Pricing";

const Pricing = () => {
  return (
    <PricingWrapper id="pricing">
      <PricingContainer>
        <Orbit>
          {/* Sphere */}
          <Image
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />

          {/* Stars */}
          <StarsContainer>
            <Image
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </StarsContainer>
        </Orbit>

        {/* Heading */}
        <Heading
          className="mx-auto"
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        {/* Pricing List */}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-bold tracking-wider uppercase border-b font-code"
            href="#pricing"
          >
            See the full details
          </a>
        </div>
      </PricingContainer>
    </PricingWrapper>
  );
};

export default Pricing;
