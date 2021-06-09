import React, {FC} from 'react';

interface CheckboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'className' | 'onChange' | 'value'> {
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    value: CheckboxProps['checked']
}

const Checkbox: FC<CheckboxProps> = ({
    value,
    handleChange,
    ...props}) => {

    return (
        <input
            type="checkbox"
            {...props}
            checked={value}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={(e) => handleChange(e)}
        />
    );
}

export default Checkbox;
