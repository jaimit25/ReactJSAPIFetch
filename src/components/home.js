import React ,{useState} from 'react'
import axios from 'axios';
import "./App.css";

export default function Home() {

const [expns,setExpns] = useState([]);
    const getData = () => {
        axios.get('http://localhost:3000/expenses')
            .then(res => {
                // console.log(res.data['expenses'][0]['amount']);
                console.log(res.data['expenses']);
                // setExpns(res.data['expenses']);
                setExpns(res.data.expenses);
            });
    }

    const postData = () => {
        axios.post('http://localhost:3000/expense',{
            amount: "1,00,000",
            category: "25th feb",
            date: "31st Feb",
            description: "trip may exist one day",
            trip: "Dubai"
        }).then();
           
    }


  return (
    <div className='body'>
        <p>WELCOME TO HOME PAGE</p>
        <button className="btn" onClick={getData}>Get Data</button>
        <button className="btn" onClick={postData}>post Data</button>
        <div>
            {expns.map(exp => {
                return <div className="box">
                    <p>{exp.trip}</p>
                    <p>{exp.date}</p>
                    <p>{exp.amount}</p>
                    <p>{exp.category}</p>
                    <p>{exp.description}</p>
                </div>
            })}
        </div>
    </div>
  )
}

//SHORTCUTS
// rcc
// rce
// rfc
// rfce
// pta→	PropTypes.array
// ptar→	PropTypes.array.isRequired
// ptb→	PropTypes.bool
// ptbr→	PropTypes.bool.isRequired
// ptf→	PropTypes.func
// ptfr→	PropTypes.func.isRequired
// ptn→	PropTypes.number
// ptnr→	PropTypes.number.isRequired
// pto→	PropTypes.object
// ptor→	PropTypes.object.isRequired
// pts→	PropTypes.string
// ptsr→	PropTypes.string.isRequired
// ptnd→	PropTypes.node
// ptndr→	PropTypes.node.isRequired
// ptel→	PropTypes.element
// ptelr→	PropTypes.element.isRequired
// pti→	PropTypes.instanceOf(name)
// ptir→	PropTypes.instanceOf(name).isRequired
// pte→	PropTypes.oneOf([name])
// pter→	PropTypes.oneOf([name]).isRequired
// ptet→	PropTypes.oneOfType([name])
// ptetr→	PropTypes.oneOfType([name]).isRequired
// ptao→	PropTypes.arrayOf(name)
// ptaor→	PropTypes.arrayOf(name).isRequired
// ptoo→	PropTypes.objectOf(name)
// ptoor→	PropTypes.objectOf(name).isRequired
// ptsh→	PropTypes.shape({ })
// ptshr→	PropTypes.shape({ }).isRequired
// ptany→	PropTypes.any
// ptypes→	static propTypes = {}