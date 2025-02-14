// import React, { useState } from "react";
// import FileUpload from "./FileUpload";
// import InputField from "./InputField";

// const FormContainer = () => {
//   const [formData, setFormData] = useState({
//     avatar: null,
//     fullName: "",
//     email: "",
//     githubUsername: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileUpload = (file) => {
//     setFormData({ ...formData, avatar: file });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form Data:", formData);
//     if (formData.avatar) {
//       console.log("Upload Avatar:", formData.avatar.name);
//     }
//     alert("Ticket Generated Successfully!");
//   };

//   return (
//     <div className="form-container">
//       <h1>Coding Conference 2025</h1>
//       <p>Secure your spot at next year's biggest coding conference.</p>
//       <form onSubmit={handleSubmit}>
//         <FileUpload onFileUpload={handleFileUpload} />
//         <InputField
//           label="Full Name"
//           name="fullName"
//           type="text"
//           value={formData.fullName}
//           onChange={handleInputChange}
//         />
//         <InputField
//           label="Email Address"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//         <InputField
//           label="GitHub Username"
//           name="githubUsername"
//           type="text"
//           value={formData.githubUsername}
//           onChange={handleInputChange}
//         />
//         <button type="submit" className="submit-button">
//           Generate My Ticket
//         </button>
//       </form>
//     </div>
//   );
// };

import React, { useState } from "react";
import FileUpload from "./FileUpload";
import InputField from "./InputField";
import Ticket from "./Ticket";

const FormContainer = () => {
  const [formData, setFormData] = useState({
    avatar: null,
    fullName: "",
    email: "",
    githubUsername: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (file) => {
    const previewUrl = URL.createObjectURL(file);
    setFormData({ ...formData, avatar: previewUrl });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return (
      <Ticket
        fullName={formData.fullName}
        email={formData.email}
        githubUsername={formData.githubUsername}
        avatar={formData.avatar}
      />
    );
  }

  return (
    <div className="form-container">
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <p>Secure your spot at next year's biggest coding conference.</p>
      <form onSubmit={handleSubmit}>
        <FileUpload onFileUpload={handleFileUpload} />
        <InputField
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputField
          label="GitHub Username"
          name="githubUsername"
          type="text"
          value={formData.githubUsername}
          onChange={handleInputChange}
        />
        <button type="submit" className="submit-button">
          Generate My Ticket
        </button>
      </form>
    </div>
  );
};

export default FormContainer;
