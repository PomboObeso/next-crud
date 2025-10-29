import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteAlterado?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id 
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id} className="mb-4"/>
            ) : false }
            <Entrada 
                texto="Nome" 
                valor={nome} 
                valorAlterado={setNome}
                className="mb-4"
            />
            <Entrada 
                texto="Idade"
                tipo="number" 
                valor={idade} 
                valorAlterado={setIdade}
            />
            <div className="flex justify-end mt-3">
                <Botao className="mr-2" onClick={() => props.clienteAlterado?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}> Cancelar </Botao>
            </div>
        </div>
    )
}