import React from 'react'

const ShortText = ({ text, maxLength }) => {
    const truncateText = (str, maxLength) => {
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
      };
  return (
    <>
      <p>{truncateText(text, maxLength)}</p>;
    </>
  )
}

export default ShortText
