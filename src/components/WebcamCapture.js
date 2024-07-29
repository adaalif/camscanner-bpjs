import React from 'react';
import Webcam from 'react-webcam';
import { jsPDF } from "jspdf";

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    saveAsPdf(imageSrc);
  }, [webcamRef]);

  const saveAsPdf = (imageSrc) => {
    const pdf = new jsPDF();
    pdf.addImage(imageSrc, 'JPEG', 0, 0);
    pdf.save("download.pdf");
  };

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture</button>
      <button onClick={() => saveAsPdf()}>Save as PDF</button>
    </>
  );
};

export default WebcamCapture;