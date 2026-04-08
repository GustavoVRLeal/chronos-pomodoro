type DefaultInputProps = {
    id: string
}& React.ComponentProps<'input'>

export function DefaultInput({ type }: DefaultInputProps) {
    return (
        <>
            <label htmlFor="task">task</label>
            <input id='meuInput' type={type} />
        </>
    )
}

