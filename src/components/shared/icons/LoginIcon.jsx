import LoginIconSvg from "#/assets/icons/login.svg";
import { motion } from "framer-motion";

function LoginIcon({ ...props }) {
  return (
    <motion.img
      src={LoginIconSvg}
      alt="add"
      {...props}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}

export default LoginIcon;
