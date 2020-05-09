import React, { Fragment, useState, useEffect } from "react";


const ListTicks = () => {
  const [ticks, setTicks] = useState([]);

  async function getTicks() {
    
    const response = await fetch('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bqqa69frh5r9ffdhitdg',
    { json: true }, (err, res, body) => {
        if (err) {
          return console.log(err);
         }
       console.log(body.url);
       console.log(body.explanation);
    });
    const tickArray = await response.json();
    setTicks(tickArray);
  }

  useEffect(() => {
    getTicks();
  }, []
);

return (
  <Fragment>
    {" "}
    <table className="table mt-5">
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ticks.map((tick) => (
          <tr key={tick.description}>
            <td>{tick.description}</td>
            <td>{tick.displaySymbol}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>
);

}

export default ListTicks;
