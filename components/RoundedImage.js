import Image from "next/image";

export default function RoundedImage({ size, src }) {
  return (
    <div
      className="bg-white rounded-full p-0.5 box-content"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        width={size}
        height={size}
        className="rounded-full"
      />
    </div>
  );
}
