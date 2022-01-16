import { Form as F, Input, Button, Row, Col, Layout, Space } from "antd";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;
export default function Form() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>Header</Header>
      <Layout style={{ height: "100vh" }}>
        <Space direction="vertical">
          <Content style={{ padding: "0 50px" }}>
            <Row>
              <Col span={24}>
                <h1>Sign Up</h1>
              </Col>
            </Row>
            <Row>
              <Col span={6}></Col>
              <Col span={5}>
                <F
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <F.Item
                    name="email"
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "Please input your email!",
                    //   },
                    // ]}
                  >
                    <Input placeholder="Email" bordered={false} />
                  </F.Item>

                  <F.Item
                    name="password"
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "Please input your password!",
                    //   },
                    // ]}
                  >
                    <Input.Password placeholder="Password" bordered={false} />
                  </F.Item>

                  <F.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button shape="round" htmlType="submit">
                      Submit
                    </Button>
                  </F.Item>
                </F>
              </Col>
              <Col span={1}></Col>
              <Col span={5}>
                <Space direction="vertical">
                  <Button style={{ width: 200 }}>
                    <FacebookFilled /> Continue with Facebook
                  </Button>
                  <Button style={{ width: 200 }}>
                    <GoogleCircleFilled /> Continue with Google
                  </Button>
                </Space>
              </Col>
              <Col span={6}></Col>
            </Row>
          </Content>
        </Space>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
