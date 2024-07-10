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
import { useEffect, useState } from 'react';

import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from '@/components/file-upoad/file-uploader';
import { Machines } from '@/domain/entities/Machines';
import { createMachine } from '@/actions/machines';
import { FileSvgDraw } from '@/components/file-upoad/file-upload-icon';

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

  const [files, setFiles] = useState<File[] | null>([]);
  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  // useEffect(() => {
  //   console.log(files);
  // }, [files]);

  // const createMachineWithImage = createMachine.bind(null, files!);
  const [errorMessage, dispatch] = useFormState(createMachine, initialState);
  const status = useFormStatus();

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
