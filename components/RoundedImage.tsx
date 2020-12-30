import Image from "next/image";

type RoundedImageProps = {
  size: number;
  src: string;
  alt?: string;
};

export default function RoundedImage({ size, src, alt }: RoundedImageProps) {
  return (
    <div
      className="bg-white rounded-full p-0.5 box-content"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        width={size}
        height={size}
        alt={alt}
        className="rounded-full"
      />
    </div>
  );
}
