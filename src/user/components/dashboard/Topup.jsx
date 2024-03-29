import React from 'react'

const Topup = () => {
  return (
    <div
    className="container-fluid justify-center body-bg-white  mb-5 mt-5  text-dark rounded card"
    style={{ maxWidth: 400 }}
  >
     <div className='container  '>
    <form className="p-3 fw-bolder  ">
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          PhoneNumber
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
  </div>
  )
}

export default Topup