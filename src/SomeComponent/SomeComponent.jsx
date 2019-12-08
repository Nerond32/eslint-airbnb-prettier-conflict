import React from 'react';

const SomeComponent = () => {
  const veryLongFunctionNameOmgDogeSoLongWhyIsThisNotEndingWtfWhoNamesVariables = () => {};
  return (
         <div
            someObjProp={{
            objProp: {
                internalProperty: {
                    someFunction: function() {
                        return veryLongFunctionNameOmgDogeSoLongWhyIsThisNotEndingWtfWhoNamesVariables();
                        },
                    }
            },
            }}
        >bugged</div>
    )
}

export default SomeComponent;
