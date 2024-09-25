import React from "react";
import "./academy.css";
import ContactComponenet from "../components/ContactComponenet";
import MapComponent from "./../components/MapComponent";
import { Link } from "react-router-dom";

const Academy = () => {
  return (
    <>
      <main className="center sub-page academy-page section-color">
        <div className="container">
          <div className="title">
            <h1 className="title section-color" data-fill="SÎMURX ACADEMY">
              SÎMURX ACADEMY
            </h1>
          </div>
          <div className="flex">
            <div className="flex-1">
              <h1 className="title">SÎMURX</h1>
              <h2>A Beacon of Computer Science and Education</h2>
              <h3 style={{ color: "#bebe11" }}>Navenda Zanistên Komputerê</h3>
              <h4>
                Simorx Academy is a leading programming academy dedicated to
                developing the next generation of developers. In collaboration
                with Blue Elite Tech, we offer a range of courses designed to
                help beginners and recent graduates kick-start their careers in
                technology
              </h4>
            </div>
            <div className="flex-1">
              <img src={require("./academy1.png")} alt="" />
            </div>
          </div>

          <div className="mission grid-2">
            <div>
              <h2> Our Mission </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, repellendus? Sunt aut distinctio consequuntur cumque
                at magni quas quibusdam? Enim architecto officia dolore corrupti
                labore vero ipsa dicta aut voluptates?
              </p>
            </div>

            <div>
              <h2> What We Offer ? </h2>
              <p>
                Beginner Courses: Covering the basics of various programming
                languages and tools. Hands-On Learning: Real-world projects &
                practical exercises.
              </p>
            </div>

            <div>
              <h2> Our Team </h2>
              <p>
                Our instructors are industry professionals, including developers
                from Blue Elite Tech, who bring their real-world experience and
                expertise into the classroom. This ensures that our students
                receive top-quality education.
              </p>
            </div>

            <div>
              <h2> Why SÎMURX </h2>
              <p className="count">Expert Instructors</p>
              <p className="count">
                modern software: Always master the latest tools and
                environments.
              </p>
              <p className="count">
                Supportive Environment: We foster a supportive and collaborative
                learning environment where students can thrive.
              </p>
            </div>

            <div>
              <h2>Our Partnership</h2>
              <p>
                Through our partnership with Blue Elite Tech, we stay connected
                with the latest developments in the tech industry, ensuring that
                our curriculum is always relevant and cutting-edge.
              </p>
            </div>
          </div>
        </div>
      </main>

      <main className="body-color center">
        <div className="container">
          <div className="title">
            <h1 className="title body-color" data-fill="our courses">
              Our Courses
            </h1>
          </div>
          <article className="academy-card">
            <div>
              <img
                src={require("./academy3.07ee47e15b16e884da6a.jpg")}
                alt=""
              />
            </div>
            <div className="info">
              <h1>title</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae non soluta reiciendis esse consectetur provident
                voluptatem natus nulla cum aspernatur quasi temporibus, possimus
                reprehenderit sint quos fugiat modi. Minus, optio.
              </h3>
              <Link to={""}>get started</Link>
            </div>
          </article>
          <article className="academy-card">
            <div>
              <img
                src={require("./academy3.07ee47e15b16e884da6a.jpg")}
                alt=""
              />
            </div>
            <div className="info">
              <h1>title</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae non soluta reiciendis esse consectetur provident
                voluptatem natus nulla cum aspernatur quasi temporibus, possimus
                reprehenderit sint quos fugiat modi. Minus, optio.
              </h3>
              <Link to={""}>get started</Link>
            </div>
          </article>
          <article className="academy-card">
            <div>
              <img
                src={require("./academy3.07ee47e15b16e884da6a.jpg")}
                alt=""
              />
            </div>
            <div className="info">
              <h1>title</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae non soluta reiciendis esse consectetur provident
                voluptatem natus nulla cum aspernatur quasi temporibus, possimus
                reprehenderit sint quos fugiat modi. Minus, optio.
              </h3>
              <Link to={""}>get started</Link>
            </div>
          </article>
        </div>
      </main>

      <main className="center section-color">
        <div className="container">
          <div className="title">
            <h1 className="title section-color" data-fill="contact us">
              Contact Us
            </h1>
          </div>
          <div className="academy-contact">
            <h3>
              Ready to start your coding journey? Contact Symorx Academy today
              to learn more about our courses and how we can help you achieve
              your career goals.
            </h3>
            <ContactComponenet>
              <ContactComponenet.Info
                title={"Contact SÎMURX Academy"}
                showBtn={true}
              >
                <MapComponent />
              </ContactComponenet.Info>
            </ContactComponenet>
          </div>
        </div>
      </main>
    </>
  );
};

export default Academy;
