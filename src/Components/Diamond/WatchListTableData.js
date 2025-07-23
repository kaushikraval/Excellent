import React, { useCallback, useMemo } from 'react';
import { Form } from 'react-bootstrap';
import NoImageAvailable from '../../Assets/Images/notfound2.png';
import { Link } from 'react-router-dom';

export default function WatchListTableData({
  currentData,
  onSelectDiamond,
  diamondType,
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
          {currentData?.map((x, i) => {
            return (
              <WatchListItemContainer
                {...x}
                key={i}
                index={i}
                row={x}
                diamondType={diamondType}
                onSelectDiamond={onSelectDiamond}
                handleImageError={handleImageError}
              />
            );
          })}
        </tbody>
      </table>
    );
  }, [currentData, onSelectDiamond, diamondType, handleImageError]);
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
  handleImageError,
  Weight,
  Color,
  Clarity,
  Cut,
  Polish,
  Symm,
  FlrIntens,
  Lab,
  Lab_Report_No,
  Cost_Discount,
  Cost_Amt,
  Measurement,
  Table_Diameter_Per,
  Total_Depth_Per,
  onSelectDiamond,
  Stone_No,
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
  }, [Stone_Img_url, Stone_No, diamondType, handleImageError]);
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
  const measurementTd = useMemo(() => {
    return <td>{Measurement ? `$${Measurement}` : '$0'}</td>;
  }, [Measurement]);
  const tableTd = useMemo(() => {
    return <td>{Table_Diameter_Per ? `${Table_Diameter_Per}%` : '0.00%'}</td>;
  }, [Table_Diameter_Per]);
  const depthTd = useMemo(() => {
    return <td>{Total_Depth_Per ? `${Total_Depth_Per}%` : '0.00%'}</td>;
  }, [Total_Depth_Per]);
  const renderRow = useMemo(() => {
    return (
      <>
        <tr key={index}>
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
      </>
    );
  }, [
    index,
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
    labReportNoTd,
    discTd,
    labTd,
    priceTd,
    measurementTd,
    tableTd,
    depthTd,
  ]);

  return <> {renderRow} </>;
};
