import React from "react";
import { Pagination as MuiPagination } from "@mui/material";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  .MuiPagination-ul {
    gap: 0.5rem;
  }

  .MuiPaginationItem-root {
    color: white;

    &.Mui-selected {
      background-color: #c45d5d;

      &:hover {
        background-color: #b35353;
      }
    }

    &:not(.Mui-selected) {
      background-color: #9c4848;

      &:hover {
        background-color: #b35353;
      }
    }

    &.Mui-disabled {
      background-color: #cccccc;
      opacity: 0.5;
    }
  }
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <PaginationContainer>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        size="large"
        showFirstButton
        showLastButton
      />
    </PaginationContainer>
  );
};

export default Pagination;
