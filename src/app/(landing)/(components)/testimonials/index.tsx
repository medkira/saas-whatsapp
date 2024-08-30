import { Testimonial } from '@/domain/entities/Testimonials';
import SingleTestimonial from './single-testimonial';
import Common from '../common/Common';

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: 'Sabo Masties',
    designation: 'Founder @ Rolex',
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: '/images/testimonials/author-01.png',
    star: 5,
  },
  {
    id: 2,
    name: 'Margin Gesmu',
    designation: 'Founder @ UI Hunter',
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: '/images/testimonials/author-02.png',
    star: 5,
  },
  {
    id: 3,
    name: 'William Smith',
    designation: 'Founder @ Trorex',
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: '/images/testimonials/author-03.png',
    star: 5,
  },
];

const Testimonials = () => {
    return (
      <section className="bg-gray-1 my-12 md:mx-8 xl:my-24 mx-8">
        
        <Common
          spanText={`Testimonials`}
          paragraphText={`There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.`}
        />
  
        <div className="mt-[60px] flex flex-wrap justify-center lg:mt-20 gap-6">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  