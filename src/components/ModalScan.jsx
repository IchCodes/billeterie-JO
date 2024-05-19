import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ModalScan = ({ showModal, setShowModal, order, modalTitle }) => {
  const [loader, setloader] = useState(false);

  const downloadPDF = () => {
    const capture = document.getElementById("e-ticket");
    setloader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 180; // Largeur de l'image dans le PDF
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const margin = 10; // Marge autour de l'image
      const xOffset = (pdf.internal.pageSize.width - imgWidth) / 2;
      const yOffset = margin;
      pdf.addImage(imgData, "PNG", xOffset, yOffset, imgWidth, imgHeight);
      pdf.save("ticket.pdf");
      setloader(false);
    });
  };
  
  

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="e-ticket">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0">Votre E-BILLET</h2>
            <img
              src="/logo.webp"
              alt="Logo"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
          <div className="card mb-3">
            <div
              className="card-header font-weight-bold"
              style={{ backgroundColor: "#d3c47d" }}
            >
              Ticket numéro #{order.ticket_id}
            </div>
            <div className="card-body">
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  value={"Détenteur: " + order.owner}
                  disabled
                  style={{ backgroundColor: "#d3c47d" }}
                />
              </div>
              <div className="input-group has-validation mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={"Formule: " + order.plan}
                  disabled
                  style={{ backgroundColor: "#d3c47d" }}
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <div
              className="card  d-inline-block p-3"
              style={{ backgroundColor: "#d3c47d" }}
            >
              <QRCodeSVG value={order.qr_code} />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setShowModal(false)}>
          Fermer
        </Button>
        <button onClick={downloadPDF} className="btn btn-primary">
          {loader ? "Downloading..." : "Download PDF"}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalScan;
