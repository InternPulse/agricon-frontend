// this is mainly for rendering the email template

import React from "react";
import ForgotPassword from "../../components/EmailTemplatesComponent/ForgotPassword";
import WelcomeEmail from "../../components/EmailTemplatesComponent/WelcomeEmail";
import BookingComfirmationAndReceipt from "../../components/EmailTemplatesComponent/BookingComfirmationAndReceipt";
import FacilityApproval from "../../components/EmailTemplatesComponent/FacilityApproval";
import FacilityPending from "../../components/EmailTemplatesComponent/FacilityPending";
import FacilityPendingRetry from "../../components/EmailTemplatesComponent/FacilityPendingRetry";
import AlternativeLoginEmailTemp from "../../components/EmailTemplatesComponent/AlternativeLoginEmailTemp";

export default function Email() {
  return (
    <div>
      {/* <WelcomeEmail /> */}
      {/* <ForgotPassword /> */}
      {/* <BookingComfirmationAndReceipt /> */}
       <AlternativeLoginEmailTemp />
      {/* <FacilityApproval /> */}
      {/* <FacilityPending /> */}
      {/* <FacilityPendingRetry /> */}
    </div>
  );
}
