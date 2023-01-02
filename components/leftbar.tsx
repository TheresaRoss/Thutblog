export const Leftbar = (props: {
  //TypeScript do its stuff
  nowtheme: boolean;
}) => {
  return (
    <div className="relative top-[15%] w-5/6 h-[80%] ml-10  grid gap-7 grid-cols-6 grid-rows-5">
      <div className="bg-transparent  p-1 col-span-6">
        <div
          className={
            "w-full h-full hover:scale-110 rounded-lg bg-gradient-to-l flex items-center from-bgEx-1 col-span-6  " +
            (props.nowtheme === true
              ? "text-white to-bgEx-base2 via-bgEx-1"
              : "text-black to-bgEx-base")
          }
        >
          <p className='pl-3'>A da</p>y to remember
        </div>
      </div>
      <div className="bg-transparent p-1 col-span-6">
        <div
          className={
            "w-full h-full hover:scale-110 bg-gradient-to-l rounded-lg flex items-center from-bgEx-2  " +
            (props.nowtheme === true
              ? "text-white to-bgEx-base2 via-bgEx-2"
              : "text-black to-bgEx-base")
          }
        >
          <p className='pl-3'>Cool</p>
        </div>
      </div>
      <div className="bg-transparent p-1  col-span-6">
        <div
          className={
            "w-full h-full hover:scale-110 bg-gradient-to-l rounded-lg flex items-center from-bgEx-3  " +
            (props.nowtheme === true
              ? "text-white to-bgEx-base2 via-bgEx-3"
              : "text-black to-bgEx-base")
          }
        >
          <p className='pl-3'>So s</p>o
        </div>
      </div>
      <div className="bg-transparent p-1  col-span-6">
        <div
          className={
            "w-full h-full hover:scale-110 bg-gradient-to-l rounded-lg flex items-center from-bgEx-4   " +
            (props.nowtheme === true
              ? "text-white to-bgEx-base2 via-bgEx-4"
              : "text-black to-bgEx-base")
          }
        >
          <p className='pl-3'>Blue</p>
        </div>
      </div>

      <div className="bg-transparent p-1 col-span-6">
        <div
          className={
            " bg-gradient-to-l hover:scale-110 rounded-lg  flex items-center   from-bgEx-5 w-full h-full " +
            (props.nowtheme === true
              ? "text-white  to-bgEx-base2 via-bgEx-5"
              : "text-black to-bgEx-base")
          }
        >
          <p className='pl-3'>Bett</p>er forget
        </div>
      </div>
    </div>
  );
};
