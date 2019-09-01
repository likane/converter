import React from "react";

export default class Ad extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className="ad">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3227258470970876"
          //   data-ad-slot="xxxxxxxxxx"
          //   data-ad-format="auto"
          enable_page_level_ads="true"
        />
      </div>
    );
  }
}
