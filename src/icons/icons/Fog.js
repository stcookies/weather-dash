import React from "react";

function SvgFog(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path
        fillRule="evenodd"
        d="M69.998 65.641H30.003a2 2 0 010-4h39.995a2 2 0 010 4zm0-8H30.003a2 2 0 010-4h39.995a2 2 0 010 4zm-9.999-11.998c-1.601 0-3.083.48-4.333 1.291-1.232-5.317-5.974-9.291-11.665-9.291-6.626 0-11.998 5.373-11.998 12h-4c0-8.835 7.163-15.999 15.998-15.999 6.004 0 11.229 3.312 13.965 8.204.664-.113 1.337-.205 2.033-.205 5.222 0 9.652 3.342 11.301 8h-4.381a7.987 7.987 0 00-6.92-4zM30.003 69.639h39.995a2 2 0 010 4H30.003a2 2 0 010-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFog;
