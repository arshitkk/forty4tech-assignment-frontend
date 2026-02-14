import { NavLink } from "react-router-dom";



function Card({ user }) {
  return (
    <ul className="p-4 scale-95">
      <NavLink to={"/user/" + user.id}>
        <li
          key={user.id}
          className="rounded-2xl h-79 w-70 transition-all border-2 border-purple-800 overflow-hidden cursor-pointer hover:scale-105 shadow-lgshadow-purple-800"
        >
          <div className="bg-purple-800 h-22 flex justify-center ">
            <div className=" flex flex-col items-center">
              <div className="text-xl mt-2 font-bold px-1  font-mono">
                <p>{user.name}</p>
              </div>
              <div className=" border-9 border-black h-22 w-22 p-6 flex justify-center items-center text-2xl font-semibold rounded-full  bg-purple-600 mt-3 ">
                {user.name.charAt(0) + user.name.split(" ")[1][0]}
              </div>
              <div>
                <div className=" flex flex-col items-center  justify-center text-purple-400">
                  <p className="font-semibold ">Works at </p>
                  <p className="text-xl font-semibold text-purple-200">
                    {user.company.name || user.company}
                  </p>
                </div>
              </div>
              <div className="py-5 text-sm text-purple-400">
                <div className="flex gap-1.5 items-center ">
                  <div className="font-bold">Phone:</div>{" "}
                  <div>{user.phone}</div>
                </div>
                <div className="flex gap-1.5 items-center ">
                  <div className="font-bold w-11">Email:</div>
                  <div> {user.email}</div>
                </div>
                <div className="flex gap-1.5 items-center ">
                  <div className="font-bold">Phone:</div>{" "}
                  <div> {user.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </NavLink>
    </ul>
  );
}

export default Card;
