import { PropsWithChildren } from "react";

type LayoutComponteProps = PropsWithChildren<{}>;

export const LayoutComponet = (props: LayoutComponteProps) => {
  const { children } = props;
  return <div>{children}</div>;
};
