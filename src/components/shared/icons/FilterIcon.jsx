import FilterIconSvg from "#/assets/icons/filter.svg";
import { motion } from "framer-motion";

function FilterIcon({ ...props }) {
  return (
    <motion.img
      src={FilterIconSvg}
      alt="filter"
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

export default FilterIcon;
