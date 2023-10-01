import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import "../styles/ReportSeller.css";
import Button from "./Button";

const ReportSellerCard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLinkClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  const handleSubmit = () => {
    handleDialogClose();
    alert(
      "Your report has been sent!\\nWe’ve sent your report to our moderators.Thank you for keeping LAGAIT safe!"
    );
  };

  return (
    <div>
      <a
        style={{
          fontFamily: "Poppins",
          fontSize: "32px",
          fontWeight: "500",
          lineHeight: "48px",
          letterSpacing: "0em",
          textAlign: "center",
          color: "#1F24AB",
        }}
        href="#"
        onClick={handleLinkClick}
      >
        Suspect this listing is fake? Let us know.
      </a>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <h2 className="windowHeader">Report Seller</h2>
        <div className="cardContent">
          <div className="checkBoxElement">
            <input type="checkbox" className="dialog-checkbox" /> Spam (Ads and
            Self Promotion)
          </div>
          <div className="checkBoxElement">
            <input type="checkbox" className="dialog-checkbox" /> Offensive,
            obsecene messages
          </div>
          <div className="checkBoxElement">
            <input type="checkbox" className="dialog-checkbox" /> Scamming or
            trolling
          </div>
          <div className="checkBoxElement">
            <input type="checkbox" className="dialog-checkbox" /> Hate speech
          </div>
          <div className="checkBoxElement">
            <input type="checkbox" className="dialog-checkbox" /> Other
          </div>
        </div>
        <div className="textBoxTitle">Tell me more about this</div>
        <input className="reportBox" type="text"></input>
        <Button class="" name="submit" handleClick={handleSubmit} />
      </Dialog>
    </div>
  );
};

export default ReportSellerCard;
