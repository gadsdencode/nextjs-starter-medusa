'use client'
import React from 'react';
import { SelectDefault } from '../custom-order';

export default function CustomOrderForm() {

  return (
    <div className="w-full mx-auto p-4">
      <div className="bg-slate-900 rounded-lg">
        <h1 className="bg-slate-900 rounded-lg">Order Form</h1>
          <title className="text-white">Customized Heater Order Form</title>
          <p className="text-white m-5">Specify your desired heater and control features.</p>
        <div className="w-full bg-slate-900">
          <form className="space-y-4 rounded-lg p-5">
            <div className="space-y-2">
              <label className="text-white rounded-lg" htmlFor="heater-type">Heater Type</label>
              <SelectDefault />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-white p-1" htmlFor="power-output">Power Output</label>
                <input className="text-black rounded-lg p-1" id="power-output" placeholder="Enter Power Output" />
              </div>
              <div className="space-y-2">
                <label className="text-white p-1" htmlFor="voltage">Voltage</label>
                <input className="text-black rounded-lg p-1" id="voltage" placeholder="Enter Voltage" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-white p-1" htmlFor="control-features">Control Features</label>
              <textarea className="text-black rounded-lg p-1" id="control-features" placeholder="Enter Control Features" />
            </div>
            <div className="space-y-2">
              <label className="text-white p-1" htmlFor="additional-accessories">Additional Accessories</label>
              <textarea className="text-black rounded-lg p-1" id="additional-accessories" placeholder="Enter Additional Accessories" />
            </div>
            <div className="space-y-2">
              <label className="text-white p-1" htmlFor="special-requirements">Special Requirements</label>
              <textarea className="text-black rounded-lg p-1" id="special-requirements" placeholder="Enter Special Requirements" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-white p-1" htmlFor="customer-name">Customer Name</label>
                <input className="text-black rounded-lg p-1" id="customer-name" placeholder="Enter Customer Name" />
              </div>
              <div className="space-y-2">
                <label className="text-white p-1" htmlFor="customer-email">Customer Email</label>
                <input className="text-black rounded-lg p-1" id="customer-email" placeholder="Enter Customer Email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-white p-1" htmlFor="shipping-details">Shipping Details</label>
              <textarea className="text-black rounded-lg p-1" id="shipping-details" placeholder="Enter Shipping Details" />
            </div>
          </form>
        </div>
        <div>
          <button className="text-slate-100 hover:text-slate-500 border rounded-lg p-2 m-5">Submit Order</button>
        </div>
      </div>
    </div>
  )
}

