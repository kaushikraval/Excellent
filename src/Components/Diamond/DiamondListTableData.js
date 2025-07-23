import React, { memo, useCallback, useMemo } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import NoImageAvailable from '../../Assets/Images/notfound2.png';
import RightArrow from '../../Assets/Images/accordian-arrow.svg';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function DiamondListTableData({
  currentData,
  diamondType,
  onSelectDiamond,
  onExpandDiamond,
}) {
  const handleImageError = useCallback(event => {
    event.target.src = NoImageAvailable;
  }, []);
  const renderTable = useMemo(() => {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Video/Image</th>
            <th>Shape</th>
            <th>Size</th>
            <th>Color</th>
            <th>Clarity</th>
            <th>Cut</th>
            <th>Pol</th>
            <th>Sym</th>
            <th>Fluor</th>
            <th>Lab</th>
            <th>Certificate No</th>
            <th>Disc</th>
            <th>Price</th>
            <th>Measurement</th>
            <th>Depth</th>
            <th>Table</th>
          </tr>
        </thead>
        <tbody>
          {currentData?.length > 0 &&
            _.map(currentData, (x, i) => {
              return (
                <WatchListItemContainer
                  {...x}
                  key={i}
                  row={x}
                  index={i}
                  diamondType={diamondType}
                  onSelectDiamond={onSelectDiamond}
                  onExpandDiamond={onExpandDiamond}
                  handleImageError={handleImageError}
                />
              );
            })}
        </tbody>
      </table>
    );
  }, [
    currentData,
    onSelectDiamond,
    onExpandDiamond,
    handleImageError,
    diamondType,
  ]);
  return <>{renderTable}</>;
}

