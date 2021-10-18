import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Voja', text: 'The Bear asked the Rabbit why is his hair falling off' },
    { id: 'q2', author: 'Princess Dileya', text: 'Like the Sun you shine, place of birth of ours' }
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;