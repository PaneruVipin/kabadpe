import { useSelector } from "react-redux";

const Protect = ({ children, reverse = false, role = "user" }) => {
  const { userInfo } = useSelector((s) => s.user);
  const renderCondition = !reverse
    ? userInfo && userInfo?.role == role
    : userInfo?.role != role
  return <>{renderCondition ? children : null}</>;
};

export default Protect;
