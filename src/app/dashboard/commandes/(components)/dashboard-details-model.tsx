'use client';
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
import { Commandes } from '@/domain/entities/Commandes';
import IconListDetails from '@/components/dashboard/icons/detail-icon';

export default function DetailsView({ commande }: { commande: Commandes }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600"
      >
        Details <IconListDetails fill="white" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent className="rounded-lg  shadow-lg">
          <ModalHeader className="flex flex-col gap-1 border-b-2 border-gray-200 p-4">
            <h2 className="text-xl font-semibold ">Commande Details</h2>
          </ModalHeader>
          <ModalBody className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="font-medium ">ID:</div>
              <div className="">{commande.id}</div>
              <div className="font-medium ">Machine Ref:</div>
              <div className="">{commande.machine_ref}</div>
              <div className="font-medium ">Name:</div>
              <div className="">{commande.name}</div>
              <div className="font-medium ">Phone Number:</div>
              <div className="">{commande.phone_number}</div>
              <div className="font-medium ">Entreprise:</div>
              <div className="">{commande.entreprise}</div>
            </div>
          </ModalBody>
          <ModalFooter className="flex justify-end border-t-2 border-gray-200 p-4">
            <Button color="danger" variant="solid" onClick={onClose}>
              Close
            </Button>
            {/* <Button
              className="ml-2 bg-blue-500 text-white hover:bg-blue-600"
              onClick={onClose}
            >
              Action
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
