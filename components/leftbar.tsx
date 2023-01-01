export const Leftbar = (props: {
  //TypeScript do its stuff
  nowtheme: boolean;
}) => {
  return (
    <div className="w-1/5  grid gap-10 grid-cols-6 grid-rows-5">
      
        <div className={"border-4 p-2  ml-4 col-span-5  border-black "+(props.nowtheme === true ?'text-black':'text-white')}>A day to remember</div>
        <div className={"border-black border-r-4 "}></div>

      
        <div className={"border-4 p-2 ml-4 col-span-5   border-black "+(props.nowtheme === true ?'text-black':'text-white')}>Cool</div>
        <div className={"border-black border-r-4"}></div>

      
        <div className={"border-4 p-2 ml-4 col-span-5 border-black "+(props.nowtheme === true ?'text-black':'text-white')}>So so</div>
        <div className={"border-black border-r-4"}></div>

      
        <div className={"border-4 p-2 ml-4 col-span-5 border-black "+(props.nowtheme === true ?'text-black':'text-white')}>Blue</div>
        <div className={"border-black border-r-4"}></div>

      
        <div className={"border-4 p-2 ml-4 col-span-5  border-black "+(props.nowtheme === true ?'text-black':'text-white')}>Better forget</div>
        <div className={"border-black border-r-4"}></div>

    </div>
  );
};
