import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NewsItem = ({text, title}) => {
 return <NewsItemStyle>
        <p><b>{title}</b></p>
        <span>{text}</span>
    </NewsItemStyle>
}

NewsItem.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

const NewsItemStyle = styled.div`
    width: 1000px;
    padding: 20px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: #DCDCDC;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
`

export default NewsItem;