import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  CheckboxGroup,
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductsFilters() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const itemClasses = {
    base: 'py-0 w-full',
    title: 'font-bold text-blue  ',
    // trigger:
    //   'px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center',
    indicator: 'text-medium',
    content: 'text-small px-2',
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
  ];

  const sewingMachineMarks = [
    'Juki',
    'Jaki',
    'Brother',
    'Singer',
    // 'Janome',
    // 'Babylock',
    // 'Bernina',
    // 'Pfaff',
    // 'Husqvarna Viking',
    // 'Necchi',
  ];
  const [selectedCategories, setSelectedCategories] = useState(['']);
  const [selectedMarks, setSelectedMarks] = useState(['']);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const pressFilter = () => {
    const params = new URLSearchParams(searchParams);

    if (selectedCategories || selectedMarks) {
      // params.set('filter', `${selectedCategories} ${selectedMarks}`);
      // params.set('filter', `${selectedCategories} ${selectedMarks}`);
      params.set('categories', `${selectedCategories}`);
      params.set('marks', `${selectedMarks}`);
    } else {
      params.delete('filter');
    }
    params.delete('query');
    replace(`/products?${params.toString()}`);

    // replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="p-5">
        <button
          className="group fixed top-[9vh] flex items-center justify-center gap-2"
          onClick={toggleNavbar}
        >
          <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-slate-700 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4">
            <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
              <div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:rotate-[42deg]" />
              <div className="h-[2px] w-1/2 transform rounded bg-white transition-all duration-300 group-focus:-translate-x-10" />
              <div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:-rotate-[42deg]" />
            </div>
          </div>
          <h1 className="pt-2 text-xl font-bold">Filtre</h1>
        </button>
      </div>
      {/* </Button> */}
      <motion.div
        animate={{ x: isOpen ? '0%' : '-150%' }}
        className="fixed left-0 top-0 z-30 m-5 min-h-[50vh] w-64 rounded-lg bg-[#fafafa] p-5 text-white"
        initial={{ x: '-100%' }}
        // transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="pt-[4vh]">
          <div className="flex flex-row items-center gap-5">
            <Button
              className="  ml-2 h-10 w-5 rounded-full bg-red-500 text-2xl text-white"
              radius="full"
              onClick={toggleNavbar}
            >
              X
            </Button>
            <Button
              className="p-5 text-2xl  text-white"
              color="success"
              radius="full"
              onClick={() => pressFilter()}
            >
              Filtre
            </Button>
          </div>
          <div className="py-5 text-blue-500">
            <Accordion
              isCompact
              itemClasses={itemClasses}
              selectionMode="multiple"
              variant="splitted"
            >
              <AccordionItem key="1" aria-label="Categories" title="Categories">
                <CheckboxGroup
                  // defaultValue={['buenos-aires', 'london']}
                  label="Select Categories"
                  onValueChange={setSelectedCategories}
                >
                  {categories.map((category) => (
                    <Checkbox key={category} value={category}>
                      {category}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </AccordionItem>

              <AccordionItem key="2" aria-label="Mark" title="Mark">
                <CheckboxGroup
                  // defaultValue={['buenos-aires', 'london']}
                  label="Select Mark"
                  onValueChange={setSelectedMarks}
                >
                  {sewingMachineMarks.map((mark) => (
                    <Checkbox key={mark} value={mark}>
                      {mark}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </AccordionItem>
              {/* <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem> */}
            </Accordion>
          </div>
        </div>
      </motion.div>
    </>
  );
}
