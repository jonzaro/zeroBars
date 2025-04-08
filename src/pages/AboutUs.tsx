import React from "react";
// import { Layout } from "../components/Layout";
// import "../styles/AboutUs.css"; // You'll need to create this CSS file
// import { Layout } from "../components/Layout";

export const AboutUs: React.FC = () => {
  return (
    <>
      <div className="about-us-container">
        <h1 className="title">About Zero Bars Outpost</h1>

        <section className="section">
          <h2 className="section-title">Our Story</h2>
          <p className="paragraph">
            Founded in 2023, Zero Bars Outpost was born from a passion for
            adventure and a love for the great outdoors. We started with a
            simple mission: to create a space where outdoor enthusiasts could
            find high-quality gear, connect with like-minded individuals, and
            share their experiences.
          </p>
          <p className="paragraph">
            What began as a small operation has grown into a community hub for
            explorers, hikers, climbers, and nature lovers. We're proud to serve
            our community with expertise, passion, and a commitment to
            sustainable outdoor practices.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Our Mission</h2>
          <p className="paragraph">
            At Zero Bars Outpost, we believe that adventure is for everyone. Our
            mission is to make outdoor exploration accessible, enjoyable, and
            sustainable. We strive to provide top-quality gear, expert advice,
            and a welcoming community for outdoor enthusiasts of all experience
            levels.
          </p>
          <p className="paragraph">
            We're committed to environmental stewardship and promoting
            responsible outdoor practices. Through education, community events,
            and partnerships with conservation organizations, we work to protect
            the natural spaces we all love to explore.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Our Team</h2>
          <p className="paragraph">
            Our team consists of passionate outdoor enthusiasts who bring their
            expertise and love for adventure to everything we do. From
            experienced climbers to dedicated hikers, our staff is here to share
            their knowledge and help you prepare for your next journey.
          </p>

          <div className="team-container">
            <div className="team-member">
              <div className="member-image">
                {/* <img src="/team/john-doe.jpg" alt="John Doe" /> */}
              </div>
              <h3 className="member-name">John Doe</h3>
              <p className="member-role">Founder & CEO</p>
              <p className="paragraph">
                Avid mountaineer with over 20 years of experience exploring
                trails worldwide.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                {/* <img src="/team/jane-smith.jpg" alt="Jane Smith" /> */}
              </div>
              <h3 className="member-name">Jane Smith</h3>
              <p className="member-role">Head of Operations</p>
              <p className="paragraph">
                Former park ranger and wilderness first responder with a passion
                for conservation.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                {/* <img src="/team/alex-johnson.jpg" alt="Alex Johnson" /> */}
              </div>
              <h3 className="member-name">Alex Johnson</h3>
              <p className="member-role">Gear Specialist</p>
              <p className="paragraph">
                Rock climbing enthusiast who has tested gear in some of the
                world's most challenging environments.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Visit Us</h2>
          <p className="paragraph">
            We'd love to meet you in person! Visit our store to browse our
            selection of gear, chat with our knowledgeable staff, and connect
            with fellow outdoor enthusiasts. We regularly host workshops, talks,
            and community events focused on outdoor skills and conservation.
          </p>
          <p className="paragraph">
            <strong>Location:</strong> 123 Adventure Way, Mountain View, CA
            94043
            <br />
            <strong>Hours:</strong> Monday-Saturday: 9am-6pm, Sunday: 10am-4pm
            <br />
            <strong>Contact:</strong> info@zerobarsoutpost.com | (555) 123-4567
          </p>
        </section>
      </div>
    </>
  );
};
