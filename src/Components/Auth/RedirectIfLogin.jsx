import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../../features/user/userActions";
import { useNavigate } from "react-router-dom";

const Redirect = ({ path = "/" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    success: { verifySignup, login },
  } = useSelector((s) => s.auth);
  const { userInfo, success } = useSelector((s) => s.user);
  useEffect(() => {
    dispatch(userFetch());
  }, [verifySignup, login]);
  useEffect(() => {
    if (userInfo || success) {
      navigate(path);
    }
  }, [userInfo, success]);
  return <></>;
};
export default Redirect;
