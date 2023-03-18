import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

type Props = {
  count: number;
  rowsPerPage: number;
  page: number;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const CustomTablePagination: React.FC<Props> = ({
  count,
  rowsPerPage,
  page,
  onChangePage,
  onChangeRowsPerPage,
}) => {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      // onChangePage={onChangePage}
      // onChangeRowsPerPage={onChangeRowsPerPage}
    />
  );
};

export default CustomTablePagination;
