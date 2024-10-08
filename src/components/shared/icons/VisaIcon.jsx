import VisaIconSvg from "#/assets/icons/visa.svg";
import { motion } from "framer-motion";

function VisaIcon({ ...props }) {
  return (
    <motion.img
      src={VisaIconSvg}
      alt="visa"
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

export default VisaIcon;
