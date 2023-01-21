import { IconMoon } from "@/utils/icons.ts";
// import { IconSun } from "@/utils/icons.ts";

type LinkProps = {
  href: string;
  children: Element | string;
  isActive: boolean;
};
function Link({ href, children, isActive }: LinkProps) {
  return (
    <li class={`group relative ${isActive ? "text-white" : "text-gray-500"}`}>
      <a
        href={href}
        class="hover:text-white transition-all"
      >
        {children}
      </a>
      <div className="absolute left-0 scale-0 group-hover:(right-0 scale-100) origin-bottom-left h-0.5 bg-white transition-all" />
    </li>
  );
}

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Tags",
    href: "/tags",
  },
];

type NavbarProps = {
  active: string;
};
export default function Menu({ active }: NavbarProps) {
  return (
    <nav className="border(b-1 gray-500) py-2 text-base flex flex-col gap-6">
      <ul className="flex flex-wrap gap-4 justify-center">
        {pages.map((page) => (
          <Link href={page.href} isActive={active === page.href}>
            {page.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
