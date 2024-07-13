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
import { createMachine } from '@/actions/machines';
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from '@/components/file-upoad/file-uploader';
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
              <form
                action={dispatch}
                className="flex max-h-[90vh] flex-col gap-6 overflow-y-auto"
              >
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
                    defaultValue="0"
                    label="Price"
                    name="price"
                    placeholder="Enter Price"
                    type="number"
                    variant="bordered"
                    onInput={(e: any) => {
                      // Remove any non-numeric characters
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                  />

                  <Input
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    type="text"
                    variant="bordered"
                  />

                  <Input
                    label="Description"
                    name="description"
                    placeholder="Enter Description"
                    type="text"
                    variant="bordered"
                  />

                  <Input
                    label="Mark"
                    name="mark"
                    placeholder="Enter Mark"
                    type="text"
                    variant="bordered"
                  />

                  <Input
                    label="Applicable"
                    name="applicable"
                    placeholder="Enter Applicable Information"
                    type="text"
                    variant="bordered"
                  />

                  {/* custom checkbox */}
                  <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400">
                    Available:{' '}
                    <div className="relative inline-block">
                      <input
                        className="bg-gary-400 peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                        name="available"
                        type="checkbox"
                      />
                      <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300" />
                    </div>
                  </label>
                  {/* custom checkbox */}

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
                            <span>{file.name}</span>
                          </FileUploaderItem>
                        ))}
                    </FileUploaderContent>
                  </FileUploader>
                  {/* <div className="flex items-center justify-center p-5">
                    <label
                      className="flex cursor-pointer flex-col items-center rounded-lg border border-blue-500 bg-white px-4 py-6 uppercase tracking-wide text-blue-500 shadow-lg hover:bg-blue-500 hover:text-white"
                      htmlFor="file"
                    >
                      <svg
                        className="h-8 w-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.88 3.55L12.8 7.63V4a2 2 0 0 0-2-2h-1.72A1.98 1.98 0 0 0 8.44 1c-.52.53-.85 1.23-.85 2v3.63l-4.08-4.08A2 2 0 0 0 2 5.43V16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.57a2 2 0 0 0-.12-.92zM10 16a1.93 1.93 0 0 1-2-2 2 2 0 1 1 4 0 1.93 1.93 0 0 1-2 2zm1-4V8h2.63l-3-3-3 3H9v4H8v-5h1V7.37L10.37 9H10v3h1v-1h2v2h-2z" />
                      </svg>
                      <span className="mt-2 text-base leading-normal">
                        Select a file
                      </span>
                      <input
                        className="hidden"
                        id="file"
                        name="file"
                        type="file"
                      />
                    </label>
                  </div> */}
                  {/* imae upload  */}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <CreateButton close={onClose} />
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

function CreateButton({ close }: { close: any }) {
  const status = useFormStatus();

  return (
    <Button
      color="primary"
      isLoading={status.pending}
      type="submit"
      onPress={() => setTimeout(close, 5000)}
    >
      Create
    </Button>
  );
}
