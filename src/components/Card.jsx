import React, { useEffect, useRef, useState } from "react";

const Card = ({
  imgSrc,
  largeImgSrc,
  photographer,
  photographer_url,
  avg_color,
  children,
}) => {
  const cardRef = useRef(null);
  const [displayImage, setDisplayImage] = useState(false);
  let cardObserver;
  useEffect(() => {
    if (cardRef && cardRef.current) {
      if (!cardObserver) {
        cardObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.src = imgSrc;
              }
            });
          },
          { threshold: 0.5 }
        );
      }

      cardObserver.observe(cardRef.current);
    }
  }, [cardRef]);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") setDisplayImage(false);
      document.body.style.overflow = "";
    });
  }, []);

  const displayFullImage = () => {
    setDisplayImage(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <div className="card">
      {children}
      <div
        className="card--image"
        style={{ backgroundColor: avg_color }}
        onClick={displayFullImage}
      >
        <img ref={cardRef} />
      </div>
      <div className="card--meta-data">
        <div className="user-name-profile">
          <div className="profile" style={{ backgroundColor: avg_color }}></div>
          <div className="photographer">
            <a
              href={photographer_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {photographer}
            </a>
          </div>
        </div>
        {/* <span className="likes">{likes}</span> */}
      </div>
      {displayImage ? (
        <div id="modal">
          <div className="full-image">
            <img src={largeImgSrc} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
