import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Social = () => {
  return (
    <div class="social">
      <a
        href="https://github.com/LindaRess"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="mr-2" size={25} />
      </a>
      <a
        href="https://www.linkedin.com/in/linda-resseguier/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="mr-2" size={25} />
      </a>
      <a
        href="mailto:linda.resseguier@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineMail size={25} />
      </a>
    </div>
  );
};

export default Social;
