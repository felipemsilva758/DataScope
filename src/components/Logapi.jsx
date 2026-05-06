import { useState } from "react";

export function Logapi({resultado, mostrar}){
    return(
        <div>
        {mostrar && ( 
             <div className=" bg-zinc-700 text-white p-4 rounded-md overflow-auto max-h-160 min-w-300">
                {resultado && (<pre>{JSON.stringify(resultado, null, 2)}</pre>)}
            </div>
        )}
        </div>
    )
}