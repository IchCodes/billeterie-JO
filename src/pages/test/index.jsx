import React, { useState } from "react";
import Header from "../../components/Header";
import styles from './Test.module.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Test = () => {

  const [loader, setloader] = useState(false)

  const downloadPDF = () => {
    const capture = document.getElementById('ticket');
    setloader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('ticket.pdf');
      setloader(false);
    });
      
  }

  return (
    <>
      <div id="ticket" className={styles.container}>
        <div className={styles['column-1']}>
          <div className={styles['text-frame']}>
            <div className={styles.event}>PSPDFKit TALENT SHOW</div>
            <div className={styles.date}>26 August, 2021</div>
            <br />
            <div className={styles.name}>John Smith</div>
            <div className={styles['ticket-id']}>#123456</div>
          </div>
        </div>

        <div className={styles['column-2']}>
          <div className={styles['qr-holder']}>
            <img src="/solo.jpg" width="120px" height="120px" />
          </div>
        </div>
      </div>

      <button onClick={downloadPDF} className="btn btn-primary">
        {loader ? 'Downloading...' : 'Download PDF'}
      </button>
    </>
  );
};

export default Test;
