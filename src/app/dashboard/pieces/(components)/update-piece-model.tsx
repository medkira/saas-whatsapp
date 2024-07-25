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
  Checkbox,
  Autocomplete,
  AutocompleteItem,
} from '@nextui-org/react';
import { useFormState, useFormStatus } from 'react-dom';

import { useState } from 'react';

import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from '@/components/file-upoad/file-uploader';
import { FileSvgDraw } from '@/components/file-upoad/file-upload-icon';
import { Label } from '@radix-ui/react-label';
import { EditIcon } from '@/components/dashboard/icons/table/edit-icon';
import { Pieces } from '@/domain/entities/Pieces';
import { updatePiece } from '@/actions/pieces';

export default function UpdatePiecesModel({
  piece,
}: {
  piece: Omit<Pieces, 'image_url'>;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const initialState: Omit<Pieces, 'id' | 'image_url'> = {
    // category: '',
    reference: '',
    price: 0,
  };
  const updatePieceeWithId = updatePiece.bind(null, piece.id);
  const [state, dispatch] = useFormState(updatePieceeWithId, initialState);
  const status = useFormStatus();
  // for file upload
  const [files, setFiles] = useState<File[] | null>([]);
  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };

  const categories = [
    'Piqueuse',
    'Surjet',
    'Recouvrement',
    'Ciseau',
    'Pose',
    'Bordeuse',
    'Boutonnière',
    'Pilier',
    'Ciseau Cerculaire',
    'Ciseaux Vertical',
    'Ciseaux',
  ];

  return (
    <div className="flex flex-col gap-2">
      <Button className="max-w-fit" color="warning" onPress={onOpen}>
        Update
        <EditIcon fill="white" />
      </Button>

      <Modal isOpen={isOpen} placement={'auto'} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update Piece
              </ModalHeader>
              <form
                action={dispatch}
                className="flex max-h-[90vh] flex-col gap-6 overflow-y-auto"
              >
                <ModalBody>
                  {/* <Input
                    defaultValue={machine.category}
                    label="Category"
                    name="category"
                    placeholder="Category"
                    type="text"
                    variant="bordered"
                  /> */}

                  {/* <Autocomplete
                    defaultFilter={() => true}
                    defaultSelectedKey={machine.category}
                    label="Categories"
                    name="category"
                    placeholder="Category"
                    type="text"
                    variant="bordered"
                  >
                    {categories.map((category) => (
                      <AutocompleteItem key={category}>
                        {category}
                      </AutocompleteItem>
                    ))}
                  </Autocomplete> */}

                  <Input
                    defaultValue={piece.reference}
                    label="Reference"
                    name="reference"
                    placeholder="Enter Reference"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    defaultValue={`${piece.price}`}
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
                    defaultValue={piece.name}
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    type="text"
                    variant="bordered"
                  />

                  <Input
                    defaultValue={piece.description}
                    label="Description"
                    name="description"
                    placeholder="Enter Description"
                    type="text"
                    variant="bordered"
                  />

                  <Input
                    defaultValue={piece.mark}
                    label="Mark"
                    name="mark"
                    placeholder="Enter Mark"
                    type="text"
                    variant="bordered"
                  />

                  {/* <Input
                    defaultValue={machine.applicable}
                    label="Applicable"
                    name="applicable"
                    placeholder="Enter Applicable Information"
                    type="text"
                    variant="bordered"
                  /> */}

                  {/* custom checkbox */}
                  <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400">
                    Available:{' '}
                    <div className="relative inline-block">
                      <input
                        className="bg-gary-400 peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                        defaultChecked={piece.available}
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
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
