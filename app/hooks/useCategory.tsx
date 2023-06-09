"use client";

import { useState } from "react";

export const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [key, setKey] = useState<number>(0);

  const changeCategory = (newCategory: string) => {
    setSelectedCategory(newCategory);
    setKey((prevKey) => prevKey + 1); // increment key to force remount
  };

  return { selectedCategory, key, changeCategory };
};
