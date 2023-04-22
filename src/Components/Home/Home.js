import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";

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
                  clearf()
                }
            
        } catch (error) {
            console.log(`something went wrong!`);
            console.log(error);
        }
    }

    const clearf = () =>{
      // settitle();
      // setdescription('');
      // window.location.reload();
      diplaytodo();
    }

    
//--------------------------------


    //display message
    const [display,setdisplay] = useState([])

    const diplaytodo = async() => {

      const res =  await axios.get("http://localhost:5000/api/displayTodo")
      const final = res.data;
      
      if (final) {
        setdisplay(final)
        console.log(final);
      }
      
    }

    useEffect(() => {
      diplaytodo();

    },[])


//-------------------------------------------------
//delete message
// const {id} = useParams();
const deleteTodo = async(id) => {

  const res =  await axios.delete(`http://localhost:5000/api/deleteTodo/${id}`)
  clearf();
  console.log(res.id);

}

//----------------------------------------------------



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
       {
        display.map((dis) => {

          return (
            <div className="card" key={dis._id}>
                <div className="title">
                    <p>{dis.title}</p>
                    <p><FaPencilAlt size={19}/>&nbsp;&nbsp;&nbsp;&nbsp;<FaRegTrashAlt size={19} onClick={() => deleteTodo(dis._id)}/></p>
                </div>
                <p className="des">{dis.description}</p>
            </div>
          )
          })
        }        
      </div>



    </div>
  );
}

export default Home;
