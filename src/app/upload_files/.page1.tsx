'use client';

import Navbar from "../components/navbar/page";
import Homebody from "../components/homebody/page";
import Footer from "../components/footer/page";
import Popup from "../components/popup/page";
import Image from "next/image";
import { loadEnvFile } from "process";
import { Ribeye } from "next/font/google";
import { useState } from "react";

function upload_files() {
	const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <Navbar />
	  {/* div className */}
	  <div className="App">
      <main>
		<h1>React Pop Up</h1>
		<br></br>
		<button onClick={() => setButtonPopup(true)}>Open Pop-up</button>
      </main>

	  <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
			<div className="popup-table">
				<h3>My popup</h3>
				<p>This is my button triggered pop up</p>
			</div>
		</Popup>

	  </div>
      <Footer />
    </>
  );
}

export default upload_files;
