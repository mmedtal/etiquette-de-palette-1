export default function LayoutComponent({children}){



    const [topLeftCorner,header,leftAside,main]=children;



    return(
        <div>
            <div className="flex mb-1">

                <div className="w-1/5 p-2">
                    {topLeftCorner}
                </div>

                <div className="w-4/5">
                    {header}
                </div>

            </div>


            <div className="flex">
                
                <div className="w-1/5 h-screen bg-green-400">
                    {leftAside}
                </div>

                <div className="w-4/5 h-screen bg-green-800">
                    {main}
                </div>

            </div>


        </div>
    )


}