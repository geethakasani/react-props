import { Component } from "react";
import "./App.css"
import imageData from "./components/DataComponent";

export default class AppClass extends Component{
  
  

  // code here
 render(){
  return(
    <div className="image-grid">
      {imageData.map((image)=>(
        <div key={image.id} className="image-container">
          <img src={image.img} alt={`Elephant ${image.id}`}/>

        </div>
      ))}

    </div>
  );
 }
}
