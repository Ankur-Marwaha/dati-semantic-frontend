import sprite from "../../../../assets/images/sprite.svg";
import * as PropTypes from "prop-types";
import React from "react";
import rowStyle from "../metadata/MetadataRow.module.css";

const AssetIriRow = (props) => {
  return (
    <div className="row" data-testid="asset-iri-row">
      <div className={"col-3 strong " + rowStyle.propertyName}>URI</div>
      <div className="col-8">
        <div className={"text-monospace " + rowStyle.propertyLink}>
          <a href={props.assetIri} target="_blank" rel="noreferrer">
            {props.assetIri}
          </a>
        </div>
      </div>
      <div className="col-1">
        <a
          className="btn btn-sm pt-0"
          href={props.assetIri}
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="icon icon-primary icon-sm"
            data-testid="external-link-icon"
          >
            <use href={sprite + "#it-external-link"} />
          </svg>
        </a>
      </div>
    </div>
  );
};

AssetIriRow.propTypes = {
  assetIri: PropTypes.string.isRequired,
};

export default AssetIriRow;
