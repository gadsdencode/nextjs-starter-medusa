
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import CustomOrderForm from '@modules/layout/components/custom-form';

function CustomOrderModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button className="text-slate-100 hover:text-slate-500" onClick={() => setOpenModal(true)}>Custom Order</Button>
      <Modal className="mr-5 bg-transparent" show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Custom Order Form</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <CustomOrderForm />
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomOrderModal
