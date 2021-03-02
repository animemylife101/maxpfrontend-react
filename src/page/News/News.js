import React, { useEffect, useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/news';
import style from './News.module.css';
import IsLoading from '../../tools/isLoading';

const NewsItem = (props) => {
    return <div className={style.NewsBlock}>
        <p>{props.title}</p>
        <span>{props.text}</span>
    </div>
}

const News = (props) => {

    useLayoutEffect(() => {
        props.getNews();
    }, [])

    const data = <div>
        {props.news.map((a) => <NewsItem key={a.id} {...a} />)}
        <p>Количество постов: {props.news.length}</p>
    </div>

    return <div>
        <IsLoading isFetching={props.isFetching}>
            {props.error === 'news_ok' ? data : <h1>{props.error}</h1>}
        </IsLoading>
    </div>
}

const mapStateToProps = (state) => ({
    news: state.news.news,
    isFetching: state.preloader.isFetching,
    error: state.preloader.error
})

export default connect(mapStateToProps, { getNews })(News);