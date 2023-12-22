import ImageClose from "./Assets/close-48.png";
import farawin from "farawin";
import { useState } from "react";

export default function AddContact({ onClose }) {
  const [numberPhone, setNumberPhone] = useState("");
  const [name, setName] = useState("");

  const handleNumberPhone = (event) => {
    setNumberPhone(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const addContacts = async () => {
    const numberPhoneToEn = farawin.toEnDigit(numberPhone);
    const res = await farawin.testAddContact(numberPhoneToEn, name);
    alert(res.message);
  };

  const deleteContact = async () => {
    const numberPhoneToEn = farawin.toEnDigit(numberPhone);
    const res = await farawin.testDeleteContact(numberPhoneToEn);
    alert(res.message);
  };

  return (
    <div className="absolute flex justify-center items-center top-0 bottom-0 right-0 left-0 backdrop-blur-sm z-40">
      <form className="relative flex items-center flex-col px-4 py-4 gap-y-2 w-96 rounded-3xl bg-[#2E333D] ">
        <p className="text-3xl pb-8 "> افزودن مخاطب</p>
        <label htmlFor="numberPhone">شماره موبایل</label>
        <input
          onChange={handleNumberPhone}
          type="text"
          id="numberPhone"
          className="h-9 w-52 rounded-xl focus:outline-none text-black p-3"
        />
        <label htmlFor="name">نام</label>
        <input
          onChange={handleName}
          type="text"
          id="name"
          className="h-9 w-52 rounded-xl focus:outline-none text-black p-3"
        />
        <button
          onClick={addContacts}
          type="button"
          className="m-auto my-3 bg-[#202329] hover:bg-green-500 w-64 h-12 rounded-2xl"
        >
          افزودن به مخاطبین
        </button>
        <div className="   h-[1px] bg-gray-400 w-full" />
        <p className="text-3xl pb-8"> حذف مخاطب</p>
        <label htmlFor="numberPhone">شماره موبایل</label>
        <input
          onChange={handleNumberPhone}
          type="text"
          id="numberPhone"
          className="h-9 w-52 rounded-xl focus:outline-none text-black p-3"
        />
        <button
          onClick={deleteContact}
          type="button"
          className="m-auto my-3 bg-[#202329] hover:bg-red-500 w-64 h-12 rounded-2xl"
        >
          حذف از مخاطبین
        </button>
        <button
          onClick={onClose}
          type="button"
          className="m-auto mt-7 bg-white rounded-full p-1 hover:bg-red-500 w-12  "
        >
          <img src={ImageClose} alt="Close" />
        </button>
      </form>
    </div>
  );
}
