import React, { useState } from "react";

const ReportSeller = () => {
  const openDialog = () => {
    const dialogWindow = window.open("", "", "width=400,height=300");
    if (dialogWindow) {
      dialogWindow.document.write(`
      <html>
      <body>
        <div class="dialog-content">
        <h2>Report Seller</h2>
        <div>
        <input type="checkbox" class="dialog-checkbox" value="option1" /> Spam (Ads and Self Promotion)
        </div>
        <div>
          <input type="checkbox" class="dialog-checkbox" value="option2" /> Offensive, obsecene messages
        </div>
        <div>
          <input type="checkbox" class="dialog-checkbox" value="option2" /> Scamming or trolling
        </div>
        <div>
          <input type="checkbox" class="dialog-checkbox" value="option2" /> Hate speech
        </div>
        <div>
        <input type="checkbox" class="dialog-checkbox" value="option2" /> Other
      </div>
        <div>Tell me more about this</div>
        <input type="text"></input>
        </div>
        <button class="dialog-button" onclick="window.close()">Submit</button>
      </body>
    </html>
  `);
    }
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
        onClick={openDialog}
      >
        Suspect this listing is fake? Let us know.
      </a>
    </div>
  );
};

export default ReportSeller;
