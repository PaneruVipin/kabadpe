import React, { useState } from "react";

const FloatingInstagramButton = ({
  onClick = () => {},
  style = {},
  text = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      style={{
        ...containerStyles,
        width: isHovered ? "200px" : "50px",
        ...style, // Expand on hover
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        alt="Instagram Logo"
        style={{ ...iconStyles, marginRight: isHovered ? "10px" : "0px" }}
      />
      {isHovered ? <span style={textStyles}>{text}</span> : null}
    </div>
  );
};

// Container styles
const containerStyles = {
  position: "fixed",
  bottom: "5px",
  right: "5px",
  backgroundColor: "#3897f0",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px 0px",
  borderRadius: "25px 0px 0px 25px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "width 0.3s ease",
  cursor: "pointer",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

// Icon styles
const iconStyles = {
  width: "30px",
  height: "30px",
};

// Text styles
const textStyles = {
  fontSize: "14px",
  fontWeight: "bold",
};

export default FloatingInstagramButton;
