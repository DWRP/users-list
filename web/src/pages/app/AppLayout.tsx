import { LayoutComponet } from "../../components/Layout/LayoutComponent";

interface AppLayputProps {
  page: () => JSX.Element;
}

export const AppLayout = (props: AppLayputProps): JSX.Element => {
  const { page: Component, ...rest } = props;

  return (
    <LayoutComponet>
      <Component {...rest} />
    </LayoutComponet>
  );
};
