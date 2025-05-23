import HomeScreen from "./HomeScreen.jsx";
import AuthScreen from "./AuthScreen.jsx";
import { useAuthStore } from "../../store/authUser.js";
const HomePage = () => {
  const {user} = useAuthStore();
  return (
    <div>
      {user ? <HomeScreen /> : <AuthScreen />}
    </div>
  )
}

export default HomePage