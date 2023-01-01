import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const Mainpage = (props: {
  //TypeScript do its stuff
  nowtheme: boolean;
  theme: (arg0: boolean) => void;
}) => {
  useEffect(() => {
    //console.log(props.nowtheme) //Log everytime theme changed
  }, [props.theme]);
  return (
    <div>
      <div className="flex pt-4 pl-4 justify-end backdrop-blur-sm">
        <button
          type="button"
          onClick={() => {
            props.theme(false); //setting theme
          }}
          //nowtheme indicate which mode user on? light or dark
          //check value of props.nowtheme, condition styling
          className={
            props.nowtheme === true
              ? "bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mx-2"
              : " bg-black text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mx-2"
          }
        >
          Dark Mode
        </button>
        <button
          type="button"
          onClick={() => {
            props.theme(true);
          }}
          className={
            props.nowtheme === false
              ? "bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded mx-2"
              : "bg-white  text-black font-semibold text-black py-2 px-4 border border-white  rounded mx-2"
          }
        >
          Light Mode
        </button>
      </div>
      
      <div className=" bg-center  w-full h-24 mt-3 mb-5 ">
        {/*  backdrop-blur-sm */}
        <div className={"w-full h-full   flex justify-center items-center border-t-2 " + (props.nowtheme === true ? 'border-black' : 'border-white')}>
          <h1 className={"font-mono text-5xl font-bold underline text-center "+(props.nowtheme === true ? 'text-black' : 'text-white')}>
            HOW WAS YOUR DAY?
          </h1>
        </div>

      </div>
    </div>
  );
};
