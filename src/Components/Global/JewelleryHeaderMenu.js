import { useMemo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export const JewelleryHeaderMenu = ({
  jewelleryListForHeader,
  onJewelleryTypeSelected,
  onJewellerySubTypeSelected,
}) => {
  const [isToggleForJewellery, setIsToggleJewellery] = useState(true);
  const navigate = useNavigate();
  const mainHeaderMenuForJewellery = useMemo(() => {
    return jewelleryListForHeader?.map((item, index) => {
      return (
        <div
          className="jewellery_category_inner"
          key={index}
          style={{ borderLeft: '1px solid #e3e3e3' }}
        >
          <h4 onClick={() => onJewelleryTypeSelected(item)}>
            {item?.MasterTypeValue_Code}
          </h4>
          <div className="shape_select">
            <ul>
              {item?.SubType?.slice(0, 5).map((subItem, subIndex) => {
                return (
                  <li key={`shape_${index}_${subIndex}`}>
                    <span
                      onClick={() => onJewellerySubTypeSelected(item, subItem)}
                    >
                      <h5>{subItem.MasterSubTypeValue}</h5>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          {item?.SubType?.length > 5 && (
            <div className="mt10 mt10-lg mb10-lg view_all_diamonds">
              <span onClick={() => onJewelleryTypeSelected(item)}>
                View All
              </span>
            </div>
          )}
        </div>
      );
    });
  }, [
    jewelleryListForHeader,
    onJewellerySubTypeSelected,
    onJewelleryTypeSelected,
  ]);
  return (
    <div
      className={
        isToggleForJewellery
          ? 'diamond_megamenu_wrapper jewellery_megamenu_wrapper'
          : 'diamond_megamenu_wrapper jewellery_megamenu_wrapper hide'
      }
      onClick={() => setIsToggleJewellery(!isToggleForJewellery)}
    >
      <Container>
        <Row>
          <Col md={2}>
            <div className="custon_jewellery_menu_wrap">
              <h4>Build Your Own</h4>
              <div className="shape_select">
                <ul>
                  <li>
                    <span onClick={() => navigate('/choose-diamond')}>
                      <h5>Start with a Setting</h5>
                    </span>
                  </li>
                  <li>
                    <span>
                      <h5>Start with a Natural Diamonds</h5>
                    </span>
                  </li>
                  <li>
                    <span>
                      <h5>Start with a Lab Grown Diamonds</h5>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={10}>
            <div className="jewellery_category_wrapper">
              {mainHeaderMenuForJewellery}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
