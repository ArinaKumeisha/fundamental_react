import React, {DetailedHTMLProps, ForwardedRef, InputHTMLAttributes} from 'react';
import style from './MyInput.module.css'


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const MyInput = React.forwardRef((props: DefaultInputPropsType, ref:ForwardedRef<any>)=> {
  return (
    <input ref={ref} {...props} className={style.myInput}/>

  );
});

export default MyInput;