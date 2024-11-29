import { useRef } from "react";
import generatePDF from "react-to-pdf";
const DownloadPDF = () => {
  const targetRef = useRef();
  console.log("targetRef targetRefv vtargetRef", targetRef);
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Generate PDF from Hidden UI</h1>
      <button
        onClick={() => {
          generatePDF(targetRef, { filename: "page.pdf" });
        }}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>

      {/* Hidden content to be included in the PDF */}
      <div
        style={{
          position: "fixed",
          bottom: "-200px",
          right: "-200px",
        }}
      >
        <div
          ref={targetRef}
          style={{
            // display: "none",
            width: "210mm", // A4 width
            padding: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Hidden Content</h2>
          <p>
            This content will be included in the PDF but is hidden in the UI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadPDF;
