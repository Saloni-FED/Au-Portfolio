// src/components/ContactForm.js
const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-black text-white pb-10 px-4 md:px-10 lg:px-20 mt-32">
        <div className="max-w-7xl  pl-3">
          <div>
            <div className="relative inline-block ">
              <h2 className="text-3xl sm:text-4xl font-sora font-semibold">
                Connect with Us
              </h2>
              <div className="absolute w-[30%] h-[2px] bg-white mt-1 md:pl-10"></div>
            </div>
          </div>
          <div className="w-full  flex justify-start">
            <p className="mt-10 text-left  2xl:w-[95%] font-sora font-semibold">
              Join us in our journey to redefine beauty services. Whether you're
              looking for bridal makeup, a glam look for a special event, or
              just a simple touch-up, Aistear Unica is here to enhance your
              beauty experience. Reach out today and let us bring your vision to
              life.
            </p>
          </div>
        </div>
      </div>
      <div className=" text-black py-6 px-10 rounded-2xl shadow-md w-full max-w-[600px] border-2">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1 text-white">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Jonathan"
              className="p-2 border rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-1 text-white">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Jonathan"
              className="p-2 border rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="number" className="mb-1 text-white">
              Number
            </label>
            <input
              id="number"
              name="number"
              type="text"
              placeholder="+91"
              className="p-2 border rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-white">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Jonathan"
              className="p-2 border rounded"
            />
          </div>
          <div className="flex flex-col col-span-1 sm:col-span-2">
            <label htmlFor="note" className="mb-1 text-white">
              Note
            </label>
            <textarea
              id="note"
              name="note"
              placeholder="Leave a message"
              className="p-2 border rounded"
            ></textarea>
          </div>
          <div className="flex justify-center col-span-1 sm:col-span-2">
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-2xl mt-4"
            >
              Contact us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
