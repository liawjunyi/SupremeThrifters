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
  

  }
})

  const getData = async () => {


    const liked_list = collection(db, 'users', `${uid}`, 'liked');
    const querySnapshot = await getDocs(liked_list);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    // console.log("reserved list is " + reserved_list)

 

  };
  
  

  const likeListing = async (e) => {

  e.preventDefault();
  const docRef = doc(db, `users/${uid}/liked`, product_name);
  await setDoc(docRef, {
    
    name: product_name,
    price: product_price,
    photo_url: product_img,
    id: product_id
    
  }).then( () => {
    alert(product_name + " has been added to your liked page!")
  })
  .catch( () => {alert("Liked unsuccessful")})
  

  };
  
  
  


  return (
    <button
      onClick={likeListing}
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
