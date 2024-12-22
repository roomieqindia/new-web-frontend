import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Cat from "./Pages/Categorypage";
import Cat1 from "./Pages/Categorypagebefore";
import Home from "./Pages/Home";
import Testing from "./Pages/Nolistingpage";
// import Cat2 from "./pages/Categorypageafter";
import OTP1 from "./Pages/Otp";
// import OTP2 from "./pages/Otp2";
import AboutUs from "./Pages/Aboutus";
import BlogPage from "./Pages/Blogpage";
import BlogSubPage from "./Pages/Blogsubpage";
import CareerWithUS from "./Pages/Careerpage";
import CityPage from "./Pages/Finalcitypage";
import WishList from "./Pages/Finalwishlist";
import Membership from "./Pages/Membership";
import Profile from "./Pages/Profile";
import RoomListingForm from "./Pages/Roomlistingform";
import RoomListingPage from "./Pages/Roomlistingpage";
// import PrivacyPolicy from "./Pages/Privacypolicy";
import DltAcc from "./Components/Dltacc";
import Logout from "./Components/Logout";
import AddListing from "./Pages/Addlisting";
import BhojnalayForm from "./Pages/Bhojnalayform";
import BhojnalaySubPage from "./Pages/Bhojnalaysubpage";
import Chatpage from "./Pages/Chatpage";
import HostelListingForm from "./Pages/Hostellistingform";
import HostelListingPage from "./Pages/Hostellistingpage";
import LegalNotice from "./Pages/Legalnotice";
import Loader from "./Pages/Loader";
import Notfoundpage from "./Pages/Notfoundpage";
import OfficeListingForm from "./Pages/Officelistingform";
import OfficeListingPage from "./Pages/Officelistingpage";
import RoomMateForm from "./Pages/Roommateform";
import RoomMateListing from "./Pages/Roommatelisting";
import Support from "./Pages/supportpage";
import TermsCondition from "./Pages/termscondition";
import MyListing from "./Pages/Mylisitngpage";
import LoginForm from "./Components/Loginpage";
// import ChatRoom from "./Components/ChatRoom";
import { useAuthStore } from "../utils/useAuthStore";
import ChangePassword from "./Components/ChangePassword";
import ForgotPassword from "./Components/ForgotPassword";
import BhojnalayasPage from "./Pages/BhojanalayAll";
import HostelsPage from "./Pages/HostelAll";
import OfficePage from "./Pages/OfficeAll";
import RoommatesPage from "./Pages/RoommateAll";
import RoomsPage from "./Pages/RoomsAll";
import Transaction from "./Pages/Transaction";
import { useEffect } from "react";
import "./App.css";

export default function App() {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/testing" element={<Testing />} />
        <Route path="/" element={<Home />} />
        <Route path="/addrooms" element={<RoomListingForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/addlisting" element={<AddListing />} />
        <Route path="/addroommate" element={<RoomMateForm />} />
        <Route path="/addhostel" element={<HostelListingForm />} />
        <Route path="/addbhojanalay" element={<BhojnalayForm />} />
        <Route path="/addoffice" element={<OfficeListingForm />} />
        <Route path="/bhojnalaya/:id" element={<BhojnalaySubPage />} />
        <Route path="/bhojanalayas" element={<BhojnalayasPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogSubPage />} />
        <Route path="/cat1" element={<Cat1 />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/citypage" element={<CityPage />} />
        <Route path="/career" element={<CareerWithUS />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/chat" element={<Chatpage />} />
        <Route path="/deleteaccount" element={<DltAcc />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/hostel/:id" element={<HostelListingPage />} />
        <Route path="/hostels" element={<HostelsPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/mylisting" element={<MyListing />} />
        <Route path="/notfoundpage" element={<Notfoundpage />} />
        <Route path="/otp1" element={<OTP1 />} />
        <Route path="/office/:id" element={<OfficeListingPage />} />
        <Route path="/offices" element={<OfficePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/room/:id" element={<RoomListingPage />} />
        <Route path="/room" element={<RoomsPage />} />
        <Route path="/roommates" element={<RoommatesPage />} />
        <Route path="/roommate/:id" element={<RoomMateListing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<Support />} />
        <Route path="/termsandconditions" element={<TermsCondition />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/wishlist" element={<WishList />} />

        {/* <Route path="/cat2" element={<Cat2 />} /> */}
        {/* <Route path="/otp2" element={<OTP2 />} /> */}
        {/* <Route path="/privacypolicy" element={<PrivacyPolicy />} /> */}
        {/* <Route path="/Bot" element={<Bot />} /> */}

        {/* <Route path="/cards" element={<Cards />} /> */}
      </Routes>
    </Router>
  );
}
