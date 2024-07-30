import "./signup.css";
import Link from "next/link";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import Image from "next/image";

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
                <Image
                  src="/img/person_icon.png"
                  alt="person_icon"
                  width={30}
                  height={30}
                />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input">
                <Image
                  src="/img/email_icon.png"
                  alt="email_icon"
                  width={30}
                  height={30}
                />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input">
                <Image
                  src="/img/password_icon.png"
                  alt="password_icon"
                  width={25}
                  height={25}
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
                <Link href={"/search_files"}>
                  <div
                    className="submit1"
                    style={{ border: "1px solid #0080FF" }}
                  >
                    Sign Up
                  </div>
                </Link>
                <Link href={"./login"}>
                  <div className="submit2">Login</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/img/sui_water.png"
          width={1920}
          height={1080}
          style={{ position: "absolute" }}
          alt="sui_water logo"
        ></Image>
      </body>
    </>
  );
};

export default signup;
