import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function AdditionalInfo({ stockDetailDnaList }) {
  return (
    <Container>
      <Row className="g-4">
        <Col lg={4}>
          <div className="additional_detail_box">
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Primary Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shape</td>
                  <td>
                    {stockDetailDnaList?.Shape
                      ? `${stockDetailDnaList.Shape}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Carat</td>
                  <td>
                    {stockDetailDnaList?.Weight
                      ? `${stockDetailDnaList.Weight}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>
                    {stockDetailDnaList?.Color
                      ? `${stockDetailDnaList.Color}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Clarity</td>
                  <td>
                    {stockDetailDnaList?.Clarity
                      ? `${stockDetailDnaList.Clarity}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Cut Grade</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Polish</td>
                  <td>
                    {stockDetailDnaList?.Polish
                      ? `${stockDetailDnaList.Polish}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Symmetry</td>
                  <td>
                    {stockDetailDnaList?.Symm
                      ? `${stockDetailDnaList.Symm}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Fluorescence</td>
                  <td>
                    {stockDetailDnaList?.FlrIntens
                      ? `${stockDetailDnaList.FlrIntens}`
                      : '-'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col lg={4}>
          <div className="additional_detail_box">
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Measurement Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Measurements</td>
                  <td>
                    {stockDetailDnaList?.Measurement
                      ? `${stockDetailDnaList.Measurement}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Depth</td>
                  <td>
                    {stockDetailDnaList?.Total_Depth_Per
                      ? `${stockDetailDnaList.Total_Depth_Per}%`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Table</td>
                  <td>
                    {stockDetailDnaList?.Table_Diameter_Per
                      ? `${stockDetailDnaList.Table_Diameter_Per}%`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Crown Height</td>
                  <td>
                    {stockDetailDnaList?.CrownHeight
                      ? `${stockDetailDnaList.CrownHeight}%`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Crown Angle</td>
                  <td>
                    {stockDetailDnaList?.CrownAngle
                      ? `${stockDetailDnaList.CrownAngle}°`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Pavillion Depth</td>
                  <td>
                    {stockDetailDnaList?.PavillionHeight
                      ? `${stockDetailDnaList.PavillionHeight}%`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Pavillion Angle</td>
                  <td>
                    {stockDetailDnaList?.PavillionAngle
                      ? `${stockDetailDnaList.PavillionAngle}°`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Inscription No.</td>
                  <td>
                    {stockDetailDnaList?.Laser_Inscription
                      ? `${stockDetailDnaList.Laser_Inscription}°`
                      : '-'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col lg={4}>
          <div className="additional_detail_box">
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Additional Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lab</td>
                  <td>
                    {stockDetailDnaList?.Lab
                      ? `${stockDetailDnaList.Lab}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Shade</td>
                  <td>
                    {stockDetailDnaList?.Shade
                      ? `${stockDetailDnaList.Shade}%`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Gridle Condition</td>
                  <td>
                    {stockDetailDnaList?.GirdleCon
                      ? `${stockDetailDnaList.GirdleCon}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Culet</td>
                  <td>
                    {stockDetailDnaList?.CuletSize
                      ? `${stockDetailDnaList.CuletSize}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Growth Type</td>
                  <td>
                    {stockDetailDnaList?.CVD_HPHT
                      ? `${stockDetailDnaList.CVD_HPHT}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Inclusions</td>
                  <td>
                    {stockDetailDnaList?.Table_Inclusion
                      ? `${stockDetailDnaList.Table_Inclusion}`
                      : '-'}
                  </td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>
                    {stockDetailDnaList?.Location
                      ? `${stockDetailDnaList.Location}`
                      : '-'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
