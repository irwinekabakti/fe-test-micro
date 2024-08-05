"use client";

import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
