import React, { useState } from "react";
import Image from "../Assets/Image.jpg";

const Form = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here

    setSubmitted(true);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4"
      // style={{ backgroundImage: `url(${Image})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md space-y-4 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-4">
          Enter Your Test Data
        </h1>
        {Array.from({ length: 10 }, (_, i) => (
          <input
            key={i}
            type="number"
            step="0.01"
            name={`input${i + 1}`}
            placeholder={`input${i + 1}`}
            value={formData[`input${i + 1}`]}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        ))}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
        >
          Submit
        </button>
        {submitted && (
          <p className="text-green-600 text-center mt-4">
            Submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
