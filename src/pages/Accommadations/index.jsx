import React, { useState } from "react";
import Button from "../../Components/Button";
import LogoBack from "../../Components/LogoBack";
import { useNavigate } from "react-router-dom";
import "./accommadation.css";

function Accommodation() {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]); // State for multiple selected images

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    navigate("/adventure");
  };

  const images = [
    { id: 1, src: "/assets/t-1.png", alt: "Tree House 1", title: "Tree House" },
    { id: 2, src: "/assets/t-2.png", alt: "Tree House 2", title: "Tree House" },
    { id: 3, src: "/assets/t-3.png", alt: "Tree House 3", title: "Tree House" },
    { id: 4, src: "/assets/t-4.png", alt: "Tree House 4", title: "Tree House" },
    { id: 5, src: "/assets/t-1.png", alt: "Tree House 5", title: "Tree House" },
    { id: 6, src: "/assets/t-3.png", alt: "Tree House 6", title: "Tree House" },
    { id: 7, src: "/assets/t-4.png", alt: "Tree House 7", title: "Tree House" },
    { id: 8, src: "/assets/t-3.png", alt: "Tree House 8", title: "Tree House" },
    { id: 9, src: "/assets/t-2.png", alt: "Tree House 9", title: "Tree House" },
  ];

  const toggleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  return (
    <div className="accommodation-page">
      <div className="main-cont">
        <LogoBack onClick={handleBack} />
        <div className="step-text">Step 2 of 4</div>
      </div>

      <div className="main-content">
        <div className="main-leftside">
          <h1 className="title-text">
            Unlock <br /> Accommodations <br /> You&apos;ll Love!
          </h1>
          <p className="find-deals-text">Craft Your Dream Trip!</p>
          <Button onClick={handleContinue} className="continue-button">
            Continue
          </Button>
        </div>

        <div className="right-side">
          <div className="image-gallery">
            {images.map((image) => (
              <div
                key={image.id}
                className="image-item"
                onClick={() => toggleImageSelection(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`image-item-style ${selectedImages.includes(image.id) ? "selected" : ""
                    }`}
                />
                <p>{image.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accommodation;
