import { CarList } from "@/types/carsList";
import CarCard from "../Home/CarCard";
import Form from "./Form";

type BookingModalProps = {
  carDetails: CarList;
};

const BookingModal = ({ carDetails }: BookingModalProps) => {
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-[1px] pb-2 ">
        <h3 className=" text-[30px] font-light text-gray-400">
          Rent A Car Now!
        </h3>
      </div>
      <div
        className="grid grid-cols-1
    md:grid-cols-2 p-5"
      >
        <div>
          <CarCard car={carDetails} />
        </div>
        <div>
          <Form car={carDetails} />
        </div>
      </div>
    </div>
  );
};
export default BookingModal;
