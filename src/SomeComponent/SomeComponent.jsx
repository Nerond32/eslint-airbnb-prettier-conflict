import React from 'react'

const SomeComponent = () => {
    const veryLongFunctionNameOmgDogeSoLongWhyIsThisNotEndingWtfWhoNamesVariables = x => !x;
    return (
         <div
            someObjProp={{
            objProp: {
                internalProperty: {
                    someFunction: function() {
                        return veryLongFunctionNameOmgDogeSoLongWhyIsThisNotEndingWtfWhoNamesVariables(true);
                        },
                            style: {
                    whiteSpace: 'nowrap',
                        }
                    }
            },
            }}
        >HERE I AM, DE BUG</div>
    )
}

export default SomeComponent;
