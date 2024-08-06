import Climconnectrightpart from "./Climconnectrightpart";

const ClimeProfilePopUp = ({ onClickClosePost, selectedData }) => {
  return (
    <>
      <section className="add-post-comp" onClick={onClickClosePost}>
        <div
          style={{ width: "70%", height: "90%" }}
          className="add-post-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <Climconnectrightpart selectedData={selectedData} comp="user" />
          <div
            onClick={onClickClosePost}
            style={{ position: "aboslute" }}
            className="close-post-btn"
          >
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClimeProfilePopUp;
