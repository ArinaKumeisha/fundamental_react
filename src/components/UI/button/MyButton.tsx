import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from "./MyButton.module.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export const MyButton = ({ ...restProps}:DefaultButtonPropsType)=> {
  return (
    <button className={s.btn} {...restProps}>
    </button>
  );
};

