import { useParams } from "react-router-dom";
import { useEffect } from "react";
import DataService from "#/services/DataService";
import ImageService from "#/services/ImageService";
import RedirectionService from "#/services/RedirectionService";
import { useTemporalProductState } from "#/hooks/TemporalProductState";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const ProductPage = () => {
  const { findProductByUrlNameOrId } = RedirectionService();
  const { isLoading } = DataService();
  const { findCollection } = ImageService();
  const { temp, clear, fill } = useTemporalProductState();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    clear();
    // If is loading the data from the API, then we don't need to do anything
    if (isLoading) return;
    // If the product is not in the menu, then we redirect to the home page
    const productFromMenu = findProductByUrlNameOrId(id);
    if (!productFromMenu) {
      navigate("/");
    }
    // If the product is in the menu, then we fill the temporal state
    fill(productFromMenu);

    // We clear the temporal state when the component is unmounted
    return () => {
      clear();
    };
  }, [isLoading]);

  //* This is the arrays of urls for the carousel
  const carouselImages = useMemo(() => {
    if (!temp) return [];
    const collection = findCollection(temp?._id, "PRD");
    if (!collection) return [];

    return collection?.reduce((acc, curr) => {
      acc.push(curr?.url);
      return acc;
    }, []);
  }, [temp?._id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <div className="flex flex-col gap-1"></div>;
};

export default ProductPage;