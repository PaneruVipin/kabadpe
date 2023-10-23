import { useSelector } from "react-redux";

const Protect = ({ children, reverse = false }) => {
  const { userInfo } = useSelector((s) => s.user);
  const renderCondition = !reverse ? userInfo : !userInfo;
  return <>{renderCondition ? children : null}</>;
};

export default Protect;
