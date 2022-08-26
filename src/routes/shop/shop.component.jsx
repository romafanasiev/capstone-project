import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux";

import {
  getCategoriesAndDocuments,
} from "../../utils/firebase/firebase.utils";

import { setCategoriesMap } from "../../store/categories/category.actions";

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import "./shop.styles.scss";import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  );
};

export default Shop;