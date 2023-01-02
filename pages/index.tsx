import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Mainpage } from "../components/mainpage";
import { Leftbar } from "../components/leftbar";
import FullCalendar from "../components/calender";
import Calendar from "../components/calender";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [theme,setTheme] = useState(true)
  const [name,setName] = useState('w-screen h-screen bg-gradient-to-br from-bgtype2-b-1 via-bgtype2-b-3 to-bgtype2-b-2')

  const selectedtheme = (data:boolean)=>{
    if(data){
        setTheme(data)
        setName('w-screen h-screen bg-gradient-to-br from-bgtype2-b-1 via-bgtype2-b-3 to-bgtype2-b-2 ')
    }
    else{
      setTheme(data)
      setName('w-screen h-screen bg-gradient-to-br from-bgtype1-b-1 via-bgtype1-b-3 to-bgtype1-b-2')
  }
  
}
 

  return (
    <div className={name}>
    <Mainpage theme={selectedtheme} nowtheme={theme}/>
   
    <div className=" h-[60%] w-full grid gap-1 grid-cols-12 grid-rows-1">
    <div className="col-span-2  "> 
      <Leftbar nowtheme={theme}/>
    </div>
    <div className="col-span-1">

    </div>
    <div className="col-span-6">
    <Calendar/>
    </div>
    </div>
    
   
    
  
    </div>
  );
}
