import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

const Myplace = () => {
  return (
    <section className="pb-20">
      <div className="mt-8  grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40%_60%]">
        <div className="w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">My Stack.</h3>
          <div className="flex flex-col flex-nowrap justify-center gap-5 items-baseline w-full h-96 sm:h-[400px] lg:h-[400px] overflow-hidden rounded-lg bg-[#b8b8b8]">
            <Marquee speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  React & Next.js
                </div>
                <Star className="text-primary-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Python Development
                </div>
                <Star className="text-primary-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  JavaScript & TypeScript
                </div>
                <Star className="text-primary-600" />
                <span></span>
              </div>
            </Marquee>
            <Marquee direction="right" speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Node.js & Express.js
                </div>
                <Star className="text-primary-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Database Design
                </div>
                <Star className="text-primary-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  TailwindCSS & Bootstrap
                </div>
                <Star className="text-primary-600" />
                <span></span>
              </div>
            </Marquee>
            <Marquee speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Responsive Web Design
                </div>
                <Star className="text-primary-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Node.js Backend Development
                </div>
                <Star className="text-primary-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  MongoDB & SQL Databases
                </div>
                <Star className="text-primary-600" />
                <span></span>
              </div>
            </Marquee>
            <Marquee direction="right" speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  TensorFlow Lite Proficiency
                </div>
                <Star className="text-primary-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  AI-Powered Chatbots
                </div>
                <Star className="text-primary-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  OpenAI APIs
                </div>
                <Star className="text-primary-600" />
                <span></span>
              </div>
            </Marquee>
            <Marquee speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Rapid Prototyping
                </div>
                <Star className="text-primary-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Attention to Detail
                </div>
                <Star className="text-primary-600" />
                <div className="bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Problem Solving
                </div>
                <Star className="text-primary-600" />
                <span></span>
              </div>
            </Marquee>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            My Special Place.
          </h3>
          <div className="relative w-full h-96 sm:h-[400px] lg:h-[400px] overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27239.783468499456!2d74.20932539999998!3d31.4148718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fe2cfc4d8645%3A0x366027ad60688b9!2sLda%20Avenue%20Phase%201%20Lda%20Avenue%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1782133056962!5m2!1sen!2s"
              className="absolute top-0 left-0 w-full h-full"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myplace;
