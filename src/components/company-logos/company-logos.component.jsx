import { companyLogos } from "@/constants";
import Image from "next/image";
import React from "react";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="mb-6 text-center tagline text-n-1">
        Helping people create beautiful content at
      </h5>

      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex flex-1 items-center justify-center h-[8.5rem]"
          >
            <Image src={logo} width={150} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
