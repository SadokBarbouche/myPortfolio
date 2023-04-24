import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function CustomProgressBar({
  now = 0,
  variant = "danger",
  target = 100,
  onComplete,
}) {
  const [progress, setProgress] = useState(now);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100;
      setProgress(scrollPercentage);
      if (scrollPercentage >= target) {
        if (onComplete) {
          onComplete();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [target, onComplete]);

  return <ProgressBar now={progress} variant={variant} className="my-3" />;
}

export default CustomProgressBar;
