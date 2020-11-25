import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
        position: "absolute",
        textAlign: "center",
        bottom: "0",
        width: "100%",
        height: "2.5rem"
      }}>
      <p>This is copyright for Nathon, Marissa, Niki, Ryan, Joejo @ {currentYear}</p>
    </footer>
  );
}

export default Footer;