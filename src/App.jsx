import 'loaders.css/src/animations/line-scale.scss';
import React, { lazy, Suspense } from "react";
import Loader from 'react-loaders';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/user/Dashboard";
import ThemeProvider from "./theme";


const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./layouts/Layout"));
const AdminLayout = lazy(() => import("./layouts/admin/Layout"));

const UserLayout = lazy(() => import("./layouts/user/Layout"));
const MyOrders = lazy(() => import("./pages/user/MyOrders"));
const MyAccount = lazy(() => import("./pages/user/MyAccount"));
const PrescriptionPage = lazy(() => import("./pages/user/prescription/PrescriptionMain"));
const UploadPrescriptions = lazy(() => import("./pages/user/prescription/UploadPrescriptions"));
const Neurology = lazy(() => import("./pages/user/medicine/Neurology"));
const Ent = lazy(() => import("./pages/user/medicine/Ent"));
const Eye = lazy(() => import("./pages/user/medicine/Eye"));
const Heart = lazy(() => import("./pages/user/medicine/Heart"));
const HealthDevices = lazy(() => import("./pages/user/medicine/HealthDevices"));
const BabyItems = lazy(() => import("./pages/user/medicine/BabyItems"));
const Vitamins = lazy(() => import("./pages/user/medicine/Vitamins"));
const SkinCare = lazy(() => import("./pages/user/medicine/SkinCare"));
const Firstaid = lazy(() => import("./pages/user/medicine/Firstaid"));
const Muscels = lazy(() => import("./pages/user/medicine/Muscels"));
const BuyItems = lazy(() => import("./pages/user/Buy/BuyItems"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AddItems = lazy(() => import("./pages/admin/AddItems"));
const Customers = lazy(() => import("./pages/admin/Customers"));
const Settings = lazy(() => import("./pages/admin/Settings"));
const Orders = lazy(() => import("./pages/admin/Orders"));









const Error1 = lazy(() => import("./components/error/Error1"));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense
          fallback={
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
              <Loader type="line-scale" color="#0070C0" active />
            </div>
          }
        >
          <Routes>
            <Route path="/*" element={<Error1 />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              
            </Route>

          {/* <!-- ========== User  ========== --> */}
            <Route path="user" element={<UserLayout />}>
              
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="prescription" element={<PrescriptionPage />} />
            <Route path="prescription/upload" element={<UploadPrescriptions />} />
            <Route path="medicine/nurology" element={<Neurology />} />
            <Route path="medicine/ent" element={<Ent />} />
            <Route path="medicine/eye" element={<Eye />} />
            <Route path="medicine/heart" element={<Heart />} />
            <Route path="medicine/health-devices" element={<HealthDevices />} />
            <Route path="medicine/baby-items" element={<BabyItems />} />
            <Route path="medicine/vitamin" element={<Vitamins />} />
            <Route path="medicine/skincare" element={<SkinCare />} />
            <Route path="medicine/firstaid" element={<Firstaid/>} />
            <Route path="medicine/muscels" element={<Muscels/>} />
            <Route path="buy-now" element={<BuyItems/>} />

          

            </Route>
          {/* <!-- ========== Admin \========== --> */}

          <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="add-items" element={<AddItems />} />
          <Route path="view/customers" element={<Customers />} />
          <Route path="settings" element={<Settings />} />
          <Route path="orders" element={<Orders />} />





          </Route>

          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
