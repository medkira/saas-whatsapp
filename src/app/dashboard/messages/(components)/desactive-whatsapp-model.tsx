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
import { createMachine, deleteMachine } from '@/actions/machines';
import { title } from '@/components/primitives';
import { DeleteIcon } from '@/components/dashboard/icons/table/delete-icon';
import { Whatsapp } from '@/domain/entities/Whatsapp';
import { desactiveWhatsapp } from '@/actions/whatsapp';
// import DeleteButton from './delete-button';

export default function DesectiveWhatsapp({
  whatsapp,
}: {
  whatsapp: Whatsapp;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const initialState = {};
  //   const [formData, setFormData] = useState<Omit<Machines, 'id' | 'image_url'>>({
  //     category: '',
  //     reference: '',
  //     price: 0,
  //   });
  const desactiveWhatsappWithId = desactiveWhatsapp.bind(null, whatsapp.id);

  const [state, dispatch] = useFormState(desactiveWhatsappWithId, initialState);

  return (
    <div className="flex flex-col gap-2">
      <Button className="max-w-fit text-white" color="warning" onPress={onOpen}>
        Desactive
        <DeleteIcon fill="white" />
      </Button>
      <Modal isOpen={isOpen} placement={'auto'} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete Machine
              </ModalHeader>
              <form action={dispatch} className="flex flex-col gap-6">
                <ModalBody>
                  <h1
                    className={title({
                      size: 'sm',
                      color: 'red',
                      className: 'mb-1',
                    })}
                  >
                    Are you sure u want Desactive!?
                  </h1>{' '}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <DeleteButton close={onClose} />
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

function DeleteButton({ close }: { close: any }) {
  const status = useFormStatus();

  return (
    <Button
      color="danger"
      isLoading={status.pending}
      type="submit"
      onPress={() => setTimeout(close, 1000)}
    >
      Desactive
    </Button>
  );
}
