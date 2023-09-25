import { getStoreLocations } from "@/services";
import { StoreLocations } from "@/types/storeLocations";
import { useEffect, useState } from "react";

const Form = () => {
  const [storeLocation, setStoreLocation] = useState<StoreLocations[]>();
  const getStoreLocation_ = async () => {
    const resp: any = await getStoreLocations();
    setStoreLocation(resp.storesLocations);
  };
  useEffect(() => {
    getStoreLocation_();
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select
          className="select
        select-bordered w-full max-w-lg"
          name="location"
          //   onChange={handleChange}
        >
          <option disabled selected>
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
            // min={today}
            // onChange={handleChange}
            placeholder="Type here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            // onChange={handleChange}
            placeholder="Type here"
            name="dropOffDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            // onChange={handleChange}
            name="pickUpTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropOffTime"
            // onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          //   onChange={handleChange}
          name="contactNumber"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="btn">Close</button>
        </form>

        <button
          className="btn bg-blue-500 text-white
hover:bg-blue-800"
          //   onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default Form;
