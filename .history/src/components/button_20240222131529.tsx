
interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return (
    <div
      className={`flex w-fit text-white p-3 text-lg rounded-lg cursor-pointer z-50 bg-LightPurple`}
    >
      {children}
    </div>
  );
}