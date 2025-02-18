import OverallArea from "@/components/client/Dashboard/OverallArea";
import TransactionArea from "@/components/client/Dashboard/TransactionArea";
import SearchInput from "@/components/client/Search/SearchInput";

const Dashboard2 = () => {
  return (
    <div className="font-Poppins px-5 py-3 flex flex-wrap gap-4 w-full h-full">
      <div className=" w-full h-10 flex justify-between rounded-lg ">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <SearchInput />
      </div>
      <OverallArea />
      <TransactionArea/>
    </div>
  );
};

export default Dashboard2;
