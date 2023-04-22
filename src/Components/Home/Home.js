import React, { useState } from "react";
import "./Home.css";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";

function Home() {

    //create
    const [title,settitle] = useState("");
    const [description,setdescription] = useState("");

    const createtodo = async(event) => {
           event.preventDefault();                         

        try {
            const card = {title,description}
            const data = await axios.post("http://localhost:5000/api/createTodo", card)
                if (data) {
                   console.log(data.data); 
                   console.log(`message created successfully`);
                   settitle(" ");
                   setdescription(" ");
                }
            
        } catch (error) {
            console.log(`something went wrong!`);
            console.log(error);
        }
    }




  return (
    <div>
      <div className="div_center">
        <h2>Pandit Utkarsh Myways Task</h2>
      </div>

      <div className="btn_center">
         <input type="text" name="title" id="input" placeholder="Title" onChange={(e) => settitle(e.target.value)}/>
         <input type="text" name="description" id="input" placeholder="Description" onChange={(e) => setdescription(e.target.value)}/>
         <button className="btn_add" onClick={createtodo}>Add&nbsp;<FaPlus size={19}/></button>
      </div>

      <div className="div_flex">
      
        <div className="card">
            <div className="title">
                <p>Title</p>
                <p><FaPencilAlt size={19}/>&nbsp;&nbsp;&nbsp;&nbsp;<FaRegTrashAlt size={19}/></p>
            </div>
            <p className="des">description</p>
        </div>

      </div>

    </div>
  );
}

export default Home;
