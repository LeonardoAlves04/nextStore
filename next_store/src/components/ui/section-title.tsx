import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p
      className="mb-3 pl-5 font-bold uppercase text-[#47E10C] lg:flex lg:justify-center"
      {...props}
    >
      {children}
    </p>
  );
};

export default SectionTitle;
