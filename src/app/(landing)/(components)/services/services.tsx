// import imageOne from '@/public/images/services/services-01.svg';
// import imageTwo from '@/public/images/services/services-02.svg';
// import imageThree from '@/public/images/services/services-03.svg';
// import imageFour from '@/public/images/services/services-04.svg';
// import imageFive from '@/public/images/services/services-05.svg';
// import imageSix from '@/public/images/services/services-06.svg';


const imageOne = '/images/services/services-01.svg';
const imageTwo = '/images/services/services-02.svg';
const imageThree = '/images/services/services-03.svg';
const imageFour = '/images/services/services-04.svg';
const imageFive = '/images/services/services-05.svg';
const imageSix = '/images/services/services-06.svg';
// services data
const ServicesData = [
  {
    textOne: 'Search engine',
    textTwo: 'optimization',
    style: 'bg-bgPrimary shadow-shadowPrimary ',
    iconStyle: 'bg-blackPrimary text-greenPrimary',
    spanStyle: 'span-green-style',
    image: imageOne,
  },
  {
    textOne: 'Pay-per-click',
    textTwo: 'advertising',
    image: imageTwo,
    textStyle: 'text-blackPrimary bg-greenPrimary]',
    style: 'bg-greenPrimary shadow-shadowPrimary ',
    iconStyle: 'bg-blackPrimary text-greenPrimary',
    spanStyle: 'span-white-style',
  },
  {
    textOne: 'Social Media',
    textTwo: 'Marketing',
    textStyle: 'text-blackPrimary bg-greenPrimary',
    style: 'bg-blackPrimary shadow-shadowPrimary ',
    arrowStyle: 'bg-white text-blackPrimary',
    buttonStyle: 'text-white',
    image: imageThree,
    spanStyle: 'span-white-style',
    iconStyle: 'bg-white text-blackPrimary',
    paragraphStyle: 'text-white',
  },
  {
    textOne: 'Email',
    textTwo: 'Marketing',
    textStyle: 'text-blackPrimary bg-greenPrimary',
    style: 'bg-bgPrimary shadow-shadowPrimary ',
    image: imageFour,
    spanStyle: 'span-green-style',
    iconStyle: 'bg-blackPrimary text-greenPrimary',
  },
  {
    textOne: 'Content',
    textTwo: 'Creation',
    image: imageFive,
    spanStyle: 'span-white-style',
    style: 'bg-greenPrimary shadow-shadowPrimary border-1 border-blackPrimary',
    iconStyle: 'bg-blackPrimary text-greenPrimary',
  },
  {
    textOne: 'Analytics and',
    textTwo: 'Tracking',
    image: imageSix,
    style: 'bg-blackPrimary shadow-shadowPrimary ',
    arrowStyle: 'bg-white text-blackPrimary',
    textStyle: 'text-blackPrimary bg-greenPrimary',
    buttonStyle: 'text-white',
    spanStyle: 'span-green-style',
    iconStyle: 'bg-white text-blackPrimary',
    paragraphStyle: 'text-white',
  },
];
import { MdArrowOutward } from 'react-icons/md';
import Common from '../common/Common';

const Services = () => {
  return (
    <section className="  mx-8 my-12 xl:my-24">
      {/* common components */}
      <div className="" id={`services`}>
        <Common
          spanText={`services`}
          paragraphText={`At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:`}
        />
      </div>
      <div className="my-12 grid grid-cols-1 gap-[40px] md:grid-cols-2 xl:my-24">
        {ServicesData.map((item, index) => {
          return (
            <div
              className={`${item.style} flex flex-col items-start justify-between gap-10 rounded-[1rem] p-[50px] md:flex-row `}
              key={index}
            >
              {/* text */}
              <div className="order-2 flex flex-col items-start justify-between space-y-8 md:order-1 lg:space-y-32">
                <div className="flex flex-col gap-0">
                  <span
                    className={`${item.spanStyle} w-fit rounded-md px-2 text-[23px]`}
                  >
                    {item.textOne}
                  </span>
                  <span
                    className={`${item.spanStyle} w-fit rounded-md px-2 text-[23px]`}
                  >
                    {item.textTwo}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`${item.iconStyle} w-fit rounded-full p-2 text-[30px] transition-all duration-300 hover:rotate-45 hover:cursor-pointer`}
                  >
                    <MdArrowOutward />
                  </div>
                  <p className={`paragraph ${item.paragraphStyle}`}>
                    Learn more
                  </p>
                </div>
              </div>
              {/* image */}
              <div className="order-1 max-w-[100%] lg:order-2">
                <img src={item.image} alt="services image" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
