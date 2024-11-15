import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Praveen Dilshan",
    image: assets.profile_pic,
    email: "rosapraveen1@gmail.com",
    phone: "+94 750 104 549",
    address: {
      line1: "No.128",
      line2: "Seeduwa",
    },
    gender: "Male",
    dob: "2001-06-17",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-base">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-600 underline mt-3 font-bold">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-bold">Email:</p>
          <p className="text-blue-500 font-medium">{userData.email}</p>
          <p className="font-bold">Phone:</p>
          {isEdit ? (
            <input className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500 font-medium">{userData.phone}</p>
          )}

          <p className="font-bold">Address:</p>
          {isEdit ? (
            <p>
              <input className="bg-gray-100"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address,
                    line1: e.target.value,
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input className="bg-gray-100"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address,
                    line2: e.target.value,
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500 font-medium">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-600 underline mt-3 font-bold">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-bold">Gender: </p>
          {isEdit ? (
            <select className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
              type="text"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-500 font-medium">{userData.gender}</p>
          )}
          <p className="font-bold">Birthday: </p>
          {isEdit ? (
            <input className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-500 font-medium">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-5">
        {isEdit ? (
          <button className="border rounded-full border-black px-8 py-4 text-base hover:bg-black hover:text-white transition-all duration-500" onClick={() => setIsEdit(false)}>Save information</button>
        ) : (
          <button className="border rounded-full border-black px-6 py-2 text-base hover:bg-black hover:text-white transition-all duration-500  ml-12" onClick={() => setIsEdit(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
