import { ComponentChildren } from "https://esm.sh/v99/preact@10.11.0/src/index.d.ts";
import Head from "@/components/head.tsx";
import Menu from "@/components/menu.tsx";

type Props = {
  active: string;
  children: ComponentChildren;
};

export default function Layout({ children, active }: Props) {
  return (
    <>
      <Head title={active} />
      <Menu active={active} />
      <main>
        {children}
      </main>
    </>
  );
}
