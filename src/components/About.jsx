import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-4">
          At EdTech Company, we are committed to providing top-quality online
          education to learners around the world. Our mission is to make
          learning accessible, affordable, and effective for everyone.
        </p>
        <p className="text-lg mb-4">
          We offer a wide range of courses in various fields such as
          programming, mathematics, data science, and more. Our courses are
          designed by industry experts and experienced educators to ensure that
          you gain practical skills and knowledge that you can apply in
          real-world situations.
        </p>
        <p className="text-lg mb-4">
          Whether you are a student looking to enhance your skills, a
          professional seeking career advancement, or a lifelong learner
          passionate about acquiring new knowledge, we have something for you.
          Join us on a journey of learning and personal growth.
        </p>
        <p className="text-lg mb-4">
          Our platform is designed to be user-friendly and accessible, offering
          a seamless learning experience. We use the latest technologies to
          ensure that our courses are engaging and interactive, helping you to
          retain knowledge and apply it in practical scenarios.
        </p>
        <p className="text-lg mb-4">
          We believe that education is a lifelong journey and we are here to
          support you every step of the way. Thank you for choosing EdTech
          Company as your learning partner.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-4">Our Team</h3>
        <p className="text-lg mb-4">
          Our team is comprised of passionate educators, industry professionals,
          and technology experts dedicated to providing the best learning
          experience. We are committed to innovation and continuous improvement
          to meet the evolving needs of our learners.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h3>
        <p className="text-lg mb-4">
          If you have any questions or need assistance, feel free to contact us.
          We are here to help you on your educational journey.
        </p>
        <p className="text-lg mb-4">
          <strong>Email:</strong> info@edtech.com
        </p>
        <p className="text-lg mb-4">
          <strong>Phone:</strong> (123) 456-7890
        </p>
      </div>
    </div>
  );
};

export default About;
