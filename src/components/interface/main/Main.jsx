import { Card, CardContent, CardHeader, TextField } from "@mui/material";

export default function Main(props){




    return(
        <div className="flex justify-around mt-12">
            <Card variant="outlined" className="w-5/6 h-96" elevation={12}>
                <CardHeader title="Etiquette Test" className="text-center"/>                    
                <hr />
                <CardContent>
                    <TextField variant="standard"/>
                    <TextField variant="standard" style={{marginLeft:"-20px"}}/>
                    <div className="flex justify-around">
                        <div>
                            zone text 1
                        </div>

                        <div>
                            zone text 2
                        </div>
                    </div>
                </CardContent>
                <hr />
                <br />
                <br />
                <br />
                <div className="text-center">
                    le reste..
                </div>
            </Card>
        </div>
    )
}