import React, { useCallback, useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

function Recorder() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 400,
    height: 300,
    facingMode: "user",
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      await capture();
      console.log(img);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const capture = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = (webcamRef.current).getScreenshot();
      setImg(imageSrc);
    }
  }, [webcamRef]);

  const styles = {
    Container: {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      margin: "0 10px"
    }
  };

  return (
    <div style={styles.Container}>
      {(
        <>
          <Webcam
            audio={false}
            mirrored={true}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      )}
    </div>
  );
}

export default Recorder;
