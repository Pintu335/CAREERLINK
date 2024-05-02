import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Careerlink Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Join our community to unlock exclusive job opportunities and recruitment benefits
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Discover your next career opportunity or recruit top talent effortlessly
              <br>
              </br>
            
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Easily apply for jobs or find the perfect candidates for your openings.
              
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;