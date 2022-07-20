import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

function  ChangePasswordModal({
  isChangePasswordActive,
  clickAction,
  oldpassword,
  newpassword,
  confirmnewpassword,
  handleChangeAction,
  handleSubmitAction,
  error,
  handleOnBlurAction,
  submitted,
  loading
}) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
 return (
  <Modal show={isChangePasswordActive} onHide={() => clickAction()}>
    <Modal.Header closeButton>
      <Modal.Title>Change Password</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form autoComplete="off">
          <div className="form-group">
            <label className="form-label" htmlFor="oldpassword">Old Password</label>
            <input type="password" className="form-input" name="oldpassword" value={oldpassword} onChange={handleChangeAction} />
            {submitted && !oldpassword
              && <div className="text-danger">Please enter your old password</div>
            }
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="newpassword">New Password</label>
            <input type="password" className="form-input" name="newpassword" value={newpassword} onChange={handleChangeAction} />
            {submitted && !newpassword
              && <div className="text-danger">Please enter new password</div>
            }
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="confirmnewpassword">Confirm Password</label>
            <input type="password" className="form-input" name="confirmnewpassword" value={confirmnewpassword} onChange={handleChangeAction} onBlur={handleOnBlurAction}/>
            {error && (<div className="text-danger">{error}</div>)}
            {submitted && !confirmnewpassword
              && <div className="text-danger">Please confirm new password</div>
            }
          </div>
        </form>
    </Modal.Body>
    <Modal.Footer>
    <div className="modal__actions">
      <button type="button" className="btn btn-outline-secondary" onClick={() => clickAction()}>Close</button>
      <button type="button" onClick={() => handleSubmitAction()} disabled={loading} className="btn btn-primary">Submit</button>
    </div>
    </Modal.Footer>
  </Modal>
  );
}

export default ChangePasswordModal;
