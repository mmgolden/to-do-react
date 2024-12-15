import { PropsWithChildren } from "react";

function BaseCardHeader(props: PropsWithChildren) {
  return <div className="px-4 py-5 sm:px-6">{props.children}</div>;
}

function BaseCardContent(props: PropsWithChildren) {
  return <div>{props.children}</div>;
}

export default function BaseCard(props: PropsWithChildren) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      {props.children}
    </div>
  );
}

BaseCard.Header = BaseCardHeader;
BaseCard.Content = BaseCardContent;
