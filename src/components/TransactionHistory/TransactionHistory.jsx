import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr className={css.tableHeadRow}>
          <th className={css.tableHeadItem}>Type</th>
          <th className={css.tableHeadItem}>Amount</th>
          <th className={css.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }, idx) => {
          return (
            <tr
              className={clsx(
                css.tableBodyRow,
                idx % 2 === 0 ? css.evenItemBgColor : css.oddItemBgColor
              )}
              key={id}
            >
              <td className={css.tableBodyItem}>{type}</td>
              <td className={css.tableBodyItem}>{amount}</td>
              <td className={css.tableBodyItem}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;