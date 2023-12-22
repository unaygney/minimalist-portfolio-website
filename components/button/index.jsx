import React from "react";
import styles from "./styles.module.css"; // veya istediğin CSS modül dosyasının yolunu belirt

const PrimaryButton = ({ children }) => {
  return (
    <button
      className={`${styles.primaryButton} group disabled:bg-[#203a4c]`}
      disabled
    >
      <div className="w-12 h-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className="w-full h-full "
        >
          <rect opacity="0.1" width="48" height="48" fill="black" />
          <path
            className="group-hover:stroke-white"
            d="M16 26L24 30L32 26"
            stroke="#5FB4A2"
          />
          <path
            className="group-hover:stroke-white"
            opacity="0.5"
            d="M16 22L24 26L32 22"
            stroke="#5FB4A2"
          />
          <path
            className="group-hover:stroke-white"
            opacity="0.25"
            d="M16 18L24 22L32 18"
            stroke="#5FB4A2"
          />
        </svg>
      </div>
      <div className="px-8">{children}</div>
    </button>
  );
};

const SecondaryButton = ({ children }) => {
  return <button className={styles.secondaryButton}>{children}</button>;
};

const Button = ({ children, type }) => {
  if (type === "primary") {
    return <PrimaryButton>{children}</PrimaryButton>;
  } else if (type === "secondary") {
    return <SecondaryButton>{children}</SecondaryButton>;
  } else {
    return null;
  }
};

export default Button;
