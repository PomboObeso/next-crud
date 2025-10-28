import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";


export default function Home() {
  const clientes = [
    new Cliente('Ana', 32, '1'),
    new Cliente('Carlos', 22, '2'),
    new Cliente('Bia', 42, '3'),
    new Cliente('Pedro', 62, '4')
  ]
  return (
    <div className="flex h-screen justify-center items-center bg-linear-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  );
}
