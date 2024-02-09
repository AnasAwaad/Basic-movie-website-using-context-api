import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: IProps) => {
  return (
    <button {...rest} className="bg-white rounded-md text-black px-4 py-2 font-semibold hover:bg-gray-400 transition-all duration-200">
      {children}
    </button>
  );
};
export default Button;
