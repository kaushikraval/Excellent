import React, { useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlueDiamond from '../../Assets/Images/blue.svg';
import PurpleDiamond from '../../Assets/Images/purple.svg';
import PinkDiamond from '../../Assets/Images/pink.svg';
import YellowDiamond from '../../Assets/Images/yellow.svg';
import GreenDiamond from '../../Assets/Images/green.svg';
import BlackDiamond from '../../Assets/Images/black.svg';
import OrangeDiamond from '../../Assets/Images/orange.svg';
import RedDiamond from '../../Assets/Images/red.svg';
import GrayDiamond from '../../Assets/Images/gray.svg';
export const DiamondHeaderMenu = ({
  handleImageError,
  shapeListForHeader,
  onShapeSelectHandler,
  onColorSelectHandler,
  onDiamondTypeSelected,
  setNavbarHideShow,
  navbarHideShow,
}) => {
  const [isToggle, setIsToggle] = useState(true);
  const naturalWhiteDiamond = useMemo(() => {
    return (
      <Col xl={3}>
        <div className="megamenu_column">
          <h4
            onClick={() => {
              onDiamondTypeSelected('NATURAL', 1);
              setNavbarHideShow(!navbarHideShow);
            }}
          >
            Natural White Diamonds
          </h4>
          <div className="shape_select">
            <ul>
              {shapeListForHeader?.map((item, index) => {
                return (
                  <li key={`shape_${index}`}>
                    <span
                      onClick={() => {
                        onShapeSelectHandler('NATURAL', item);
                        setNavbarHideShow(!navbarHideShow);
                      }}
                    >
                      <img
                        src={`${
                          process.env.REACT_APP_DOMAIN
                        }/Content/DomainData/${
                          process.env.REACT_APP_DOMAIN_WITHOUT_HTTP
                        }/img/Diamonds/Active/${item.DisplayName?.replaceAll(
                          ' ',
                          '',
                        )}.svg`}
                        alt={item.DisplayName}
                        onError={handleImageError}
                      />
                      <h5>{item.DisplayName}</h5>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="text-center mt20 mt10-lg mb20-lg view_all_diamonds">
          <span onClick={() => onDiamondTypeSelected('NATURAL', 1)}>
            View All
          </span>
        </div>
      </Col>
    );
  }, [
    handleImageError,
    shapeListForHeader,
    onDiamondTypeSelected,
    onShapeSelectHandler,
  ]);

  const labGrownWhiteDiamond = useMemo(() => {
    return (
      <Col xl={3} style={{ borderLeft: '1px solid #e3e3e3' }}>
        <div className="megamenu_column">
          <h4
            onClick={() => {
              onDiamondTypeSelected('LABGROWN', 1);
              setNavbarHideShow(!navbarHideShow);
            }}
          >
            Lab Grown White Diamonds
          </h4>
          <div className="shape_select">
            <ul>
              {shapeListForHeader?.map((item, index) => {
                return (
                  <li key={`shape_${index}`}>
                    <span
                      onClick={() => {
                        onShapeSelectHandler('LABGROWN', item);
                        setNavbarHideShow(!navbarHideShow);
                      }}
                    >
                      <img
                        src={`${
                          process.env.REACT_APP_DOMAIN
                        }/Content/DomainData/${
                          process.env.REACT_APP_DOMAIN_WITHOUT_HTTP
                        }/img/Diamonds/Active/${item.DisplayName?.replaceAll(
                          ' ',
                          '',
                        )}.svg`}
                        alt={item.DisplayName}
                        onError={handleImageError}
                      />
                      <h5>{item.DisplayName}</h5>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="text-center mt20 mt10-lg mb20-lg view_all_diamonds">
          <span onClick={() => onDiamondTypeSelected('LABGROWN', 1)}>
            View All
          </span>
        </div>
      </Col>
    );
  }, [
    shapeListForHeader,
    handleImageError,
    onDiamondTypeSelected,
    onShapeSelectHandler,
  ]);

  const naturalColorDiamond = useMemo(() => {
    return (
      <Col xl={3} style={{ borderLeft: '1px solid #e3e3e3' }}>
        <div className="megamenu_column">
          <h4 onClick={() => onDiamondTypeSelected('NATURAL', 2)}>
            Natural Color Diamonds
          </h4>
          <div className="shape_select color_diamond">
            <ul>
              <li>
                <span onClick={() => onColorSelectHandler('NATURAL', 'BLUE')}>
                  <img
                    src={BlueDiamond}
                    alt="BlueDiamond"
                    onError={handleImageError}
                  />
                  <h5>Blue</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('NATURAL', 'PURPLE')}>
                  <img
                    src={PurpleDiamond}
                    alt="PurpleDiamond"
                    onError={handleImageError}
                  />
                  <h5>Purple</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('NATURAL', 'PINK')}>
                  <img
                    src={PinkDiamond}
                    alt="PinkDiamond"
                    onError={handleImageError}
                  />
                  <h5>Pink</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('NATURAL', 'YELLOW')}>
                  <img
                    src={YellowDiamond}
                    alt="YellowDiamond"
                    onError={handleImageError}
                  />
                  <h5>Yellow</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('NATURAL', 'GREEN')}>
                  <img
                    src={GreenDiamond}
                    alt="GreenDiamond"
                    onError={handleImageError}
                  />
                  <h5>Green</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('NATURAL', 'BLACK')}>
                  <img
                    src={BlackDiamond}
                    alt="BlackDiamond"
                    onError={handleImageError}
                  />
                  <h5>Black</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('NATURAL', 'ORANGE')}>
                  <img
                    src={OrangeDiamond}
                    alt="OrangeDiamond"
                    onError={handleImageError}
                  />
                  <h5>Orange</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('NATURAL', 'RED')}>
                  <img
                    src={RedDiamond}
                    alt="RedDiamond"
                    onError={handleImageError}
                  />
                  <h5>Red</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('NATURAL', 'GRAY')}>
                  <img
                    src={GrayDiamond}
                    alt="GrayDiamond"
                    onError={handleImageError}
                  />
                  <h5>Gray</h5>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt20 mt10-lg mb20-lg view_all_diamonds">
          <span onClick={() => onDiamondTypeSelected('NATURAL', 2)}>
            View All
          </span>
        </div>
      </Col>
    );
  }, [handleImageError, onDiamondTypeSelected, onColorSelectHandler]);

  const labGrownColorDiamond = useMemo(() => {
    return (
      <Col xl={3} style={{ borderLeft: '1px solid #e3e3e3' }}>
        <div className="megamenu_column">
          <h4 onClick={() => onDiamondTypeSelected('LABGROWN', 2)}>
            Lab Grown Color Diamonds
          </h4>
          <div className="shape_select color_diamond">
            <ul>
              <li>
                <span onClick={() => onColorSelectHandler('LABGROWN', 'BLUE')}>
                  <img
                    src={BlueDiamond}
                    alt="BlueDiamond"
                    onError={handleImageError}
                  />
                  <h5>Blue</h5>
                </span>
              </li>
              <li>
                <span
                  onClick={() => onColorSelectHandler('LABGROWN', 'PURPLE')}
                >
                  <img
                    src={PurpleDiamond}
                    alt="PurpleDiamond"
                    onError={handleImageError}
                  />
                  <h5>Purple</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('LABGROWN', 'PINK')}>
                  <img
                    src={PinkDiamond}
                    alt="PinkDiamond"
                    onError={handleImageError}
                  />
                  <h5>Pink</h5>
                </span>
              </li>
              <li>
                <span
                  onClick={() => onColorSelectHandler('LABGROWN', 'YELLOW')}
                >
                  <img
                    src={YellowDiamond}
                    alt="YellowDiamond"
                    onError={handleImageError}
                  />
                  <h5>Yellow</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('LABGROWN', 'GREEN')}>
                  <img
                    src={GreenDiamond}
                    alt="GreenDiamond"
                    onError={handleImageError}
                  />
                  <h5>Green</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('LABGROWN', 'BLACK')}>
                  <img
                    src={BlackDiamond}
                    alt="BlackDiamond"
                    onError={handleImageError}
                  />
                  <h5>Black</h5>
                </span>
              </li>
              <li>
                <span
                  onClick={() => onColorSelectHandler('LABGROWN', 'ORANGE')}
                >
                  <img
                    src={OrangeDiamond}
                    alt="OrangeDiamond"
                    onError={handleImageError}
                  />
                  <h5>Orange</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('LABGROWN', 'RED')}>
                  <img
                    src={RedDiamond}
                    alt="RedDiamond"
                    onError={handleImageError}
                  />
                  <h5>Red</h5>
                </span>
              </li>
              <li>
                <span onClick={() => onColorSelectHandler('LABGROWN', 'GRAY')}>
                  <img
                    src={GrayDiamond}
                    alt="GrayDiamond"
                    onError={handleImageError}
                  />
                  <h5>Gray</h5>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt20 mt10-lg mb20-lg view_all_diamonds">
          <span onClick={() => onDiamondTypeSelected('LABGROWN', 2)}>
            View All
          </span>
        </div>
      </Col>
    );
  }, [handleImageError, onDiamondTypeSelected, onColorSelectHandler]);

  const mainHeaderMenu = useMemo(() => {
    return (
      <Container>
        <Row>
          {naturalWhiteDiamond}
          {labGrownWhiteDiamond}
          {naturalColorDiamond}
          {labGrownColorDiamond}
        </Row>
      </Container>
    );
  }, [
    naturalWhiteDiamond,
    labGrownWhiteDiamond,
    naturalColorDiamond,
    labGrownColorDiamond,
  ]);

  return (
    <div
      className={
        isToggle ? 'diamond_megamenu_wrapper' : 'diamond_megamenu_wrapper hide'
      }
      onClick={() => setIsToggle(!isToggle)}
    >
      <Container>
        <Row>{mainHeaderMenu}</Row>
      </Container>
    </div>
  );
};
