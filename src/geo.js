import React from 'react';
import { useLocation } from 'react-use';
const Geo = () => {

    const location = useLocation();
    console.log(location);

    const { hash, host, hostname, href, length, origin, pathname, port, protocol, search, state, trigger } = location;
    return (
        <div>
            <pre>
                {JSON.stringify(location,null,2)};
            </pre>

            <div> hashid ={hash}</div>
            <div>   {host}</div>
            <div>{href}</div>
            <div>  {origin}</div>
            <div>  {pathname}</div>
            <div> {port}</div>
            <div>    {protocol}</div>
            <div>    {search}</div>
            <div>  {state}</div>
            <div>      {trigger}</div>











        </div>

    )
}
export default Geo;