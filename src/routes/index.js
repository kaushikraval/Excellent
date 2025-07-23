import React, { useEffect } from 'react';
import { createPopper } from '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'react-phone-input-2/lib/style.css';
import 'react-range-slider-input/dist/style.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../Assets/css/Style.scss';
import Footer from '../Components/Global/Footer';
import Header from '../Components/Global/Header';
import PrivateRouter from './PrivateRouter';
import ContactUs2 from '../Components/ContactUs2';
import MyAccount2 from '../Components/Account/MyAccount2';
import DiamondDetail from 'Components/Diamond/DiamondDetail';
import Home from 'Components/Home';
import Diamond from 'Components/Diamond/Diamond';
import Compare from './../Components/Diamond/Compare';
import WatchListPage from './../Components/Diamond/WatchListPage';
import ShoppingCart from 'Components/ShoppingCart';
import ChangePassword from 'Components/Account/ChangePassword';
import MyOrders from 'Components/Account/MyOrders';
import OrderDetail from 'Components/Account/OrderDetail';
import Jewellery from './../Components/Jewellery/Jewellery';
const Login = React.lazy(() => import('./../Components/Login'));
const Signup = React.lazy(() => import('./../Components/Signup'));
// const Home = React.lazy(() => import('./../Components/Home'));
// const Diamond = React.lazy(() => import('./../Components/Diamond/Diamond'));
/* const DiamondDetail = React.lazy(() =>
  import('./../Components/Diamond/DiamondDetail'),
); */
// const Compare = React.lazy(() => import('./../Components/Diamond/Compare'));
// const WatchListPage = React.lazy(() =>
//   import('./../Components/Diamond/WatchListPage'),
// );
// const ShoppingCart = React.lazy(() => import('./../Components/ShoppingCart'));
// const Jewellery = React.lazy(() =>
//   import('./../Components/Jewellery/Jewellery'),
// );
const JewelleryDetail = React.lazy(() =>
  import('./../Components/Jewellery/JewelleryDetail'),
);
const ChooseDiamond = React.lazy(() =>
  import('./../Components/CustomizeRing/ChooseDiamond'),
);
const ChooseDiamondDetail = React.lazy(() =>
  import('../Components/CustomizeRing/ChooseDiamondDetail'),
);
const ChooseYourSetting = React.lazy(() =>
  import('../Components/CustomizeRing/ChooseYourSetting'),
);
const ChooseYourSettingDetail = React.lazy(() =>
  import('../Components/CustomizeRing/ChooseYourSettingDetail'),
);
const ViewCompleted = React.lazy(() =>
  import('../Components/CustomizeRing/ViewCompleted'),
);
const MyAccont = React.lazy(() => import('../Components/Account/MyAccont'));
// const ChangePassword = React.lazy(() =>
//   import('../Components/Account/ChangePassword'),
// );
// const MyOrders = React.lazy(() => import('../Components/Account/MyOrders'));
// const OrderDetail = React.lazy(() =>
//   import('../Components/Account/OrderDetail'),
// );
const TrackMyOrder = React.lazy(() =>
  import('../Components/Account/TrackMyOrder'),
);
const PurchaseHistory = React.lazy(() =>
  import('../Components/Account/PurchaseHistory'),
);
const MyHoldList = React.lazy(() => import('../Components/Account/MyHoldList'));
const ContactUs = React.lazy(() => import('./../Components/ContactUs'));
const Faq = React.lazy(() => import('../Components/Faq'));
const Education = React.lazy(() =>
  import('./../Components/Education/Education'),
);
const FourCsDiamonds = React.lazy(() =>
  import('Components/Education/FourCsDiamonds'),
);
const LabGrownDiamonds = React.lazy(() =>
  import('Components/Education/LabGrownDiamonds'),
);
const LabGrownDiamondsCreated = React.lazy(() =>
  import('Components/Education/LabGrownDiamondsCreated'),
);
const ChemicalVaporDeposition = React.lazy(() =>
  import('Components/Education/ChemicalVaporDeposition'),
);
const HighPressureHighTemperature = React.lazy(() =>
  import('Components/Education/HighPressureHighTemperature'),
);
const CVDvsHPHT = React.lazy(() => import('Components/Education/CVDvsHPHT'));
const NaturalvsLabGrown = React.lazy(() =>
  import('Components/Education/NaturalvsLabGrown'),
);
const ChoosingEngagementRing = React.lazy(() =>
  import('Components/Education/ChoosingEngagementRing'),
);
const CaringForLabGrownJewelry = React.lazy(() =>
  import('Components/Education/CaringForLabGrownJewelry'),
);
const AdvantagesofLabGrown = React.lazy(() =>
  import('Components/Education/AdvantagesofLabGrown'),
);
const DiamondWeightChats = React.lazy(() =>
  import('Components/Education/DiamondWeightChart/DiamondWeightChats'),
);
const About = React.lazy(() => import('./../Components/About'));
const TermsAndConditions = React.lazy(() =>
  import('../Components/Policies/TermsAndConditions'),
);
const ShippingPolicy = React.lazy(() =>
  import('../Components/Policies/ShippingPolicy'),
);
const PrivacyPolicy = React.lazy(() =>
  import('../Components/Policies/PrivacyPolicy'),
);
const ReturnAndRefundPolicy = React.lazy(() =>
  import('../Components/Policies/ReturnAndRefundPolicy'),
);

