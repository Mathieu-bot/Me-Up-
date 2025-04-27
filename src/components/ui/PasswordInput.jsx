import React, { useState, forwardRef } from "react";
import { Eye, EyeClosed } from "lucide-react";

const PasswordInput = forwardRef(({ id, placeholder, disabled, ...rest }, ref) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={show ? "text" : "password"}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full pr-10 p-2 bg-gray-100 outline-none rounded-md border border-gray-300 ring-1 ring-gray-300 focus:ring-courteous-blue focus:ring-2 focus:bg-gray-100"
        ref={ref}
        {...rest}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        disabled={disabled}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
      >
        {show ? <EyeClosed size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
});

export default PasswordInput;
