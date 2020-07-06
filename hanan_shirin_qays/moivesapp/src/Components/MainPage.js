import React, { useContext } from "react";
import MoviesGrid from "./MoviesGrid";
import { StateContext } from "../StateProvider";
import {useSelector} from "react-redux";
function MainPage() {
  const isLoading = useSelector(state=> state.isLoading);
  return <>{!isLoading  && <MoviesGrid />}</>;
}

export default MainPage;
