import React from 'react'

const Histroy = () => {
  return (

    <>

    <div className='m-5  '>
      <p className="h3 text-dark card-header">Most Recent History</p>
            <table class="table table-hover  ">
            <thead>
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Txtype</th>
                <th scope="col">amount</th>
                <th scope="col">status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Airtime</td>
                <td>400</td>
                <td>paid</td>
                <td>-</td>
                
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Airtime</td>
                <td>300</td>
                <td>paid</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Airtime</td>
                <td>300</td>
                <td>pending</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
      </div>
    
          </>
  )
}

export default Histroy