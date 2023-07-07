import Dashboard from "../pages/admindashboard/Dashboard";
import AuthProvider from "../hooks/AuthProvider";
import Login from "../pages/authpages/Login";
import SignUp from "../pages/authpages/SignUp";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import UserManagement from "../pages/admindashboard/UserManagement";
import Landing from "../pages/landingpages/Landing";
import Search from "../pages/landingpages/Search";
import Detail from "../pages/landingpages/Detail";
import Rent from "../pages/landingpages/Rent";
import Helpsupport from "../pages/landingpages/Helpsupport";
import ContactUs from "../pages/landingpages/ContactUs";
import Professional from "../pages/landingpages/Professional";
import Gcu from "../pages/landingpages/Gcu";
import GcuDetail from "../pages/landingpages/GcuDetail";
import HelpSupportDetail from "../components/MainLandingComp/helpSupport/HelpSupportDetail";
import Tickets from "../pages/admindashboard/Tickets";
import Reports from "../pages/admindashboard/Reports";
import Marketing from "../pages/admindashboard/Marketing";
import CustomerReports from "../pages/admindashboard/CustomerReports";
import GlobelReports from "../pages/admindashboard/GlobelReports";
import BroadCast from "../pages/admindashboard/BroadCast";
import ManageRoles from "../pages/admindashboard/ManageRoles";
// import Management from '../components/MainLandingComp/rent/Management';
import Managements from "../pages/admindashboard/Management";
import Profile from "../pages/admindashboard/Profile";
import Forgot from "../pages/authpages/Forgot";
import RentalIndex from "../components/AdminComponents/manageUser/vihicalRenterSteps/RentalIndex";
import TicketDetail from "../components/AdminComponents/CustomerSupports/DetailTicket/TicketDetail";
import ReportDetail from "../components/AdminComponents/CustomerSupports/DetailReport";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<Landing />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/helpsupport" element={<Helpsupport />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/gcu" element={<Gcu />} />
        <Route path="/gcuDetail" element={<GcuDetail />} />
        <Route path="/helpsupport_detail" element={<HelpSupportDetail />} />
      </Route>

      {/* Dashboard */}
      <Route element={<AuthProvider />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicalRenters" element={<UserManagement />} />
        <Route path="/vehicalRenters/detail/:id" element={<RentalIndex />} />
        <Route path="/vehicalOwner" element={<UserManagement />} />
        <Route path="/customerRenter" element={<CustomerReports />} />
        <Route path="/customerOwner" element={<CustomerReports />} />
        <Route path="/globelRenter" element={<GlobelReports />} />
        <Route path="/globelOwner" element={<GlobelReports />} />
        <Route path="/broadcast" element={<BroadCast />} />
        <Route path="/manageRole" element={<ManageRoles />} />
        <Route path="/management" element={<Managements />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/ticket" element={<Tickets />} />
        <Route path="/ticket-detail/:id" element={<TicketDetail />} />
        <Route path="/report" element={<Reports />} />
        <Route path="/report-detail/:id" element={<ReportDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
