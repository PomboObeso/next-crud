import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import useClientes from "../../hooks/useClientes";


export default function Home() {

  const {
    cliente, 
    clientes,
    clienteSelecionado, 
    excluirCliente, 
    novoCliente, 
    salvarCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes();
 
  return (
    <div className="flex h-screen justify-center items-center bg-linear-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novoCliente} cor="green" className="mb-2">Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
            <Formulario 
              cliente={cliente} 
              clienteAlterado={salvarCliente}
              cancelado={exibirTabela}
            />
        )}
      </Layout>
    </div>
  );
}
