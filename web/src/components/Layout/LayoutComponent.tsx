import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

type LayoutComponteProps = PropsWithChildren<{}>;

export const LayoutComponet = (props: LayoutComponteProps) => {
  const { children } = props;
  return <Container>{children}</Container>;
};
