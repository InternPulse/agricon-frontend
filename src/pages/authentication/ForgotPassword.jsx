import React, { useState } from "react";
import logo from "../../assets/agriconLogo.png";
import companyImage from "../../assets/authImage.png";
import lightBar from "../../assets/LightBar.png";
import darkBar from "../../assets/darkBar.png";
import { assets } from '../../assets/assets';
import ResetEmailForm from "../../components/authentication/ResetEmailForm";

export default function ForgotPassword() {
  const [isActive, setIsActive] = useState(1);

  return (
    <main >

      <ResetEmailForm />
      
    </main>
  );
}
