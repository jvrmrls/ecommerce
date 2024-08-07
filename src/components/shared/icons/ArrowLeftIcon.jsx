import ArrowLeftIconSvg from "#/assets/icons/arrow-left.svg";
import { motion } from "framer-motion";

function ArrowLeftIcon({ ...props }) {
  return (
    <motion.img
      src={ArrowLeftIconSvg}
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

export default ArrowLeftIcon;
