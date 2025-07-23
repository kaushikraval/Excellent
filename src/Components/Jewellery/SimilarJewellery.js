import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';
import HeartBlue from '../../Assets/Images/Jewellery/heart-blue.svg';
import Jewellery1 from '../../Assets/Images/Jewellery/1.jpg';
import Jewellery2 from '../../Assets/Images/Jewellery/2.jpg';
import Jewellery3 from '../../Assets/Images/Jewellery/3.jpg';
import Jewellery4 from '../../Assets/Images/Jewellery/4.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

export default function SimilarJewellery() {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      img: Jewellery1,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
    {
      id: 2,
      img: Jewellery2,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
    {
      id: 3,
      img: Jewellery3,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
    {
      id: 4,
      img: Jewellery4,
      title:
        'Diamond hoop earrings with three-row setting in 10k white gold (1 ct. tw.)',
      priceOld: '$1,999.00',
      priceNew: '$1,299.00',
    },
  ];
  return (
    <Container>
      <h3 className="text-center fw_600 mb50">Similar Items</h3>
      <Swiper
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          620: {
            slidesPerView: 2,
          },
          920: {
            slidesPerView: 3,
          },
          1081: {
            slidesPerView: 3,
          },
          1399: {
            slidesPerView: 4,
          },
        }}
        className="jewellery_thumn_slider"
      >
        {data.map(jewelleryProduct => (
          <SwiperSlide>
            <div className="jewellery_box_wrapper">
              <div className="jewellery_img_wrapper">
                <Link
                  to={
                    window.location.pathname === '/choose-your-setting'
                      ? '/choose-your-setting-detail'
                      : '/jewellery-detail'
                  }
                >
                  <img src={jewelleryProduct.img} alt="" />
                </Link>
                <span>Sale</span>
                <Button variant="link" className="active">
                  <img src={HeartBlue} alt="" />
                </Button>
              </div>
              <div className="jewellery_detail_text">
                <h5>
                  <Link
                    to={
                      window.location.pathname === '/choose-your-setting'
                        ? '/choose-your-setting-detail'
                        : '/jewellery-detail'
                    }
                  >
                    {jewelleryProduct.title}
                  </Link>
                </h5>
                <div className="price">
                  <h6>
                    <del>{jewelleryProduct.priceOld}</del>
                    {jewelleryProduct.priceNew}
                  </h6>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="primary"
                    className="rounded-pill btn_shadow px30 px20-xl mr15 fs_14"
                    size="sm"
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="rounded-pill fs_14"
                    onClick={() => navigate('/cart')}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
