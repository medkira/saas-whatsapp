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

import { useState } from 'react';
import { Machines } from '@/domain/entities/Machines';
import { updateMachine } from '@/actions/machines';
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from '@/components/file-upoad/file-uploader';
import { FileSvgDraw } from '@/components/file-upoad/file-upload-icon';

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

  // for file upload
  const [files, setFiles] = useState<File[] | null>([]);
  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

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
                  {/* imae upload  */}
                  <FileUploader
                    className="relative rounded-lg bg-background p-2"
                    dropzoneOptions={dropZoneConfig}
                    value={files}
                    onValueChange={setFiles}
                  >
                    <FileInput className="outline-dashed outline-1 outline-white">
                      <div className="flex w-full flex-col items-center justify-center pb-4 pt-3 ">
                        <FileSvgDraw />
                      </div>
                    </FileInput>
                    <FileUploaderContent>
                      {files &&
                        files.length > 0 &&
                        files.map((file, i) => (
                          <FileUploaderItem key={i} index={i}>
                            {/* <Paperclip className="h-4 w-4 stroke-current" /> */}
                            <span>{file.name}</span>
                          </FileUploaderItem>
                        ))}
                    </FileUploaderContent>
                  </FileUploader>
                  {/* imae upload  */}
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
