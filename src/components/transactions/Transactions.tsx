import { Table } from "antd";
import { formatEpochTimestamp } from "../../utilities/utils";

import {
  useGetAllTransactionsQuery,
  useGetUserTransactionQuery,
} from "../../redux/api/transactionSlice";

const Transactions = () => {
  const { data } = useGetAllTransactionsQuery({});
  const { data: userTransactions } = useGetUserTransactionQuery({});
  

  const dataSource = data?.transactions?.map((cur: any) => {
    return {
      email: cur.customer_email,
      amount: cur.amount_total,
      paymentStatus: cur.payment_status,
      time: formatEpochTimestamp(cur.createdAt),
    };
  });

  const userDataSource = userTransactions?.transactions?.map((cur: any) => {
    return {
      email: cur.customer_email,
      amount: cur.amount_total,
      paymentStatus: cur.payment_status,
      time: formatEpochTimestamp(cur.createdAt),
    };
  });

  const columns = [
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
    },
    { title: "Order Time", dataIndex: "time", key: "time" },
    // Add more columns...
  ];

  return (
    <>
      <h1>Your Transactions:</h1>
      <div style={{ width: "75vw", marginLeft: "auto", marginRight: "auto" }}>
        <Table dataSource={userDataSource} columns={columns} />
      </div>
      <h1>All Transactions:</h1>
      <div style={{ width: "75vw", marginLeft: "auto", marginRight: "auto" }}>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
};

export default Transactions;
