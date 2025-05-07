import { Table } from "antd";
import { Button } from "antd";
import React, { useMemo } from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import useSWR from "swr";

import MainLayout from "../layouts/MainLayout";
import fetcher from "../libs/fetcher";
import deleteSurvey from "./deleteSurvey";

const PAGE_SIZE = 5;

function ListPage() {
  const { data, error, mutate } = useSWR(
    "/surveys?_sort=id&_order=desc",
    fetcher
  ); //최신 상태를 유지
  const navigate = useNavigate();
  // const [page, setPage] = useState();
  const columns = useMemo(
    () => [
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
          return `${time.getFullYear()}-${
            time.getMonth() + 1
          }-${time.getDate()}`;
        },
      },
      {
        title: "액션",
        dataIndex: "id",
        key: "action",
        render: (id) => {
          return (
            <Button
              danger
              onClick={(e) => {
                // console.log(id, "삭제");
                deleteSurvey(id).then(() => mutate());

                e.stopPropagation();
                e.preventDefault();
              }}
            >
              삭제
            </Button>
          );
        },
      },
    ],
    [mutate]
  );

  console.log(data);

  if (error) {
    return "error";
  }

  if (!data) {
    return "loading ...";
  }

  return (
    <MainLayout selectedKeys={["list"]}>
      <CreatedButtonWrapper>
        <Button onClick={() => navigate("/builder")}>
          새로운 설문조사 생성
        </Button>
      </CreatedButtonWrapper>
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

const CreatedButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: 20px;
`;

export default ListPage;
