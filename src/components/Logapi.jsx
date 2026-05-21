export function Logapi({resultado, mostrar}){
    return(
        <div>
        {mostrar && ( 
            <>
             <div className="flex flex-col py-32 items-center justify-center">
                <section className='h-150'>
                <p className="text-4xl">Dados da api</p>
             <div className=" bg-neutral-800 text-white p-4 rounded-md overflow-auto max-h-160 min-w-300">
                {resultado && (<pre>{JSON.stringify(resultado, null, 2)}</pre>)}
            </div>
            </section>
            </div>
            </>
        )}
        </div>
    )
}