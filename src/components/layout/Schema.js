import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Schema extends Component {
  render() {
    const rootUrl = `${data.site.siteMetadata.siteUrl}`;
    const pagePath = `/${destination.slug}/${slug}`;
    const postURL = rootUrl + pagePath;
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: postURL,
        image: `${featuredImage.url}`,
        headline: `${title}`
      }
    ];
    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
    );
  }
}

Schema.propTypes = {};

export default Schema;
