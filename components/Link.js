export default function Link({ href, children }) {
  return (
    <a
      href={href}
      className="text-yellow-500 hover:underline cursor-pointer hover:text-yellow-400"
    >
      {children}
    </a>
  );
}
