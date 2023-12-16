import React from "react";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function TopNav() {
  const company = [
    { name: "Diamond Co.", id: 1 },
    { name: "Import Co.", id: 1 },
  ];
  return (
    <div className='border-b-4 h-14 w-full flex px-6 py-2'>
      <div className='relative inline-block text-left place-self-center'>
        <div className='relative'>
          <select
            id='customer'
            name='customerId'
            className='flex h-[48px] w-max md:w-max grow items-center justify-center gap-2 rounded-full p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-1'
            defaultValue=''
            aria-describedby='customer-error'
          >
            <option value='' disabled>
              Select a Company
            </option>
            {company.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block'></div>
      <div className='relative inline-block text-left place-self-center'>
        <form>
          <button className='flex h-[48px] w-32 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
            <PowerIcon className='w-6' />
            <div className='hidden md:block'>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
