type LinkProps = {
  href: string;
  children?: any;
};

export default function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="text-yellow-500 hover:underline cursor-pointer hover:text-yellow-400"
    >
      {children}
    </a>
  );
}
