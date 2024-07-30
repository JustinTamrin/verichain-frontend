"use client";

import Image from "next/image";
import Navbar from "../navbar/page";
import { searchfiles } from "../../utils/search_files";
import { useRef } from "react";

const Homebody = () => {
  return (
    <>
      <main>
        <div className="container">
          <Image
            src="/img/img 1.png"
            alt="VeriChain Token"
            width={450}
            height={420}
          />
        </div>
        <div className="heading1">Where Validity is Guaranteed</div>
        <div className="boxcontainer">
          <table className="elementscontainer">
            <tbody>
              <tr>
                <td>
                  <div className="searchicon">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                </td>
                <td>
                  <form id="my-form" className="form-container">
                    <input
                      type="text"
                      placeholder="Search Credentials"
                      className="search"
                      name="hash-input"
                    />
                    <button type="submit" className="searchsubmit">
                      Search
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="dropdown-results" id="no_match">
          <table className="results-table">
            <tbody className="results-body">
              <tr>
                <th>No credentials found</th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dropdown-results" id="match_found">
          <table className="results-table">
            <thead className="results-header">
              <tr>
                <th>Name</th>
                <th>Date of Issue</th>
                <th>Type of Credentials</th>
                <th>Issuer</th>
              </tr>
            </thead>
            <tbody className="results-body">
              <tr>
                <th>John Dew</th>
                <th>12-April-2024</th>
                <th>Bachelors Degree Cert</th>
                <th>Sunway University</th>
              </tr>
            </tbody>
          </table>
        </div>
        <Image
          src="/img/Img2.png"
          alt="VeriChain Token"
          width={450}
          height={550}
          className="img2"
        />
      </main>
      <hr className="divider" />
    </>
  );
};

export default Homebody;
