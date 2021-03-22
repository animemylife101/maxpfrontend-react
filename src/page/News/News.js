import React, { useLayoutEffect } from 'react';
import IsLoading from '../../tools/isLoading';

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

export default News;