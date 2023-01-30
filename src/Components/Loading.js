import * as React from "react";
import { motion } from "framer-motion";
import SmallLogoWhite from "../AradoxLogos/Half Logo white.png"
export const Loading = () => {
  return (
    <div className="animation-wrapper absolute top-0 bottom-0 left-0 right-0">
      <img
        className="logo"
        src={SmallLogoWhite}
        alt=""
    
      />
      <div className="loader-wrapper">
        <motion.div
          className="handle"
          initial={{ x: -50, width: 80 }}
          animate={{
            x: 200,
            width: 100
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse"
          }}
        />
      </div>
    </div>
  );
};
