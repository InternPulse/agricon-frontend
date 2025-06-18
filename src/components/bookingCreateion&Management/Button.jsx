import { Children } from "react";

function Button({ children, onClick }){
    return (
        <Button
            className="px-4 py-2"
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default Button;