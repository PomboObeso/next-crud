import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from "react";


export default function Home() {
  const clientes = [
    new Cliente('Ana', 32, '1'),
    new Cliente('Carlos', 22, '2'),
    new Cliente('Bia', 42, '3'),
    new Cliente('Pedro', 62, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

  return (
    <div className="flex h-screen justify-center items-center bg-linear-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={() => setVisivel('formulario')} className="mb-2">Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
            <Formulario 
              cliente={clientes[0]} 
              clienteAlterado={salvarCliente}
              cancelado={() => setVisivel('tabela')}
            />
        )}
      </Layout>
    </div>
  );
}
