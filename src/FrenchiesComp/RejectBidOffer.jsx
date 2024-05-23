import { toast } from "react-toastify";
import { franchiseBidOfferAction } from "../apis/franchise/bid";

const RejectBidOffer = ({ data, closePodpup, refetch }) => {
  const handleConfirmClick = async () => {
    const res = await franchiseBidOfferAction({
      id: data?.id,
      action: "reject",
    });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    refetch();
    closePodpup();
  };
  return (
    <div onClick={closePodpup} className="view-bid-main close-message-main">
      <div onClick={(e) => e.stopPropagation()} className="close-mesge-bx">
        <span>
          This bidder's current offer is not accepted, the Bidder is open to
          offer again. Confirm You are not accepting this offer
        </span>

        <button onClick={handleConfirmClick} className="confirm-btn">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default RejectBidOffer;
