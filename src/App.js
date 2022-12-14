import "./App.css";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userObserver } from "./auth/firebase";
import { useEffect } from "react";
function App() {
  // ! Firebase userObserver
  const currentUser = useSelector((state) => state.user);
  // console.log(currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("yuseefect");
    userObserver(dispatch);
  }, [currentUser]);
  return (
    <div className="App">
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
