import React, { useEffect } from "react";
import Spinner from "../elements/Spinner";

type Props = {
  loading?: boolean;
};

function Backdrop({ loading = true }: Props) {
  // useEffect(() => {
  //   if (loading) {
  //     window.scrollTo(0, 0);
  //     document.body.style.overflow = "hidden";
  //   } else if (!loading) {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [loading]);

  return (
    <div
      className={`${
        loading ? "flex" : "hidden"
      } fixed h-full w-full bg-black bg-opacity-50 flex-col justify-center items-center z-50 inset-0`}
    >
      <Spinner />
    </div>
  );
}

export default Backdrop;
