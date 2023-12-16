import Table from "@/components/table";
import { UpdateInvoice, DeleteInvoice } from "@/components/button";
import { users } from "@/app/lib/data";

export default async function UserTable() {
  const results = await users;
  const tableHeader = Object.keys(results[0]);
  const tableData = Object.values(results);
  console.log(tableHeader);
  const trasnsformHeader = tableHeader.filter(function (e) {
    return e !== "id" && e !== "password";
  });
  return (
    <Table query={""} currentPage={0}>
      <thead className='rounded-lg text-left text-sm font-normal'>
        <tr>
          {trasnsformHeader.map((header, index) => (
            <th
              key={index}
              scope='col'
              className='px-4 py-5 font-medium sm:pl-6'
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='bg-white'>
        {tableData?.map((data, index) => (
          <tr
            key={index}
            className='w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
          >
            <td className='whitespace-nowrap px-3 py-3'>{data.name}</td>
            <td className='whitespace-nowrap px-3 py-3'>{data.email}</td>
            <td className='whitespace-nowrap px-3 py-3'>{data.status}</td>

            <td className='whitespace-nowrap px-3 py-3'>
              {data.accessModule[0].accounting}
            </td>
            <td className='whitespace-nowrap px-3 py-3'>{data.role}</td>
            <td className='whitespace-nowrap px-3 py-3'>
              {data.company[0].toString()}
            </td>

            <td className='whitespace-nowrap py-3 pl-6 pr-3'>
              <div className='flex justify-end gap-3'>
                <UpdateInvoice id={data.id} />
                <DeleteInvoice id={data.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
