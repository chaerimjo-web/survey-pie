import { Col, Row } from "antd";

import MainLayout from "../layouts/MainLayout";

function BuilderPage() {
  return (
		<MainLayout selectedKeys={["builder"]}>
			<Row>
				<Col flex="auto">Preview</Col>
				<Col flex="300px">Option</Col>
			</Row>
		</MainLayout>
	);
}
export default BuilderPage;
