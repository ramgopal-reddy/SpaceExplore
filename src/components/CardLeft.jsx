import React from "react";

export default function CardLeft({
  //   sectionTitle,
  //   sectionSubtitle,
  name,
  designation,
  testimonial,
  image,
}) {
  return (
    <section className="bg-white font-serif mt-10 rounded-2xl">
      <div className="px-6 py-5">
        {/* <p className="text-xl font-medium text-black-500">{sectionTitle}</p>

        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          {sectionSubtitle}
        </h1> */}

        <main className="relative z-20 w-full md:flex md:items-center flex flex-row md:justify-between">
          <div className="absolute w-full bg-black -z-10 md:h-96 rounded-2xl"></div>

          <div className="w-full p-6 bg-black md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-xl font-medium tracking-tight text-white">
                  {name}
                </p>
                <p className="text-blue-200">“{designation}”</p>
              </div>

              {/* <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                “{testimonial}”
              </p> */}
            </div>
            <img
              className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl shadow-lg shadow-blue-200 scroll-behavior: auto"
              src={image}
              alt={`${name} photo`}
            />
          </div>
        </main>
      </div>
    </section>
  );
}
