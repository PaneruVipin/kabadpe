import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SignUpToVerify = ({ path = "/otpverify" }) => {
  const navigate = useNavigate();
  const {
    success: { signup },
  } = useSelector((s) => s.auth);
  const { userInfo } = useSelector((s) => s.user);
  useEffect(() => {
    if (signup && userInfo?.role != "kabadCollector") {
      navigate(path);
    }
  }, [signup]);
  return <></>;
};
