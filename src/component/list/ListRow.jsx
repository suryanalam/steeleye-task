import styles from "./ListRow.module.css";

const ListCell = ({
  children,
  row,
  setSelectedOrderDetails,
  setSelectedOrderTimeStamps,
}) => {
  const handleClick = () => {
    setSelectedOrderDetails(row.executionDetails);
    setSelectedOrderTimeStamps(row.timestamps);
  };

  return (
    <tr className={styles.cell} onClick={handleClick}>
      {children}
    </tr>
  );
};

export default ListCell;
