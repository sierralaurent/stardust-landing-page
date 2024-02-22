
interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return (
    <div
      className={`flex w-fit text-white p-3 text-lg font-bold text-Dark rounded-lg cursor-pointer bg-Yellow font-bold hover:scale-110 transition-transform`}
    >
      {children}
    </div>
  );
}