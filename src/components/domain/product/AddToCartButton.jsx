import { motion } from "framer-motion";
import Regular14 from "#/components/shared/fonts/Regular14";
import Button from "@mui/material/Button";

const AddToCartButton = ({ onClick }) => {
  return (
    <Button
      sx={style?.container}
      variant="contained"
      disableElevation
      fullWidth
      onClick={onClick}
      className="flex justify-center items-center  cursor-pointer "
    >
      <Regular14>Agregar al carrito</Regular14>
    </Button>
  );
};

const style = {
  container: {
    minHeight: "56px",
    width: "80vw",
    maxWidth: "400px",
    margin: "0 auto",
    position: "fixed",
    bottom: "24px",
    left: 0,
    right: 0,
  },
};

export default AddToCartButton;