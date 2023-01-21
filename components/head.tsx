import { Head as FreshHead } from "$fresh/runtime.ts";

type Props = {
  title: string;
};

export default function Head({ title }: Props) {
  return (
    <FreshHead>
      <title>{title} | amsuarez99👨‍💻</title>
      <meta
        name="description"
        content="Software engineer - Typescript Wizard"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </FreshHead>
  );
}
