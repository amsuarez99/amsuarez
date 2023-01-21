type Props = {
  children: string;
  src: string;
};
export default function ImageTooltip({ children, src }: Props) {
  return (
    <span class="relative inline-block group text-green-300">
      {children}
      <span class="scale-0 group-hover:scale-100 transition-all origin-bottom-left absolute top-0 -translate-y-full block bg-green-900 p-0.5">
        <image src={src} class="block w-48 max-w-none" />
      </span>
    </span>
  );
}
