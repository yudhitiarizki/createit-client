import React from "react";

const Input = (props) => {
  const func = props.onChange;

  var disabled = false;

  props.disable ? (disabled = props.disable) : (disabled = false);

  return (
    <div className="col-lg-12 col-12 m-0 mb-2 personal-info">
      {props.value ? (
        <input type={`${props.type}`} id={`${props.name}`} className="form-control" value={`${props.value}`} onChange={func} disabled={disabled} />
      ) : (
        <input type={`${props.type}`} name={`${props.name}`} id={`${props.name}`} className="form-control" placeholder={`${props.name}`} onChange={func} disabled={disabled} />
      )}
    </div>
  );
};

export default Input;
