import { useState } from "react";
import { useQuery } from "react-query";

// components
import Drawer from "@material-ui/core/Drawer";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

// styles
import { Wrapper } from "./App.styles";
// types

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;

  const addToCart = () => null;
  const removeFromCart = () => null;

  if (isLoading) return <CircularProgress />;
  if (error) return <div className="">Something went wrong...</div>;
  return <div className=""></div>;
};

export default App;
