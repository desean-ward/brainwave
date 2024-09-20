import React from "react";
import { PricingListCard, PricingListWrapper } from "./pricing-list.styles";
import { pricing } from "@/constants";
import Button from "../button/button.component";
import Image from "next/image";
import { check } from "@/assets";

const PricingList = () => {
  return (
    <PricingListWrapper>
      {pricing.map((item) => (
        <PricingListCard key={item.id}>
          {/* Title */}
          <h4 className="mb-4 h4">{item.title}</h4>

          {/* Description */}
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          {/* Price */}
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
              </>
            )}
          </div>

          {/* Button */}
          <Button
            className="w-full mb-6"
            href={item.price ? "#pricing" : "mailto:dward@desean-ward.me"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          {/* Features */}
          {item.features.map((feature, index) => (
            <li key={index} className="flex items-start py-5 list-none border-t border-n-6">
              <Image src={check} width={24} height={24} alt="Check" />

              <p className="ml-4 body-2">{feature}</p>
            </li>
          ))}
        </PricingListCard>
      ))}
    </PricingListWrapper>
  );
};

export default PricingList;
