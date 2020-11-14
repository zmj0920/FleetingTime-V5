import React from 'react';
import { LightFilte } from '@ant-design/pro-form';
import { isFunction } from 'lodash';
import { LightFilter } from '@ant-design/pro-form';
const LightFilterCustom = (props) => {
  const { lightFilterFrom, onLightFilterFinish, collapseLabel, dateFormatter, initialValues } = props
  return (
    <div>
      <LightFilter
        onFinish={async values => onLightFilterFinish(values)}
        collapse={isFunction(collapseLabel) ? true : false}
        collapseLabel={isFunction(collapseLabel) ? collapseLabel() : false}
        initialValues={initialValues}
        dateFormatter={dateFormatter}
      >
        {lightFilterFrom.props.children}
      </LightFilter>
    </div>
  );
};

export default LightFilterCustom
