import {React, useState, useEffect} from "react";
import {db, auth} from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";


const Button = ({
  size,
  bold,
  type,
  handleChange,
  fontColor,
  className,
  children,
  product_price,
  product_name,
  product_img,
  product_id,
  
  
  ...props


}) => {
  bold = bold ? "font-bold" : "font-normal";
  size =
    size == "xs"
      ? "px-sm py-xs"
      : size == "sm"
      ? "px-md py-sm"
      : size == "md"
      ? "px-md py-lg"
      : "px-lg py-xl";

  
// const [products_reserved, setProductsReserved] = useState([]);
// const [products_liked, setProductsLiked] = useState([]);
const [uid, setUid] = useState('')

onAuthStateChanged(auth, async (user)=>{
  if(user){
      
      setUid(user.uid);
      console.log("UID is: " + uid + "(onauth)");
  }else{

       console.log("Signed out");
      // console.log(loggedin);

  }
})


  // ** USE THIS FOR DEBUGGING **
  // const getData = async () => {

  //   // console.log("UID is: " + uid);
  //   const reserved_list = collection(db, 'users', `${uid}`, 'reserved');
  //   const liked_list = collection(db, 'users', `${uid}`, 'liked');
  //   const querySnapshot = await getDocs(reserved_list);
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });
  //   // console.log("reserved list is " + reserved_list)

 

  // };
  
  

  const reserveListing = async (e) => {

  e.preventDefault();
  const docRef = doc(db, `users/${uid}/reserved`, product_name);
  await setDoc(docRef, {
    
    name: product_name,
    price: product_price,
    photo_url: product_img,
    id: product_id
    
  }).then( () => {
    alert(product_name + " has been added to your reserved page!")
  })
  .catch( () => {alert("Reservation unsuccessful")})
  

  };
  
  
  


  return (
    <button
      onClick={reserveListing}
      type={type}
      className={`${bold} ${size} hover:bg-secondary hover:text-white bg-primary ${fontColor} cursor-pointer uppercase rounded-md text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "px-xs py-xs",
  bold: "false",
  type: "button",
  fontColor: "text-white",
};

export default Button;
