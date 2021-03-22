import React, { useLayoutEffect } from 'react';
import IsLoading from '../../tools/isLoading';
import PropTypes from 'prop-types';

const News = ({ error, getNews, data, isFetching }) => {

    useLayoutEffect(() => {
        getNews();
    }, []);

    return <div data-testid='news_page'>
        <IsLoading isFetching={isFetching}>
            {error === 'news_ok' ? data : <h1>{error}</h1>}
        </IsLoading>
    </div>
}

News.propTypes = {
    error: PropTypes.string,
    getNews: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired
}

export default News;