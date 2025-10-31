interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: string
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cores = {
        green: 'from-green-400 to-green-600',
        blue: 'from-blue-400 to-blue-600',
        gray: 'from-gray-400 to-gray-600'
    }
    const cor = props.cor ?? 'gray'
    return (
        <button onClick={props.onClick} className={`
            bg-linear-to-r ${cores[cor]} text-white
            px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}