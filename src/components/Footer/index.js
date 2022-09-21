import React from 'react';
const Footer = () => {
  return <footer>
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <a href="https://github.com/hippobb" target="_blank">
          <img
            src="github.png"
            alt='github'
          />
        </a>          
        <a href="https://www.linkedin.com/in/william-chow-76155042/" target="_blank">
          <img
            src="linkedin.png"
            alt='linkedin'
          />
        </a>          
    </div>
    </footer>;
};


export default Footer;
