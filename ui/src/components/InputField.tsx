import React from 'react';
import { IconType } from 'react-icons';

interface Props {
    id: string;
    placeholder: string;
    label: string;
    setFunc: Function;
    icon: IconType;
    password?: boolean;
    onChange?: Function;
}

const InputField: React.FC<Props> = ((props: Props) => {
    let type = "text";
    if(props.password) {
        type = "password";
    }

    return (
          <div>
              <label className="pl-4">{props.label}</label>
              <div className="absolute mt-[1.3rem] ml-4">
                <props.icon size="18"/>
              </div>
              <input
                  type={type} aria-label={props.label}
                  placeholder={props.placeholder}
                  onChange={(e) => props.setFunc(e.target.value)}
                  id={props.id} spellCheck='false' autoComplete='false'
                  className={"select-none block mt-1 font-sans w-[250px] h-12 pl-10 shadow appearance-none border rounded"}/>
          </div>
    )
})

export default InputField;