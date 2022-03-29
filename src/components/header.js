import React, {useState, useEffect} from "react";
import 'bulma/css/bulma.min.css'
import image from "../images/ss.jpg"
import firebase from "./firebase"



function Header() {
    const [state, setState] = useState();
    const [inputValue, setInputValue] = useState();
    const [pass, setPass] = useState();
    const [confirm, setComfirm] = useState(false);
   
    useEffect(() => {
      const getData = firebase
        .database()
        .ref("data/FXXvUataYhbhVpWyu8oBnmA7EMx1");
      getData.on("value", (snapshot) => {
        const data = snapshot.val();
        const dataList = [];
        for (let id in data) {
          dataList.push({id, ...data[id] });
        }
        setState(dataList);
        
      });  
        const getD = firebase.database().ref('order/D');
        getD.on('value', (snapshot)=>{
            const d = snapshot.val();
            if(pass == d){
                setComfirm(true)
            }
            
        })  
    }, []);


    const updateProduct = (a) =>{
        firebase.database().ref(`data/FXXvUataYhbhVpWyu8oBnmA7EMx1/${a.id}`).update({vending:"on"})
    }
    const offProduct = (a) =>{
        firebase.database().ref(`data/FXXvUataYhbhVpWyu8oBnmA7EMx1/${a.id}`).update({vending:"off"})
    }
    const updateStock = (a) =>{
        firebase.database().ref(`data/FXXvUataYhbhVpWyu8oBnmA7EMx1/${a.id}`).update({stock: parseInt(inputValue)}).then((response) => {
            alert("Амжилттай")
        })
    }



   

    


    return ( 
   <div className="container m-4">
    <div class="columns">
           {state? state.map((element, index)=> (
               <div className="column">
               <h5>Product {element.id}</h5>
               <form className="">
                   <input onInput={e => setInputValue(e.target.value)} className="input is-success"></input>
                   
               </form>
               <button onClick={(e) => updateStock(element)} className="button is-danger mt-2">submit</button> 
            <div className="button is-link is-block mt-4" onClick={(e) => updateProduct(element)}>on</div>
            <div className="button is-link is-block mt-4" onClick={(e) => offProduct(element)}>off</div>
           </div>
           )):""}
        </div> 
   
   </div>
);
}

export default Header;