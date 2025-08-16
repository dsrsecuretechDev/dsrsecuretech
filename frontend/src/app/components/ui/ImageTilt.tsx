import React, { useRef } from "react";

interface ImageTiltProps {
  src: string;
  alt?: string;
  maxTilt?: number; // degrees
}

const ImageTilt: React.FC<ImageTiltProps> = ({
  src,
  alt = "",
  maxTilt = 15,
}) => {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X inside element
    const y = e.clientY - rect.top; // Mouse Y inside element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation in degrees
    const rotateX = ((y - centerY) / centerY) * maxTilt;
    const rotateY = ((centerX - x) / centerX) * maxTilt;

    imageRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    imageRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={imageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out"
      style={{
        perspective: "1000px",
        display: "inline-block",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-xl shadow-lg select-none"
        draggable={false}
      />
    </div>
  );
};

export default ImageTilt;
