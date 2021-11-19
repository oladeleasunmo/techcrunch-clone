import React from 'react'
import Header from '../components/header'
import {Link} from 'react-router-dom'
import Footer from '../components/footer'
import database from '../components/fake-database'
import {BiComment, BiLike, BiDislike} from 'react-icons/bi'
import author from '../assets/images/author.jpeg'
import { FiUser } from 'react-icons/fi';

const Post =  ({match}) => {

    const article = database.find(data => data.head == match.params.index)
    const databaseWithout = database.filter((database) => database !== article)


    return (
        <>
            <div className="row">
                <Header />
                <main className="main-block">
                    <div className="all-articles-block">
                        <div className="post-head">
                            <h3>Category</h3>
                            <h1>{article.head}</h1>
                            <h4 className="hide-mobile">{article.article}</h4>
                            <div className="row j-c-b author-block">
                                <div className="row">
                                    <Link to="" className="author-img"><img src={author} /></Link>
                                    <div className="mtb-auto">
                                        <Link to=""><small>{article.author}</small></Link>
                                        <div><small>9:12PM GMT1+ • April 16, 2021</small></div>
                                    </div>
                                </div>
                                <a href="#comment" className="comment mtb-auto">< BiComment/><span>Comment</span></a>
                            </div>
                        </div>
                        <div className="post-main">
                            <div><img src={article.image}/></div>
                            <div className="post-content mt-5 mb-4">
                                {article.content.map((p_block , i ) =>
                                    <p>{p_block}</p>
                                )}
                            </div>
                        </div>
                        <div className="post-footer">
                            <div className="tag">
                                <h3>Tag</h3>
                                <Link to="">{article.author}</Link>
                                <Link to="">{article.author}</Link>
                                <Link to="">{article.author}</Link>
                                <Link to="">{article.author}</Link>
                                <Link to="">{article.author}</Link>
                            </div>
                            <div className="other-article mt-3 mb-3">
                                <h3>Latest Tops</h3>
                                {databaseWithout.map((article , i) =>
                                    i > 2 ? '':
                                    <>
                                        <a href={`/post/${article.head}`} className="article-block">
                                            <div className="">
                                                <div className="img hide-mobile">
                                                    <img src={article.image} className="w-100"/>
                                                </div>
                                                <div className="content">
                                                    <p className="a">{article.author}</p>
                                                    <h2>{article.head}</h2>
                                                </div>
                                            </div>
                                        </a>
                                    </>
                                )}
                                <a href="" id="comment"></a>
                            </div>
                            <div className="comment-section">
                                <h2>comments <span>1</span></h2>
                                <div>
                                    <form className="col-sm-10 m-rl-auto"> 
                                        <div>
                                            <input placeholder="Name (optional)" className="mt-2 mb-2" type="text"/>
                                        </div>
                                        <div>
                                            <input placeholder="comment..." className="mt-2 mb-2" type="text"/>
                                        </div>
                                        <div className="m-rl-auto text-center">
                                            <input value="proceed" type="submit" className="submit"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="comments mt-5">
                                    <div className="user-comment">
                                        <div className="row">
                                            <div className="img"><FiUser /></div>
                                            <div className="content">
                                                <div className="row">
                                                    <h3>Name<span> • 2 hours ago</span></h3>
                                                </div>
                                                <p>Comment comment comment</p>
                                                <div className="comment-action row">
                                                    <a href=""><BiLike /><span>0</span></a>
                                                    <a href=""><BiDislike /><span>0</span></a>
                                                    <a href="" className="r">Reply</a>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </main>
            </div>
        </>
    )
}
export default Post