import React, { useState } from "react";
import "./testimonial.css"; // Import your CSS file

const testimonialsData = [
  {
    header: "Best financial decision ever!",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis.",
    author: "Aarav Lynn",
    location: "San Francisco, USA",
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    header: "The last step to becoming a complete minimalist",
    text: "Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum.",
    author: "Miyah Miles",
    location: "London, UK",
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    header: "Finally free from old-school banks",
    text: "Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem.",
    author: "Francisco Gomes",
    location: "Lisbon, Portugal",
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === testimonialsData.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? testimonialsData.length - 1 : currentSlide - 1
    );
  };

  return (
    <section className="section" id="section--3">
      <div className="slider">
        <h2 className="testimonialHead">Customer's Testimonial</h2>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`slide slide--${index + 1} ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              transform: `translateX(${100 * (index - currentSlide)}%)`,
            }}
          >
            <div className="testimonial">
              <address className="testimonial__author">
                <img
                  src={testimonial.photo}
                  alt=""
                  className="testimonial__photo"
                />
                <h6 className="testimonial__name">{testimonial.author}</h6>
                <p className="testimonial__location">{testimonial.location}</p>
              </address>
              <h5 className="testimonial__header">{testimonial.header}</h5>
              <blockquote className="testimonial__text">
                {testimonial.text}
              </blockquote>
            </div>
          </div>
        ))}
        <button className="slider__btn slider__btn--left" onClick={prevSlide}>
          &larr;
        </button>
        <button className="slider__btn slider__btn--right" onClick={nextSlide}>
          &rarr;
        </button>
        <div className="dots">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`dots__dot ${
                index === currentSlide ? "dots__dot--active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
