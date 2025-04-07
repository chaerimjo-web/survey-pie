import { Table } from "antd";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

import MainLayout from "../layouts/MainLayout";
import fetcher from "../libs/fetcher";

const PAGE_SIZE = 2;

const columns = [
  {
    title: "번호",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "생성일",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (createdAt) => {
      const time = new Date(createdAt);
      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    },
  },
  {
    title: "액션",
    dataIndex: "id",
    key: "action",
    render: (id) => {
      return (
        <button
          onClick={() => {
            console.log(id, "삭제");
          }}
        >
          삭제
        </button>
      );
    },
  },
];

function ListPage() {
  const { data, error } = useSWR("/surveys", fetcher);
  const navigate = useNavigate();
  // const [page, setPage] = useState();

  console.log(data);

  if (error) {
    return "error";
  }

  if (!data) {
    return "loading ...";
  }

  return (
    <MainLayout selectedKeys={["list"]}>
      <Table
        pagination={{
          pageSize: PAGE_SIZE,
          // total: data.length,
          // current: page,
        }}
        // onChange={(pagination)=>{
        // 	setPage(pagination.current);
        // }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              console.log(record, rowIndex);
              navigate(`/builder/${record.id}`);
            },
          };
        }}
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
      />
    </MainLayout>
  );
}
export default ListPage;
