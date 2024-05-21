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
