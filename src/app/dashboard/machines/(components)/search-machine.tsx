'use client';
import { Input } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchMachine() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // const [machines, setMachines] = useState<Machines[]>([]);

  const handleSearch = (value: string) => {
    // setMachines([]);
    // // console.log(value);
    // const res = await searchMachines(value);
    // // const res = await searchMachines('piks');

    // setMachines(res);
    const params = new URLSearchParams(searchParams);

    // params.set('page', '1');
    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <Input
        className="max-w-xs"
        label="Search Machine"
        placeholder="Type a machine name"
        // onInputChange={handleSearch}
        onValueChange={handleSearch}
      />
    </>
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
