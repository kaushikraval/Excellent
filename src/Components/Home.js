import React, { memo, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
// import BannerOne from '../Assets/Images/img2.png';
import BannerOne from '../Assets/Images/banner-video.mp4';
import BannerTwo from '../Assets/Images/banner2.jpg';
import BannerThree from '../Assets/Images/banner3.jpg';
import BannerFour from '../Assets/Images/banner4.jpg';
import VideoPoster from '../Assets/Images/video-poster.jpeg';
import About1 from '../Assets/Images/about2.png';
import DiamondBtn from '../Assets/Images/diamond-btn.svg';
import WeddingRing from '../Assets/Images/rings-wedding.svg';
import Pear from '../Assets/Images/Home/shape/pear.png';
import Round from '../Assets/Images/Home/shape/round.png';
import Heart from '../Assets/Images/Home/shape/heart.png';
import Oval from '../Assets/Images/Home/shape/oval.png';
import Cushion from '../Assets/Images/Home/shape/cushion.png';
import Princess from '../Assets/Images/Home/shape/princess.png';
import Emerald from '../Assets/Images/Home/shape/emerald.png';
import Marquise from '../Assets/Images/Home/shape/marquise.png';
import Radiant from '../Assets/Images/Home/shape/radient.png';
import Asscher from '../Assets/Images/Home/shape/asscher.png';
import Baguette from '../Assets/Images/Home/shape/buggite.png';
import Hexagonal from '../Assets/Images/Home/shape/hexagon.png';
import Jewelary1 from '../Assets/Images/jewelary1.jpg';
import Jewelary2 from '../Assets/Images/jewelary2.jpeg';
import Jewelary3 from '../Assets/Images/jewelary3.jpeg';
import Jewelary4 from '../Assets/Images/jewelary4.jpg';
import Jewelary5 from '../Assets/Images/jewelary5.jpeg';
import Jewelary6 from '../Assets/Images/jewelary6.jpg';
import WhyEcImg1 from '../Assets/Images/why-ec-img1.png';
import WhyEcImg2 from '../Assets/Images/why-ec-img2.png';
import WhyEcImg3 from '../Assets/Images/why-ec-img3.png';
import WhyEcImg4 from '../Assets/Images/why-ec-img4.png';
import WhyEcImg5 from '../Assets/Images/why-ec-img5.png';
import WhyEcImg6 from '../Assets/Images/why-ec-img6.png';
import WhyEcImg7 from '../Assets/Images/why-ec-img7.png';
import WhyEcImg8 from '../Assets/Images/why-ec-img8.png';
import WhyEcImg9 from '../Assets/Images/why-ec-img9.png';
import WhyEcImg10 from '../Assets/Images/why-ec-img10.png';
import DiamondProcess1 from '../Assets/Images/process/d-buy-process1.png';
import DiamondProcess2 from '../Assets/Images/process/d-buy-process2.png';
import DiamondProcess3 from '../Assets/Images/process/d-buy-process3.png';
import DiamondProcess4 from '../Assets/Images/process/d-buy-process4.png';
import DiamondProcess5 from '../Assets/Images/process/d-buy-process5.png';
import DiamondProcess6 from '../Assets/Images/process/d-buy-process6.png';
import DiamondProcess7 from '../Assets/Images/process/d-buy-process7.png';
import DiamondProcess8 from '../Assets/Images/process/d-buy-process8.png';
import JewelaryProcess1 from '../Assets/Images/process/choose-diamond.png';
import JewelaryProcess2 from '../Assets/Images/process/choose-setting.png';
import JewelaryProcess3 from '../Assets/Images/process/add-to-cart.png';
import JewelaryProcess4 from '../Assets/Images/process/we-accept-order.png';
import JewelaryProcess5 from '../Assets/Images/process/we-send-invoice.png';
import JewelaryProcess6 from '../Assets/Images/process/you-pay-invoice.png';
import JewelaryProcess7 from '../Assets/Images/process/we-prepare-design.png';
import JewelaryProcess8 from '../Assets/Images/process/you-confirm-design.png';
import JewelaryProcess9 from '../Assets/Images/process/we-finish-jewellery.png';
import JewelaryProcess10 from '../Assets/Images/process/quality-check-and-video.png';
import JewelaryProcess11 from '../Assets/Images/process/you-confirm-jewellery.png';
import JewelaryProcess12 from '../Assets/Images/process/ship-and-provide-tracking.png';
import VideoBg from '../Assets/Images/video-bg.png';
import ExcellentDiamondVideo from '../Assets/Images/excellent_diamond_video.mp4';
import VideoBtn from '../Assets/Images/video-btn.svg';
import Globe from '../Assets/Images/globe.svg';
import Diamond from '../Assets/Images/diamond.svg';
import Money from '../Assets/Images/money.svg';
import Find from '../Assets/Images/find.svg';
import Charity1 from '../Assets/Images/charity1.jpg';
import Charity2 from '../Assets/Images/charity2.jpg';
import Charity3 from '../Assets/Images/charity3.jpg';
import Charity4 from '../Assets/Images/charity4.jpg';
import GooglePlay from '../Assets/Images/google-play.png';
import AppStore from '../Assets/Images/app-store.png';
import AppSS from '../Assets/Images/app-ss.png';
import Christopher from '../Assets/Images/testimonial/Christopher.png';
import ChristopherDiamond from '../Assets/Images/testimonial/ChristopherDiamond.png';
import DavinHasser from '../Assets/Images/testimonial/DavinHasser.png';
import DavinHasserDiamonds from '../Assets/Images/testimonial/DavinHasserDiamonds.png';
import Emily from '../Assets/Images/testimonial/Emily.png';
import EmilyDiamond from '../Assets/Images/testimonial/EmilyDiamond.png';
import jason from '../Assets/Images/testimonial/jason.png';
import JasonDiamond from '../Assets/Images/testimonial/JasonDiamond.png';
import Jessica from '../Assets/Images/testimonial/Jessica.png';
import JessicaJewellery from '../Assets/Images/testimonial/JessicaJewellery.png';
import JohnRogers from '../Assets/Images/testimonial/JohnRogers.png';
import JohnRogersRings from '../Assets/Images/testimonial/JohnRogersRings.png';
import Natalia from '../Assets/Images/testimonial/Natalia.png';
import NataliaJ from '../Assets/Images/testimonial/NataliaJ.png';
import Riyana from '../Assets/Images/testimonial/Riyana.png';
import RiyanaRing from '../Assets/Images/testimonial/RiyanaRing.png';
import SimonHong from '../Assets/Images/testimonial/SimonHong.png';
import SimonHongJewellery from '../Assets/Images/testimonial/SimonHongJewellery.png';
import Sophia from '../Assets/Images/testimonial/Sophia.png';
import SophiaEarrings from '../Assets/Images/testimonial/SophiaEarrings.png';
import Stewart from '../Assets/Images/testimonial/Stewart.png';
import StewartRing from '../Assets/Images/testimonial/StewartRing.png';
import StuartParodi from '../Assets/Images/testimonial/StuartParodi.png';
import StuartParodiJewellery from '../Assets/Images/testimonial/StuartParodiJewellery.png';
import Unaiza from '../Assets/Images/testimonial/Unaiza.png';
import UnaizaEarrings from '../Assets/Images/testimonial/UnaizaEarrings.png';
import Start from '../Assets/Images/star.svg';
import { Accordion, Button, Col, Container, Modal, Row } from 'react-bootstrap';
import SVGInject from '@iconfu/svg-inject';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QuickSearchDiamond from './QuickSearchDiamond';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const DiamondInquiry = React.lazy(() => import('./DiamondInquiry.js'));

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const { diamondFilterDetail } = useSelector(({ common }) => common);
  const { jewelleryCategoryDetail, jewelleryBaseMetal } = useSelector(
    ({ jewellery }) => jewellery,
  );
  const { countryList } = useSelector(({ dashboard }) => dashboard);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [minimise, setMinimise] = useState(true);
  const targetRef = useRef(null);
  const scrollToElement = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  useEffect(() => {
    SVGInject(document.querySelectorAll('img.injectable'));
  }, []);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    swipeToSlide: true,
    centerPadding: '60px',
    slidesToShow: 9,
    speed: 500,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1551,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main>
      <section className="banner_wrapper mt_header_height">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
          modules={[Navigation, EffectFade]}
          navigation={true}
          effect={'fade'}
          loop={true}
        >
          <SwiperSlide>
            <div className="banner_slide video_slide">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-100"
                preload="none"
                poster={VideoPoster}
              >
                <source src={BannerOne} type="video/mp4" />
              </video>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_slide">
              <img src={BannerTwo} alt="Bannerimage" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_slide">
              <img src={BannerThree} alt="Bannerimage" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_slide">
              <img src={BannerFour} alt="Bannerimage" loading="lazy" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="home_two_wrapper pt80 pb60 pt70-xl pt50-sm pb50-sm pb30-xs">
        <Container fluid className="p0">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="home_two_img">
                <img src={About1} alt="" loading="lazy" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="home_two_text">
                <h2 className="mb35">
                  <span>One stop solution</span> for all your lab grown diamonds
                  needs
                </h2>
                <div className="button_group diamond_button_group">
                  <Button
                    variant="primary"
                    className="rounded-pill btn_shadow small_padding mr10 mr0-xs"
                    onClick={() => navigate('/diamond')}
                  >
                    <img src={DiamondBtn} alt="" loading="lazy" /> Buy Diamond
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="rounded-pill btn_shadow small_padding mr10 mr0-xs"
                    onClick={() => navigate('/jewellery')}
                  >
                    <img src={WeddingRing} alt="" loading="lazy" />
                    Buy Jewellery
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="rounded-pill btn_shadow small_padding mr10 mr0-xs"
                    onClick={scrollToElement}
                  >
                    Share Your Demand
                  </Button>
                  {/*  <Button
                    variant="outline-primary"
                    className="rounded-pill btn_shadow medium_padding mr15 mr0-xs"
                    onClick={() => navigate('/choose-diamond')}
                  >
                    <img src={WeddingRing} alt="" /> Customise Jewellery
                  </Button> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="diamond_shape_wrapper pt60 pb100 pb80-xl pt90-xs">
        <Container>
          <div className="text-center title_wrapper pb40 pb20-lg">
            <h2 className="mb30">
              Buy <span>Diamonds</span> by Shape
            </h2>
            <Button
              variant="primary"
              className="rounded-pill btn_shadow medium_padding mr15"
              onClick={() => navigate('/diamond')}
            >
              View All
            </Button>
          </div>
        </Container>
        <div className="diamond_slider_wrapper">
          {/* <Swiper
            navigation={true}
            // loop={true}
            modules={[Navigation, Autoplay]}
            slidesPerView={9}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              380: {
                slidesPerView: 2.5,
              },
              575: {
                slidesPerView: 3,
              },
              720: {
                slidesPerView: 4,
              },
              850: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
              1200: {
                slidesPerView: 7,
              },
              1551: {
                slidesPerView: 9,
              },
            }}
            className="DiamondSlider"
          >
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Round} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Round</h5>
                  <p>Classic, versatile, and maximizes brilliance</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Oval} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Oval</h5>
                  <p>
                    Modern and brilliant with a flattering, elongating effect
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Pear} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Pear</h5>
                  <p>Combines the brilliance of a round and the elegance</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Radiant} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Radiant</h5>
                  <p>Combines brilliance and elegance</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Emerald} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Emerald</h5>
                  <p>Emphasizes clarity and elegant sophistication</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Princess} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Princess</h5>
                  <p>Square , modern, and stunningly sparkles</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Cushion} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Cushion</h5>
                  <p>
                    Soft edges Square Or Elongated, balances brilliance and fire
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Heart} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Heart</h5>
                  <p>Symbolic and romantic, with a distinctive heart shape</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Marquise} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Marquise</h5>
                  <p>Long and narrow, creates an elegant Look</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Asscher} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Asscher</h5>
                  <p>Creating a captivating, vintage-inspired look</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Baguette} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Baguette</h5>
                  <p>Elegance in Lines, Unveil Timeless Sophistication</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img src={Hexagonal} alt="" />
                </div>
                <div className="shape_text text-center">
                  <h5>Hexagonal</h5>
                  <p>Harmony, Precision Meets Exquisite Brilliance</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper> */}
          <Slider {...settings}>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Round}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Round</h5>
                  <p>Classic, versatile, and maximizes brilliance</p>
                </div>
              </div>
            </div>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Oval}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Oval</h5>
                  <p>
                    Modern and brilliant with a flattering, elongating effect
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Pear}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Pear</h5>
                  <p>Combines the brilliance of a round and the elegance</p>
                </div>
              </div>
            </div>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Radiant}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Radiant</h5>
                  <p>Combines brilliance and elegance</p>
                </div>
              </div>
            </div>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Emerald}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Emerald</h5>
                  <p>Emphasizes clarity and elegant sophistication</p>
                </div>
              </div>
            </div>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Princess}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Princess</h5>
                  <p>Square , modern, and stunningly sparkles</p>
                </div>
              </div>
            </div>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Cushion}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Cushion</h5>
                  <p>
                    Soft edges Square Or Elongated, balances brilliance and fire
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Heart}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Heart</h5>
                  <p>Symbolic and romantic, with a distinctive heart shape</p>
                </div>
              </div>
            </div>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Marquise}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Marquise</h5>
                  <p>Long and narrow, creates an elegant Look</p>
                </div>
              </div>
            </div>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Asscher}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Asscher</h5>
                  <p>Creating a captivating, vintage-inspired look</p>
                </div>
              </div>
            </div>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Baguette}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Baguette</h5>
                  <p>Elegance in Lines, Unveil Timeless Sophistication</p>
                </div>
              </div>
            </div>
            <div>
              <div className="shape_slide_wrapper">
                <div className="shape_img">
                  <img
                    src={Hexagonal}
                    alt=""
                    loading="lazy"
                    width={215}
                    height={215}
                  />
                </div>
                <div className="shape_text text-center">
                  <h5>Hexagonal</h5>
                  <p>Harmony, Precision Meets Exquisite Brilliance</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="quick_search_diamond pb80 pb70-xl pb50-sm">
        <Container>
          <div className="text-center mb30">
            <h5 className="text-uppercase">Quick search diamond</h5>
            <span
              className="text_primary cursor_pointer"
              onClick={() => setMinimise(!minimise)}
            >
              {minimise ? 'Minimise' : 'Maximise'}
            </span>
          </div>
          {minimise && (
            <div className="quick_search_box">
              <QuickSearchDiamond diamondFilterDetail={diamondFilterDetail} />
            </div>
          )}
        </Container>
      </section>

      <section className="buy_diamond_jewelary">
        <Container>
          <h2 className="text-center mb50 mb30-sm">
            Buy <span>Diamonds</span> Jewellery
          </h2>
          <Row className="g-2">
            <Col md={4} xs={6}>
              <div className="jewellery_category_wrapper">
                <div className="jewellery_category box1">
                  <div className="jewellery_cat_img_wrap">
                    <img src={Jewelary1} alt="" loading="lazy" />
                  </div>
                  <div className="back_box_wrap back-box1">
                    <span>Bracelet</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="jewellery_category_wrapper">
                <div className="jewellery_category box2">
                  <div className="jewellery_cat_img_wrap">
                    <img src={Jewelary2} alt="" loading="lazy" />
                  </div>
                  <div className="back_box_wrap back-box2">
                    <span>Necklace</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="jewellery_category_wrapper">
                <div className="jewellery_category box3">
                  <div className="jewellery_cat_img_wrap">
                    <img src={Jewelary4} alt="" loading="lazy" />
                  </div>
                  <div className="back_box_wrap back-box3">
                    <span>Earrings</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="jewellery_category_wrapper">
                <div className="jewellery_category box4">
                  <div className="jewellery_cat_img_wrap">
                    <img src={Jewelary3} alt="" loading="lazy" />
                  </div>
                  <div className="back_box_wrap back-box4">
                    <span>Ring</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="jewellery_category_wrapper">
                <div className="jewellery_category box5">
                  <div className="jewellery_cat_img_wrap">
                    <img src={Jewelary6} alt="" loading="lazy" />
                  </div>
                  <div className="back_box_wrap back-box5">
                    <span>Watch</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="jewellery_category_wrapper">
                <div className="jewellery_category box6">
                  <div className="jewellery_cat_img_wrap">
                    <img src={Jewelary5} alt="" loading="lazy" />
                  </div>
                  <div className="back_box_wrap back-box6">
                    <span>Pandant</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* <Row className="g-0">
            <Col md={4} xs={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary1} alt="" loading="lazy" />
                </div>
                <div className="category_name">
                  <h6>Bracelet</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary2} alt="" loading="lazy" />
                </div>
                <div className="category_name">
                  <h6>Necklace</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary4} alt="" loading="lazy" />
                </div>
                <div className="category_name">
                  <h6>Earrings</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary3} alt="" loading="lazy" />
                </div>
                <div className="category_name">
                  <h6>Ring</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary6} alt="" loading="lazy" />
                </div>
                <div className="category_name">
                  <h6>watch</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="jewelary_category_box">
                <div className="jewelary_category_img">
                  <img src={Jewelary5} alt="" loading="lazy" />
                </div>
                <div className="category_name">
                  <h6>Pandant</h6>
                </div>
                <div className="view_btn">
                  <Button
                    variant="light"
                    className="rounded"
                    onClick={() => navigate('/jewellery')}
                  >
                    View All <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </section>

      <section className="why_choose_us pt80 pb100 mt110 mt80-xl mt50-sm mt50-sm pt50-xl pt20-lg pt50-md">
        <Container>
          <h2 className="text-center pb100 mb0 pb100-xl pb50-md">
            Why Choose <span className="d-block">Excellent Corporation?</span>
          </h2>
          {/* <div className="why_choose_slider_wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={50}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                991: {
                  slidesPerView: 3,
                },
              }}
              className="why_choose_slider"
            >
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img className="mb20" src={LargestIcon} alt="" />
                    <h4 className="mb30">Largest</h4>
                  </div>
                  <ul>
                    <li>Tens of thousands of members</li>
                    <li>Over 1.8M diamonds & jewellery</li>
                    <li>99 countries</li>
                    <li>Secure payments</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide pt35 most_trusted">
                  <div className="text-center">
                    <img className="mb20" src={MostTrustedIcon} alt="" />
                    <h4 className="mb30">Most Trusted</h4>
                  </div>
                  <ul>
                    <li>Secure network</li>
                    <li>Verified buyers and suppliers</li>
                    <li>Established in 1976</li>
                    <li>Secure payments</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img className="mb20" src={CompetitiveIcon} alt="" />
                    <h4 className="mb30">Competitive</h4>
                  </div>
                  <ul>
                    <li>Source at the best prices</li>
                    <li>No commission or transaction fees</li>
                    <li>Real-time pricing info with Excellent Price List</li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div> */}
          <div className="why_choose_slider_wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={50}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                991: {
                  slidesPerView: 3,
                },
              }}
              className="why_choose_slider"
            >
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img
                      className="mb20"
                      src={WhyEcImg1}
                      alt=""
                      loading="lazy"
                    />
                    <h4 className="mb30 mb15-xl">Extensive Inventory</h4>
                  </div>
                  <ul>
                    <li>100,000+ IGI and GIA certified Lab Grown Diamonds.</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide pt35 most_trusted">
                  <div className="text-center">
                    <img
                      className="mb20"
                      src={WhyEcImg2}
                      alt=""
                      loading="lazy"
                    />
                    <h4 className="mb30 mb15-xl">Exceptional Quality</h4>
                  </div>
                  <ul>
                    <li>
                      Committed to delivering diamonds of unparalleled quality.
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img
                      className="mb20"
                      src={WhyEcImg3}
                      alt=""
                      loading="lazy"
                    />
                    <h4 className="mb30 mb15-xl">Competitive Pricing</h4>
                  </div>
                  <ul>
                    <li>
                      Offering competitive prices to ensure value for our
                      clients.
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img
                      className="mb20"
                      src={WhyEcImg4}
                      alt=""
                      loading="lazy"
                    />
                    <h4 className="mb30 mb15-xl">Fast Delivery Gloabally</h4>
                  </div>
                  <ul>
                    <li>Ensuring fast and efficient delivery services.</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img
                      className="mb20"
                      src={WhyEcImg5}
                      alt=""
                      loading="lazy"
                    />
                    <h4 className="mb30 mb15-xl">Excellent Customer Support</h4>
                  </div>
                  <ul>
                    <li>
                      Providing dedicated and exceptional customer service.
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img
                      className="mb20"
                      src={WhyEcImg6}
                      alt=""
                      loading="lazy"
                    />
                    <h4 className="mb30 mb15-xl">Expert Team</h4>
                  </div>
                  <ul>
                    <li>
                      A highly skilled team of experts across all departments.
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img
                      className="mb20"
                      src={WhyEcImg7}
                      alt=""
                      loading="lazy"
                    />
                    <h4 className="mb30 mb15-xl">Diamond Growing Lab</h4>
                  </div>
                  <ul>
                    <li>
                      Boasting our own CVD Type 2A growing/manufacturing unit
                      and a cutting-edge R&D center.
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img
                      className="mb20"
                      src={WhyEcImg8}
                      alt=""
                      loading="lazy"
                    />
                    <h4 className="mb30 mb15-xl">Multiple Payment Methods </h4>
                  </div>
                  <ul>
                    <li>Offering flexibility with various payment options.</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img
                      className="mb20"
                      src={WhyEcImg9}
                      alt=""
                      loading="lazy"
                    />
                    <h4 className="mb30 mb15-xl">Global Stock</h4>
                  </div>
                  <ul>
                    <li>Maintaining stock in India, Hong Kong, USA</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="why_choose_slide">
                  <div className="text-center">
                    <img
                      className="mb20"
                      src={WhyEcImg10}
                      alt=""
                      loading="lazy"
                    />
                    <h4 className="mb30 mb15-xl">
                      Customization Possibilities
                    </h4>
                  </div>
                  <ul>
                    <li>
                      Offering tailored options for both diamonds and jewelry.
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className="diamond_process pb10">
        <Container>
          <h2 className="mb50 text-center">
            Diamond <span>Buying</span> process
          </h2>
          <div className="diamond_process_slider_wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={90}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 2,
                },
                1080: {
                  slidesPerView: 3,
                },
              }}
              className="diamond_process_slider navigation_center_bottom"
            >
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess1} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Filter Diamond
                    </h3>
                    <p>
                      Explore our extensive inventory with over 10,000 diamonds
                      and effortlessly filter the perfect stone to meet your
                      preferences
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess2} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Select Diamond
                    </h3>
                    <p>
                      Finalize the perfect diamond that meets your criteria and
                      captures your desired brilliance.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess3} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Add to Cart
                    </h3>
                    <p>
                      Seamlessly add your selected diamonds to the cart for a
                      straightforward ordering process.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess4} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Confirm Availability
                    </h3>
                    <p>
                      Our team ensures the availability of your chosen diamonds,
                      confirming a smooth order process.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess5} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Accept Order
                    </h3>
                    <p>
                      Your order is warmly accepted, marking the beginning of
                      our meticulous manufacturing process.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess6} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      You Get Invoice
                    </h3>
                    <p>
                      Receive a detailed invoice for your selected diamonds,
                      simplifying the payment process.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess7} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      You Pay
                    </h3>
                    <p>
                      Complete your order effortlessly by submitting payment
                      through the provided invoice.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={DiamondProcess8} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Ship and Provide Tracking
                    </h3>
                    <p>
                      Your diamonds are shipped promptly, and tracking details
                      are shared for a transparent delivery experience.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className="diamond_process jewelary_process pt120 pb70 pt80-xl pt10-md pt120-sm">
        <Container>
          <h2 className="pb100 pb60-xl text-center pb20-sm">
            Jewelery <span>Buying</span> process
          </h2>
          <div className="diamond_process_slider_wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={90}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 2,
                },
                1080: {
                  slidesPerView: 3,
                },
              }}
              className="diamond_process_slider navigation_center_bottom"
            >
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess1} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Choose Diamond
                    </h3>
                    <p>
                      Explore our dazzling diamond collection to find the
                      perfect match for your preferences.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess2} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Choose Setting
                    </h3>
                    <p>
                      Select a setting that complements and enhances the beauty
                      of your chosen diamond.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess3} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Add to Cart
                    </h3>
                    <p>
                      Easily add your selected items to the cart for a seamless
                      ordering experience.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess4} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Accept Order
                    </h3>
                    <p>
                      Your order is gladly accepted, marking the beginning of
                      the personalized jewelry creation process.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess5} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Send Invoice
                    </h3>
                    <p>
                      An invoice is promptly sent to you for convenient and
                      secure payment processing.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess6} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      You Pay Invoice
                    </h3>
                    <p>
                      Complete your order by submitting payment through the
                      provided invoice.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess7} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Prepare Design
                    </h3>
                    <p>
                      Our skilled team begins crafting and preparing your unique
                      jewelry design.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess8} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      You Confirm Design
                    </h3>
                    <p>
                      Review and confirm the design before our artisans proceed
                      with production.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess9} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Finish Jewellery
                    </h3>
                    <p>
                      Expert artisans bring your approved design to life with
                      meticulous craftsmanship.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess10} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      Quality Check and Video
                    </h3>
                    <p>
                      A comprehensive quality check is performed, and we share a
                      video for your approval.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess11} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      You Confirm Jewellery
                    </h3>
                    <p>
                      Confirm your satisfaction with the finished jewelry,
                      ensuring it meets your expectations.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process_slide">
                  <div className="process_img">
                    <img src={JewelaryProcess12} alt="" loading="lazy" />
                  </div>
                  <div className="process_text">
                    <h3 className="ff_Coral_Lovers text_primary mb10">
                      We Ship and Provide Tracking
                    </h3>
                    <p>
                      Your bespoke jewelry is shipped, and we provide tracking
                      details for a smooth and transparent delivery process.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className="about_video_Wrapper mt150 mb60 mt150-xl mt100-lg mt50-md mb0-md">
        <Container>
          <Row>
            <Col xl={5} lg={6}>
              <div className="about_text_wrapper pt70 pb70 pt40-xl pb40-xl pr30 pt40-lg pb40-lg">
                <h2 className="mb20">
                  All About <span>Excellent Corporation</span>
                </h2>
                <h6 className="mb5">Crafting Brilliance, Shaping Dreams</h6>
                <p className="mb15 fs_16">
                  Immerse yourself in our narrative—where precision meets
                  passion with Perfection and Excellency. Experience the essence
                  of our journey, from exquisite diamonds to timeless jewelry.
                </p>
                <h6 className="mb5">
                  Our profile video unveils the heart of our craftsmanship,
                </h6>
                <p className="mb15 fs_16">
                  Inviting you into a world where every creation tells a story
                  of brilliance, innovation, and elegance, Check it now and know
                  more about us,
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-pill"
                  onClick={() => navigate('/about-us')}
                >
                  Know More
                </Button>
              </div>
            </Col>
            <Col xl={7} lg={6}>
              <div className="video_img">
                <img src={VideoBg} alt="" loading="lazy" />
                <Button variant="link" onClick={handleShow}>
                  <img src={VideoBtn} alt="" loading="lazy" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <DiamondInquiry
        targetRef={targetRef}
        countryList={countryList}
        jewelleryBaseMetal={jewelleryBaseMetal}
        diamondFilterDetail={diamondFilterDetail}
        jewelleryCategoryDetail={jewelleryCategoryDetail}
      />
      <section className="number_wrapper pt100 pt50-lg">
        <Container>
          <Row>
            <Col xl={9}>
              <div className="number_slider_Wrapper">
                <h2 className="text-white text-center mb50">
                  Now on <span>Excellent Corporation</span>
                </h2>
                <div className="number_slider_inner">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={4}
                    spaceBetween={40}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      411: {
                        slidesPerView: 2,
                      },
                      851: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                    }}
                    className="number_slider"
                  >
                    <SwiperSlide>
                      <div className="number_slide text-center">
                        <div className="number_slide_inner">
                          <img
                            src={Globe}
                            className="mb10"
                            alt=""
                            loading="lazy"
                          />
                          <h3>100+</h3>
                          <p>Countries</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="number_slide text-center">
                        <div className="number_slide_inner">
                          <img
                            src={Diamond}
                            className="mb10"
                            alt=""
                            loading="lazy"
                          />
                          <h3>1,547,87</h3>
                          <p>Diamonds & Jewellery pieces</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="number_slide text-center">
                        <div className="number_slide_inner">
                          <img
                            src={Money}
                            className="mb10"
                            alt=""
                            loading="lazy"
                          />
                          <h3>$7,987,124</h3>
                          <p>Value of Listing</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="number_slide text-center">
                        <div className="number_slide_inner">
                          <img
                            src={Find}
                            className="mb10"
                            alt=""
                            loading="lazy"
                          />
                          <h3>98K</h3>
                          <p>Daily Searches</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="text-center mt40">
                  <Button variant="primary" className="rounded-pill">
                    Become a Member
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="video_main_wrapper">
          <video
            loop
            autoPlay
            muted
            playsInline
            preload="none"
            width="100%"
            height="100%"
          >
            <source src={ExcellentDiamondVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="charity_wrapper pb50 pt20 pb0-sm">
        <Container>
          <Row>
            <Col xl={8} lg={7}>
              <div className="charity_slider_wrapper">
                <Swiper
                  navigation={true}
                  loop={true}
                  modules={[Navigation]}
                  slidesPerView={2}
                  spaceBetween={20}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 2,
                    },
                  }}
                  className="charity_slider navigation_center_bottom"
                >
                  <SwiperSlide>
                    <div className="charity_slide">
                      <img src={Charity1} alt="" loading="lazy" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="charity_slide">
                      <img src={Charity2} alt="" loading="lazy" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="charity_slide">
                      <img src={Charity3} alt="" loading="lazy" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="charity_slide">
                      <img src={Charity4} alt="" loading="lazy" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
            <Col xl={4} lg={5}>
              <div className="charty_text_wrapper mt30">
                <h2 className="mb10">
                  We Do <span>Charity</span> Work
                </h2>
                <p>
                  <i>"Sparkling Acts of Compassion"</i>
                </p>
                <p className="mb20">
                  In the intricate tapestry of business, success is interwoven
                  with the golden strands of charity. Beyond crafting diamonds,
                  we sculpt a compassionate world, embodying meaningful
                  philanthropy. Every organization wields the power to create
                  positive ripples, and we're dedicated to embracing our
                  responsibility. Through our initiative, we extend a helping
                  hand to the poor and needy, contributing to a brighter, more
                  compassionate society
                </p>
                <Button variant="primary" className="rounded-pill" size="sm">
                  Know More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="app_wrapper pt50 pb50">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="order-2 order-lg-1">
              <div className="app_text_wrapper">
                <div className="app_text_wrapper_inner">
                  <h2>
                    Excellent Mobile App{' '}
                    <span className="d-block">
                      Diamonds and Jewellery at Your Fingertips
                    </span>
                  </h2>
                  <ul className="mb30">
                    <li>
                      Elevate your Diamond and jewelry Buying experience with
                      our Powerful mobile app!
                    </li>
                    <li>
                      Unleash the power of exquisite diamonds and jewelry.
                    </li>
                    <li>
                      Right at your fingertips. Seamlessly browse, customize,
                      and discover exclusive features.
                    </li>
                    <li>Elevate your style effortlessly.</li>
                    <li>
                      Download now to embark on a journey of unparalleled
                      brilliance and sophistication.
                    </li>
                  </ul>
                  <div className="app_button">
                    <Button variant="link" className="p0">
                      <img src={GooglePlay} alt="" loading="lazy" />
                    </Button>
                    <Button variant="link" className="p0">
                      <img src={AppStore} alt="" loading="lazy" />
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-1 order-lg-2">
              <div className="app_img_wrapper">
                <img src={AppSS} alt="" loading="lazy" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonial_Wrapper pt100 pb40 pt80-xl">
        <Container>
          <h2 className="text-center mb60 mb30-sm">
            Customer <span>Testimonials</span>
          </h2>
          <div className="testimonial_slider_wrapepr">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={4}
              autoHeight={true}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                631: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1442: {
                  slidesPerView: 4,
                },
              }}
              className="testimonial_slider navigation_center_bottom pb90"
            >
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={Christopher}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Christopher</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={ChristopherDiamond}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Got best deal, really excellent, trusted company
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={DavinHasser}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Davin Hasser</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={DavinHasserDiamonds}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    My search for Best quality certified diamond ended here,
                    thanks for your help
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={Emily}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Emily</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={EmilyDiamond}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    I just received my beautiful diamond. It is very beautiful
                    and very well packaged! I must say I’m very impressed with
                    how fast the delivery was and the wonderful customer
                    service. I’ll definitely buy from you from now on! Thank you
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={jason}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Jason</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={JasonDiamond}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Diamond i have purchased from you is really beautiful, thank
                    you
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={Jessica}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Jessica</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={JessicaJewellery}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    thanks for timely delivery of my diamond necklace, you made
                    my wedding more beautiful and special, amazing company
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={JohnRogers}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>John Rogers</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={JohnRogersRings}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Best certified diamond supplier I have ever found, blessed!
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={Natalia}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Natalia</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={NataliaJ}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    They are helpful, honest and communication throughout the
                    entire buying process. I will definitely be a return
                    customer. Thank you
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={Riyana}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Riyana</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={RiyanaRing}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    Ring you made for me really mesmerized me when i got it,
                    excellent quality
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={SimonHong}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Simon Hong</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={SimonHongJewellery}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">Pleasure to do business with you guys</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={Sophia}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Sophia</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={SophiaEarrings}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    They are so honest about everything, they made my jewellery
                    so beautifully , many repeat order on the way
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={Stewart}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Stewart</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={StewartRing}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">I like your lab grown diamond</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={StuartParodi}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Stuart Parodi</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={StuartParodiJewellery}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">delivered sp fast, thank you</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonail_slide">
                  <div className="testi_top_heaer d-flex">
                    <div className="user_top">
                      <div className="user_img">
                        <img
                          src={Unaiza}
                          alt=""
                          width={45}
                          height={45}
                          loading="lazy"
                        />
                      </div>
                      <div className="user_name">
                        <h6>Unaiza</h6>
                        <p>6 days ago</p>
                      </div>
                    </div>
                    <div className="testi_img">
                      <img
                        src={UnaizaEarrings}
                        alt=""
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="rating_Wrap">
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                  </div>
                  <p className="m0">
                    thanks for making beautiful earring under my budget, would
                    like to do business with you in future
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      <section className="faq_wrapper pt100 pb100 pt80-xl pb80-xl pt50-md pb50-md">
        <Container>
          <h2 className="pb60 text-center pb40-xl">
            Frequently Asked Questions <span>(FAQs)</span>
          </h2>
          <Accordion defaultActiveKey="0" className="accordian_design_one">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Where are you based?</Accordion.Header>
              <Accordion.Body>
                <p>
                  Our head office is located in Hong Kong, with our
                  manufacturing unit and other offices situated in India.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What goods do you deal in?</Accordion.Header>
              <Accordion.Body>
                <p>
                  IGI/GIA Certified Lab-Grown Diamonds with over 100,000 stones
                </p>
                <p>parcel goods and layouts in white and fancy color Both.</p>
                <p>customized diamond jewelry of the highest quality,</p>
                <p>personalized cut diamonds as per demand on make to order.</p>
                <p>
                  We are one stop solution for all type of lab grown diamond
                  requirements.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Are you a manufacturer or trader?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We are a leading manufacturer and grower of CVD Type 2A
                  diamonds. Additionally, we specialize in crafting customized
                  jewelry.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                All your Lab grown Diamonds are certified?
              </Accordion.Header>
              <Accordion.Body>
                Yes, if you are accessing our Certified Diamonds inventory,
                there all diamonds are certified by IGI or GIA.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Are all the diamonds on this website are available?
              </Accordion.Header>
              <Accordion.Body>
                <p>Yes,</p>
                <p>all diamonds are available.</p>
                <p>
                  However, we recommend confirming availability with us, as the
                  same diamond may be selected by multiple people during the
                  same time period
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                How can I check authenticity of Certified diamonds?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  You can always check diamond girdle where you will find laser
                  inscription of IGI report number, you can check same number on
                  IGI/GIA official website and fetch the grading report and
                  match them together.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Are these lab grown diamonds same as natural diamonds?
              </Accordion.Header>
              <Accordion.Body>
                <p>Yes, same as natural diamonds,</p>
                <p>
                  Look, Shinning and internal properties everything same. Just
                  difference is about origin, one grown under earth and another
                  in lab,
                </p>
                <p>
                  Lab Grown Diamonds remain same as natural diamond life long.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                What is Minimum Order Quantity ?
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>For Certified Diamonds : 1 stone</li>
                  <li>
                    For Non Certified Small Goods : Total Carat Weight - 10ct
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                can you please introduce Lab Grown Diamonds in Brief ?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lab Grown Diamonds Also known as Man Made Diamonds, Created
                  Diamonds or cultured diamonds,
                </p>
                <p>
                  There are Two Formation Methods to Produce Lab Grown Diamonds
                </p>
                <p>
                  One is HPHT (High Pressure High Temperature) and Other is CVD
                  (Chemical Vapor Deposition)
                </p>
                <p>
                  Click here <Link to="">For More Detailed information.</Link>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                Different between lab grown diamond and natural diamond
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lab-grown diamonds are created in a controlled lab environment
                  over weeks to months, while natural diamonds form naturally in
                  the Earth over millions of years.
                </p>
                <p>
                  Lab-grown diamonds are generally more affordable,
                  environmentally friendly, and may have fewer inclusions.
                </p>
                <p>
                  Natural diamonds, though often pricier, carry unique
                  characteristics from their natural formation and can be
                  identified by specific features.
                </p>
                <p>
                  Click here <Link to="">For More Detailed information.</Link>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>
                4Cs of Diamond Quality | what are 4Cs of Diamond | All about 4Cs
                in Diamond
              </Accordion.Header>
              <Accordion.Body>
                <p>These 4cs are Carat, Color, clarity and Cut</p>
                <h6>CARAT</h6>
                <p>Diamond Carat : We have from 0.004ct to 20ct+</p>
                <h6>COLOR</h6>
                <p>Diamond Color : DEF GHI JKL MNO...........Z</p>
                <h6>CLARITY</h6>
                <p>
                  Diamond Clarity: IF, VVS1, VVS2, VS1, VS2, SI1, SI2, I1, I2,
                  I3
                </p>
                <h6>CUT</h6>
                <p>
                  Diamond Cut (Shapes) : Round, Oval, Heart, Princess, Emerald,
                  Marquise, Cushion, Radiant, Baguettes, Asscher, Trapezoids,
                  Hexagonal, Kites, Customized Cut, Pie Cut and More
                </p>
                <p>
                  Click here{' '}
                  <Link>For More Detailed information about all 4Cs.</Link>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
              <Accordion.Header>
                In what metal do you produce your jewelry?
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Make Jewellery in Gold and Platinum</li>
                  <li>Gold Type :10K,14K,18K,22K</li>
                  <li>Gold Color : Rose, White, Yellow</li>
                  <li>Platinum : 950</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12">
              <Accordion.Header>
                What are diamond cut, polish and symmetry
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Diamond cut refers to the precision of shaping, influencing
                  brilliance; polish is the smoothness of the diamond's surface,
                  and symmetry pertains to the alignment of facets, collectively
                  impacting a diamond's visual appeal.
                </p>
                <p>
                  It can be as IDEAL/EXCELLENT - VERY GOOD - GOOD - FAIR/POOR
                  Where IDEAL/EXCELLENT is the best and Poor is the lowest grade
                  in the same
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="13">
              <Accordion.Header>
                How Many Days you take to Customize Jewellery?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Depend On Design and type of jewellery, we create within 7-15
                  Business days
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="14">
              <Accordion.Header>
                If I don't find the diamond which I want in your inventory list
                ?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  You can always emails us your or just hit chat icon and our
                  expert will connected with you, Your can submit your
                  requirement and we will make that diamond available for you,
                  we will do our best to make it available for you. You can
                  directly put your requirement here, Click here to Submit.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="15">
              <Accordion.Header>Order preparation time ?</Accordion.Header>
              <Accordion.Body>
                <p>For Small Diamonds order -3 Business days</p>
                <p>
                  For Certified Diamonds - Can dispatch as soon as payment
                  received as its always ready to ship For Jewellery - 7-15
                  Business days, vary according to the jewellery design
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="16">
              <Accordion.Header>
                Which Shipping methods you use ?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We Ship through FEDEX/UPS/MALCA AMIT Etc According to the
                  value of shipment and destination country.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="17">
              <Accordion.Header>
                How much time to deliver the goods ?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Depend on Destination Country, it can be 4-7 Business days for
                  Some countries there overnight or second day delivery also
                  possible, shipping charges can be vary depend on service type
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal_without_title modal_large"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/jITIXYquex8?si=4DmiYMzo9dhJsHIe"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </main>
  );
}
export default memo(Home);
