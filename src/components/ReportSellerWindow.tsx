import React, { useState } from "react";
const ReportSeller = () => {
  const windowBody: string = `<html>
  <body>
    <div class="dialog-content">
    <h2 style="text-align: center ; font-family: Futura PT;
    font-size: 64px;
    font-weight: 500;
    line-height: 82px;
    letter-spacing: 0em;
    text-align: center;
    ">Report Seller</h2>
    <div style="font-family: 'Poppins'; font-size: 40px; font-weight: 400; line-height: 60px; letter-spacing: 0em; text-align: left; margin-bottom:66px;">
    <input type="checkbox" class="dialog-checkbox"  /> Spam (Ads and Self Promotion)
    </div>
    <div style="font-family: 'Poppins'; font-size: 40px; font-weight: 400; line-height: 60px; letter-spacing: 0em; text-align: left;margin-bottom:66px;">
      <input type="checkbox" class="dialog-checkbox" /> Offensive, obsecene messages
    </div>
    <div style="font-family: 'Poppins'; font-size: 40px; font-weight: 400; line-height: 60px; letter-spacing: 0em; text-align: left;margin-bottom:66px;">
      <input type="checkbox" class="dialog-checkbox" /> Scamming or trolling
    </div>
    <div style="font-family: 'Poppins'; font-size: 40px; font-weight: 400; line-height: 60px; letter-spacing: 0em; text-align: left;margin-bottom:66px;">     
    <input type="checkbox" class="dialog-checkbox" value="option2" /> Hate speech
    </div>
    <div style="font-family: 'Poppins'; font-size: 40px; font-weight: 400; line-height: 60px; letter-spacing: 0em; text-align: left;margin-bottom:66px;">     
    <input type="checkbox" class="dialog-checkbox" /> Other
  </div>
    <div style="font-family: Poppins;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom:25px;" >Tell me more about this</div>
    <input style="width: 791.93px;
    height: 195px;
    top: 1520px;
    left: 545.07px;
    border-radius: 6px;
    border: 2px;
    margin-bottom:20px
    "type="text"></input>
    </div>
    <button class="dialog-button" onclick="window.close()">Submit</button>
  </body>
</html>`;
  const openDialog = () => {
    const dialogWindow = window.open(
      "",
      "",
      "width: 1052px,height: 1426px,top: 555px,left: 434px , border-radius: 10px,border: 2px,"
    );
    if (dialogWindow) {
      dialogWindow.document.write(windowBody);
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
