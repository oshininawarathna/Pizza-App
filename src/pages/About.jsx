import React from "react";
import "../styles/About.css";
import AboutImage from "../assets/img/Banner.jpg";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          libero fugit illum doloremque ipsam voluptates rem nemo! Dicta quas
          accusamus nemo totam accusantium vitae aspernatur quaerat, saepe
          consectetur repudiandae veniam omnis, soluta quod exercitationem
          quasi. Omnis ut perspiciatis quam cupiditate dolor fuga voluptatem!
          Quis laudantium reprehenderit aut optio magnam sunt quam alias
          deserunt ex ut, saepe necessitatibus mollitia eveniet nesciunt hic
          aliquam. Quo, doloremque blanditiis voluptas dolor pariatur debitis.
          Sunt ad doloremque temporibus maxime quaerat vel delectus adipisci
          alias molestiae dignissimos nesciunt incidunt nam eius, optio
          consequatur mollitia voluptatem exercitationem neque? Ad cumque
          perferendis libero incidunt sit ea mollitia adipisci.
        </p>
      </div>
    </div>
  );
};

export default About;
