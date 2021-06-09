import React, {FC} from 'react';

interface LabelProps extends Pick<React.HTMLProps<HTMLLabelElement>, 'className'> {
    forInput: React.HTMLProps<HTMLLabelElement>['htmlFor']
    value: string
}

const Label: FC<LabelProps> = ({ forInput, value, className, children }) => {
    return (
        <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : { children }}
        </label>
    );
}

export default Label
