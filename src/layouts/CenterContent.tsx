import { PropsWithChildren } from "react";

const CenterLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
};

export default CenterLayout;
