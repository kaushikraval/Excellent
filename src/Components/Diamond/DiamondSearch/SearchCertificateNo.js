import React from 'react';
import { Form } from 'react-bootstrap';
export default function SearchCertificateNo() {
  return (
    <div className="search_inner_wrap align-items-start certificate_wrapper">
      <div className="search_label search_label_large mt10">
        <h6>Stone No. / Certificate</h6>
      </div>
      <div className="search_content">
        <div className="input_box_wrapper">
          <ul>
            <li>
              <Form.Group
                className="form_group"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Control
                  type="number"
                  placeholder="Stone No. / Certificate"
                />
              </Form.Group>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
