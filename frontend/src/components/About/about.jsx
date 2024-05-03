import React from "react";

const About = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ fontSize: "36px", marginBottom: "20px", textAlign: "center", color: "#333" }}>About Us</h2>
      
      <p style={{ fontSize: "16px", marginBottom: "20px" }}>Welcome to <strong style={{ color: "#007bff" }}>Careerlink</strong>, your go-to platform for finding the perfect job opportunities tailored to your skills and expertise. Whether you're a recent graduate, a seasoned professional, or an employer, we've got you covered.</p>

      <h3 style={{ fontSize: "24px", marginTop: "30px", marginBottom: "10px", color: "#333" }}>Our Mission</h3>

      <p style={{ fontSize: "16px", marginBottom: "20px" }}>Our mission is simple: to bridge the gap between employers and job seekers by providing a reliable and efficient platform for recruitment and job hunting.</p>

      <h3 style={{ fontSize: "24px", marginTop: "30px", marginBottom: "10px", color: "#333" }}>What We Offer</h3>

      <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#ff7f0e" }}>Extensive Job Listings:</strong> Browse through thousands of job listings from reputable companies across the globe.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#ff7f0e" }}>Customized Job Recommendations:</strong> Receive personalized job recommendations based on your skills, experience, and preferences.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#ff7f0e" }}>User-Friendly Interface:</strong> Navigate our website with ease and find the information you need quickly and efficiently.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#ff7f0e" }}>Secure and Confidential:</strong> Rest assured that your personal information is safe and secure with us. We prioritize data privacy and confidentiality.</li>
        <li style={{ marginBottom: "10px" }}><strong style={{ color: "#ff7f0e" }}>Dedicated Support:</strong> Our team of experts is here to assist you every step of the way. Whether you have questions about your job search or need assistance with your account, we're here to help.</li>
      </ul>

      <h3 style={{ fontSize: "24px", marginTop: "30px", marginBottom: "10px", color: "#333" }}>Get Started Today!</h3>

      <p style={{ fontSize: "16px" }}>Join <strong style={{ color: "#007bff" }}>Careerlink</strong> today and take the next step towards your dream career. Create your profile, upload your resume, and start exploring exciting job opportunities that match your skills and interests.</p>

      <div className="developers" style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
        <div className="developer">
          <img src="/myimage.jpg" alt="Developer 1" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
          <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>Pintu Kumar</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>Email: Pintu@example.com</p>
        </div>

        <div className="developer">
          <img src="/myimage1.jpg" alt="Developer 2" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
          <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>Devansh Raj</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>Email: Dev@example.com</p>
        </div>

        <div className="developer">
          <img src="/myimage2.jpg" alt="Developer 3" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
          <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>Dilip lodhi</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>Email: lodhi@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
