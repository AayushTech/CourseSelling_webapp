import React from "react";
import "./LandingPage.css"; // Import the CSS file for styling

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to CodeIt</h1>
        <p>Unlock Your Potential with Our Courses</p>
      </header>
      <section>
        <h2>Explore Our Courses</h2>
        <p>
          Choose from a variety of high-quality courses in different domains.
        </p>
        <button className="cta-button">Get Started</button>
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()} CodeLearn. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
