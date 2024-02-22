
interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return (
    <div
      className={`flex w-fit p-3 text-lg font-bold text-Dark rounded-lg cursor-pointer bg-Yellow`}
    >
      {children}
    </div>
  );
}