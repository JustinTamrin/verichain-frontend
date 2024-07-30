import "./login.css";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const login = () => {
  return (
    <>
      <body style={{ height: "unset" }}>
        <div className="container" style={{ position: "unset" }}>
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
            <div className="inputs">
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

              <div className="submit-container">
                <div
                  className="submit1"
                  style={{ border: "1px solid #0080FF" }}
                >
                  Login
                </div>
              </div>
              <div className="forgot-password">
                Dontt have an account? &nbsp;
                <Link href={"./signup/"}>
                  <span className="forgotpassword-click">Sign up Here</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/chain_logo.png" style={{ position: "absolute" }}></img>
      </body>
    </>
  );
};

export default login;
