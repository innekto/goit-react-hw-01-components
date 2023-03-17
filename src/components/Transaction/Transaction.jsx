import PropTypes from 'prop-types';
import { Table, HeadText, Row, MainText } from './Transaction.styled';
export default function Transaction({ items }) {
    return (
        <Table>
            <thead>
                <tr>
                    <HeadText>Type</HeadText>
                    <HeadText>Amount</HeadText>
                    <HeadText>Currency</HeadText>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <Row key={id}>
                        <MainText>{type}</MainText>
                        <MainText>{amount}</MainText>
                        <MainText>{currency}</MainText>
                    </Row>
                ))}
            </tbody>
        </Table>
    );
}

Transaction.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};
