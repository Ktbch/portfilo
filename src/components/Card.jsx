

export const Card = ({ children }) => {
    return (
        <div className="bg-white text-black shadow-sm border rounded-md grid grid-cols-1 lg:grid-cols-2">
            {children}
        </div>
    )
}
