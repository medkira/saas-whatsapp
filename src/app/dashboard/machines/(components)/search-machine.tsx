'use client';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Machines } from '@/domain/entities/Machines';

export default function SearchMachine({ machines }: { machines: Machines[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Autocomplete
      className="max-w-xs"
      // defaultFilter={() => true}
      label="Search Machine"
      placeholder="Type a machine name"
      onInputChange={handleSearch}
    >
      {machines!.map((machine) => (
        <AutocompleteItem key={machine.id}>
          {machine.reference}
        </AutocompleteItem>
      ))}
    </Autocomplete>

    // <>
    //   <Input
    //     className="max-w-xs"
    //     classNames={{
    //       label: 'text-black/50 dark:text-white/90',
    //       input: [
    //         'bg-transparent',
    //         'text-black/90 dark:text-white/90',
    //         'placeholder:text-black dark:placeholder:text-black',
    //       ],
    //       innerWrapper: 'bg-transparent',
    //       inputWrapper: [
    //         'shadow-xl',
    //         // 'bg-white',
    //         'bg-default-50',
    //         'backdrop-blur-xl',
    //         'backdrop-saturate-200',
    //         'hover:bg-default-200/70',
    //         'dark:hover:bg-default/70',
    //         'group-data-[focus=true]:bg-default-200/50',
    //         'dark:group-data-[focus=true]:bg-default/60',
    //         '!cursor-text',
    //       ],
    //     }}
    //     label="Search Machine"
    //     placeholder="Type a machine name"
    //     // onInputChange={handleSearch}
    //     onValueChange={handleSearch}
    //   />
    // </>
  );
}

// // 'use client';
// import { useState } from 'react';
// import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

// import { searchMachines } from '@/actions/machines';
// import { Machines } from '@/domain/entities/Machines';

// export default function SearchMachine() {
//   const [machines, setMachines] = useState<Machines[]>([]);

//   const handleSearch = async (value: string) => {
//     setMachines([]);
//     // console.log(value);
//     const res = await searchMachines(value);
//     // const res = await searchMachines('piks');

//     setMachines(res);
//   };

//   return (
//     <>
//       <Autocomplete
//         className="max-w-xs"
//         defaultFilter={() => true}
//         label="Search Machine"
//         placeholder="Type a machine name"
//         onInputChange={handleSearch}
//       >
//         {machines.map((machine) => (
//           <AutocompleteItem key={machine.id}>{machine.name}</AutocompleteItem>
//         ))}
//       </Autocomplete>
//     </>
//   );
// }
