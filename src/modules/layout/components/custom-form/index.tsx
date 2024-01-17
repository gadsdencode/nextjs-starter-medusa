'use client'
import React, {useState} from 'react';
import { supabase, Database } from '../supabase/supabase';
import { Select, Option } from "@material-tailwind/react";
import { Alert } from 'flowbite-react';
import { FaCheckSquare } from "react-icons/fa";

interface SelectDefaultProps {
  onSelectChange: (value: string) => void;
  className: string;
  value: string;
}

  const SelectDefault: React.FC<SelectDefaultProps> = ({ onSelectChange, value }) => {
    return (
      <div className="w-72 m-5 text-white bg-white">
        <Select
          value={value}  
          onChange={(value) => onSelectChange(value || '')}
          className="rounded-lg text-black"
          id="heaterType"
          label="Select Version"
          nonce={undefined} onResize={undefined} onResizeCapture={undefined}
      >
          <Option className="text-black bg-white p-1 m-2" value="Electric">Electric</Option>
          <Option className="text-black bg-white p-1 m-2" value="Gas">Gas</Option>
          <Option className="text-black bg-white p-1 m-2" value="Oil">Oil</Option>
        </Select>
      </div>
    );
  };

  export default function CustomOrderForm() {
    const initialState = {
      heaterType: '',
      powerOutput: '',
      voltage: '',
      controlFeatures: '',
      additionalAccessories: '',
      specialRequirements: '',
      customerName: '',
      customerEmail: '',
      shippingDetails: ''
    };

    const [formData, setFormData] = useState(initialState);
    const [showAlert, setShowAlert] = useState(false);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    };
  
    // Handle changes specifically for the SelectDefault component
    const handleSelectChange = (id: string, value: string) => {
      setFormData({ ...formData, [id]: value });
    };
  
    // Handle form submission
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      try {
        const { error } = await supabase
          .from('custom_order')
          .insert([{ ...formData }]);
  
        if (error) throw error;
        // Handle successful submission, e.g., clear form, show success message
        setFormData(initialState);
        setShowAlert(true);
      } catch (err) {
        // Handle error in form submission
        console.error('Error submitting order:', err);
      }
    };
  
  return (
    <div className="w-full mx-auto p-4">
      <div className="bg-slate-900 rounded-lg">
        <h1 className="bg-slate-900 rounded-lg">Order Form</h1>
          <title className="text-white">Customized Heater Order Form</title>
          <p className="text-white m-5">Specify your desired heater and control features.</p>
        <div className="w-full bg-slate-900">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg p-5 text-white">
            <div className="space-y-2 text-black">
              <label className="text-white rounded-lg" htmlFor="heaterType">Heater Type</label>
              <SelectDefault value={formData.heaterType} className="text-white" onSelectChange={(value) => handleSelectChange('heaterType', value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-white p-1" htmlFor="powerOutput">Power Output</label>
                <input value={formData.powerOutput} onChange={handleChange} className="text-black rounded-lg p-1" id="powerOutput" placeholder="Enter Power Output" />
              </div>
              <div className="space-y-2">
                <label className="text-white p-1" htmlFor="voltage">Voltage</label>
                <input value={formData.voltage} onChange={handleChange} className="text-black rounded-lg p-1" id="voltage" placeholder="Enter Voltage" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-white p-1" htmlFor="controlFeatures">Control Features</label>
              <textarea value={formData.controlFeatures} onChange={handleChange} className="text-black rounded-lg p-1" id="controlFeatures" placeholder="Enter Control Features" />
            </div>
            <div className="space-y-2">
              <label className="text-white p-1" htmlFor="additionalAccessories">Additional Accessories</label>
              <textarea value={formData.additionalAccessories} onChange={handleChange} className="text-black rounded-lg p-1" id="additionalAccessories" placeholder="Enter Additional Accessories" />
            </div>
            <div className="space-y-2">
              <label className="text-white p-1" htmlFor="specialRequirements">Special Requirements</label>
              <textarea value={formData.specialRequirements} onChange={handleChange} className="text-black rounded-lg p-1" id="specialRequirements" placeholder="Enter Special Requirements" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-white p-1" htmlFor="customerName">Customer Name</label>
                <input value={formData.customerName} onChange={handleChange} className="text-black rounded-lg p-1" id="customerName" placeholder="Enter Customer Name" />
              </div>
              <div className="space-y-2">
                <label className="text-white p-1" htmlFor="customerEmail">Customer Email</label>
                <input value={formData.customerEmail} onChange={handleChange} className="text-black rounded-lg p-1" id="customerEmail" placeholder="Enter Customer Email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-white p-1" htmlFor="shippingDetails">Shipping Details</label>
              <textarea value={formData.shippingDetails} onChange={handleChange} className="text-black rounded-lg p-1" id="shippingDetails" placeholder="Enter Shipping Details" />
            </div>
          </form>
        </div>
        <div>
          <button onClick={handleSubmit} type="submit" className="text-slate-100 hover:text-slate-500 border rounded-lg p-2 m-5">Submit Order</button>
        </div>
        {showAlert && (
  <Alert
    color="success" icon={FaCheckSquare}
    onDismiss={() => setShowAlert(false)}
  >
    <span className="font-medium bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300">Success!</span> Thank you for submitting your custom order. You will receive an email confirmation shortly.
  </Alert>
)}
      </div>
    </div>
  )
}

