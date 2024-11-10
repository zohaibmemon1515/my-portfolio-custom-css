import React from "react";
import { FaPaintBrush, FaCode, FaVideo } from "react-icons/fa";

const GraphicDesignCard: React.FC = () => (
  <div className="graphic-design-card">
    <div className="icon-wrapper">
      <FaPaintBrush />
    </div>
    <div>
      <h3 className="title">Graphic Designing</h3>
      <p className="description">
        Every pixel has a soul, a hidden depth waiting to be uncovered. With
        each design, I strive to reveal that essence of transforming ideas into
        visual stories that speak to the viewer.
      </p>
    </div>
  </div>
);

const FrontendDevelopmentCard: React.FC = () => (
  <div className="graphic-design-card">
    <div className="icon-wrapper">
      <FaCode />
    </div>
    <div>
      <h3 className="title">Frontend Development</h3>
      <p className="description">
        Building responsive, interactive websites that offer a smooth and
        engaging user experience using the latest front-end technologies,
        ensuring your site is both functional and visually stunning across all
        devices.
      </p>
    </div>
  </div>
);

const VideoEditingCard: React.FC = () => (
  <div className="graphic-design-card">
    <div className="icon-wrapper">
      <FaVideo />
    </div>
    <div>
      <h3 className="title">
        Video Editing
      </h3>
      <p className="description">
        Transform your raw footage into captivating, high-quality videos that
        effectively tell your story, engage your audience, and elevate your
        brand with smooth edits, dynamic transitions, and professional-grade
        production.
      </p>
    </div>
  </div>
);

export { GraphicDesignCard, FrontendDevelopmentCard, VideoEditingCard };
