import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import Image from 'next/legacy/image'; // Adjust as per your setup

import { EyeIcon } from '@/components/dashboard/icons/table/eye-icon'; // Adjust as per your setup
import { Machines } from '@/domain/entities/Machines';

export default function ImageView({ machine }: { machine: Machines }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        Image <EyeIcon fill="white" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
          <ModalBody>
            {machine.image_url && (
              <Image
                priority
                alt="Background Image"
                height={350}
                src={machine.image_url}
                width={350}
                // quality={100}
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={onClose}>
              Close
            </Button>
            <Button color="primary" onClick={onClose}>
              Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
