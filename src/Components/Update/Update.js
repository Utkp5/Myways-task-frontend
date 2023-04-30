import React, { useEffect } from "react";
import "../Home/Home.css";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";
import { useState } from "react";
import { useParams } from 'react-router-dom';

// Notify.success('Sol lucet omnibus');

// const updateTodo = async() => {
    
//     const res = await axios.put("http://localhost:5000/api/updateTodo/:id")
// }


function Update() {
  
  const {id} = useParams();
  const [singled, setsingled] = useState({});

  const singledisplay = async() => {

      const res = await axios.get(`https://zany-jade-reindeer-sari.cyclic.app/api/displaySingleTodo/${id}`);
      const final = res.data;
      console.log(final);
      setsingled(final);
      console.log(singled.title);

  }

  useEffect(() => {
  singledisplay();
  },[]);





  return (
    <div>
    
        <div className="div_center">
          <h2>Pandit Utkarsh Myways Task</h2>
        </div>

        <div class="block">
            <p>no:{singled.title}</p>
            <label htmlFor="Title" className="label1">Title : &nbsp;&nbsp;<input type="text" className="input-res" /></label><br />
            <label htmlFor="description" className="label2">Description :&nbsp;&nbsp;<textarea name="description"  cols="50" rows="10" className="input-res1"></textarea></label>
        </div>


    </div>
  );
}

export default Update;
