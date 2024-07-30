import Image from "next/image";
import Navbar from "../navbar/page";
import Homebody from "../homebody/page";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col">
            <Image
              src="/img/VeriChain black font 1.png"
              alt="VeriChain Logo"
              width={180}
              height={85}
              className="footerlogo"
            />
            <p className="slogan">Where Validity is Guaranteed</p>
          </div>
          <div className="col">
            <h4>USEFUL LINKS</h4>
            <a>About</a>
            <a>Services</a>
            <a>Pricing</a>
            <a>Contact Us</a>
          </div>
          <div className="col">
            <h4>SERVICES</h4>
            <a>File Transfer</a>
            <a>Credential Validation</a>
          </div>
          <div className="col">
            <h4>SOCIAL MEDIA</h4>
            <a>
              <Image
                src={"/img/Linkedin Finalized logo.png"}
                width={40}
                height={40}
                alt="VeriChain Linkedin"
              />
              <Image
                src={"/img/ytoube icon.png"}
                width={40}
                height={40}
                alt="VeriChain Youtube"
              />
              <Image
                src={"/img/Discord icon.png"}
                width={40}
                height={40}
                alt="VeriChain Discord"
              />
            </a>
          </div>
        </div>
        <div style={{ borderTop: "solid 1px #8c87a644", margin: "50px 100px" }}>
          <p style={{ marginLeft: "4%", marginTop: "40px", color: "#8c87a6" }}>
            Copyright © 2024 VeriChain All rights reserved by Solvify
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
