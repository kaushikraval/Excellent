import React, { useCallback, useMemo, useState } from 'react';
import { FreeMode, Thumbs } from 'swiper/modules';
import NoImageAvailable from '../../Assets/Images/notfound2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function DiamondImgSlider({
  stockDetailDnaList,
  stockDetailDnaLoading,
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sliderData = useMemo(() => {
    let arr = [];
    if (stockDetailDnaList?.Stone_Img_url) {
      arr.push({ title: 'image', path: stockDetailDnaList?.Stone_Img_url });
    }
    if (stockDetailDnaList?.Video_url) {
      arr.push({
        title: 'video',
        path: stockDetailDnaList?.Video_url,
        imagePath: stockDetailDnaList?.Stone_Img_url,
      });
    }
    if (stockDetailDnaList?.Certificate_file_url) {
      arr.push({
        title: 'certificate',
        path: stockDetailDnaList?.Certificate_file_url,
        imagePath: stockDetailDnaList?.Stone_Img_url,
      });
    }
    return arr;
    /*  if (stockDetailDnaList?.Stone_Img_url && stockDetailDnaList?.Video_url) {
      return [
        { title: 'image', path: stockDetailDnaList?.Stone_Img_url },
        {
          title: 'video',
          path: stockDetailDnaList?.Video_url,
          imagePath: stockDetailDnaList?.Stone_Img_url,
        },
      ];
    } else if (stockDetailDnaList?.Stone_Img_url) {
      return [{ title: 'image', path: stockDetailDnaList?.Stone_Img_url }];
    } else if (stockDetailDnaList?.Certificate_file_url) {
      return [
        {
          title: 'certificate',
          path: stockDetailDnaList?.Certificate_file_url,
        },
      ];
    } else {
      return [{ title: 'image', path: NoImageAvailable }];
    } */
  }, [stockDetailDnaList]);
  const handleImageError = useCallback(event => {
    event.target.src = NoImageAvailable;
  }, []);
  return (
    <div className="diamond_detail_img_wrapper">
      <Swiper
        spaceBetween={0}
        autoHeight={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="diamond_detail_slider"
      >
        {sliderData?.map(item => {
          return (
            <SwiperSlide>
              {item.title === 'image' ? (
                <img
                  src={item.path}
                  alt={item.title}
                  onError={handleImageError}
                />
              ) : (
                <div
                  className={
                    item.title === 'video'
                      ? 'iframe_wrapper'
                      : 'iframe_wrapper certificate_iframe'
                  }
                >
                  {item.path && (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${item.path}&navpanes=0`}
                      title="video"
                      allow="autoplay"
                    ></iframe>
                  )}
                </div>
              )}
            </SwiperSlide>
          );
        })}
        {stockDetailDnaLoading && (
          <div className="skelleton_Wrapper diamond_image">
            <Skeleton height={60} style={{ width: '100%' }} />
          </div>
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="diamond_thumn_slider"
      >
        {sliderData?.map(item => {
          return (
            <SwiperSlide>
              {item.title === 'image' ? (
                <img
                  src={item.path}
                  alt={item.title}
                  onError={handleImageError}
                />
              ) : item.title === 'video' ? (
                <div className="video_thumnail">
                  <img
                    src={item.imagePath}
                    alt={item.title}
                    onError={handleImageError}
                  />
                </div>
              ) : item.title === 'certificate' ? (
                <div className="certificate_thumnail">
                  <img
                    src={item.imagePath}
                    alt={item.title}
                    onError={handleImageError}
                  />
                </div>
              ) : (
                <img
                  src={item.path}
                  alt={item.title}
                  onError={handleImageError}
                />
              )}
            </SwiperSlide>
          );
        })}
        {stockDetailDnaLoading && (
          <div className="skelleton_Wrapper">
            <Skeleton height={100} style={{ width: '80%' }} />
          </div>
        )}
      </Swiper>
    </div>
  );
}
