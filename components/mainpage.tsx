
import { useState, useEffect } from "react";

export const Mainpage = (props: { //TypeScript do its stuff
  nowtheme: boolean; theme: (arg0: boolean) => void; 
}) => {
  useEffect(()=>{
    console.log(props.nowtheme) //Log everytime theme changed
  },[props.theme])  
  return(
    <div>
      <h1 className="font-mono text-black text-3xl font-bold underline">
        HIIIIIIIIIIIII
      </h1>
      <button
        type="button"
        onClick={() => {
          props.theme(false); //setting theme
        }}
        //check value of props.nowtheme, condition styling
        className={props.nowtheme === true ? "bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mx-2"
      : " bg-black text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mx-2"}
      >
        Dark Mode
      </button>
      <button
        type="button"
        onClick={() => {
          props.theme(true);
        }}
        className={props.nowtheme === false ? "bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded mx-2"
      : "bg-white  text-white font-semibold text-black py-2 px-4 border border-white  rounded mx-2"}
      >
        Light Mode
      </button>
    </div>
    )
}
