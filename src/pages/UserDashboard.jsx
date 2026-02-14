import Card from "../components/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import CreateUser from "../components/CreateUser";

function UserDashboard() {
  let users = useSelector((state) => state.user);
  const [isCreate, setIsCreate] = useState(false);
  const [input, setInput] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(input.toLowerCase()),
  );

  return (
    <div
      className={` transition duration-200 ease-in-out ${isCreate ? "fixed" : ""} `}
    >
      <CreateUser
        setIsCreate={setIsCreate}
        className={isCreate ? "flex" : "hidden"}
      />

      {/* Navbar */}
      <div>
        <nav className="h-13  font-bold text-shadow-2xl rounded-lg flex items-center bg-purple-800">
          <div className="flex justify-between w-full sm:p-22 px-2 items-center ">
            <div className="flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/459911/dashboard.svg"
                className="h-7 invert"
                alt=""
              />
              <p className="lg:block hidden text-xl font-semibold pl-2 text-white ">
                DASHBOARD
              </p>
            </div>
            <input
              placeholder="search user"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="outline-0 focus:bg-black/70 bg-black/40 border-2 border-black/30 pl-4 p-1.5 rounded-2xl w-3/7 font-normal"
            />
            <button
              className="bg-black/50 sm:rounded-xl sm:p-2 p-1 w-12 sm:w-32 mt-1  font-normal cursor-pointer border-white/70 shadow-xl border-2 z-80 rounded-full"
              onClick={() => setIsCreate(!isCreate)}
            >
              <p className="hidden sm:block">
                {isCreate ? "Cancel" : "Create User"}
              </p>
              <p className="block sm:hidden font-bold text-2xl">
                {isCreate ? "X" : "+"}
              </p>
            </button>
          </div>
        </nav>
        {/* Cards */}
        <div className="h-full no-scrollbar flex flex-wrap justify-center">
          {filteredUsers.length === 0 && (
            <div className="flex items-center justify-center h-full  w-full mt-22">
              <p>No users found"</p>
            </div>
          )}
          {filteredUsers.map((users) => {
            return <Card user={users} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
