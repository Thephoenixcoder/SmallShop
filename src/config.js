//connect for firebase
import firebase from "@firebase/app";
import  '@firebase/database'




const config = {
    apiKey: "AIzaSyC81gREAkKg_XjICuyWMK-WLgtzp7m04x4",
    authDomain: "smallshop-f5a4e.firebaseapp.com",
    databaseURL: "https://smallshop-f5a4e.firebaseio.com"
  };
  firebase.initializeApp(config);

  // firebase.database().ref('Categories/cat2').set(
  //   {
  //     Name:'Beverages',
  //     url:'https://image.flaticon.com/icons/svg/1153/1153111.svg'
  //   }
  // ).then(()=>{
  //       console.warn('success')
  // }).catch(()=>{
  //   console.warn('not success')
  // })
  
  export default firebase;