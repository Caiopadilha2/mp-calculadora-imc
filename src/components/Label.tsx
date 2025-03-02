import { LabelHTMLAttributes } from "react";

function Label({children, ...props}: LabelHTMLAttributes<HTMLLabelElement> & {children: React.ReactNode} ) {
  return (
    <label htmlFor="" className="block text-neutral-600 font-light text-sm" {...props}>{children}</label>
  )
}

export default Label;