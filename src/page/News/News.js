import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/news';
import style from './News.module.css';

const NewsItem = (props) => {
    return <div className={style.NewsBlock}>
        <p>{props.title}</p>
        <span>{props.text}</span>
    </div>
}

const News = (props) => {
    let [state, setState] = useState({
        isFetching: false,
        error: null
    })

    useEffect(() => {
        props.getNews().then((response) => {
            setState(prev => ({
                ...prev,
                isFetching: response.isFetching,
                error: response.error
            }))
        });
    }, [])

    return <div>
        {
            state.isFetching === true
                ? <div>
                    {
                        state.error
                            ? <h1>{state.error}</h1>
                            : <div>
                                {
                                    <div>
                                        {props.news.map((a) => <NewsItem key={a.id} {...a} />)}
                                        <p>Количество постов: {props.news.length}</p>
                                    </div>
                                }
                            </div>
                    }
                </div>
                : <h1>Wait...</h1>
        }
    </div>
}

const mapStateToProps = (state) => ({
    news: state.news.news
})

export default connect(mapStateToProps, { getNews })(News);