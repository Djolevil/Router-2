import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Voja', text: 'The Bear asked the Rabbit why is his hair falling off' },
    { id: 'q2', author: 'Princess Dileya', text: 'Like the Sun you shine, place of birth of ours' }
];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    console.log(match);

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found!</p>
    }

    return <Fragment>
              <HighlightedQuote text={quote.text} author={quote.author} />
              <Route path={match.path} exact>
                <div className='centered'>
                  <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
              </Route>
              <Route path={`${match.path}/comments`}>
                  <Comments />
              </Route>
            </Fragment>
};

export default QuoteDetail;