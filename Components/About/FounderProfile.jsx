import Image from 'next/image';
// import profilePic from '../public/founder.jpg'; // add the image to public folder as founder.jpg

const FounderProfile = () => {
  return (
    <div className="bg-black text-white p-8 rounded-lg max-w-sm mx-auto">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-4">
          <img src="/images/image 1.png"alt="Wameka Dahiiya" />
        </div>
        <h1 className="text-xl font-bold">Wameka Dahiiya</h1>
        <p className="text-center mt-2">
          15+ years of working experience in makeup industry & trainer. Expertise in bridal makeup, hairstyling & draping. I have done 250+ Bridal Makeup & 1000+ Party Makeup.
        </p>
      </div>
    </div>
  );
};

export default FounderProfile;
