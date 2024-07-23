import React from "react";
import { blogPostEdit } from "../apis/blogs/blog";

const ConfirmDeletePopup = ({ data, onClickClosePost }) => {
  const handleDeleteClick = async () => {
    await blogPostEdit({
      id: data?.id,
      blogStatus: "delete",
    });
    onClickClosePost();
  };

  return (
    <section
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClickClosePost}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          width: "300px",
          textAlign: "center",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={onClickClosePost}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <div style={{ marginTop: "20px" }}>
          <p style={{ fontSize: "18px", margin: "20px 0" }}>Are You Sure!</p>
          <button
            onClick={handleDeleteClick}
            style={{
              backgroundColor: "#ff4d4f",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmDeletePopup;
