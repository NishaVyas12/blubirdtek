import React from "react";
import "../../assets/css/HomePage/NewsSection.css";
import news1 from "../../assets/images/news/news1.jpg";
import news2 from "../../assets/images/news/news2.jpg";
import news3 from "../../assets/images/news/news3.jpg";
import news4 from "../../assets/images/news/news4.jpg";
import news5 from "../../assets/images/news/news5.jpg";

const allNewsData = [
    { id: 1, image: news1, title: "Brand Solutions", description: "5 Key Brand Elements Every MSME Needs to Succeed in Todays Market" },
    { id: 2, image: news2, title: "Product Solutions", description: "How Integrated Brand Solutions Can Save Time and Money for Small Businesses" },
    { id: 3, image: news3, title: "Tech Solutions", description: "Building Brand Loyalty: Strategies for MSMEs to Create Long-lasting Customer Relationships" },
    { id: 4, image: news4, title: "CRM Solutions", description: "The Power of Consistency: Why a Cohesive Brand Strategy Matters for SMBs" },
    { id: 5, image: news5, title: "E-commerce Solution", description: "From Startup to Success: A Step-by-Step Guide to Building a Strong Brand" },
];

const NewsSection = () => {
    // Duplicate the array to create a seamless loop effect
    const infiniteNewsData = [...allNewsData, ...allNewsData];

    return (
        <section className="newsSection">
            <h1 className="news-title">Good News Feed</h1>
            <div className="news-container-wrapper">
                <div className="news-container">
                    {infiniteNewsData.map((news, index) => (
                        <div className="news-card" key={index}>
                            <img src={news.image} alt={`Image ${news.id}`} />
                            <div className="news-content">
                                <h3 dangerouslySetInnerHTML={{ __html: news.title }}></h3>
                                <p>{news.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
