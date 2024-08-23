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
import { Pieces } from '@/domain/entities/Pieces';
import { deletePieces } from '@/actions/pieces';
import { Patients } from '@/domain/entities/Patients';
import { deletePatient } from '@/actions/patients';
// import DeleteButton from './delete-button';

export default function DeletePieceModel({
  patient,
}: {
  patient: Omit<Patients, 'image_url'>;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const initialState: Omit<Patients, 'id' | 'image_url'> = {
  //   phone_number: '',
  //   name: '',
  //   doctor_id: ''
  // };
  //   const [formData, setFormData] = useState<Omit<patients, 'id' | 'image_url'>>({
  //     category: '',
  //     reference: '',
  //     price: 0,
  //   });
  const deletePatientWithId = deletePatient.bind(null, patient?.id);

  const [state, dispatch] = useFormState(deletePatientWithId, {});

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
                Delete piece
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
                    Are you sure u want delete the Patient!?
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
