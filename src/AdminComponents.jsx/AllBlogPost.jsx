import React, { useEffect, useState } from "react";
import BlogTable from "./BlogTable";
import { useQuery } from "@tanstack/react-query";
import { blogPostFetch } from "../apis/blogs/blog";
import CreateBlog from "./CreateBlog";
import { filteredData, search } from "../lib/array";
import { debounceAsync } from "../lib/debounce";

const AllBlogPost = () => {
  const [index, setIndex] = useState(1);
  const [postComnt, setPostComnt] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [isEdit, setIsedit] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState([]);
  const [includeOnly, setIncludeOnly] = useState("all");
  const indexFunc = () => {
    if (index !== 5) {
      setIndex(index + 1);
    } else {
      setIndex(5);
    }
  };

  const indexFuncPrev = () => {
    if (index !== 1) {
      setIndex(index - 1);
    } else {
      setIndex(1);
    }
  };
  const { data: posts, refetch } = useQuery({
    queryKey: ["blogposts"],
    queryFn: () => blogPostFetch({ search: searchQuery }),
  });
  useEffect(() => {
    debounceAsync(refetch, 500)();
  }, [searchQuery]);
  const publishedpost = !posts?.error
    ? posts?.filter(({ isDraft }) => !isDraft)
    : [];
  const draftPost = !posts?.error
    ? posts?.filter(({ isDraft }) => isDraft)
    : [];
  const handleFilterClick = (e) => {
    const name = e?.target?.id;
    setIncludeOnly(name);
    let newFilters = filters?.filter(({ id }) => id != "includeOnly");
    let filter = { id: "includeOnly" };
    if (name == "draft") {
      filter.fn = ({ isDraft }) => isDraft;
    } else if ("published") {
      filter.fn = ({ isDraft }) => !isDraft;
    } else {
      return;
    }
    setFilters([...newFilters, filter]);
  };
  return (
    <>
      {!isEdit ? (
        <section className="all-blog-post-comp">
          <div className="common-container">
            <div className="post-title-flex">
              <h6>Posts</h6>
              <button className="prod-filt-btn">Add New Post</button>
            </div>

            <div className="top-prod-filter-flex-box">
              <div className="breadcrum-main-box">
                <h6
                  className={`${includeOnly == "all" ? "active" : ""}`}
                  id="all"
                  onClick={handleFilterClick}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  All{" "}
                  <span className="num-brck">
                    {" "}
                    ({!posts?.error ? posts?.length : 0}){" "}
                  </span>{" "}
                </h6>
                <h6
                  className={`${includeOnly == "published" ? "active" : ""}`}
                  id="published"
                  onClick={handleFilterClick}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  Published{" "}
                  <span className="num-brck">
                    {" "}
                    ({publishedpost?.length}){" "}
                  </span>{" "}
                </h6>
                <h6
                  id="draft"
                  className={`${includeOnly == "draft" ? "active" : ""}`}
                  onClick={handleFilterClick}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  Drafts{" "}
                  <span className="num-brck"> ({draftPost?.length}) </span>{" "}
                </h6>
              </div>

              <div className="right-prod-search-flex-bx">
                <div className="right-all-prod-search-box">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    autoComplete="off"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* <button onClick={refetch} className="search-prod-btn">
                  Search Posts
                </button> */}
              </div>
            </div>

            <div className="all-prod-filter-flex-box-two">
              {/* <div className="left-all-prod-filt-sel-flex-box">
                <div className="all-prod-sel-apply-flt-box">
                  <div className="all-prod-sel-filt-box">
                    <select name="product" id="product">
                      <option value="product">Bulk actions</option>
                      <option value="product">Bulk actions</option>
                      <option value="product">Bulk actions</option>
                      <option value="product">Bulk actions</option>
                    </select>
                  </div>
                  <button className="prod-filt-btn">Apply</button>
                </div>

                <div className="all-prod-sel-filt-box all-prod-sel-filt-box2">
                  <select name="product" id="product">
                    <option value="product">All dates</option>
                    <option value="product">All dates</option>
                    <option value="product">All dates</option>
                  </select>
                </div>

                <div className="all-prod-sel-filt-box all-prod-sel-filt-box2">
                  <select name="product" id="product">
                    <option value="product">All formats</option>
                    <option value="product">All formats</option>
                    <option value="product">All formats</option>
                  </select>
                </div>

                <button className="prod-filt-btn prod-filt-btn2">Filter</button>
              </div> */}

              {/* <div className="right-all-prod-paginat-flex-box">
                <div className="items-num">
                  <p>{!posts?.error ? posts?.length : 0} Items</p>
                </div>

                <div className="duble-arrow-btn page-filt-btn">
                  <i className="fa-solid fa-angles-left"></i>
                </div>
                <div
                  onClick={indexFuncPrev}
                  className="sing-arrow-btn page-filt-btn"
                >
                  <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="page-num-box">{index}</div>

                <p>
                  of <span>5</span>
                </p>

                <div className="duble-arrow-btn page-filt-btn page-filt-btn3">
                  <i className="fa-solid fa-angles-right"></i>
                </div>

                <div
                  onClick={indexFunc}
                  className="sing-arrow-btn page-filt-btn"
                >
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div> */}
            </div>

            <BlogTable
              setIsedit={setIsedit}
              setSelectedData={setSelectedData}
              selectedData={selectedData}
              data={!posts?.error ? filteredData(posts, filters) : []}
              onClickShut={() => setPostComnt(false)}
              postComnet={postComnt}
              onClickOpen={() => setPostComnt(true)}
              onClickClose={(e) => e.stopPropagation()}
              refetch={refetch}
            />
          </div>
        </section>
      ) : (
        <CreateBlog
          data={selectedData}
          onClose={() => {
            refetch();
            setIsedit(false);
          }}
        />
      )}
    </>
  );
};

export default AllBlogPost;
