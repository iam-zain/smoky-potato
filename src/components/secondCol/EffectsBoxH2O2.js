import React from "react";
import { Col, Row, Slider } from "antd";

import StatusIcon from "../StatusIcon";
import { MarksApop, MarksApopNoName } from "../../utils/utils";

const EffectsBoxH2O2 = ({ status, className, value, onChange }) => {
  return (
    <div className={`effects-box with-slider h2o2 ${className}`} id="h2o2">
      <div className="name">H₂O₂</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={14}>
          <Slider
            range
            min={0}
            max={1}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksApopNoName}
          />
        </Col>
        <Col span={10}>
          <span className="slider-label">{!status && MarksApop[value]}</span>
        </Col>
      </Row>
      <StatusIcon type={className} />
    </div>
  );
};

export default EffectsBoxH2O2;