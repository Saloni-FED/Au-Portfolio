import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 font-sora w-full">
      <div className="container  px-4 md:flex md:justify-between 2xl:w-[80%] md:w-[80%]  mx-auto gap-2">
        <div className="md:w-1/3 mb-8 md:mb-0 2xl:pl-10 pl-1">
          <img src="/images/LOGO (1).png" alt="Logo" className="w-56 mb-4 -mt-4" />
          <p className="w-[60%]">
            At AISTEAR UNICA, we Discover beauty that goes beyond skin deep. Let
            us enhance your natural.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-facebook  text-2xl"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mb-8 md:mb-0  2xl:ml-32 lg:ml-20">
        <div>
          <div className="relative inline-block ">
            <h2 className="font-xl font-sora font-semibold">
              Quick Links
            </h2>
            <div className="absolute w-[50%] h-[1px] bg-white mt-1  md:pl-10"></div>
          </div>
        </div>
          <ul className="mt-5">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                For User's
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                For Artist's
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Makeups
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Knowledge centre
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3  2xl:pl-10">
        <div className="relative inline-block ">
            <h2 className="font-xl font-sora font-semibold">
              Have a Question ?
            </h2>
            <div className="absolute w-[50%] h-[1px] bg-white mt-1  md:pl-10"></div>
          </div>
          <address className="not-italic mb-4 mt-5">
            Abcd, Crossing Republic
            <br />
            Ghaziabad - 201009
          </address>
          <p className="mb-2">+91 00000 00000</p>
          <p>aistearunica@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 ">
        <div className="container mx-auto px-4 md:flex 2xl:justify-center md:justify-between  text-sm 2xl:w-[80%] md:w-[80%] gap-5">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & conditions
            </a>
            <a href="#" className="hover:underline">
              Cancellation & refund
            </a>
          </div>
          <p className="lg:pr-32">© 2024 Aistear Unica</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
