
export const Button = ({ children, ...props }) => {
    return (
        <button className="bg-transparent border-white rounded-sm p-3 w-[50%]" {...props}> children</button >
    )
}
