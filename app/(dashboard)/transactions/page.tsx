"use client";

import { DateRangePicker } from '@/components/ui/date-range-picker';
import { MAX_DATE_RANGE_DAYS } from '@/lib/constants';
import { differenceInDays, startOfMonth } from 'date-fns';
import React, { useState } from 'react'
import { toast } from 'sonner';
import TransactionTable from './_components/TransactionTable';


const TransactionsPage = () => {
    const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
      from: startOfMonth(new Date()),
      to: new Date(),
    });

  return (
    <>
    <div className="border-b bg-card">
       <div className="container flex flex-wrap items-center justify-between gap-6 py-8 px-4 sm:px-6 lg:px-0 mx-auto">
          <div>
            <p className="text-3xl font-bold">Transactions History</p>
          </div>
          <DateRangePicker
            initialDateFrom={dateRange.from}
            initialDateTo={dateRange.to}
            showCompare={false}
            onUpdate={(values) => {
              const { from, to } = values.range;

              if (!from || !to) return;

              if (differenceInDays(to, from) > MAX_DATE_RANGE_DAYS) {
                toast.error(
                  `The selected date range is too large. Max allowed range is ${MAX_DATE_RANGE_DAYS}`
                );
                return;
              }
              setDateRange({ from, to });
            }}
          />
     </div>
     
    </div>
    <div className="container mx-auto">
        <TransactionTable from={dateRange.from} to={dateRange.to}/>
      </div>
    </>
  )
}

export default TransactionsPage;
