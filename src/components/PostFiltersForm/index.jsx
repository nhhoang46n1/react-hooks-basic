import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  onSumit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
  onSumit: null,
};

function PostFiltersForm(props) {
  const { onSumit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeOutRef = useRef(null);

  function handleSearchTermForm(e) {
    setSearchTerm(e.target.value);
    if (!onSumit) return;
    if (typingTimeOutRef) {
      clearTimeout(typingTimeOutRef.current);
    }
    typingTimeOutRef.current = setTimeout(() => {
      const formValue = {
        searchTerm: e.target.value,
      };
      onSumit(formValue);
    }, 300);
  }

  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermForm}
      ></input>
    </form>
  );
}

export default PostFiltersForm;
