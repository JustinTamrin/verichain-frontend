'use client';

import CopyTextButton from '../components/copytextbox/CopyTextButton';
import Navbar from "../components/navbar/page";
import Homebody from "../components/homebody/page";
import Footer from "../components/footer/page";
import Popup from "../components/popup/page";
import Image from "next/image";
import { loadEnvFile } from "process";
import { Ribeye } from "next/font/google";
import { useState } from "react";

export default function UploadFiles() {
	const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <Image
            src={"/img/sui-coin.png"}
            alt="verichain img"
            width={300}
            height={300}
            style={{ marginTop: "200px" }}
          />
        </div>
        <div className="heading1">
          Upload Your Files
          <Image
            src="/img/Folder.png"
            width={50}
            height={30}
            alt="folder-image"
            style={{ marginLeft: "20px" }}
          />
        </div>
        <div
          className="boxcontainer2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            padding: "20px",
          }}
        >
          <div
            id="drop-area"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="inner-box"
              style={{
                width: "550px",
                height: "300px",
                border: "none",
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "20px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              <table
                className="drop-box-table"
                style={{
                  width: "100%",
                  height: "100%",
                  borderCollapse: "collapse",
                  margin: "0",
                  border: "2px dashed blue",
                  tableLayout: "fixed",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      id="no-drop-files-heading"
                      style={{
                        color: "#737579",
                        margin: "40px 0",
                        fontWeight: "700",
                        fontSize: "20px",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      Drop your files here
                      <Image
                        src="/img/insert_drive_file.png"
                        width={70}
                        height={70}
                        alt="Insert File"
                        style={{ display: "block", margin: "50px auto" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        padding: "0",
                        verticalAlign: "middle",
                      }}
                    >
                      <input
                        type="file"
                        id="input-file"
                        multiple
                        style={{
                          width: "100%",
                          boxSizing: "border-box",
                          height: "100%",
                          display: "block",
                          margin: "0",
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="buttons3" style={{ marginTop: "20px" }}>
                Submit
              </button>
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <Image
            src="/img/Rectangle 6.png"
            alt="blockchain image"
            width={400}
            height={400}
            style={{
              right: 0,
              marginRight: "50px",
              marginTop: "-200px",
              position: "absolute",
            }}
          />
        </div>
		<button className='open-uploaded' onClick={() => setButtonPopup(true) } style={{cursor:"pointer"}}>Open Pop-up</button>
		<Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
			<div className="uploads-popup" id="upload_success">
				<div className="center-header">
				<h3>Files Uploaded</h3>
				<p>Type: Bachelor's Degree</p>
				</div>
				<table className="uploads-table">
				<thead className="uploads-header">
					<tr>
					<th>Name</th>
					<th>Hash</th>
					</tr>
				</thead>
				<tbody className="results-body">
					<tr>
					<td>Justin Nicholas Bachelor's Degree Certificate in Computer Science</td>
					<td>0x191ba7bb8p09888778onu979k0</td>
					<td><CopyTextButton textToCopy="0x191ba7bb8p09888778onu979k0" /></td>
					</tr>
					<tr>
					<td>Justin Nicholas Bachelor's Degree Certificate in Computer Science</td>
					<td>0x191ba7bb8p09888778onu979k0</td>
					<td><CopyTextButton textToCopy="0x191ba7bb8p09888778onu979k0" /></td>
					</tr>
					<tr>
					<td>Justin Nicholas Bachelor's Degree Certificate in Computer Science</td>
					<td>0x191ba7bb8p09888778onu979k0</td>
					<td><CopyTextButton textToCopy="0x191ba7bb8p09888778onu979k0" /></td>
					</tr>
				</tbody>
				</table>
			</div>
			{/* <div>
				<div className="center-header" id="upload_fail">
				<p>Unsuccessful Upload</p>
				</div>
			</div> */}
		</Popup>
        <h4 className="historysection">History</h4>
        <p className="historycontent">No history found</p>
        <hr
          style={{
            border: "solid 1px #8c87a644",
            marginTop: "100px",
            marginLeft: "100px",
            marginRight: "100px",
          }}
        />
      </main>

      <Footer />
    </>
  );
}
