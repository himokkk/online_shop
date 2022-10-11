import React from 'react';

interface Props {
    name: string;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SubmitButton: React.FC<Props> = ((props: Props) => {
    return (
        <div className="bg-blue text-center bg-orange-400
            font-medium select-none rounded-md hover:bg-orange-500
            h-12 w-32 pt-3" onClick={props.onClick}
            id="Button">
            {props.name}
        </div>
    )
})

export default SubmitButton;