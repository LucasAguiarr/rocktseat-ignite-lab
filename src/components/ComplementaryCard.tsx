import { CaretRight, IconProps } from 'phosphor-react';
import { HTMLProps } from 'react';

interface IComplementaryCardProps extends HTMLProps<HTMLAnchorElement> {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

export function ComplementaryCard({
  title,
  description,
  icon: Icon,
}: IComplementaryCardProps) {
  return (
    <a className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors cursor-pointer">
      <div className="bg-green-700 h-full p-6 flex items-center">
        <Icon size={40} />
      </div>
      <div className="w-full py-6 leading-relaxed">
        <strong className="text-2xl">{title}</strong>
        <p className="text-sm text-gray-200 mt-2">{title}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
