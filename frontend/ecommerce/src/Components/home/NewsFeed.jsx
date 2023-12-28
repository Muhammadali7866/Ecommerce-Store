import React from "react";

const NewsFeed = () => {
  return (
    <>
      <section class="newsfeed" id="newsfeed">
        <div class="main-news-feed">
          <div class="news-feed-content">
            <div class="news-title">NEWSFEED</div>
            <div class="news-chanel">Instagram</div>
            <dev class="news-description">
              Follow us on social media for more discount & promotions
            </dev>
            <div class="news-link">@3legant_official</div>
          </div>
          <div class="news-feed-images">
            <img src="news-feed-img-1.png" alt="" />
            <img src="news-feed-img-2.png" alt="" />
            <img src="news-feed-img-3.png" alt="" />
            <img src="news-feed-img-4.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsFeed;
