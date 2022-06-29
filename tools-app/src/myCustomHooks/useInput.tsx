import React, { useState } from "react";

export function useInput(initialState: any, isNumber?: boolean, minValue?: number) {
    const [value, setValue] = useState(initialState);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.currentTarget.value;

        if (isNumber === undefined) {
            setValue(newValue);
            return;
        }

        let numValue = Number(newValue);

        if (Number.isNaN(numValue) || (minValue !== undefined && numValue < minValue)) {
            setValue(minValue === undefined ? 0 : minValue);
        } else {
            setValue(numValue);
        }

        // console.log(newValue)
        // console.log(value)
    }

    return { value: value, onChange: handleChange };
}
