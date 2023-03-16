import PropTypes from 'prop-types';
import { Table, TitleText, MainText, Row } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TitleText>Type</TitleText>
          <TitleText>Amount</TitleText>
          <TitleText>Currency</TitleText>
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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
