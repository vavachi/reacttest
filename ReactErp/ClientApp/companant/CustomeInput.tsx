export function CustomeInput(props: any) {

    const { onChange, value ,name} = props;

    return <>
        <input
            type={'text'}
            autoComplete="off"
            placeholder={'xxx'}
            name={name}
            id={name}
            onChange={onChange}
            value={value}
        />
    </>
}