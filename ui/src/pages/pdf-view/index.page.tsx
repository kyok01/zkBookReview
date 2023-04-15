import React, { useEffect, useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const pdfView = () => {
  const [totalPages, setTotalPages] = useState(0);

  const onLoadSuccess = ({ numPages }) => {
    setTotalPages(numPages);
  };

  /**
   * 1ページずつ表示する
   */
  const pdfContents = [];
  for (let i = 0; i < totalPages; i++) {
    const d = <Page key={i} pageNumber={i + 1} width={300} />;
    pdfContents.push(d);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "scroll",
        paddingTop: "32px",
      }}
    >
      <Document
        file="https://bitcoin.org/bitcoin.pdf"
        onLoadSuccess={onLoadSuccess}
      >
        {pdfContents}
      </Document>
    </div>
  );
};

export default pdfView;
