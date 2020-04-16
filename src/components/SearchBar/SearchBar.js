import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "", // Search term located in the search input
            location: "", // Location to search near from the location input
            sortBy: "best_match", // The selected sorting option to use
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.sortByOptions = {
            "Best Match": "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count",
        };
    }

    // Returns the css styling for the actively chosen sort element
    getSortByClass(sortByOption) {
        return this.state.sortBy === sortByOption ? "active" : "";
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }

    handleTermChange(event) {
        const term = event.target.value;
        this.setState({ term: term });
    }

    handleLocationChange(event) {
        const location = event.target.value;
        this.setState({ location: location });
    }

    handleSearch(event) {
        this.props.searchYelp(
            this.state.term,
            this.state.location,
            this.state.sortBy
        );
        event.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map((sortByOption) => {
            // Retrieves the value of that key (i.e. "best_match")
            let sortByOptionValue = this.sortByOptions[sortByOption];
            // Gives a list element with the sort option and the value as its reference key
            return (
                <li
                    className={this.getSortByClass(sortByOptionValue)}
                    onClick={this.handleSortByChange.bind(
                        this,
                        sortByOptionValue
                    )}
                    key={sortByOptionValue}
                >
                    {sortByOption}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>{this.renderSortByOptions()}</ul>
                </div>
                <div className="SearchBar-fields">
                    <input
                        onChange={this.handleTermChange}
                        placeholder="Search Businesses"
                    />
                    <input
                        onChange={this.handleLocationChange}
                        placeholder="Where?"
                    />
                </div>
                <div onClick={this.handleSearch} className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}
