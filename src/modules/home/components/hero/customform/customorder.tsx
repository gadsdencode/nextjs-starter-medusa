'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "./card"
import { Label } from "./label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "./select"
import { Input } from "./input"
import { Textarea } from "./textarea"

export default function CustomOrderForm() {
  return (
    <div className="w-full mx-auto p-4">
      <Card className="bg-slate-900">
        <CardHeader className="bg-slate-900 rounded-lg">
          <CardTitle className="text-white">Customized Heater Order Form</CardTitle>
          <CardDescription className="text-white">Specify your desired heater and control features.</CardDescription>
        </CardHeader>
        <CardContent className="w-full bg-slate-900">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label className="text-white" htmlFor="heater-type">Heater Type</Label>
              <Select>
                <SelectTrigger className="text-white" id="heater-type">
                  <SelectValue className="text-white" placeholder="Select Heater Type" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 rounded-lg">
                  <SelectItem className="text-white" value="electric">Electric</SelectItem>
                  <SelectItem className="text-white" value="gas">Gas</SelectItem>
                  <SelectItem className="text-white" value="oil">Oil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white" htmlFor="power-output">Power Output</Label>
                <Input className="text-white" id="power-output" placeholder="Enter Power Output" />
              </div>
              <div className="space-y-2">
                <Label className="text-white" htmlFor="voltage">Voltage</Label>
                <Input className="text-white" id="voltage" placeholder="Enter Voltage" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="control-features">Control Features</Label>
              <Textarea className="text-white" id="control-features" placeholder="Enter Control Features" />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="additional-accessories">Additional Accessories</Label>
              <Textarea className="text-white" id="additional-accessories" placeholder="Enter Additional Accessories" />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="special-requirements">Special Requirements</Label>
              <Textarea className="text-white" id="special-requirements" placeholder="Enter Special Requirements" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white" htmlFor="customer-name">Customer Name</Label>
                <Input className="text-white" id="customer-name" placeholder="Enter Customer Name" />
              </div>
              <div className="space-y-2">
                <Label className="text-white" htmlFor="customer-email">Customer Email</Label>
                <Input className="text-white" id="customer-email" placeholder="Enter Customer Email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="shipping-details">Shipping Details</Label>
              <Textarea className="text-white" id="shipping-details" placeholder="Enter Shipping Details" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <button className="ml-auto text-slate-100 hover:text-slate-500 border rounded-lg p-2">Submit Order</button>
        </CardFooter>
      </Card>
    </div>
  )
}

