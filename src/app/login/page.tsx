import "./login.css";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Image from "next/image";

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
                <Image
                  src="/img/email_icon.png"
                  alt="Email_icon"
                  width={50}
                  height={50}
                  style={{ width: "30px", height: "30px" }}
                />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input">
                <Image
                  src="/img/password_icon.png"
                  alt=""
                  width={50}
                  height={50}
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
                Dont have an account? &nbsp;
                <Link href={"./signup/"}>
                  <span className="forgotpassword-click">Sign up Here</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/img/chain_logo.png"
          alt="Chain_picture"
          width={1920}
          height={1080}
          style={{ position: "absolute" }}
        ></Image>
      </body>
    </>
  );
};

export default login;
