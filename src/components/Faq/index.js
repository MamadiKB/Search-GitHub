import './styles.scss';

function Faq() {
  return (
    <section className="faq">
      <h1 className="faq__h1">FAQ</h1>
      <h2 className="faq__h2">What is it for?</h2>
      <p className="faq__p">
        {/* eslint-disable-next-line max-len */}
        This application developed with React allows to find a list of GitHub repositories.
      </p>
      <h2 className="faq__h2">How do I do a search?</h2>
      <p className="faq__p">On the search page, complete the search field and validate the search.</p>
      <h2 className="faq__h2">Can I search for any term?</h2>
      <p className="faq__p">Yes, it's crazy!</p>
    </section>
  );
}

export default Faq;
