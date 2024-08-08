import React, { useState } from "react";
import "../style/ChatSoclPost.css";
import Protect from "../Components/Auth/ProtectComp";
import UserForm from "../Components/UserForm";

const ProtectClimeConnect = ({ children, disable = false }) => {
  const [loginForm, setLoginForm] = useState(true);
  return (
    <>
      {disable ? (
        children
      ) : (
        <>
          <Protect>{children}</Protect>
          <Protect reverse>
            {loginForm ? (
              <UserForm
                closepopUpUserForm={() => {
                  setLoginForm(false);
                }}
              />
            ) : null}
          </Protect>
        </>
      )}
    </>
  );
};

export default ProtectClimeConnect;
