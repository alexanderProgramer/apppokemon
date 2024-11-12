import React, { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0 , y:0});
    useEffect(() => {

        const onMouseMove = ({x, y}) => {
            //const coords = {x, y};
            console.log(coords);
            setCoords({x, y});

        }

       window.addEventListener('mouseover', onMouseMove)

        return () => {
            window.removeEventListener('mouseover', onMouseMove)
        }
    }, [])

    return (
        <>
        <h3>Usuario ya Existe</h3>
        {JSON.stringify(coords)}
        </>
    )
}