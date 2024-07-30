import "./signup.css";
import Link from "next/link";
import Head from "next/head";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const signup = () => {
  return (
    <>
      <body style={{ height: "unset" }}>
        <div className="container" style={{ position: "unset" }}>
          <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
            <div className="inputs">
              <div className="input">
                <img
                  src="/img/person_icon.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input">
                <img
                  src="/img/email_icon.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input">
                <img
                  src="/img/password_icon.png"
                  alt=""
                  style={{ height: "25px", width: "25px" }}
                />
                <input type="password" placeholder="Password" />
              </div>
              <div className="forgot-password">
                Forgot Password? &nbsp;
                <span className="forgotpassword-click">Click Here!</span>
              </div>

              <div
                className="submit-container"
                style={{ marginBottom: "60px" }}
              >
                <div
                  className="submit1"
                  style={{ border: "1px solid #0080FF" }}
                >
                  Sign Up
                </div>
                <Link href={"./login"}>
                  <div className="submit2">Login</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/sui_water.png" style={{ position: "absolute" }}></img>
      </body>
    </>
  );
};

export default signup;
