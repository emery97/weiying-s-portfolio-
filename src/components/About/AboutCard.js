import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="about-card raleway-body">
      <h3 className="montserrat-head" style={{ fontWeight: 700 }}>Hi! I'm Wei Ying </h3>
      <br></br>
      <p>
      I have a deep passion for both technology and business. My long-term goal is to build my own business, seamlessly integrating technology to drive innovation and growth.
      I believe my strengths lie in my strong work ethic, resilience in the face of challenges, and my ability to thrive both as a team player and as a leader. I approach every project with determination, and I’m always ready to take initiative.
      <br></br>
      One of the guiding principles in my life is the mindset of "Not Yet," inspired by Matt Abrahams’ "Think Faster, Talk Smarter." This perspective has been incredibly motivating for me, helping me embrace setbacks as opportunities rather than failures. I view each challenge as a stepping stone, believing that if something didn’t go as planned, it simply means it’s not my time yet. This mindset fuels my continuous learning and growth.
      </p>
      <br></br>
      <p style={{ fontWeight: 600 }}>
      If you’d like to connect or have job opportunities available, please feel free to reach out to me at <a href="mailto:leeweiying.info@gmail.com">leeweiying.info@gmail.com</a>
      </p>
    </Card>
  );
}

export default AboutCard;
