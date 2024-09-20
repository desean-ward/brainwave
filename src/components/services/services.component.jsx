import Image from "next/image";
import Heading from "../heading/heading.component";
import {
  Bento2Container,
  Bento3Container,
  BentoContainer,
  BentoWrapper,
  GeneratingContainer,
  Service3RobotContent,
  Services1Container,
  Services1Content,
  Services2Container,
  Services2Content,
  Services3Content,
  ServicesContainer,
  ServicesWrapper,
} from "./services.styles";
import { service1, service2, service3, check } from "@/assets";
import { brainwaveServices, brainwaveServicesIcons } from "@/constants";
import {
  PhotChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";

const Services = () => {
  return (
    <ServicesWrapper id="how-to-use">
      <ServicesContainer>
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlockks the potential of AI-powered applications"
        />

        <BentoWrapper>
          {/*Bento 1 */}
          <BentoContainer>
            <Services1Container>
              <Image
                src={service1}
                alt="Smartest AI"
                className="object-cover w-full h-full md:object-right"
                width={800}
                height={730}
              />
            </Services1Container>

            <Services1Content>
              <h4 className="mb-4 h4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>

              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6 "
                  >
                    <Image src={check} alt="check" width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </Services1Content>

            {/* Generating */}
            <GeneratingContainer />
          </BentoContainer>

          {/* Bento2 */}
          <Bento2Container>
            <Services2Container>
              <div className="absolute inset-0">
                <Image
                  src={service2}
                  className="object-cover size-full"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <Services2Content>
                <h4 className="mb-4 h4">Photo editting</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </Services2Content>

              {/* PhotoChatMessage */}
              <PhotChatMessage />
            </Services2Container>

            {/* Bento 3 */}
            <Bento3Container>
              <Services3Content>
                <h4 className="mb-4 h4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world&apos;s most powerful AI photo and video art
                  generation engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center transition-shadow duration-300 hover:shadow-lg ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center size-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <Image
                          src={item}
                          width={24}
                          height={24}
                          className="transition cursor-pointer hover:scale-110"
                          alt="icon"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </Services3Content>

              {/* Robot Image */}
              <Service3RobotContent>
                <Image
                  src={service3}
                  className="object-cover size-full"
                  width={520}
                  height={400}
                  alt="Scary Robot"
                />

                {/* Video Chat Message */}
                <VideoChatMessage />

                {/* Video Bar */}
                <VideoBar />
              </Service3RobotContent>
            </Bento3Container>
          </Bento2Container>

          <Gradient />
        </BentoWrapper>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default Services;
