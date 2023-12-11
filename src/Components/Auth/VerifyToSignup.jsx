import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const VerifyToSignup = ({ path = "/" }) => {
  const navigate = useNavigate();
  const {
    success: { signup },
  } = useSelector((s) => s.auth);
  const { userInfo } = useSelector((s) => s.user);
  useEffect(() => {
    if (!signup && !userInfo) {
      navigate(path);
    }
  }, [signup]);
  return <></>;
};
