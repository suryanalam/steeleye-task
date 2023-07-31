import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({
  rows,
  currencyType,
  setSelectedOrderDetails,
  setSelectedOrderTimeStamps,
  searchText,
}) => {
  const filteredData = rows.filter((order) =>
    order["&id"].includes(searchText)
  );

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {filteredData.length > 0
          ? filteredData.map((row, index) => (
              <ListRow
                key={index}
                row={row}
                setSelectedOrderDetails={setSelectedOrderDetails}
                setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}
              >
                <ListRowCell>{row["&id"]}</ListRowCell>
                <ListRowCell>
                  {row.executionDetails.buySellIndicator}
                </ListRowCell>
                <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
                <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
                <ListRowCell>
                  {row.bestExecutionData.orderVolume[currencyType]}
                </ListRowCell>
              </ListRow>
            ))
          : rows.map((row, index) => (
              <ListRow
                key={index}
                row={row}
                index={index}
                setSelectedOrderDetails={setSelectedOrderDetails}
                setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}
              >
                <ListRowCell>{row["&id"]}</ListRowCell>
                <ListRowCell>
                  {row.executionDetails.buySellIndicator}
                </ListRowCell>
                <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
                <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
                <ListRowCell>
                  {row.bestExecutionData.orderVolume[currencyType]}
                </ListRowCell>
              </ListRow>
            ))}
      </tbody>
    </table>
  );
};

export default List;
