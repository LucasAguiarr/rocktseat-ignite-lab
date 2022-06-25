import { HTMLProps } from 'react';
import { IconProps } from 'phosphor-react';

interface IButtonProps extends HTMLProps<HTMLAnchorElement> {
  text: string;
  variant: 'primary' | 'secondary';
  icon?: React.ComponentType<IconProps>;
}
export function Button({ icon: Icon, text, variant, ...rest }: IButtonProps) {
  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-green-500 hover:bg-green-700';
      break;
    case 'secondary':
      variantStyle =
        'text-blue-500  border border-blue-500 hover:bg-blue-500 hover:text-gray-900';
      break;
    default:
      break;
  }
  return (
    <a
      className={`p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors cursor-pointer
      ${variantStyle}`}
      {...rest}
    >
      {Icon && <Icon size={24} />}
      {text}
    </a>
  );
}
