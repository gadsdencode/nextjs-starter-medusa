'use client'

import React from 'react';
import { Select, Option } from "@material-tailwind/react";

export function SelectDefault() {
return (
    <div className="w-72 m-5">
    <Select className="rounded-lg text-white" id="heater-type" label="Select Version" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
        <Option className="text-black p-1" value="electric">Electric</Option>
        <Option className="text-black p-1" value="gas">Gas</Option>
        <Option className="text-black p-1" value="oil">Oil</Option>
    </Select>
    </div>
);
}

