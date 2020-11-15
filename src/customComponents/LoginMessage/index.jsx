import { Alert } from 'antd';
const LoginMessage = ({ content,type }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type={type}
    showIcon
  />
);

export default LoginMessage;
