import React from 'react'
import {Link} from 'react-router-dom'
import database from './fake-database'

const Jumbotron = () => {

    let main_article = database[0]
    let aside_article = [database[1] , database[2] , database[3], database[4] ]

    return(
        <>
        <section className="headline">
            <div className="row j-c-b">
                <div className="main">
                    <Link to={`/post/${main_article.head}`} className="feature-article article-hover">
                        <h2>{main_article.head}</h2>
                        <p className="content">{main_article.article}</p>
                        <p className="a"><Link to="">{main_article.author}</Link></p>
                        <div>
                            <img src={main_article.image}/>
                        </div>
                    </Link>
                </div>
                <div className="aside">
                    { aside_article.map((article , i ) => 
                        <Link to={`/post/${article.head}`} className="side-article article-hover">
                            {/* {article.e_c ? <div></div> : <div><h6>Extra Crunch</h6></div>} */}
                            <h3>{article.head}</h3>
                            <p className="a">{article.author}</p>
                        </Link>
                    )}
                </div>
            </div>
        </section>
        </>
           
    )
}
export default Jumbotron