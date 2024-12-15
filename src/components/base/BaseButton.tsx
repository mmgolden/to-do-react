import { PropsWithChildren } from "react";

interface Props {
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function BaseButton({
  type = "button",
  onClick = undefined,
  children
}: PropsWithChildren<Props>) {
  return (
    <button
      type={type}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
