import React from 'react';
import styled from 'styled-components';

const DateContainer = styled.small`
  color: lightgrey;
  font-style: italic;
`;
export function TaskDate(props: { date: Date }) {
  const date = new Date(props.date);
  const dateString = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  return <DateContainer>{dateString}</DateContainer>;
}
