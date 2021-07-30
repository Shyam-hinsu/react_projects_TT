import react, { useEffect , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = () =>{
    const [data,setData] = useState([])
        

    useEffect(()=>{
        getCoviddata();

    });


    const getCoviddata = async () =>{ 
    const res = await fetch('https://api.covid19india.org/data.json');
    const actualData = await res.json();
    setData(actualData.statewise);


 }



return(
    <>
   <div className="table-responsive ">
   <table className="table table-dark table-striped">
       <thead>
           <tr>
               <th>STATE</th>
               <th>CONFIRMED</th>
                <th>RECOVERED</th>
                <th>DEATHS</th>
                <th>ACTIVE</th>
                <th>UPDATE</th>
            </tr>
        </thead>

               
        <tbody >

            {
                data.map((crtEle,index)=>{
                    return(
                        <tr key={index}>
                        <td>{crtEle.state}</td>
                     
                        <td>{crtEle.confirmed}</td>
                         <td>{crtEle.recovered}</td>
                         <td className="death">{crtEle.deaths}</td>
                         <td>{crtEle.active}</td>
                         <td>{crtEle.lastupdatedtime}</td>
                      
         
                 </tr>

                    )
                })
            }
      

       
       </tbody>
 
   </table>
   </div>
    </>
);


};

export default Table;