import React from 'react'
import Jumbrotron from '../components/jumbrotron'
import Header from '../components/header'
import {Link} from 'react-router-dom'
import Footer from '../components/footer'
import database from '../components/fake-database'

const Home =  () => {

    return (
        <>
            <div className="row">
                <Header />
                <main className="main-block">
                    <div className="all-articles-block">
                        <Jumbrotron />
                        <div className="main-article-block">
                            <h2>The latest</h2>
                            <div>
                                {database.map((article , i ) => 
                                    <Link to={`/post/${article.head}`} className="article-block article-hover">
                                        <div className="row j-c-b">
                                            <div className="article-head">
                                                <h2>{article.head}</h2>
                                                <p className="a">{article.author}</p>
                                            </div>
                                            <div className="article-body">
                                                <p>{article.article}</p>
                                            </div>
                                            <div className="article-image">
                                                <div className="">
                                                    <img src={article.image} className="w-100"/>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>    
                                )}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    )
}
export default Home