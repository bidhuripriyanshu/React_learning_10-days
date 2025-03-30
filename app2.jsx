import React, { use, useEffect, useState } from "react";
import axios from "axios";


const App = () => {
  


    const [data,setData] = useState([]);

   const getDate = async () =>{
      const response =  await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
      //const data = response.data;
      setData(response.data);
      console.log(data[0].download_url);
 }
 
 useEffect(() => {
    getDate();
 }, []);
 
 

   return (
     <div class = "p-10">
       {/* <button  onClick={getDate} className=" px-4 py-3 text-xl font-semibold rounded bg-sky-400 rounded active:scale-95">Get Data</button> */}
       
        <div className = "p-10 bg-black-400"> 
            {data.map(function(elem, idx) {
               return <div key={idx} className="bg-sky-40 text-white items-center">
                   <img src={elem.download_url} alt="" />
                   <h1>{elem.author}</h1>
               </div>;
            })}
        </div>
     </div>
   )
};
export default App
