import { Divider } from '@nextui-org/react';
import { Card } from '@nextui-org/card';

// import { getAllpatient } from '@/actions/patient';
import CreatePieceModel from './create-patient-model';
import ImageView from './dashboard-image-model';
import DeletePieceModel from './delete-patient-model';
import Search from './search-patients';
import UpdatepatientModel from './update-patient-model';
import { Patients } from '@/domain/entities/Patients';
import CreatePatientModel from './create-patient-model';

export default async function DashboardPatients({
  Patients,
}: {
  Patients: Patients[];
}) {
  const columns = [
    // {
    //   key: 'category',
    //   label: 'CATEGORY',
    // },
    {
      key: 'name',
      label: 'Name',
    },
    // {
    //   key: 'status',
    //   label: 'STATUS',
    // },
    {
      key: 'phone number',
      label: 'Phone',
    },

    // {
    //   key: 'image',
    //   label: 'IMAGE',
    // },
  ];

  // const normalMachiesList = await getAllpatient();

  return (
    <div className="  w-[95vw] pt-20 sm:w-[97%]">
      <div className="flex   items-end  justify-between gap-5 p-3  ">
        {/* <Search patient={normalMachiesList} /> */}
        <CreatePatientModel />
      </div>
      <Card className="h-[82vh] overflow-y-auto p-5  sm:h-[80vh]">
        <div
          className="mb-4 flex flex-row items-center
           justify-between gap-4 "
        >
          {columns.map((column) => (
            <div
              key={column.key}
              className="flex text-gray-500 w-1/3 justify-start font-semibold "
            >
              {column.label}
            </div>
          ))}

          {/* <div className="invisible flex w-0 justify-center font-semibold sm:visible sm:w-1/3 ">
            IMAGE
          </div> */}
          <div className="flex w-1/2 text-gray-500 justify-end pr-3 font-semibold">
            Actions
          </div>
        </div>
        <Divider />

        {Patients.map((patient) => (
          <div
            key={patient.id}
            className="rounded-md dark:hover:bg-gray-700/25 "
          >
            <div
              className="flex cursor-pointer flex-row
                items-center justify-between gap-4 border-b
                 border-gray-700 py-3 "
            >
              <div className="flex w-1/3 justify-start ">
                {patient.name}
              </div>
              <div className="flex w-1/3 justify-start ">
                {patient.phone_number}
              </div>

              {/* <div className="flex w-1/3 justify-start">{patient.price}</div> */}
              {/* <div className="invisible flex  w-0 justify-center  sm:visible sm:w-1/3 "> */}
              {/* Open Image Model */}
              {/* <ImageView key={patient.id} patient={patient} /> */}
              {/* Open Image Model */}
              {/* </div> */}



              {/* Actions */}
              <div className="  flex w-3/6 flex-col items-end  justify-end gap-2 lg:flex-row  ">
                <UpdatepatientModel patient={patient} />
                <DeletePieceModel patient={patient} />
                {/* <div className="  sm:invisible sm:h-0 sm:w-0 ">
                  Open Image Model
                  <ImageView key={patient.id} patient={patient} />
                  Open Image Model
                </div> */}
              </div>


              {/* Actions */}
              {/* <div className="  flex w-3/6 flex-col items-end  justify-end gap-2 lg:flex-row  "> */}
              {/* <UpdatepatientModel piece={patient} />
                <DeletePieceModel piece={patient} /> */}
              {/* <div className="  sm:invisible sm:h-0 sm:w-0 ">
                  Open Image Model
                  <ImageView key={patient.id} patient={patient} />
                  Open Image Model
                </div> */}
              {/* </div> */}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
