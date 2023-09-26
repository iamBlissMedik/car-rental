import { BookCreatedFlagContext } from "@/context/BookCreatedFlag";
import { createBooking, getStoreLocations } from "@/services";
import { CarList } from "@/types/carsList";
import { StoreLocations } from "@/types/storeLocations";
import { useContext, useEffect, useState } from "react";
type FormProps = {
  car: CarList;
};

const Form = ({ car }: any) => {
  const [storeLocation, setStoreLocation] = useState<StoreLocations[]>();
  const { showToastMsg, setShowToastMsg } = useContext(BookCreatedFlagContext);
  const [formValue, setFormValue] = useState({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    userName: "",
    carId: "",
  });
  const today: any = new Date();
  const getStoreLocation_ = async () => {
    const resp: any = await getStoreLocations();
    setStoreLocation(resp.storesLocations);
  };
  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const resp = await createBooking(formValue);

    if (resp) {
      setShowToastMsg(true);
    }
    setFormValue({
      location: "",
      pickUpDate: "",
      dropOffDate: "",
      pickUpTime: "",
      dropOffTime: "",
      contactNumber: "",
      userName: "",
      carId: "",
    });
  };

  useEffect(() => {
    getStoreLocation_();
  }, []);
  useEffect(() => {
    if (car) {
      setFormValue({
        ...formValue,
        carId: car.id,
      });
    }
  }, [car]);
  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select
          className="select
        select-bordered w-full max-w-lg"
          name="location"
          onChange={handleChange}
          value={formValue.location}
        >
          <option value="" disabled selected>
            PickUp Location?
          </option>
          {storeLocation &&
            storeLocation.map((loc: StoreLocations, index: number) => (
              <option key={index}>{loc?.address}</option>
            ))}
        </select>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            min={today}
            onChange={handleChange}
            placeholder="Type here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg"
            value={formValue.pickUpDate}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name="dropOffDate"
            className="input input-bordered w-full max-w-lg"
            value={formValue.dropOffDate}
          />
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            onChange={handleChange}
            name="pickUpTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={formValue.pickUpTime}
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropOffTime"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={formValue.dropOffTime}
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          onChange={handleChange}
          name="contactNumber"
          value={formValue.contactNumber}
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="modal-action ">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="btn">Close</button>
          <button
            className="btn bg-blue-500 text-white
hover:bg-blue-800 ml-3"
            onClick={handleSubmit}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
