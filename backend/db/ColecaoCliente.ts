import firebase from "../config";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) : Cliente {
            const dados = snapshot?.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
        }
    }
    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id) {
            await this.#colacao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.#colacao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        this.#colacao().doc(cliente.id).delete
        return
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.#colacao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    #colacao() {
        return firebase.firestore().collection('clientes')
            .withConverter(this.#conversor)
    }
}