import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { CarList } from "@/types/carsList";
const CarsList = ({ carsList }: any) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedCar, setSelectedCar] = useState<CarList[]>();
  return (
    <div
      className="grid grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4"
    >
      {carsList.map((car: CarList, index: number) => (
        <div key={index}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
};
export default CarsList;
