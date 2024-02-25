import { useRouteError } from "react-router-dom";


const Error=()=>{
    let err=useRouteError();
    console.log(err);
    return(<>
<h1>Error</h1>
<h3>{err.status}</h3>
</>
    );
};
export default Error;