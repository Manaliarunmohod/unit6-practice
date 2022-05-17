import { useState } from 'react'

import './App.css'

function App() {
 const [data,setData]=useState({
   first_name:"",
   mobile:""
 })

 const [FData, setFData] = useState([]);

const handleChange=(e)=>{
  
  setData({
    ...data,
    [e.target.name]: e.target.value
  })

}

const handleSubmit=(e)=>{
e.preventDefault();
setFData([
  ...FData,
  data
]);

}

// const HandleDelete=()=>{
// FData.splice(e,1);
// setFData(FData)
// }

console.log("FData", FData)

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>

<input placeholder="Enter name" type="text" name="first_name" onChange={handleChange}/>
<input placeholder="Enter mobile number" type="Number" name="mobile"  onChange={handleChange}/>
<input type="submit" value="submit" />
    </form>

    <table style={{border: "1px solid black", margin: "20px auto"}}>
        <thead >
          <tr>
            <th>First Name</th>
            <th>Mobile Number</th>
          
          </tr>

        </thead>
        <tbody>
          {
            FData.map((el) => {

              return (<div>
                <tr>
                  <td>{el.first_name}</td>
                  <td>{el.mobile}</td>
                 
                 
                </tr>
                 <button onClick={HandleDelete}>Delete</button>
                </div>
              )

            })
          }

        </tbody>

      </table>
    </div>
  )
}

export default App
