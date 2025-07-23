import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import NoImageAvailable from '../../Assets/Images/notfound2.png';

export default function SimilarStone({ similarDiamondList }) {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={5}
      spaceBetween={20}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        1081: {
          slidesPerView: 4,
        },
        1399: {
          slidesPerView: 5,
        },
      }}
      className="recommended_slider_wrap pb80 navigation_center_bottom"
    >
      {similarDiamondList?.map(diamondProduct => (
        <SwiperSlide>
          <div className="product_box">
            <div className="product_img">
              <img
                src={
                  diamondProduct?.Stone_Img_url
                    ? diamondProduct.Stone_Img_url
                    : NoImageAvailable
                }
                alt=""
              />
            </div>
            <div className="product_info">
              <div className="product_title d-block mb-0">
                <h6>
                  {diamondProduct.title}
                  {diamondProduct.Weight
                    ? `${diamondProduct.Weight} Carat`
                    : ''}
                  {diamondProduct.Color ? ` - ${diamondProduct.Color}` : ''}
                  {diamondProduct.Clarity ? ` - ${diamondProduct.Clarity}` : ''}
                  {diamondProduct.Cut ? ` ${diamondProduct.Cut} Cut` : ''}
                  {diamondProduct.Shape ? `- ${diamondProduct.Shape}` : ''}
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
