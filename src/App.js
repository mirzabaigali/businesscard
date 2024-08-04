import ToggleMood from "./utility/ToggleMood";
import logo from "./assets/Rectangle 90.png";
import emailicon from "./assets/Mail.svg";
import twitter from "./assets/Twitter Icon.svg";
import fb from "./assets/Facebook Icon.svg";
import insta from "./assets/Instagram Icon.svg";
import linke from "./assets/Linkedin Icon.svg";
import github from "./assets/GitHub Icon.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="d-flex justify-content-end">
        <ToggleMood />
      </div>
      <div className="container d-flex justify-content-center mt-5">
        <div className="row">
          <div className="col-12">
            <div className="custom_card">
              <header>
                <img
                  src={logo}
                  className="profile_img"
                  alt="profile_pic"
                  loading="lazy"
                />
              </header>
              <main>
                <div className="d-flex justify-content-center">
                  <span className="profile_name">Laura Smith</span>
                </div>
                <div className="d-flex justify-content-center">
                  <span className="profile_profession">Frontend Developer</span>
                </div>
                <div className="d-flex justify-content-center profilr-linkwrapper">
                  <p className="profile-link">laurasmith.website</p>
                </div>
                <div className="mb-5 d-flex justify-content-center">
                  <button className="email-btn">
                    <img
                      src={emailicon}
                      alt="icon"
                      className="email-img"
                      loading="lazy"
                    />
                    <span>Email</span>
                  </button>
                </div>
                <div className="main-content">
                  <p>About</p>
                </div>
                <div className="describtion">
                  <p>
                    I am a frontend developer with a particular interest in
                    making things simple and automating daily tasks. I try to
                    keep up with security and best practices, and am always
                    looking for new things to learn.
                  </p>
                </div>
                <div className="main-content mt-4">
                  <p>Interests</p>
                </div>
                <div className="describtion">
                  <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon
                    buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                    fanatic.
                  </p>
                </div>
              </main>
              <div className="footer">
                <div className="footer-socialicons d-flex justify-content-around align-items-center">
                  <div>
                    <img src={twitter} alt="logo" />
                  </div>
                  <div>
                    <img src={fb} alt="logo" />
                  </div>
                  <div>
                    <img src={insta} alt="logo" />
                  </div>
                  <div>
                    <img src={linke} alt="logo" />
                  </div>
                  <div>
                    <img src={github} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
