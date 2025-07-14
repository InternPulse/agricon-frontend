
export default function Button({ className, type, children }) {
    return (
        <button className={className} type={type ? type : ""}>{children}</button>
    );
}