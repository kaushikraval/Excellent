import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideMessage } from '../Redux/reducers/common.slice';
function ToastMessage() {
  const { showMessage, message, varient } = useSelector(({ common }) => common);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (showMessage === true) {
      setTimeout(s => {
        dispatch(hideMessage());
      }, 3000);
    }
  }, [dispatch, showMessage]);

  return (
    <React.Fragment>
      <React.Fragment>
        <div className={showMessage === true ? 'show' : ''} id="toast_custom">
          <div
            className={
              varient === 'success' ? 'toast_wrap success' : 'toast_wrap danger'
            }
          >
            <div className="flex justify-center items-center " id="img">
              {varient === 'success' ? (
                <span className="fa-regular fa-circle-check"></span>
              ) : (
                <span className="fa-solid fa-circle-info"></span>
              )}
            </div>
            <div id="desc">{message !== undefined && message.toString()}</div>
          </div>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
}
export default ToastMessage;
