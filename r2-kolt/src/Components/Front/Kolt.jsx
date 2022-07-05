import { useContext } from "react";
import FrontContext from "./FrontContext";
import { useState } from "react";


function Kolt({ kolt }) {


  const { setCreateComment, setRateNow  } = useContext(FrontContext);

  const [com, setCom] = useState('');
  const [rate, setRate] = useState('5');

  
  const handleComment = () => {
    setCreateComment({com, koltId: kolt.id});
    setCom('');
}

const rateIt = e => {
  setRate(e.target.value);
  setRateNow({
      rate: parseInt(e.target.value),
      id: kolt.id
  });
}
  return (
    <li className="list-item">
      <div className="content">
        <span className="item">{kolt.code}</span>
        <span className="item"><label>last time used:</label>{kolt.time}</span>
        <span className="item"><label>total ride:</label>{kolt.km} km</span>
        <b className="ml-4">
                        {
                            kolt.rate_sum ? 'rate: ' + (kolt.rate_sum / kolt.rates).toFixed(2) : 'no rates yet'
                        }
                    </b>
                </div>
                <div className="form-group mt-3">
                    <label className="mr-2">Rate it!</label>
                    <select value={rate} onChange={rateIt}>
                        {
                            [...Array(10)].map((_, i) => <option key={i} value={10 - i}>{10 - i}</option>)
                        }
                    </select>
                </div>
        <span className="item">
          {kolt.isbusy ? (
            <div className="uzimtas">Busy</div>
          ) : (
            <div className="laisvas">Available</div>
          )}
        </span>
        <div className="form-group">

                <div className="form-group mt-3">
                    <textarea className="form-control" value={com} onChange={e => setCom(e.target.value)} rows="3"></textarea>
                </div>
                <ul className="list-group mt-2">
                    {
                    kolt.coms ? kolt.coms.slice(0, -5).split('-^o^-,').map((c, i) => <li className="list-group-item" key={i}>{c}</li>) : null
                    }
                </ul>
        </div>
        <div className="buttons2">
          <button className="btn" onClick={handleComment}>Add comment</button>
        </div>
      
    </li>
  );
}

export default Kolt;
