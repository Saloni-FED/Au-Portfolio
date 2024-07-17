import Link from "next/link";
import Image from "next/image"; // Replace with your logo path

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 box-border">
      <div className="w-full mx-auto flex justify-between items-center bg-gradient-to-l from-[#f496ac] ">
        <div className="flex items-center">
          <img alt="Logo" src="/images/LOGO (1).png" className=" h-full w-48" />
          {/* <span className="ml-3 text-xl font-bold">Aistear Unica</span> */}
        </div>
        <div className="gap-10 items-center pr-2 justify-between  hidden sc:flex border-b-2 border-white ">
          {/* Responsive navigation links */}
          <div className="hidden max-w-2xl sm:flex space-x-5 text-sm font-sora md:text-[18px]">
            <Link href="/about">About us</Link>
            <Link href="#for-users">for User's</Link>
            <Link href="#for-artists">for Artist's</Link>
            <Link href="#knowledge-centre">Knowledge centre</Link>
            <Link href="#contact-us">Contact us</Link>
          </div>
          {/* Responsive app download buttons */}
          <div className="flex flex-col gap-1">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black text-white rounded-lg p-2 shadow-md hover:shadow-lg transition"
            >
              <img src="/images/playstore.svg" alt="Google Play Icon" className="w-5 h-5 mr-2" />
              <div className="text-xs leading-tight">
                <p className="text-[7px]">GET IT ON</p>
                <p className="font-bold">Google Play</p>
              </div>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black text-white rounded-lg p-2 shadow-md hover:shadow-lg transition"
            >
              <img src="/images/ap.png" alt="App Store Icon" className="w-5 h-5 mr-2 invert" />
              <div className="text-xs leading-tight">
                <p className="text-[7px]">Download on the</p>
                <p className="font-bold">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
