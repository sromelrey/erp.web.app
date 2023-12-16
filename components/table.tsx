import Image from "next/image";

// import InvoiceStatus from "@/app/ui/invoices/status";
// import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";
// import { fetchFilteredInvoices } from "@/app/lib/data";
import { users } from "@/app/lib/data";
import { ReactNode } from "react";

export default async function Table({
  query,
  currentPage,
  children,
}: {
  query: string;
  currentPage: number;
  children: ReactNode;
}) {
  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-gray-50 p-2 md:pt-0'>
          {/* md here */}
          <table className='hidden min-w-full text-gray-900 md:table'>
            {children}
          </table>
        </div>
      </div>
    </div>
  );
}
