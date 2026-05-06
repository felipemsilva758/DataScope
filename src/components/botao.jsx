import { Button } from "./ui/button";
import { useRef, useState } from "react";

export function Botao({setResultado, setMostrar}) {
    const inputRef = useRef()

    const [file, setFile] = useState(null)

    function abrirInput(){
        inputRef.current.click()
    }

    async function enviar() {
        if (!file) return

        const formData = new FormData()
        formData.append("file", file)

        const res = await fetch("http://127.0.0.1:8000/analisar", {method: "POST", body: formData})

        const data = await res.json()
        setResultado(data)
}

    return(
        <>
        <div className="flex gap-x-4">
            <input type="file" ref={inputRef} onChange={(e) => setFile(e.target.files[0])} className="hidden" />

            <Button onClick={abrirInput} className="text-black border-black bg-white">Adicionar arquivo .CSV</Button>

            {file && <p>{file.name}</p>}

            <Button onClick={async () => { await enviar(); setMostrar(true)}}> Enviar </Button>
            
        </div>
        </>
    )
}


