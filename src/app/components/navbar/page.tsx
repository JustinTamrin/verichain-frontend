import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link href="/" passHref>
            <Image
              src="/img/VeriChainLogo.png"
              alt="Verichain Logo"
              width={200} // Desired width of the image
              height={142}
            />
          </Link>
        </div>
        <ul>
          <li className="links">
            <Link href="/" passHref>
              Home
            </Link>
            <Link href="/" passHref>
              About
            </Link>
            <Link href="/" passHref className="services">
              Services
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </Link>
            <Link href="/" passHref>
              Pricing
            </Link>
            <Link href="/" passHref>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="action_btn">
          <Link href="/" passHref className="buttons1">
            Upload Files
          </Link>
          <Link href="/" passHref className="buttons2">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
