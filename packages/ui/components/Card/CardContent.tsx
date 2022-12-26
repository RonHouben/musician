import Article from '../Typography/Article';

interface Props {
  children?: React.ReactNode;
}

export default function CardContent({ children }: Props) {
  return <div className="mx-3 my-2 md:h-1/2">{children}</div>;
}
