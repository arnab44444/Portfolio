import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router";

const ProjectCard = ({
  title,
  description,
  features,
  libraries,
  images,
  liveLink,
  clientLink,
  serverLink,
  detailsLink,
}) => {
  return (
    <div className="bg-base-200 rounded-xl shadow-xl p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Slider */}
        <div>
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            interval={3000}
          >
            {images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="rounded-lg h-84  w-full"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Project Content */}
        <div className="flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-cyan-500">{title}</h2>
            <p className="text-sm text-gray-700 mt-2">{description}</p>

            <ul className="list-disc ml-5 mt-3 text-sm">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <div className=" grid grid-cols-2 md:grid md:grid-cols-3 gap-2 mt-3">
              {libraries.map((lib, i) => (
                <div key={i} className="badge badge-outline badge-primary ">
                  {lib}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <a href={liveLink} target="_blank" rel="noreferrer">
              <button className="btn btn-info btn-sm">Live</button>
            </a>
            <a href={clientLink} target="_blank" rel="noreferrer">
              <button className="btn btn-info btn-sm">GH Client</button>
            </a>
            <a href={serverLink} target="_blank" rel="noreferrer">
              <button className="btn btn-info btn-sm">GH Server</button>
            </a>
            <Link to={detailsLink} className="btn btn-info btn-sm">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
