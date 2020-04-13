import React from "react";
import "SearchBar.css";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

export default class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map((sortByOption) => {
            // Retrieves the value of that key (i.e. "best_match")
            let SortByOptionValue = SortByOptions[sortByOption];
            // Gives a list element with the sort option and the value as its reference key
            return <li key={SortByOptionValue}>{sortByOption}</li>;
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>{this.renderSortByOptions()}</ul>
                </div>
                <div clasName="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}
