import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

const Progress= (props) =>  {
  const [progress, setProgress] = useState(props.value);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(intervalId);
          return prevProgress;
        }
        return prevProgress + props.step;
      });
    }, props.interval);
    return () => clearInterval(intervalId);
  }, [props]);

  return <ProgressBar now={progress} variant="danger" />;
}

export default Progress;
