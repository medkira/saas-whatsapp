'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from '@nextui-org/react';
import { useFormState, useFormStatus } from 'react-dom';

import { Machines } from '@/domain/entities/Machines';
import { updateMachine } from '@/actions/machines';

export default function UpdateMachineModel({
  machine,
}: {
  machine: Omit<Machines, 'image_url'>;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const initialState: Omit<Machines, 'id' | 'image_url'> = {
    category: '',
    reference: '',
    price: 0,
  };
  const updateMachineWithId = updateMachine.bind(null, machine.id);
  const [state, dispatch] = useFormState(updateMachineWithId, initialState);
  const status = useFormStatus();

  return (
    <div className="flex flex-col gap-2">
      <Button className="max-w-fit" color="warning" onPress={onOpen}>
        Update
      </Button>

      <Modal isOpen={isOpen} placement={'auto'} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update Machine
              </ModalHeader>
              <form action={dispatch} className="flex flex-col gap-6">
                <ModalBody>
                  <Input
                    defaultValue={machine.category}
                    label="Category"
                    name="category"
                    placeholder="Category"
                    type="text"
                    variant="bordered"
                  />

                  <Input
                    defaultValue={machine.reference}
                    label="Reference"
                    name="reference"
                    placeholder="Enter Reference"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    defaultValue={`${machine.price}`}
                    label="Price"
                    name="price"
                    placeholder="Enter Price"
                    type="number"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="primary"
                    isLoading={status.pending}
                    type="submit"
                    onPress={onClose}
                  >
                    Update
                  </Button>
                </ModalFooter>
              </form>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Create
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
