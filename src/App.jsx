import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchAPI } from "./utils/fetchAPI";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/slices/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let loadUsers = async () => {
      const res = await fetchAPI("https://jsonplaceholder.typicode.com/users");
      dispatch(addUser(res.data));
    };
    loadUsers();
  }, [dispatch]);

  return (
    <div className="min-h-screen max-w-screen bg-black text-whit text-white ">
      <Outlet />
    </div>
  );
}

export default App;