export default function Index() {
  const popcorn = document.querySelector('#popcorn');
  const tooltip = document.querySelector('#tooltip');
  createPopper(popcorn, tooltip, {
    placement: 'top',
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/diamond-detail" element={<DiamondDetail />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/watchlist" element={<WatchListPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/jewellery-detail" element={<JewelleryDetail />} />
        <Route path="/choose-diamond" element={<ChooseDiamond />} />
        <Route
          path="/choose-diamond-detail"
          element={<ChooseDiamondDetail />}
        />
        <Route path="/choose-your-setting" element={<ChooseYourSetting />} />
        <Route
          path="/choose-your-setting-detail"
          element={<ChooseYourSettingDetail />}
        />
        <Route path="/view-completed" element={<ViewCompleted />} />
        <Route
          path="/edit-profile"
          element={
            <PrivateRouter>
              <MyAccount2 />
            </PrivateRouter>
          }
        />
        <Route
          path="/change-password"
          element={
            <PrivateRouter>
              <ChangePassword />
            </PrivateRouter>
          }
        />
        <Route
          path="/my-orders"
          element={
            <PrivateRouter>
              <MyOrders />
            </PrivateRouter>
          }
        />
        <Route
          path="/order-detail"
          element={
            <PrivateRouter>
              <OrderDetail />
            </PrivateRouter>
          }
        />
        <Route path="/tracker-my-order" element={<TrackMyOrder />} />
        <Route path="/purchase-history" element={<PurchaseHistory />} />
        <Route
          path="/my-hold-list"
          element={
            <PrivateRouter>
              <MyHoldList />
            </PrivateRouter>
          }
        />
        <Route path="/contact-us" element={<ContactUs2 />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education/4cs-diamond" element={<FourCsDiamonds />} />
        <Route
          path="/education/what-are-lab-grown-diamonds"
          element={<LabGrownDiamonds />}
        />
        <Route
          path="/education/how-are-lab-grown-diamonds-created"
          element={<LabGrownDiamondsCreated />}
        />
        <Route
          path="/education/chemical-vapor-deposition"
          element={<ChemicalVaporDeposition />}
        />
        <Route
          path="/education/cvd-diamond-vs-hpht-diamond"
          element={<CVDvsHPHT />}
        />
        <Route
          path="/education/natural-diamond-vs-lab-grown-diamond"
          element={<NaturalvsLabGrown />}
        />
        <Route
          path="/education/advantages-of-lab-grown-diamonds"
          element={<AdvantagesofLabGrown />}
        />
        <Route
          path="/education/choosing-the-perfect-engagement-ring"
          element={<ChoosingEngagementRing />}
        />
        <Route
          path="/education/caring-for-your-lab-grown-diamond-jewelry"
          element={<CaringForLabGrownJewelry />}
        />
        <Route
          path="/education/high-pressure-high-temperature"
          element={<HighPressureHighTemperature />}
        />
        <Route
          path="/education/diamond-mm-to-carat-weight-chats"
          element={<DiamondWeightChats />}
        />

        <Route path="/about-us" element={<About />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/return-and-refund-policy"
          element={<ReturnAndRefundPolicy />}
        />
      </Routes>
      <Footer />
      {/* </Suspense> */}
    </>
  );
}
