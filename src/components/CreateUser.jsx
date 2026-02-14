import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";
function CreateUser({ className, setIsCreate }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    company: "",
  });
  const navigate = useNavigate();
  const createHandler = (e) => {
    navigate("/user-dashboard");
    e.preventDefault();

    const newUser = {
      ...user,
      id: Date.now(),
    };
    setIsCreate(false);
    setUser({
      id: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      website: "",
      company: "",
    });
    dispatch(createUser(newUser));
  };

  return (
    <div
      className={
        "absolute h-screen bg-black/10 backdrop-blur-sm flex w-full flex-col items-center justify-center z-70 " +
        className
      }
    >
      <form
        onSubmit={(e) => createHandler(e)}
        className="z-70 w-[85%] sm:w-[50%] bg-black border rounded-2xl border-purple-600/20"
      >
        <h1 className="text-center font-bold text-4xl">Create User</h1>
        <div className="flex flex-col items-center justify-center p-4 rounded-3xl gap-3">
          <input
            className="border border-white/40 py-2 px-6 rounded-lg w-[85%]"
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            className="border border-white/40 py-2 px-6 rounded-lg w-[85%]"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            className="border border-white/40 py-2 px-6 rounded-lg w-[85%]"
            type="number"
            placeholder="Phone"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <input
            className="border border-white/40 py-2 px-6 rounded-lg w-[85%]"
            type="text"
            placeholder="Address"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />
          <input
            className="border border-white/40 py-2 px-6 rounded-lg w-[85%]"
            type="text"
            placeholder="Company"
            value={user.company}
            onChange={(e) => setUser({ ...user, company: e.target.value })}
          />
          <input
            className="border border-white/40 py-2 px-6 rounded-lg w-[85%]"
            type="text"
            placeholder="Website"
            value={user.website}
            onChange={(e) => setUser({ ...user, website: e.target.value })}
          />
          <button
            type="submit"
            className="mt-5 border-2 border-purple-800 p-2 rounded-2xl w-[80%] hover:bg-purple-900/80 "
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