const WatchListItemContainer = ({
  index,
  row,
  diamondType,
  isCheck,
  MStockStatus,
  Stone_Img_url,
  Shape,
  Weight,
  Color,
  Clarity,
  Cut,
  Polish,
  Symm,
  FlrIntens,
  Luster,
  Eyeclean,
  Lab,
  Lab_Report_No,
  Cost_Amt,
  Table_Diameter_Per,
  Total_Depth_Per,
  Measurement,
  isExpanded,
  onSelectDiamond,
  onExpandDiamond,
  Stone_No,
  Ratio,
  Girdle,
  CrownAngle,
  CrownHeight,
  PavillionAngle,
  PavillionHeight,
  Live_Rap_Rate,
  Cost_Discount,
  Cost_Rate,
  rowPavillionHeight,
  handleImageError,
}) => {
  const checkDiamondTd = useMemo(() => {
    return (
      <td>
        <Form.Check
          type="checkbox"
          readOnly
          id="selectProduct"
          name="selectProduct"
          checked={isCheck}
          onClick={e => onSelectDiamond(row)}
        />
      </td>
    );
  }, [isCheck, onSelectDiamond, row]);
  const availabilityTd = useMemo(() => {
    return (
      <td>
        {MStockStatus ? (
          <span
            className={
              MStockStatus === 'A'
                ? 'bedge available'
                : MStockStatus === 'H'
                ? 'bedge on_hold'
                : MStockStatus === 'M'
                ? 'bedge on_memmo'
                : ''
            }
          >
            {MStockStatus}
          </span>
        ) : (
          '-'
        )}
      </td>
    );
  }, [MStockStatus]);
  const diamondImageTd = useMemo(() => {
    return (
      <td>
        <div className="diamond_list_img">
          <Link
            to={`/diamond-detail?stoneNo=${Stone_No}&diamondType=${diamondType}`}
            target="_blank"
          >
            <img
              src={Stone_Img_url ? Stone_Img_url : NoImageAvailable}
              alt="diamond"
              onError={handleImageError}
            />
          </Link>
        </div>
      </td>
    );
  }, [Stone_Img_url, handleImageError, diamondType, Stone_No]);
  const expanedTd = useMemo(() => {
    return (
      <td>
        <span
          className={
            isExpanded
              ? 'toggle_arrow expanded_toggle'
              : 'toggle_arrow collapse_toggle'
          }
          onClick={() => onExpandDiamond(row)}
        >
          <img src={RightArrow} alt="" />
        </span>
      </td>
    );
  }, [isExpanded, onExpandDiamond, row]);
  const shapeTd = useMemo(() => {
    return <td>{Shape ? Shape : '-'}</td>;
  }, [Shape]);
  const sizeTd = useMemo(() => {
    return <td>{Weight ? Weight : '-'}</td>;
  }, [Weight]);
  const colorTd = useMemo(() => {
    return <td>{Color ? Color : '-'}</td>;
  }, [Color]);
  const clarityTd = useMemo(() => {
    return <td>{Clarity ? Clarity : '-'}</td>;
  }, [Clarity]);
  const cutTd = useMemo(() => {
    return <td>{Cut ? Cut : '-'}</td>;
  }, [Cut]);
  const polishTd = useMemo(() => {
    return <td>{Polish ? Polish : '-'}</td>;
  }, [Polish]);
  const symmTd = useMemo(() => {
    return <td>{Symm ? Symm : '-'}</td>;
  }, [Symm]);
  const flrIntensTd = useMemo(() => {
    return <td>{FlrIntens ? FlrIntens : '-'}</td>;
  }, [FlrIntens]);
  const labTd = useMemo(() => {
    return <td>{Lab ? Lab : '-'}</td>;
  }, [Lab]);
  const labReportNoTd = useMemo(() => {
    return <td>{Lab_Report_No ? Lab_Report_No : '-'}</td>;
  }, [Lab_Report_No]);
  const discTd = useMemo(() => {
    return <td>{Cost_Discount ? Cost_Discount : '-'}</td>;
  }, [Cost_Discount]);
  const priceTd = useMemo(() => {
    return <td>{Cost_Amt ? `$${Cost_Amt}` : '$0'}</td>;
  }, [Cost_Amt]);
  const tableTd = useMemo(() => {
    return <td>{Table_Diameter_Per ? `${Table_Diameter_Per}%` : '0.00%'}</td>;
  }, [Table_Diameter_Per]);
  const depthTd = useMemo(() => {
    return <td>{Total_Depth_Per ? `${Total_Depth_Per}%` : '0.00%'}</td>;
  }, [Total_Depth_Per]);
  const measurementTd = useMemo(() => {
    return <td>{Measurement ? `${Measurement}%` : '0.00%'}</td>;
  }, [Measurement]);
  const renderRowSubTd = useMemo(() => {
    return (
      <td colSpan={19}>
        <div className="expanded_table_Wrap">
          <div className="expanded_table_Wrap_inner">
            <div className="diamond_detail_main">
              <div className="diamond_detail_box">
                <h6>Diamond Detail</h6>
                <div className="diamond_detail_text left">
                  {(Luster || Eyeclean) && (
                    <ul>
                      {Luster && <li>{Luster} luster</li>}
                      {Eyeclean && <li>{Eyeclean} eye clean</li>}
                    </ul>
                  )}
                  <Row>
                    <Col xs={4}>
                      <div className="diamond_img">
                        <Link
                          to={`/diamond-detail?stoneNo=${Stone_No}&diamondType=${diamondType}`}
                          target="_blank"
                        >
                          <img
                            src={
                              Stone_Img_url ? Stone_Img_url : NoImageAvailable
                            }
                            alt="diamond"
                          />
                        </Link>
                      </div>
                    </Col>
                    <Col xs={8}>
                      <div className="diamond_detail_table">
                        <table>
                          <tbody>
                            <tr>
                              <th>Certification#</th>
                              <td>
                                {Lab ? Lab : '-'}{' '}
                                {Lab_Report_No ? Lab_Report_No : '-'}
                              </td>
                            </tr>
                            <tr>
                              <th>Stock#</th>
                              <td>{Stone_No ? Stone_No : '-'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="diamond_detail_main">
              <div className="diamond_detail_box">
                <h6>Diamond Detail</h6>
                <div className="diamond_detail_text left">
                  <Row className="g-3">
                    <Col xs={6}>
                      <div className="diamond_detail_table">
                        <table>
                          <tbody>
                            <tr>
                              <th>Measurment</th>
                              <td>{Measurement ? Measurement : '-'}</td>
                            </tr>
                            <tr>
                              <th>Table</th>
                              <td>
                                {Table_Diameter_Per ? Table_Diameter_Per : '-'}
                              </td>
                            </tr>
                            <tr>
                              <th>Depth</th>
                              <td>{Total_Depth_Per ? Total_Depth_Per : '-'}</td>
                            </tr>
                            <tr>
                              <th>Ration</th>
                              <td>{Ratio ? Ratio : '-'}</td>
                            </tr>
                            <tr>
                              <th>Girdle</th>
                              <td>{Girdle ? Girdle : '-'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div className="diamond_detail_table">
                        <table>
                          <tbody>
                            <tr>
                              <th>Crown angle</th>
                              <td>{CrownAngle ? CrownAngle : '-'}</td>
                            </tr>
                            <tr>
                              <th>Crown height</th>
                              <td>{CrownHeight ? CrownHeight : '-'}</td>
                            </tr>
                            <tr>
                              <th>Pavilion angle</th>
                              <td>{PavillionAngle ? PavillionAngle : '-'}</td>
                            </tr>
                            <tr>
                              <th>Pavilion depth</th>
                              <td>
                                {rowPavillionHeight ? PavillionHeight : '-'}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="supplyer_detail_main">
              <div className="diamond_detail_box">
                <h6>Price Details</h6>
                <div className="diamond_detail_text">
                  <div className="price_detail_wrap">
                    <div className="diamond_price">
                      <div>
                        <h4>Rap</h4>
                        <h4>Discount</h4>
                        <h4>Rate</h4>
                        <h4>Amount</h4>
                      </div>
                      <h3>
                        <p>{Live_Rap_Rate ? Live_Rap_Rate : '-'}</p>
                        <p>{Cost_Discount ? Cost_Discount : '-'}</p>
                        <p>{Cost_Rate ? Cost_Rate : '-'}</p>
                        <p className="text_secondary fw_600">
                          {Cost_Amt ? Cost_Amt : '-'}
                        </p>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    );
  }, [
    diamondType,
    Eyeclean,
    Luster,
    Cost_Amt,
    Cost_Discount,
    Cost_Rate,
    CrownAngle,
    CrownHeight,
    Lab,
    Girdle,
    Live_Rap_Rate,
    Measurement,
    PavillionAngle,
    PavillionHeight,
    Ratio,
    Lab_Report_No,
    Stone_Img_url,
    Stone_No,
    Table_Diameter_Per,
    Total_Depth_Per,
    rowPavillionHeight,
  ]);
  const renderRow = useMemo(() => {
    return (
      <>
        <tr key={index}>
          {expanedTd}
          {checkDiamondTd}
          {availabilityTd}
          {diamondImageTd}
          {shapeTd}
          {sizeTd}
          {colorTd}
          {clarityTd}
          {cutTd}
          {polishTd}
          {symmTd}
          {flrIntensTd}
          {labTd}
          {labReportNoTd}
          {discTd}
          {priceTd}
          {measurementTd}
          {depthTd}
          {tableTd}
        </tr>
        {isExpanded && <tr className="exapanded_row">{renderRowSubTd}</tr>}
      </>
    );
  }, [
    isExpanded,
    index,
    expanedTd,
    checkDiamondTd,
    availabilityTd,
    diamondImageTd,
    shapeTd,
    sizeTd,
    colorTd,
    clarityTd,
    cutTd,
    polishTd,
    symmTd,
    flrIntensTd,
    labTd,
    labReportNoTd,
    discTd,
    priceTd,
    tableTd,
    depthTd,
    renderRowSubTd,
    measurementTd,
  ]);

  return <> {renderRow} </>;
};

export default memo(DiamondListTableData);
