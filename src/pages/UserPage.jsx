import { isPlainObject } from "@reduxjs/toolkit";
import React, { use } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

function UserPage() {
  const { id } = useParams();
  let users = useSelector((state) => state.user);
  let user = users.find((u) => u.id === Number(id));
  console.log(user);
  if (!user) {
    return <div className="text-white p-4">Loading...</div>;
  }

  return (
    <div className="">
      <nav className="h-13  font-bold text-shadow-2xl rounded-lg flex items-center bg-purple-800">
        <div className="flex justify-between w-full px-22 ">
          <p className="text-lg font-semibold pl-2 text-white">User Info</p>
        </div>
      </nav>
      <div className="flex justify-center items-start w-full ">
        <div className="mt-3 border-2 rounded-3xl  border-purple-300 p-3 flex justify-center">
          <div className="flex flex-col gap-4 items-center">
            <p className="text-3xl sm:text-6xl font-bold">{user.name}</p>
            <p className="text-2xl sm:text-4xl">
              <b>Company</b>: {user.company.name || user.company}
            </p>
            <div className="flex flex-col gap mt-8 ">
              <p className="text-md sm:text-2xl underline pb-2"> Contact: </p>
              <p className="text-md sm:text-2xl">
                <b>Email</b>: {user.email}
              </p>
              <p className="text-md sm:text-2xl">
                <b>Phone</b>: {user.phone}
              </p>
              <p className="text-md sm:text-2xl">
                <b>Website</b>: {user.website}
              </p>
              <p className="text-md sm:text-2xl">
                <b>Address</b>:{" "}
                {isPlainObject(user.address)
                  ? user.address.street +
                    " " +
                    user.address.suite +
                    " " +
                    user.address.city +
                    " " +
                    user.address.zipcode
                  : user.address}{" "}
              </p>
            </div>
            <NavLink
              to={"/user-dashboard"}
              className={
                "mt-12 w-full text-2xl bg-purple-800/80 flex items-center justify-center  p-3 rounded-full sm:rounded-lg"
              }
            >
              🡸 Go Back
            </NavLink>
          </div>
          <div className="bg-purple-800 mt-8 ml-7 sm:h-30 sm:w-30 h-20 w-25 flex justify-center items-center text-shadow-lg  text-2xl sm:text-5xl font-bold rounded-full">
            {user.name[0] + user.name.split(" ")[1][0]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
