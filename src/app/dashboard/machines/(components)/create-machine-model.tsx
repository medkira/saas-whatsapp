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
import { useFormState } from 'react-dom';

import { Machines } from '@/domain/entities/Machines';
import { createMachine } from '@/actions/machines';

export default function CreateMachineModel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const initialState: Omit<Machines, 'id' | 'image_url'> = {
    category: 'tessst',
    reference: 'tesst',
    price: 0,
  };
  //   const [formData, setFormData] = useState<Omit<Machines, 'id' | 'image_url'>>({
  //     category: '',
  //     reference: '',
  //     price: 0,
  //   });
  const [state, dispatch] = useFormState(createMachine, initialState);

  return (
    <div className="flex flex-col gap-2">
      <Button className="max-w-fit" color="success" onPress={onOpen}>
        Create
      </Button>

      <Modal isOpen={isOpen} placement={'auto'} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Machine
              </ModalHeader>
              <form action={dispatch} className="flex flex-col gap-6">
                <ModalBody>
                  <Input
                    label="Category"
                    name="category"
                    placeholder="Category"
                    type="text"
                    variant="bordered"
                  />

                  <Input
                    label="Reference"
                    name="reference"
                    placeholder="Enter Reference"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    label="Price"
                    name="price" // Add name for identification
                    placeholder="Enter Price"
                    type="number" // Use type="number" for numeric input
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit" onPress={onClose}>
                    Create
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
