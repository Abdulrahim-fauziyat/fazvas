import React from 'react'

const Adtopup = () => {
  return (
    <div
    className="container justify-center  addash border-none mb-5 mt-5  text-white rounded"
    style={{ maxWidth: 400 }}
  >
    
    <form className="p-3 fw-bolder ">
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          phoneNumber
        </label>
        <input
          type="phoneNumber"
          className="form-control"
          id="phonenumber"
          name="phoneNumber"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          type="Amount"
          className="form-control"
          id="amount"
          name="Amount"
        />
      </div>
      <div className="mb-3">
        <label htmlFor=" Network" className="form-label">
          Network
        </label>
        <input
          type=" Network"
          className="form-control"
          id=" Network"
          name="Network"
        />
      </div>

      <button type="submit" className="btn btn-primary fw-bold ">
       Recharge
      </button>
    </form>
  </div>
  )
}

export default Adtopup