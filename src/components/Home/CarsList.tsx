"use client";
import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { CarList } from "@/types/carsList";
import CarCardSkeleton from "./CarCardSkeleton";
import BookingModal from "../CarBooking/BookingModal";
const CarsList = ({ carsList }: any) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedCar, setSelectedCar] = useState<any>();
  useEffect(() => {
    if (carsList) {
      setIsLoaded(false);
    }
  }, [carsList]);
  return (
    <div
      className="grid grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4"
    >
      {!isLoaded &&
        carsList.map((car: CarList, index: number) => (
          <div
            key={index}
            onClick={() => {
              (document.getElementById("my_modal_4") as any).showModal();
              setSelectedCar(car);
            }}
          >
            <CarCard car={car} />
          </div>
        ))}
      {isLoaded ? [1, 2, 3, 4, 5].map((item) => <CarCardSkeleton />) : null}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_4" className="modal">
        <BookingModal carDetails={selectedCar} />
      </dialog>
    </div>
  );
};
export default CarsList;
