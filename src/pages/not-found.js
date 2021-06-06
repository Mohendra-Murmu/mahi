import { Button } from "@material-ui/core";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
export default function NotFound(){
    useEffect(() => {
            document.title = 'Not Found ! - Mohendra Murmu';
        }, []);
    return (        
        <div>
        <h1>404</h1>
            <p>The Page You are looking for is not Found.</p>
        <Link to='/'>
        <Button contain color="primary">
            Back to Home
        </Button>
        </Link>
</div>
    );
}