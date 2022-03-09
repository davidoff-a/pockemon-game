import { useContext } from "react";
import { TestContext } from "../../context/testContext";

const AboutPage = () => {

  const handleClick = () => {
    
  };
  return (
    <div>
      <h1>This is About Page</h1>
      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
};

export default AboutPage;
