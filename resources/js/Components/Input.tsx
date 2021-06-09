import React, {FC, useEffect, useRef} from 'react';


interface InputProps extends React.HTMLProps<HTMLInputElement> {
    isFocused?: boolean;
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}


const Input: FC<InputProps> = ({
    className,
    isFocused,
    handleChange,
    ...props
}) => {
    const input = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

export default Input;
