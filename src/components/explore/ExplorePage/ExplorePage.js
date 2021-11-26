import React from "react";
import Categories from "../Categories/Categories";
import Types from "../Types/Types";

const introSection = () => (
  <div className="section section-muted">
    <div className="section-content">
      <div className="container" role="article">
        <div className="row mb-3">
          <div className="col-12">
            <h2>Il catalogo semantico della Pubblica amministrazione</h2>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExplorePage = () => (
  <div data-testid="ExplorePage">
    {introSection()}
    <Types />
    <Categories />
  </div>
);

ExplorePage.propTypes = {};

ExplorePage.defaultProps = {};

export default ExplorePage;