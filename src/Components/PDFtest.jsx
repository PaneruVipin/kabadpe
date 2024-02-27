import React from 'react';
import { jsPDF } from 'jspdf';

const generateAndDownloadPDF = () => {
  // Define your HTML template
  const htmlTemplate = `
    <html>
      <head>
        <title>My PDF</title>
        <style>
          /* Add your CSS styles here */
          body {
            font-family: Arial, sans-serif;
          }
        </style>
      </head>
      <body>
        <h1>PDF Content</h1>
        <p>This is a sample PDF content.</p>
      </body>
    </html>
  `;

  // Create a new jsPDF instance
  const pdf = new jsPDF();

  // Set font size and add HTML content
  pdf.setFontSize(12);
  pdf.html(htmlTemplate, {
    callback: () => {
      // After rendering HTML, get the PDF content as a data URI
      const pdfDataUri = pdf.output('datauristring');

      // Create a link element
      const downloadLink = document.createElement('a');

      // Set the href attribute to the data URI of the PDF
      downloadLink.href = pdfDataUri;

      // Set the download attribute to specify the filename
      downloadLink.download = 'generated.pdf';

      // Append the link to the document body
      document.body.appendChild(downloadLink);

      // Click the link to trigger the download
      downloadLink.click();

      // Remove the link from the document body
      document.body.removeChild(downloadLink);
    }
  });
};

const PDFTest = () => {
  return (
    <div>
      <button onClick={generateAndDownloadPDF}>Generate PDF</button>
    </div>
  );
};

export default PDFTest;
