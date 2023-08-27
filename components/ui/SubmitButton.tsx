import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group mx-auto mt-3 flex items-center justify-center gap-2 h-[3rem] w-[9rem] bg-dark-secondary text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
       <div className="custom-loader"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}

export default SubmitBtn;