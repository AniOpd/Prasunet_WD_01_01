import React from "react";
import "./home.css";
import Login from "../components/Login";

function Home() {
  return (
    <>
      <div className="md:my-10 sm:mt-16" id="About_section">
        <main className="p-8">
          <section className="mb-12 mt-auto">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-lg mb-4">
              At EdTech Company, we are committed to providing top-quality
              online education to learners around the world. Our mission is to
              make learning accessible, affordable, and effective for everyone.
            </p>
            <p className="text-lg mb-4">
              We offer a wide range of courses in various fields such as
              programming, mathematics, data science, and more. Our courses are
              designed by industry experts and experienced educators to ensure
              that you gain practical skills and knowledge that you can apply in
              real-world situations.
            </p>
            <p className="text-lg mb-4">
              Whether you are a student looking to enhance your skills, a
              professional seeking career advancement, or a lifelong learner
              passionate about acquiring new knowledge, we have something for
              you. Join us on a journey of learning and personal growth.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Courses</h2>
            <div className="project_component flex gap-6 md:flex-wrap md:flex-row flex-col">
              <div className="border p-4 rounded shadow card">
                <h3 className="text-xl font-bold">Course 1</h3>
                <p>Introduction to Programming</p>
              </div>
              <div className="border p-4 rounded shadow card">
                <h3 className="text-xl font-bold">Course 2</h3>
                <p>Advanced Mathematics</p>
              </div>
              <div className="border p-4 rounded shadow card">
                <h3 className="text-xl font-bold">Course 3</h3>
                <p>Data Science Basics</p>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p>Email: info@edtech.com</p>
            <p>Phone: (123) 456-7890</p>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
