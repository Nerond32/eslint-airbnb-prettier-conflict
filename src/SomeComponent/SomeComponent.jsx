import React from "react";

const SomeComponent = () => {
  const calc = () => {};
  return (
    <div
      someObjProp={{
        objProp: {
          internalProperty: {
            method() {
              return calc();
            
          }
        }
      }}
    >
      bugged
    </div>
  );
};

export default SomeComponent;
