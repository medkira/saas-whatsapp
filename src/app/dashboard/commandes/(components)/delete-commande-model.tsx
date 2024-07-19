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

import { title } from '@/components/primitives';
import { DeleteIcon } from '@/components/dashboard/icons/table/delete-icon';
import { Commandes } from '@/domain/entities/Commandes';
import { deleteCommande } from '@/actions/commandes';
// import DeleteButton from './delete-button';

export default function DeletecommandeModel({
  commande,
}: {
  commande: Commandes;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const initialState = {};
  //   const [formData, setFormData] = useState<Omit<commandes, 'id' | 'image_url'>>({
  //     category: '',
  //     reference: '',
  //     price: 0,
  //   });
  const deletecommandeWithId = deleteCommande.bind(null, commande.id);

  const [state, dispatch] = useFormState(deletecommandeWithId, initialState);

  return (
    <div className="flex flex-col gap-2">
      <Button className="max-w-fit" color="danger" onPress={onOpen}>
        Delete
        <DeleteIcon fill="white" />
      </Button>
      <Modal isOpen={isOpen} placement={'auto'} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete commande
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
                    Are you sure u want delete the Commandes!?
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
      onPress={() => setTimeout(close, 4000)}
    >
      Delete
    </Button>
  );
}
