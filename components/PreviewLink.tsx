import Image from "next/image";

type PreviewLinkProps = {
  imgSrc: string;
  title: string;
  href: string;
};

export default function PreviewLink({ imgSrc, title, href }: PreviewLinkProps) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className="bg-gray-100 xs:w-full sm:w-48 hover:bg-white block rounded-sm mb-4 overflow-hidden sm:mx-2 text-black transition-alltele hover:shadow-2xl"
    >
      <Image src={imgSrc} width={400} height={225} alt={`${title} cover`} />
      <div className="px-3 pt-1 pb-2">
        <h4 className="text-lg font-bold">{title}</h4>
      </div>
    </a>
  );
}
