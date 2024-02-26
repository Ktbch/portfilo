

export const Card = ({ children }) => {
    return (
        <div className="bg-lightMode1-bgColorWhite  dark:bg-gray-100 max-h-full  p-5 lg:p-10  shadow-md rounded-md ">
            {children}
        </div>
    )
}
