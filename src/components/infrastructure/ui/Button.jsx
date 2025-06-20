export default function Button({className, children, ...props}) {

    return(
        <button {...props} className={`flex justify-center items-center rounded-lg py-2.5 ${className}`}>
            {children}
        </button>
    ); 
}