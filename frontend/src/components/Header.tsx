import { Link } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext";
import { SignOutButton } from "./SignOutButton";

const Header = ()=>{
    const {isLoggedIn} = useAppContext();

    return(
        <div className="bg-blue-800 px-12 py-6">
            <div className="containe mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to="/" >JassHolidays.com</Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn?<>
                    <Link to="/my-bookings">My Bookings</Link>
                    <Link to="/my-hotelss">My Hotels</Link>
                    <SignOutButton/>
                    </>:
                      <Link to="/login" className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100">
                      Sign In
                  </Link>}    
                </span>
            </div>
        </div>
    )
}

export default Header;
