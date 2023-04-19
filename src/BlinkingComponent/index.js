import React, { useEffect, useState } from "react";
import "./index.css";

const BlinkingComponent = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let interval = setInterval(() => {
      setVisible(!visible);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  });

  return <div className={visible ? "show" : "hide"}>"Blinking Component"</div>;
};

export default BlinkingComponent;
