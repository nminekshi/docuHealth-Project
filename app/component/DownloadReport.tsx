import React from "react";

const DownloadReport: React.FC = () => {
  const handleDownload = () => {
    // Simulate file download
    alert("Downloading Patient Report...");
  };

  return (
    <button className="download-btn" onClick={handleDownload}>
      Download Report 📄
    </button>
  );
};

export default DownloadReport;
