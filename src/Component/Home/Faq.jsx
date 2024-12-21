const Faq = () => {
  return (
    <div className="my-6">
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How do I add a game review?
        </div>
        <div className="collapse-content">
          <p>
            Log in to your account, navigate to the Add Review page, and fill in
            the required fields including game title, cover image URL,
            description, rating, and genre. Once done, click the Submit button
            to save your review.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I update or delete my reviews?
        </div>
        <div className="collapse-content">
          <p>
            Yes, go to the My Reviews page. Here, you can see all the reviews
            you have added. Use the Update button to modify your review or the
            Delete button to remove it.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do I add a game to my Watchlist?
        </div>
        <div className="collapse-content">
          <p>
            Open the Review Details page of the game you like and click the Add
            to Watchlist button. The game will be saved to your personalized
            Watchlist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
