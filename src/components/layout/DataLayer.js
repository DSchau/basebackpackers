import React from 'react';

export default class DataLayer extends React.Component {
  render() {
    const { data } = this.props;

    return <></>;
  }
  componentDidMount() {
    const { data } = this.props;

    {
      window.dataLayer.push({
        event: 'Custom PageView'
      });
    }
  }
}
