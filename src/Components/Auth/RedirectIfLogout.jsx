import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../../features/user/userActions";
import { useNavigate } from "react-router-dom";

const Redirect = ({ path = "/", role = "user" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    success: { verifySignup, login },
  } = useSelector((s) => s.auth);
  const { userInfo, success, loading } = useSelector((s) => s.user);
  useEffect(() => {
    dispatch(userFetch({}));
  }, [verifySignup, login]);
  useEffect(() => {
    if (loading === false && userInfo?.role != role) {
      navigate(path);
    }
  }, [userInfo, success, loading]);
  return <></>;
};
export default Redirect;
