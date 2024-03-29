import OrderRepository from "#/repositories/OrderRepository.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocationState } from "#/stores/LocationState.js";
import { useCheckoutState } from "#/stores/CheckoutState.js";
import useCartState from "#/stores/cart.js";
import { addToast } from "#/stores/UIState.js";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "#/stores/AuthState.js";
import { useMemo } from "react";

const OrderService = ()=>{
  const {
    getOrder: _getOrder,
    getOrdersPending: _getOrdersPending,
    saveOrder: _saveOrder,
    getAllOrders: _getAllOrders
  } = OrderRepository();
  const cart = useCartState();
  const checkout = useCheckoutState();
  const location = useLocationState();
  const navigate = useNavigate();
  const auth = useAuthState();
  const queryClient = useQueryClient();

 const getOrder = useMutation({
   mutationKey: ["specific-order"],
   cacheTime: 1000 * 60 * 10,
    mutationFn: _getOrder,
    onError: (error)=>{
      console.log(error?.response?.data);
      addToast("Hubo un error al obtener la orden", "error")
    }
 })

  const {data: pendingOrders, isLoading: isLoadingPendingOrders} = useQuery({
    queryKey: ["orders-pending"],
    queryFn: _getOrdersPending,
    staleTime: Infinity,
    enabled: auth?.isAuthenticated && auth?.isVerified,
    onError: (error)=>{
      console.log(error?.response?.data);
      addToast("Hubo un error al obtener las ordenes pendientes", "error")
    }
  })

  const { data: allOrders, isLoading: isLoadingAllOrders } = useQuery({
    queryKey: ["orders-all"],
    queryFn: _getAllOrders,
    staleTime: Infinity,
    enabled: auth?.isAuthenticated && auth?.isVerified,
    onError: (error)=>{
      console.log(error?.response?.data);
      addToast("Hubo un error al obtener las ordenes", "error")
    }
  })

  const saveOrder = useMutation({
    mutationFn: _saveOrder,
    onSuccess: ({data})=>{
      cart?.clean()
      checkout?.clearState();
      location?.clearState();
      location?.clearDateTime();
      // Invalidate pending orders query
      queryClient.invalidateQueries(["orders-all"], {});
      addToast("Tu orden se ha guardado correctamente", "success")
      if(data?._id)
        navigate(`/rastreo-de-orden/${data._id}?back=disabled&pathname=/`, {replace: true})
      else
        navigate(`/`, {replace: true})
    },
    onError: (error)=>{
      console.log(error?.response?.data);
      addToast("Hubo un error al guardar la orden", "error")
    }
  })

  const notFinishedOrders = useMemo(()=>{
    return allOrders?.data?.filter(order=> order?.status !== "FINISHED") || []
  }, [allOrders?.data])

  return {
    getOrder,
    saveOrder,
    pendingOrders: pendingOrders?.data || [],
    notFinishedOrders,
    allOrders: allOrders?.data || [],
    isLoadingAllOrders,
    isLoadingPendingOrders
  }
}

export default OrderService;