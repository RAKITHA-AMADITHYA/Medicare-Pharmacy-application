import 'loaders.css/src/animations/line-scale.scss';
import React, { lazy, Suspense } from "react";
import Loader from 'react-loaders';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/user/Dashboard";
import ThemeProvider from "./theme";

const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./layouts/Layout"));
const UserLayout = lazy(() => import("./layouts/user/Layout"));
const MyOrders = lazy(() => import("./pages/user/MyOrders"));
const MyAccount = lazy(() => import("./pages/user/MyAccount"));
const PrescriptionPage = lazy(() => import("./pages/user/prescription/PrescriptionMain"));
const UploadPrescriptions = lazy(() => import("./pages/user/prescription/UploadPrescriptions"));






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

            <Route path="user" element={<UserLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="prescription" element={<PrescriptionPage />} />
            <Route path="prescription/upload" element={<UploadPrescriptions />} />




            



            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
