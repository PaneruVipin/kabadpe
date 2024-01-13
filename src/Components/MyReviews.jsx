import React from "react";
import "../style/MyReview.css";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
  const review = [
    {
      id: 1,
      img: "/images/customImg/client-02.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },

    {
      id: 2,
      img: "/images/customImg/client-01.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },

    {
      id: 3,
      img: "/images/customImg/client-03.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },

    {
      id: 4,
      img: "/images/customImg/client-04.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },

    {
      id: 5,
      img: "/images/customImg/client-05.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },

    {
      id: 6,
      img: "/images/customImg/team-2.jpg",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 7,
      img: "/images/customImg/team-3.jpg",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 8,
      img: "/images/customImg/team-4.jpg",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 9,
      img: "/images/customImg/test-img-1.jpg",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 10,
      img: "/images/customImg/testi-thumb-jpg",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 11,
      img: "/images/customImg/client-03.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 12,
      img: "/images/customImg/client-01.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 13,
      img: "/images/customImg/client-05.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 14,
      img: "/images/customImg/team-3.jpg",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 15,
      img: "/images/customImg/client-01.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 16,
      img: "/images/customImg/client-04.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 17,
      img: "/images/customImg/client-03.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 18,
      img: "/images/customImg/client-01.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 19,
      img: "/images/customImg/client-03.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 20,
      img: "/images/customImg/client-05.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 21,
      img: "/images/customImg/client-02.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 22,
      img: "/images/customImg/team-3.jpg",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 23,
      img: "/images/customImg/team-4.jpg",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 24,
      img: "/images/customImg/client-03.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 25,
      img: "/images/customImg/client-01.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 26,
      img: "/images/customImg/client-02.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 27,
      img: "/images/customImg/client-05.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 28,
      img: "/images/customImg/test-img-1.jpg",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 29,
      img: "/images/customImg/client-03.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
    {
      id: 30,
      img: "/images/customImg/client-05.png",
      name: "Holland",
      date: "20 Nov 2023",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaqueofficiis dolor. Nostrum nemo alias consequatur ullam, numquam nobis.",
    },
  ];

  return (
    <>
      <section className="my-review-comp">
        <h6>My Reviews</h6>

        <ReviewCard cards={review} />
      </section>
    </>
  );
};

export default MyReviews;
