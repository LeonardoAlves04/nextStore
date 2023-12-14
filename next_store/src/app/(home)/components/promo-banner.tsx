import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="h-auto w-full px-5  lg:m-auto lg:w-[800px]"
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

export default PromoBanner;
