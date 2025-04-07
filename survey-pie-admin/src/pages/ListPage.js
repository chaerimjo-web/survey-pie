import {Table} from "antd";
import useSWR from "swr";

import MainLayout from "../layouts/MainLayout";
import fetcher from "../libs/fetcher";

const columns = [
	{
		title: '번호',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: '제목',
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: '생성일',
		dataIndex: 'createdAt',
		key: 'createdAt',
		render: (createdAt)=>{
			const time = new Date(createdAt);
			return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
		}
	},
	{
		title: '액션',
		dataIndex: 'id',
		key: 'action',
		render: (id)=>{
			return <button>삭제</button>
		}
	},
];


function ListPage() {
  const { data, error } = useSWR("/surveys", fetcher);

  console.log(data);

  if (error) {
    return "error";
  }

	if(!data){
		return 'loading ...';
	}

  return (
		<MainLayout selectedKeys={["list"]}>
			<Table columns={columns} dataSource={data.map((item)=>({...item, key: item.id}))} />;
		</MainLayout>
	);
}
export default ListPage;
