import Regular16 from "#/components/shared/fonts/Regular16";
import Bold14 from "#/components/shared/fonts/Bold14";
import { motion } from "framer-motion";
import ImageService from "#/services/ImageService.js";
import { formatCurrency } from "#/utils/currency";
import Picture from "#/components/shared/Picture";
import TouchRippleEffect from "#/components/shared/TouchRippleEffect";

function ProductCardContainer({ product, handleClick }) {
  const { findImage } = ImageService();
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      style={style.container}
      className="rounded-md p-2  shadow-md relative"
      onClick={() => handleClick(product?._id)}
    >
      <TouchRippleEffect className="flex flex-col items-start justify-start rounded-md min-h-[150px]">
        <Picture
          webp={findImage(product?._id, "PRD", "webp")}
          jpg={findImage(product?._id, "PRD", "jpg")}
          alt={`Imagen de ${product?.name}`}
          className="w-full h-32 object-cover rounded-md mb-3 overflow-hidden"
        />
        <Regular16>{product?.name}</Regular16>
        <Bold14>{formatCurrency(product?.price)}</Bold14>
      </TouchRippleEffect>
    </motion.div>
  );
}

const style = {
  container: {
    // background: "red",
    // display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr",
    // gridGap: "1rem",
  },
};

export default ProductCardContainer;