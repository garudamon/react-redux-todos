import { ReactNode } from "react";

type ButtonControlType = {
  children: ReactNode;
  type: string;
  className: string;
  onClick?: () => {};
};

const ButtonControl = (props: ButtonControlType) => {
  const { children, className, type, ...rest } = props;
  return (
    <button
      className="px-3 py-2 rounded hover:bg-teal-600 text-white bg-teal-700"
      onClick={(e) => props?.onClick ? props?.onClick(e) : {}}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonControl;
