import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Container, Dropdown, Form, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoDark from '../../Assets/Images/logo-dark.svg';
import LogoLight from '../../Assets/Images/logo-white.svg';
import LogoMobile from '../../Assets/Images/logo-mobile.svg';
import AddCart from '../../Assets/Images/cart.svg';
import WishList from '../../Assets/Images/wishliat.svg';
import UserImg from '../../Assets/Images/user.png';
import DownArrow from '../../Assets/Images/down-arrow.svg';
import ReactMegaMenu from 'react-mega-menu';
import NoImageAvailable from '../../Assets/Images/notfound2.png';
import { DiamondHeaderMenu } from './DiamondHeaderMenu';
import { JewelleryHeaderMenu } from './JewelleryHeaderMenu';
import {
  initialValuesForDiamondSearch,
  getPayload,
} from './../../Helper/CommonHelper';
import { setDiamondType } from 'Components/Redux/reducers/offlineList.slice';
import { logout, setIsLogout } from '../Redux/reducers/auth.slice';
import { getDiamondDetailList } from 'Components/Redux/reducers/common.slice';
import { getWatchStockListCount } from 'Components/Redux/reducers/myAccount.slice';
import {
  setIsFancyColor,
  getCartStockCount,
  setIsModifySearchForDiamond,
  setSearchDiamondSavedData,
} from 'Components/Redux/reducers/dashboard.slice';
import {
  getJewelleryCategoryList,
  getJewelleryBaseMetal,
  getJewelleryParameterListByName,
  setIsModifySearchForJewellery,
  setJewelleryFilterDetailByHeader,
} from 'Components/Redux/reducers/jewellery.slice';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { diamondFilterDetail } = useSelector(({ common }) => common);
  const { userData, isLogin, isLogout } = useSelector(({ auth }) => auth);
  const { totalCart } = useSelector(({ dashboard }) => dashboard);
  const { countOfWatchList } = useSelector(({ myAccount }) => myAccount);
  const { jewelleryCategoryDetail } = useSelector(({ jewellery }) => jewellery);
  const { cartDiamondList, wishDiamondList, jewelleryCartListData } =
    useSelector(({ offlineList }) => offlineList);
  const [navbarHideShow, setNavbarHideShow] = useState(true);
  const [isDiamondDropdownHovered, setIsDiamondDropdownHovered] =
    useState(false);
  const [isJewelleryDropdownHovered, setIsJewelleryDropdownHovered] =
    useState(false);
  const [accountMenu, setAccountMenu] = useState(false);

  const handleDiamondMouseEnter = () => {
    setIsDiamondDropdownHovered(true);
  };
  const handleDiamondMouseLeave = () => {
    setIsDiamondDropdownHovered(false);
  };
  const handleJewelleryMouseEnter = () => {
    setIsJewelleryDropdownHovered(true);
  };

  const handleJewelleryMouseLeave = () => {
    setIsJewelleryDropdownHovered(false);
  };

  const styleConf = {
    menuProps: {
      style: {
        margin: '0',
      },
    },
    contentProps: {
      style: {
        width: '100%',
        padding: '20px',
        position: 'absolute',
        left: '0',
        top: '94px',
        background: '#fff',
        boxShadow: '0 0px 15px 0 rgba(0,0,0,0.1)',
      },
    },
    menuItemProps: {
      style: {
        padding: '0',
      },
    },
    menuItemSelectedProps: {
      style: {
        padding: '0',
      },
    },
    containerProps: {
      style: {
        position: 'inherit',
      },
    },
  };

  useEffect(() => {
    let scrollpos = window.scrollY;
    const header = document.querySelector('header');
    const header_height = header.offsetHeight;
    const add_class_on_scroll = () => header.classList.add('fixed');
    const remove_class_on_scroll = () => header.classList.remove('fixed');
    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;

      if (scrollpos >= header_height) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
      if (scrollpos >= 400) {
        header.classList.add('fixed_header');
      } else {
        header.classList.remove('fixed_header');
      }
    });
  }, []);

  useEffect(() => {
    dispatch(
      getDiamondDetailList(
        'SHAPE, COLOR, CLARITY, CUT, POLISH, SYMMETRY, LAB, FLUROINT, MAKE, FC, FCINTESE, FCOVERTON, GIRDLE, NATURE OF ORG',
      ),
    );
    dispatch(getJewelleryCategoryList());
    dispatch(getJewelleryBaseMetal());
    dispatch(getJewelleryParameterListByName('SHAPE'));
  }, [dispatch]);

  const totalItemInCart = useMemo(() => {
    if (userData?.UserID) {
      return totalCart;
    } else {
      let totalInCart = 0;
      totalInCart += cartDiamondList?.labGrownDiamond.length || 0;
      totalInCart += cartDiamondList?.naturalDiamond.length || 0;
      totalInCart += jewelleryCartListData?.length || 0;
      return totalInCart || 0;
    }
  }, [userData?.UserID, totalCart, cartDiamondList, jewelleryCartListData]);

  const totalItemInWatchList = useMemo(() => {
    if (userData?.UserID) {
      return countOfWatchList;
    } else {
      const totalInCart =
        [
          ...wishDiamondList?.labGrownDiamond,
          ...wishDiamondList?.naturalDiamond,
        ]?.length || 0;
      return totalInCart;
    }
  }, [userData?.UserID, countOfWatchList, wishDiamondList]);

  useEffect(() => {
    if (location.pathname !== '/cart' && userData?.UserID) {
      dispatch(getCartStockCount({ UserID: userData?.UserID }));
    }
  }, [dispatch, userData]);

  useEffect(() => {
    if (location.pathname !== 'watchlist' && userData?.UserID) {
      dispatch(getWatchStockListCount({ UserID: userData?.UserID }));
    }
  }, [dispatch, userData]);

  useEffect(() => {
    if (isLogout) {
      navigate('/login');
      dispatch(setIsLogout(false));
    }
  }, [isLogout, navigate, dispatch]);

  const handleImageError = useCallback(event => {
    event.target.src = NoImageAvailable;
  }, []);

  const educationUrl = [
    '/education',
    '/education/4cs-diamond',
    '/education/what-are-lab-grown-diamonds',
    '/education/how-are-lab-grown-diamonds-created',
    '/education/chemical-vapor-deposition',
    '/education/cvd-diamond-vs-hpht-diamond',
    '/education/natural-diamond-vs-lab-grown-diamond',
    '/education/advantages-of-lab-grown-diamonds',
    '/education/choosing-the-perfect-engagement-ring',
    '/education/caring-for-your-lab-grown-diamond-jewelry',
    '/education/high-pressure-high-temperature',
    '/education/diamond-mm-to-carat-weight-chats',
  ];
  const shapeListForHeader = useMemo(() => {
    const shapeList =
      diamondFilterDetail?.shapeList?.length > 0
        ? diamondFilterDetail?.shapeList.slice(0, 10)
        : [];
    return shapeList;
  }, [diamondFilterDetail]);

  const onDiamondTypeSelected = useCallback(
    (diamondTypeValues, colorTypeValues) => {
      dispatch(setDiamondType(diamondTypeValues));
      dispatch(setIsFancyColor(colorTypeValues));
      let newObj = getPayload({
        ...initialValuesForDiamondSearch,
        diamondType: diamondTypeValues,
        colorType: colorTypeValues,
      });
      dispatch(setSearchDiamondSavedData({ ...newObj }));
      dispatch(setIsModifySearchForDiamond(true));
      navigate('/diamond');
    },
    [dispatch, navigate],
  );

  const onShapeSelectHandler = useCallback(
    (diamondTypeValues, shapeValues) => {
      if (Object.keys(shapeValues)?.length > 0) {
        let newObj = getPayload({
          ...initialValuesForDiamondSearch,
          diamondType: diamondTypeValues,
          colorType: 1,
          shape: shapeValues.MasterTypeValue_Code,
        });
        dispatch(setDiamondType(diamondTypeValues));
        dispatch(setSearchDiamondSavedData({ ...newObj }));
        dispatch(setIsModifySearchForDiamond(true));
        navigate('/diamond');
      }
    },
    [dispatch, navigate],
  );

  const onColorSelectHandler = useCallback(
    (diamondTypeValues, colorValues) => {
      if (colorValues && diamondTypeValues) {
        let newObj = getPayload({
          ...initialValuesForDiamondSearch,
          diamondType: diamondTypeValues,
          colorType: 2,
          fancyColor: [{ label: colorValues, value: colorValues }],
        });
        dispatch(setSearchDiamondSavedData({ ...newObj }));
        dispatch(setIsModifySearchForDiamond(true));
        navigate('/diamond');
      }
    },
    [dispatch, navigate],
  );
  const onJewelleryTypeSelected = useCallback(
    type => {
      if (type?.J_MasterTypeValue_Id) {
        dispatch(
          setJewelleryFilterDetailByHeader({
            type: type.J_MasterTypeValue_Id,
            subType: [],
          }),
        );
        dispatch(setIsModifySearchForJewellery(true));
        navigate('/jewellery');
      }
    },
    [dispatch, navigate],
  );

  const onJewellerySubTypeSelected = useCallback(
    (type, subType) => {
      if (type?.J_MasterTypeValue_Id && subType.J_MasterSubTypeValue_Id) {
        dispatch(
          setJewelleryFilterDetailByHeader({
            type: type.J_MasterTypeValue_Id,
            subType: [subType.J_MasterSubTypeValue_Id],
          }),
        );
        dispatch(setIsModifySearchForJewellery(true));
        navigate('/jewellery');
      }
    },
    [dispatch, navigate],
  );

  // const dataForDiamondHeader = useMemo(() => {
  //   return [
  //     {
  //       label: (
  //         <Link
  //           to="/"
  //           className={location.pathname === '/' ? 'active' : ''}
  //           onClick={() => {
  //             setNavbarHideShow(!navbarHideShow);
  //           }}
  //         >
  //           Home
  //         </Link>
  //       ),
  //       key: 1,
  //     },
  //     {
  //       label: (
  //         <Link
  //           to="/diamond"
  //           className={
  //             location.pathname === '/diamond' ||
  //             location.pathname === '/diamond-detail'
  //               ? 'megamenu_wrapper active'
  //               : 'megamenu_wrapper'
  //           }
  //           onClick={() => {
  //             setNavbarHideShow(!navbarHideShow);
  //           }}
  //         >
  //           Diamonds
  //         </Link>
  //       ),
  //       key: 2,
  //       items: (
  //         <DiamondHeaderMenu
  //           handleImageError={handleImageError}
  //           shapeListForHeader={shapeListForHeader}
  //           onColorSelectHandler={onColorSelectHandler}
  //           onShapeSelectHandler={onShapeSelectHandler}
  //           onDiamondTypeSelected={onDiamondTypeSelected}
  //         />
  //       ),
  //     },
  //     {
  //       label: (
  //         <Link
  //           to="/jewellery"
  //           className={
  //             location.pathname === '/jewellery' ||
  //             location.pathname === '/jewellery-detail'
  //               ? 'megamenu_wrapper active'
  //               : 'megamenu_wrapper'
  //           }
  //           onClick={() => {
  //             setNavbarHideShow(!navbarHideShow);
  //           }}
  //         >
  //           Jewellery
  //         </Link>
  //       ),
  //       key: 3,
  //       items: (
  //         <JewelleryHeaderMenu
  //           jewelleryListForHeader={jewelleryCategoryDetail}
  //           onColorSelectHandler={onColorSelectHandler}
  //           onShapeSelectHandler={onShapeSelectHandler}
  //           onDiamondTypeSelected={onDiamondTypeSelected}
  //         />
  //       ),
  //     },
  //     {
  //       label: (
  //         <Link
  //           to="/contact-us"
  //           className={location.pathname === '/contact-us' ? 'active' : ''}
  //           onClick={() => {
  //             setNavbarHideShow(!navbarHideShow);
  //           }}
  //         >
  //           Contact Us
  //         </Link>
  //       ),
  //       key: 4,
  //     },
  //     {
  //       label: (
  //         <Link
  //           to="/education"
  //           className={educationUrl.includes(location.pathname) ? 'active' : ''}
  //           onClick={() => {
  //             setNavbarHideShow(!navbarHideShow);
  //           }}
  //         >
  //           Education
  //         </Link>
  //       ),
  //       key: 5,
  //     },
  //     {
  //       label: (
  //         <Link
  //           to=""
  //           className={location.pathname === '' ? 'active' : ''}
  //           onClick={() => {
  //             setNavbarHideShow(!navbarHideShow);
  //           }}
  //         >
  //           Events
  //         </Link>
  //       ),
  //       key: 6,
  //     },
  //   ];
  // }, [
  //   location,
  //   navbarHideShow,
  //   handleImageError,
  //   shapeListForHeader,
  //   onColorSelectHandler,
  //   onShapeSelectHandler,
  //   jewelleryCategoryDetail,
  //   onDiamondTypeSelected,
  // ]);

  return (
    <header
      className={
        location.pathname === '/' || location.pathname === '/about-us'
          ? 'header_white'
          : ''
      }
    >
      <Navbar expand="xl">
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={LogoDark} alt="" className="logo_dark" loading="lazy" />
            <img src={LogoLight} alt="" className="logo_white" loading="lazy" />
            <img
              src={LogoMobile}
              alt=""
              className="logo_mobile"
              loading="lazy"
            />
          </Link>
          <Button
            variant="link"
            className={
              navbarHideShow === true
                ? 'navbar-toggler order-last collapsed'
                : 'navbar-toggler order-last'
            }
            onClick={() => setNavbarHideShow(!navbarHideShow)}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar
            id="navbarScroll"
            className={navbarHideShow === true ? 'show' : ''}
          >
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === '/' ? 'active' : ''}
                  onClick={() => setNavbarHideShow(!navbarHideShow)}
                >
                  Home
                </Link>
              </li>
              <li
                className="megamenu_Wrapper"
                onMouseEnter={handleDiamondMouseEnter}
                onMouseLeave={handleDiamondMouseLeave}
              >
                <Link
                  to="/diamond"
                  className={
                    location.pathname === '/diamond' ||
                    location.pathname === '/diamond-detail'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setNavbarHideShow(!navbarHideShow);
                    setIsDiamondDropdownHovered(false);
                  }}
                >
                  Diamonds
                </Link>
                <div className="mobile_toggle_button">
                  <button
                    className="btn_arrow"
                    onClick={() =>
                      setIsDiamondDropdownHovered(!isDiamondDropdownHovered)
                    }
                  >
                    <img src={DownArrow} className="me-0" alt="" />
                  </button>
                </div>
                {isDiamondDropdownHovered && (
                  <div className="megamenu_diamond_wrapper">
                    <DiamondHeaderMenu
                      handleImageError={handleImageError}
                      shapeListForHeader={shapeListForHeader}
                      onColorSelectHandler={onColorSelectHandler}
                      onShapeSelectHandler={onShapeSelectHandler}
                      onDiamondTypeSelected={onDiamondTypeSelected}
                      setNavbarHideShow={setNavbarHideShow}
                      navbarHideShow={navbarHideShow}
                    />
                  </div>
                )}
              </li>
              <li
                className="megamenu_Wrapper"
                onMouseEnter={handleJewelleryMouseEnter}
                onMouseLeave={handleJewelleryMouseLeave}
              >
                <Link
                  to="/jewellery"
                  className={
                    location.pathname === '/jewellery' ||
                    location.pathname === '/jewellery-detail' ||
                    location.pathname === '/choose-diamond' ||
                    location.pathname === '/choose-diamond-detail' ||
                    location.pathname === '/choose-your-setting' ||
                    location.pathname === '/choose-your-setting-detail' ||
                    location.pathname === '/view-completed'
                      ? 'active'
                      : ''
                  }
                  onClick={() => {
                    setNavbarHideShow(!navbarHideShow);
                    setIsJewelleryDropdownHovered(false);
                  }}
                >
                  Jewellery
                </Link>
                <div className="mobile_toggle_button">
                  <button
                    className="btn_arrow"
                    onClick={() =>
                      setIsJewelleryDropdownHovered(!isJewelleryDropdownHovered)
                    }
                  >
                    <img src={DownArrow} className="me-0" alt="" />
                  </button>
                </div>
                {isJewelleryDropdownHovered && (
                  <div className="megamenu_diamond_wrapper">
                    <JewelleryHeaderMenu
                      jewelleryListForHeader={jewelleryCategoryDetail}
                      onJewelleryTypeSelected={onJewelleryTypeSelected}
                      onJewellerySubTypeSelected={onJewellerySubTypeSelected}
                    />
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className={
                    location.pathname === '/contact-us' ? 'active' : ''
                  }
                  onClick={() => setNavbarHideShow(!navbarHideShow)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className={
                    educationUrl.includes(location.pathname) ? 'active' : ''
                  }
                  onClick={() => setNavbarHideShow(!navbarHideShow)}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setNavbarHideShow(!navbarHideShow)}>
                  Events
                </Link>
              </li>
            </ul>
            {/* <ReactMegaMenu
              tolerance={100}
              direction={'BOTTOM'}
              data={dataForDiamondHeader}
              styleConfig={styleConf}
            /> */}
            {/* <ul>
              <li>
                <Link to="/" onClick={() => setNavbarHideShow(!navbarHideShow)}>
                  Color stones
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => setNavbarHideShow(!navbarHideShow)}>
                  Parcel goods
                </Link>
              </li>
            </ul> */}
          </Navbar>
          <div className="right_header_wrap d-flex align-items-center">
            {/* <Form>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form> */}
            <ul className="button_right_wrapper ml20 ">
              <li>
                <Button
                  className="btn_transperent"
                  onClick={() => navigate('/cart')}
                >
                  <img src={AddCart} alt="AddCartIcon" className="icon" />
                  <span>{totalItemInCart}</span>
                </Button>
              </li>
              <li>
                <Button
                  className="btn_transperent"
                  onClick={() => navigate('/watchlist')}
                >
                  <img src={WishList} alt="WishListIcon" className="icon" />
                  <span>{totalItemInWatchList}</span>
                </Button>
              </li>
              {!isLogin ? (
                <>
                  <li className="me-2">
                    <Button
                      variant="primary"
                      className="rounded-pill btn_shadow d-none d-sm-block"
                      size="sm"
                      onClick={() => navigate('/sign-up')}
                    >
                      Sign up
                    </Button>
                  </li>
                  <li className="me-2">
                    <Button
                      variant="outline-primary"
                      className="rounded-pill btn_shadow"
                      size="sm"
                      onClick={() => navigate('/login')}
                    >
                      Sign In
                    </Button>
                  </li>
                </>
              ) : (
                <li>
                  <Dropdown className="user_dropdown">
                    <Dropdown.Toggle
                      variant="link"
                      id="dropdown-basic"
                      onClick={() => setAccountMenu(true)}
                    >
                      <img src={UserImg} alt="" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu show={accountMenu ? true : false}>
                      <Link
                        className="dropdown-item"
                        to="edit-profile"
                        onClick={() => setAccountMenu(false)}
                      >
                        My Account
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/cart"
                        onClick={() => setAccountMenu(false)}
                      >
                        My Cart
                      </Link>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          dispatch(logout({ UserID: userData.UserID }));
                          setAccountMenu(false);
                        }}
                      >
                        Logout
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              )}
            </ul>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
