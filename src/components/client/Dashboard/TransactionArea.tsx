import DatePicker from "@/components/client/DatePicker";
import Pagination from "@/components/client/Pagination";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Pencil } from "lucide-react";

const TransactionArea = () => {
  return (
    <Card className="bg-white w-full flex-1 pb-6 shadow-lg">
        <div className="flex items-center justify-between p-6">
          <h3 className="font-bold text-2xl">Transaction History</h3>
          <div>
            <DatePicker
              dateInit={new Date()}
              className="w-48 rounded-full border-2 border-slate-300"
            />
          </div>
        </div>
        <div className="">
          <table className="w-full bg-white p-6">
            <thead>
              <tr className=" border-t border-t-slate-300 border-b border-b-slate-300  font-semibold text-lg text-left">
                <th className="py-2 pl-6 pr-4">Transactions</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 pl-4 pr-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {transactionData.map((item, index) => ( */}
              <tr className="border-b py-2 ">
                <td className="py-2 pl-6 pr-4 font-semibold">purpose</td>
                <td className="px-4 font-medium">
                  -$ {new Number(450).toLocaleString()}
                </td>
                <td className="px-4 font-medium">date</td>
                <td className="px-4 font-medium">
                  <Badge variant="danger">Category</Badge>
                </td>
                <td className="py-2 pl-4 pr-6 flex justify-center">
                  <Pencil />
                </td>
              </tr>
              <tr className="border-b py-2 ">
                <td className="py-2 pl-6 pr-4 font-semibold">purpose</td>
                <td className="px-4 font-medium text-green-400">
                  +$ {new Number(450).toLocaleString()}
                </td>
                <td className="px-4 font-medium">date</td>
                <td className="px-4 font-medium">
                  <Badge variant="success">Category</Badge>
                </td>
                <td className="py-2 pl-4 pr-6 flex justify-center">
                  <Pencil />
                </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
          <Pagination currentPage={1} totalPages={5} />
        </div>
      </Card>
  )
}

export default TransactionArea