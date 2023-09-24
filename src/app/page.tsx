"use client";
import CarsFilterOption from "@/components/Home/CarsFilterOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { CarList } from "@/types/carsList";

import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  useEffect(() => {
    getCarList_();
  }, []);
  const getCarList_ = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
    console.log(result);
  };
  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter(
      (item: CarList) => item.carBrand == brand
    );
    setCarsList(filterList);
  };
  const orderCarList = (order: number) => {
    const sortedData = [...carsOrgList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOption
        carsList={carsOrgList}
        setBrand={(value) => filterCarList(value)}
        orderCarList={(value) => orderCarList(value)}
      />
      <CarsList carsList={carsList} />
    </div>
  );
}
