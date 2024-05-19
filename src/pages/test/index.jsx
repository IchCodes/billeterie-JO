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
      html2canvas(capture).then((capture) => {
        const imgData2 = capture.toDataURL('image/png');
        pdf.addPage();
        pdf.addImage(imgData2, 'PNG', 0, 0);
        pdf.save('ticket.pdf');
        setloader(false);
      });
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
        <div className="container">
        <div className="card">
          <div className="card-header font-weight-bold">
            VOTRE E-BILLET
          </div>
          <div className="card-body">
          <div class="input-group has-validation">
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        name="username"
                        placeholder="Username"
                        required={true}
                      />
                      <span class="input-group-text">375 €</span>
                    </div>
                    
            <h5 className="card-title">BORDEAUX ST JEAN / NARBONNE</h5>
            <p className="card-text">
              Nom : SCHNEIDER<br />
              Prénom : MATTI<br />
              DOSSIER VOYAGE : QVVLMI<br />
              Référence client :<br />
              Départ / Arrivée Date / Heure INTERCITES BILLET VALEABLE AVEC UNE CARTE LIBERTE<br />
              BORDEAUX ST JEAN le 10/10 à 10h30 VOITURE N°4 - PLACE 83 FENETRE DUO<br />
              NARBONNE à 13h55 CANAL PANORAMIQUE - PLACEMENT LIBRE
            </p>
            <img src="qrcode.png" className="float-right" alt="QR Code" />
          </div>
          <div className="card-footer text-muted">
            COMMENT GERER MA RESERVATION? CONDITIONS D'UTILISATION DU E-BILLET
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
