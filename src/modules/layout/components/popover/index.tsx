'use client'

import React, { useState } from 'react';
import {
    Popover,
    PopoverHandler,
    PopoverContent,
  } from "@material-tailwind/react";
  import CustomOrderForm from "../custom-form";
   
  export function PopoverDefault() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <Popover>
        <PopoverHandler>
          <button>Custom Order</button>
        </PopoverHandler>
        <PopoverContent nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
        <CustomOrderForm />
        </PopoverContent>
      </Popover>
    );
  }