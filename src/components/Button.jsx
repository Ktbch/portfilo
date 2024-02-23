
export const Button = ({ children, ...props }) => {
    return (
        <button className="bg-transparent border border-white rounded-lg  p-3 mb-10 mt-10 w-[20%]" {...props}> {children}</button >
    )
}
