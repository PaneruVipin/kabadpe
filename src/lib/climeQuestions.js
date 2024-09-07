export const climeQuestions = [
  {
    question: "Type of product",
    perfix: "( Metal, Glass, Cloth, Wood, Bamboo, Oil, Wax,Electronic)",
    id: "product_type",
    answers: [
      { answer: "Virgin", marks: 5, id: "virgin" },
      { answer: "Recycled", marks: 10, id: "recycled" },
      {
        answer: "Refurb (not more than 20% virgin plastic)",
        marks: 13,
        id: "refurb",
      },
      {
        answer: "Upcycled (not more than 20% virgin plastic)",
        marks: 13,
        id: "upcycled",
      },
      { answer: "Natural (Not processed)", marks: 15, id: "natural" },
    ],
  },
  {
    question:
      "Does your product contain plastic? If yes, amount of plastic in product",
    id: "contains_plastic",
    answers: [
      { answer: "100%", marks: 0, id: "100" },
      { answer: "75-99%", marks: 2, id: "75_99" },
      { answer: "40-75%", marks: 4, id: "40_75" },
      { answer: "1-40%", marks: 6, id: "1_40" },
      { answer: "No plastic", marks: 8, id: "no" },
    ],
  },
  {
    question: "Material used in product",
    id: "material_used",
    isChekBox: true,
    answers: [
      { answer: "Cotton", marks: 5, id: "cotton" },
      { answer: "Jute", marks: 10, id: "jute" },
      { answer: "Paper", marks: 10, id: "paper" },
      { answer: "Chemicals", marks: 0, id: "chemicals" },
      { answer: "Bamboo", marks: 12, id: "bamboo" },
      { answer: "Other eco-friendly", marks: 13, id: "other_eco_friendly" },
      { answer: "Organic", marks: 13, id: "organic" },
      { answer: "Natural oil/wax", marks: 13, id: "natural_oil" },
    ],
  },
  {
    question: "Type of packaging material used for shipping",
    id: "packaging_material",
    answers: [
      { answer: "Plastic", marks: 0, id: "plastic" },
      { answer: "Recycled/Upcycled", marks: 4, id: "recycled_upcycled" },
      {
        answer: "Plastic free packaging",
        marks: 6,
        id: "plastic_free_packaging",
      },
    ],
  },
  {
    question: "Type of primary and secondary packaging material",
    perfix: "(including label)",
    id: "primary_secondary_packaging",
    answers: [
      { answer: "Plastic", marks: 0, id: "plastic" },
      { answer: "Recycled/Upcycled", marks: 4, id: "recycled_upcycled" },
      { answer: "Plastic free", marks: 6, id: "plastic_free" },
    ],
  },
  {
    question: "Is your product a plastic replacement?",
    id: "plastic_replacement",
    answers: [
      { answer: "Yes", marks: 7, id: "yes" },
      { answer: "No", marks: 0, id: "no" },
    ],
  },
  {
    question: "Electricity consumption",
    id: "electricity_consumption",
    answers: [
      { answer: "Electric Machine made", marks: 0, id: "machine_made" },
      { answer: "Partial machine made", marks: 1, id: "partial_machine_made" },
      { answer: "Handmade", marks: 3, id: "handmade" },
    ],
  },
  {
    question: "Is ground water used while making the product?",
    id: "groundwater_usage",
    answers: [
      { answer: "Yes", marks: 0, id: "yes" },
      { answer: "No", marks: 5, id: "no" },
    ],
  },
  {
    question: "What happens to the product at the end of its life cycle?",
    id: "end_of_life",
    answers: [
      { answer: "Landfill", marks: 0, id: "landfill" },
      { answer: "Bio-degradable", marks: 10, id: "bio_degradable" },
      { answer: "Recycled", marks: 5, id: "recycled" },
    ],
  },
  {
    question: "Materials used in making product are sourced from",
    id: "sourced_from",
    answers: [
      { answer: "400 KM", marks: 5, id: "400_km" },
      { answer: "Country", marks: 2, id: "country" },
      { answer: "Imported", marks: 0, id: "imported" },
    ],
  },
  {
    question: "Is your product KabadPe returned?",
    id: "kabadpe_returned",
    answers: [
      { answer: "Yes", marks: 2, id: "yes" },
      { answer: "No", marks: 0, id: "no" },
    ],
  },
  {
    question: "Is your product in any way toxic to environment?",
    id: "toxicity_to_environment",
    answers: [
      { answer: "Whole product", marks: 0, id: "whole_product" },
      { answer: "Product only", marks: 1, id: "product_only" },
      { answer: "Packaging only", marks: 5, id: "packaging_only" },
      { answer: "Label only", marks: 7, id: "label_only" },
      { answer: "Not at all", marks: 10, id: "not_at_all" },
    ],
  },
  {
    question: "Is this best product from environment?",
    id: "best_product",
    isQuestionForAdmin: true,
    answers: [
      { answer: "Best", marks: 10, id: "best" },
      {
        answer: "Better for environment",
        marks: 7,
        id: "better_for_environment",
      },
      { answer: "Okay for environment", marks: 5, id: "okay_for_environment" },
      { answer: "Bad", marks: 2, id: "bad" },
      { answer: "Worst", marks: 0, id: "worst" },
    ],
  },
];
const climeColors = {
  "0-20": "#f86f6d",
  "20-40": "#ff9360",
  "40-60": "#e6de68",
  "60-80": "#2bc2c6",
  "80-100": "#6ec9ec",
};
export const getClimeColor = (marks) => {
  return marks < 20
    ? climeColors["0-20"]
    : marks < 40
    ? climeColors["20-40"]
    : marks < 60
    ? climeColors["40-60"]
    : marks < 80
    ? climeColors["60-80"]
    : climeColors["80-100"];
};
export const getMarksCount = (values = {}) => {
  const totalMarks = climeQuestions?.reduce((a, b) => {
    let mark;
    if (b?.isChekBox) {
      mark = (values?.[b?.id] || [])?.reduce((a, c) => {
        const newMark = b?.answers?.find(({ id }) => id == c)?.marks || 0;
        return a + newMark / values?.[b?.id]?.length;
      }, 0);
    } else {
      mark = +b?.answers?.find(({ id }) => values?.[b?.id] == id)?.marks || 0;
    }
    return a + mark;
  }, 0);
  return totalMarks
};
