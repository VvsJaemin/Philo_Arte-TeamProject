import React, { useState } from 'react';
const { useDispatch } = require("react-redux");
const { getReviewList } = require("../reducer/review.reducer");


const ReviewSearch =({pageRequest})=>{
    const [keyword, setKeyword] = useState('')
    const dispatch = useDispatch()



    return (
        <form onSubmit={(e) => e.preventDefault()} className="search-form">
            <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                <div className="filter-inputs">
                    <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
                        <input
                            className="form-control focus-reset pl-13"
                            type="text"
                            name="keyword"
                            value={keyword}
                            onChange={(e) => {
                                setKeyword(e.target.value);
                            }}
                            placeholder="Review Search"
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                            <i className="icon icon-zoom-2 text-primary font-weight-bold"></i>
                        </span>
                    </div>
                </div>
                <div className="button-block">
                    <button
                        onClick={() => {
                            dispatch(
                                getReviewList({
                                    ...pageRequest,
                                    type: 'twc',
                                    keyword: keyword,
                                })
                            );
                        }}
                        className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase"
                    >
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ReviewSearch