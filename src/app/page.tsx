"use client";
import CarsFilterOption from "@/components/Home/CarsFilterOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import Toast from "@/components/Toast";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlag";
import { getCarsList } from "@/services";
import { CarList } from "@/types/carsList";

import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);
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
  useEffect(() => {
    if (showToastMsg) {
      setTimeout(() => {
        setShowToastMsg(false);
      }, 4000);
    }
  }, [showToastMsg]);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreatedFlagContext.Provider
        value={{ showToastMsg, setShowToastMsg }}
      >
        <Hero />
        <SearchInput />
        <CarsFilterOption
          carsList={carsOrgList}
          setBrand={(value) => filterCarList(value)}
          orderCarList={(value) => orderCarList(value)}
        />
        <CarsList carsList={carsList} />
        {showToastMsg ? <Toast msg={"Booking Created Successfully!"} /> : null}
      </BookCreatedFlagContext.Provider>
    </div>
  );
}
