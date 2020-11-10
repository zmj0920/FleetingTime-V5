import React from 'react';
import { Modal } from 'antd';
import moment from 'moment';
const UpdateForm = (props) => {
  const { updateModalVisible, onCancel, modalTitle } = props;
  let values = props.children.props.values
  let columns = props.children.props.columns
  console.log(props.children)
  let array = Object.keys(values)
  let arr = Object.values(values)
  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    for (let index = 0; index < columns.length; index++) {
      const dataIndex = columns[index].dataIndex;
      if (key == dataIndex) {
        
        if (columns[index].valueType === "dateTimeRange") {
          props.children.props.columns[index]['initialValue'] = [moment(arr[i][0]), moment(arr[i][1])]
        } else {
          props.children.props.columns[index]['initialValue'] = arr[i]
        }
      }
    }
  }
  console.log(props.children)
  return (
    <Modal
      title={modalTitle}
      visible={updateModalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default UpdateForm;