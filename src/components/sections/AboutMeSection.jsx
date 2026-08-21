import React from 'react';

const AboutMeSection = () => {
  return (
    <section id="about" className='m-5 md:m-7'>
      {/* about me */}

      <div className='p-10 border-2 rounded-[10px] md:rounded-xl'>

        {/* Header */}
        <span className='font-bold text-2xl text-black'>About Me</span>


        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-5">

          {/* left side */}
          <div className='border-2'>
            <span>left side</span>
          </div>

          {/* right side */}
          <div className='border-2'>
            <span>right side</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;