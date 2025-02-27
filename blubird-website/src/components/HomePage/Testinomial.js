import { useState, useEffect } from "react";
import { gsap } from "gsap";
import "../../assets/css/HomePage/Testinomial.css";

const Testimonial = () => {
  const [removedCards, setRemovedCards] = useState([]);
const [activeIndex, setActiveIndex] = useState(null);

useEffect(() => {
  const cards = document.querySelectorAll(".testimonial-card");
  if (cards.length > 0) {
    setActiveIndex(cards.length - 1);
    cards[cards.length - 1].classList.add("active");
  }
}, []);

const flipTopCard = () => {
  const activeCards = document.querySelectorAll(".testimonial-card:not(.removed)");
  if (activeCards.length > 1) {
    let topCard = activeCards[activeCards.length - 1];
    let secondCard = activeCards[activeCards.length - 2];

    gsap.to(topCard, {
      x: -150,
      y: 180,
      rotateY: -180,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        topCard.classList.add("removed");
        setRemovedCards((prev) => [...prev, topCard]);
        setActiveIndex(activeCards.length - 2);
        secondCard.classList.add("active");
      },
    });
  }
};

const restoreLastCard = () => {
  if (removedCards.length > 0) {
    let lastRemovedCard = removedCards.pop();
    lastRemovedCard.classList.remove("removed");

    gsap.fromTo(
      lastRemovedCard,
      { x: -150, y: 180, rotateY: -180, opacity: 0 },
      { x: 0, y: 0, rotateY: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" }
    );

    setActiveIndex(document.querySelectorAll(".testimonial-card").length - 1);
    setRemovedCards([...removedCards]);
  }
};

useEffect(() => {
  const cards = document.querySelectorAll(".testimonial-card");
  cards.forEach((card, index) => {
    if (index === activeIndex) {
      card.classList.add("active");
      card.style.width = "100%";
    } else {
      card.classList.remove("active");
      card.style.width = `${90 - (activeIndex - index) * 8}%`;
    }
  });
}, [activeIndex]);

  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-heading">
        What our clients say about us
      </h2>

      <div className="testimonial-container">
        <button className="testimonial-arrow left" style={{ position: "absolute", left: "-120px" }} onClick={flipTopCard}>
          &#8595;
        </button>

        <div className="testimonial-card" style={{ zIndex: 1 }}>
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">Our requirement was pretty unique—we needed a multi-seller marketplace for a specific niche, but most companies either turned us down, charged outrageous prices, or needed way too much time. A friend in the D2C space couldn't stop raving about BIS, so we gave them a shot. They delivered fast, at a fraction of the cost, with a platform that's super easy to manage in-house. We couldn't be happier!</p>
          <p className="testimonial-author">EPW</p>
         
        </div>

        <div className="testimonial-card" style={{ zIndex: 2 }}>
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">We tried 4 agencies before finding BluBird Integrated Services, and they completely transformed our business. What used to take a month, we now achieve in days! Since switching, our results keep improving, and I no longer worry about my website, ads, social media, or Amazon marketplace.</p>
          <p className="testimonial-author">7o3</p>
          
        </div>

        <div className="testimonial-card" style={{ zIndex: 3 }}>
          <div className="testimonial-stars">★★★★★</div>
          <p className="testimonial-text">After 20+ years in B2B space, we decided to try D2C in 2023. BluBird Integrated Services has handled everything for us since then, and now our D2C sales are nearly as big as our B2B sales. A big shoutout to BluBird Integrated Services, couldn't have done it without them!</p>
          <p className="testimonial-author">Zephyr</p>
        </div>

        <button
          className="testimonial-arrow"
          style={{ position: "absolute", right: "-120px" }}
          onClick={restoreLastCard}
        >
          &#8593;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
