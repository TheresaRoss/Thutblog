import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Mainpage } from "../components/mainpage";
import { Leftbar } from "../components/leftbar";


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
    <Leftbar nowtheme={theme}/>
    </div>
  );
}
