import "./home.css";
import { Link } from "react-router-dom";
import Svg from "../components/Svg";
let index = 0;
// const interval = setInterval(() => {
//   const dataDiv = document.querySelectorAll(".about-company .slider");
//   const dots = document.querySelectorAll(".about-company .dots span");
//   if (dataDiv && dots) {
//     dataDiv.forEach((e) => e.classList.remove("active"));
//     dots.forEach((e) => e.classList.remove("active"));
//     index = ++index % dataDiv.length;
//     dataDiv[index].classList.add("active");
//     dots[index].classList.add("active");
//   }
// }, 10000);

const Home = () => {
  function handelSpan(e) {
    // clearInterval(interval);
    const dataDiv = document.querySelectorAll(".about-company .slider");
    const dots = document.querySelectorAll(".about-company .dots span");
    dataDiv.forEach((e) => e.classList.remove("active"));
    dots.forEach((e) => e.classList.remove("active"));
    index = +e.target.dataset.index;
    dataDiv[index].classList.add("active");
    dots[index].classList.add("active");
    setInterval(() => {
      if (dataDiv && dots) {
        dataDiv.forEach((e) => e.classList.remove("active"));
        dots.forEach((e) => e.classList.remove("active"));
        index = ++index % dataDiv.length;
        dataDiv[index].classList.add("active");
        dots[index].classList.add("active");
      }
    }, 10000);
  }
  return (
    <>
      <main className="landing center">
        <div className="container">
          <div className="center flex-direction">
            <h1>
              welcom to <span className="inside-span"> blue elite tech </span>
              company
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              laudantium consectetur! Accusantium maxime, nam enim voluptatum
              tenetur et nemo. Quibusdam deleniti voluptatum commodi, enim dicta
              hic minima alias veritatis suscipit? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maxime, laudantium consectetur!
              Accusantium maxime, nam enim voluptatum tenetur et nemo. Quibusdam
              deleniti voluptatum commodi, enim dicta hic minima alias veritatis
              suscipit?
            </p>
            <div className="flex">
              <Link className="btn2">get started</Link>
              <Link className="btn">join us</Link>
            </div>
          </div>
        </div>
      </main>
      <main className="center body-color">
        <div className="container flex about-company">
          <div>
            <h1 data-fill="About The Company" className="title">
              About The Company
            </h1>

            <div className="relative">
              <div className="slider active">
                <h2>
                  we are <span>lorem ipsum</span>
                </h2>
                <h3>
                  Blue Elite boasts extensive experience in software
                  development, backed by a team of specialized experts.
                </h3>
              </div>
              <div className="slider ">
                <h2>Why Blue Elite Tech?</h2>
                <h3>
                  At Blue Elite, we take pride in partnering with our clients to
                  become an integral part of their journey towards success.
                  Contact us today to explore how we can collaborate to drive
                  your business forward through innovative software solutions.
                </h3>
              </div>
              <div className="slider">
                <h2>
                  In the World of Technological Advancement Introducing Blue
                  Elite Tech
                </h2>
                <h3>
                  In the modern age of technology, software development has
                  become essential for business success and goal achievement.
                  Stepping into the spotlight is Blue Elite, a trusted partner
                  in the realm of software development, committed to delivering
                  innovative solutions that efficiently meet our clients' needs
                  with unparalleled quality.
                </h3>
              </div>
            </div>
            <div className="dots">
              <span
                onClick={handelSpan}
                data-index="0"
                className="active"
              ></span>
              <span onClick={handelSpan} data-index="1"></span>
              <span onClick={handelSpan} data-index="2"></span>
            </div>
            <div className="btn">contact us</div>
          </div>
          <div className="">
            <img src={require("./icon18.png")} alt="" />
          </div>
        </div>
      </main>
      <main className="center section-color home-services">
        <div className="container">
          <div className="title">
            <h1 data-fill="Services we provide" className="title section-color">
              Services we provide
            </h1>
          </div>
          <div className="services">
            <article>
              <div>
                <i className="fa-solid fa-laptop-code"></i>
                <h1>Desktop Apps</h1>
                <p>
                  We program all desktop applications according to the
                  customer's needs
                </p>
              </div>
              <article>
                <div className="between">
                  <Link className="started">get started</Link>
                  <Link>Details</Link>
                </div>
              </article>
            </article>

            <article>
              <div>
                <i className="fa-solid fa-mobile-screen-button"></i>
                <h1>mobile Apps</h1>
                <p>
                  We program all android applications according to the
                  customer’s needs
                </p>
              </div>
              <article>
                <div className="between">
                  <Link className="started">get started</Link>
                  <Link>Details</Link>
                </div>
              </article>
            </article>

            <article>
              <div>
                <i className="fa-brands fa-chrome"></i>
                <h1>Websites</h1>
                <p>We design, manage and fully supervise websites</p>
              </div>
              <article>
                <div className="between">
                  <Link className="started">get started</Link>
                  <Link>Details</Link>
                </div>
              </article>
            </article>

            <article>
              <div>
                <i className="fa-solid fa-cloud"></i>
                <h1>Server Management</h1>
                <p>
                  We install local servers and manage them according to the
                  needs of institutions and companies
                </p>
              </div>
              <article>
                <div className="between">
                  <Link className="started">get started</Link>
                  <Link>Details</Link>
                </div>
              </article>
            </article>

            <article>
              <div>
                <i className="fa-solid fa-network-wired"></i>
                <h1>Local Networks</h1>
                <p>
                  We install LAN networks according to the needs of companies
                  and institutions
                </p>
              </div>
              <article>
                <div className="between">
                  <Link className="started">get started</Link>
                  <Link>Details</Link>
                </div>
              </article>
            </article>
          </div>
          <Link className="btn">see all services</Link>
        </div>
      </main>
      <main className="body-color center">
        <div className="container">
          <div className="title">
            <h1 className="title body-color" data-fill="our projects">
              Our Projects
            </h1>
          </div>
          <div className="home-project">
            <article>
              <div className="overlay relative flex">
                <img src={require("./project1.png")} alt="" />
                <div className="center">
                  <Link>
                    see live preview <i className="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
              <div className="info">
                <h1>dashboard</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  consectetur iste voluptatum, vitae mollitia incidunt quasi quo
                  quod explicabo sed quaerat quae cum temporibus saepe! Eveniet
                  odit mollitia eaque repellat!
                </p>
                <Link>
                  Live preview <i className="fa-solid fa-eye"></i>
                </Link>
              </div>
            </article>
            <article>
              <div className="overlay relative flex">
                <img src={require("./project2.png")} alt="" />
                <div className="center">
                  <Link>
                    see live preview <i className="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
              <div className="info">
                <h1>dashboard</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  consectetur iste voluptatum, vitae mollitia incidunt quasi quo
                  quod explicabo sed quaerat quae cum temporibus saepe! Eveniet
                  odit mollitia eaque repellat!
                </p>
                <Link>
                  Live preview<i className="fa-solid fa-eye"></i>
                </Link>
              </div>
            </article>
            <article>
              <div className="overlay relative flex">
                <img src={require("./project2.png")} alt="" />
                <div className="center">
                  <Link>
                    see live preview <i className="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
              <div className="info">
                <h1>dashboard</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  consectetur iste voluptatum, vitae mollitia incidunt quasi quo
                  quod explicabo sed quaerat quae cum temporibus saepe! Eveniet
                  odit mollitia eaque repellat!
                </p>
                <Link>
                  Live preview<i className="fa-solid fa-eye"></i>
                </Link>
              </div>
            </article>
          </div>
          <Link className="btn home-projects">see all projects </Link>
        </div>
      </main>

      <main className="center section-color">
        <div className="container home-academy wrap flex">
          <div className="title">
            <h1 className="title section-color" data-fill="academy">
              Academy
            </h1>
          </div>
          <div className="academy-services">
            <div className="flex">
              <img src={require("./icons8-services-64 (1).png")} alt="" />
              <article>
                <h1>What We Offer ?</h1>
                <p>
                  Covering the basics of various programming languages and
                  tools.Real-world projects & practical exercises.
                </p>
              </article>
            </div>
            <div className="flex">
              <img src={require("./icons8-projects-58.png")} alt="" />
              <article>
                <h1>Our Mission</h1>
                <p>
                  Our mission is to make coding education accessible and
                  engaging, providing students with the knowledge and skills
                  they need to thrive in the tech industry
                </p>
              </article>
            </div>
            <div className="flex">
              <img src={require("./icons8-group-50.png")} alt="" />
              <article>
                <h1>Our Team</h1>
                <p>
                  Our instructors are industry professionals, including
                  developers from Blue Elite Tech, who bring their real-world
                  experience and expertise into the classroom. This ensures that
                  our students receive top-quality education.
                </p>
              </article>
            </div>
            <Link className="btn d-block"> see more about our academy </Link>
          </div>
          <div className="flex svg">
            <Svg />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
