export default function LayoutComponent({children}){



    const [topLeftCorner,header,leftAside,main]=children;



    return(
        <div className="" >
            <div className="flex mb-1">

                <div className="w-1/5 ">
                    {topLeftCorner}
                </div>

                <div className="w-4/5 bg-gray-50" >
                    {header}
                </div>

            </div>


            <div className="flex">
                
                <div className="w-1/5 h-screen bg-gray-50">
                    {leftAside}
                </div>

                <div className="w-4/5 h-screen">
                    {main}
                    
                </div>

            </div>


        </div>
    )


}

{/* <div className="shape right-shape" style={{position: "absolute",
        width:" 300px",
        height: "300px",
        borderRadius: "50%",
        backgroundColor: "#336699", top: "50%",
        right: "-150px"}}></div> */}