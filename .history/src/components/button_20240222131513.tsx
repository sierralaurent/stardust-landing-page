
interface ButtonProps {
  backgroundColor: string;
  children: string;
}

export default function Button({ backgroundColor, children }: ButtonProps) {
  return (
    <div
      className={`flex w-fit text-white p-3 text-lg rounded-lg cursor-pointer z-50 bg-LightPurple`}
    >
      {children}
    </div>
  );
}