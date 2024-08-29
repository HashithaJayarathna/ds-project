import React from "react";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed
import Image from "../Assets/Image.jpg";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">
        Anomaly Detector on Microservices
      </h1>
      <img
        src={Image}
        alt="Anomaly Detection"
        className="w-full w-full object-cover mb-4"
      />
      <p className="text-gray-700 text-center mb-6">
        This application helps in detecting anomalies in microservices
        architectures using advanced machine learning algorithms. Get into the
        testing form page, apply your current data, and find out whether it's an
        anomaly or not.
      </p>
      <Link to="/Form">
        <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
          Test
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
