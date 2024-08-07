import Box from "@mui/material/Box";
import ProductsView
  from "#/components/domain/checkout/review/ProductsView.jsx";
import { useMemo } from "react";
import { useCartState } from "#/stores/cart";
import useCartUtils from "#/components/domain/cart/controllers/useCartUtils.js";
import Divider from "@mui/material/Divider";
import ProductsLabelView
  from "#/components/domain/checkout/review/ProductsLabelView.jsx";
import CheckoutCartResumeInfo
  from "#/components/domain/checkout/review/CheckoutCartResumeInfo.jsx";
import OrderInfo from "#/components/domain/checkout/review/OrderInfo.jsx";
import { useCheckoutState } from "#/stores/CheckoutState.js";
import { useLocationState } from "#/stores/LocationState.js";
import SemiBold18 from "#/components/shared/fonts/SemiBold18.jsx";
import SemiBold16 from "#/components/shared/fonts/SemiBold16.jsx";
import PaymentInfo from "#/components/domain/checkout/review/PaymentInfo.jsx";
import PaymentContainer from "#/components/domain/checkout/PaymentContainer.jsx";
import PaymentMethodSelectorContainer from "#/components/domain/checkout/PaymentMethodSelectorContainer.jsx";
import HavingTroublesContainer from "#/components/shared/HavingTroublesContainer.jsx";
import PaymentDetailContainer from "#/components/domain/checkout/PaymentDetailContainer.jsx";

const ReviewContainer = () => {
  const cart = useCartState();
  const checkout = useCheckoutState();
  const location = useLocationState();
  const { getItemsToShow } = useCartUtils();

  const itemsToShow = useMemo(
    () => getItemsToShow(),
    [cart?.getItemsCounter()]
  );

  return (
    <Box className={"w-full flex-1 flex flex-col gap-8"}>
      <SemiBold16>
        Confirmaci&oacute;n de pedido
      </SemiBold16>
      <ProductsView products={itemsToShow}/>
      <Divider/>
      <PaymentDetailContainer paymentValue={checkout?.paymentMethod} />
      <Divider/>
      <OrderInfo info={{ ...checkout, ...location }}/>
      {/*<Divider/>*/}
      {/*<PaymentInfo paymentMethod={checkout?.paymentMethod}/>*/}
      <Divider/>
      <CheckoutCartResumeInfo
        numberOfItems={cart?.getItemsCounter()}
        products={itemsToShow}
        shipping={cart?.getShipping()}
        subtotal={cart?.getSubTotal()}
        discount={cart?.getDescuento()}
        total={cart?.getTotal()}/>
    </Box>
  )
}

export default ReviewContainer