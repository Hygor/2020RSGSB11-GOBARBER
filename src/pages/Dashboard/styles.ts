import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  background: #28262e;
  padding: 2rem 0;
`;

export const HeaderContent = styled.div`
  width: 70rem;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .logo {
    height: 5rem;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 5rem;
  text-decoration: none;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 1.75rem;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  span {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    color: #999591;
  }

  strong {
    color: #ff9000;
  }
`;

export const Content = styled.main`
  max-width: 70rem;
  margin: 4rem auto;
  display: flex;
`;

export const Agenda = styled.div`
  flex: 1;
  margin-right: 4rem;

  header {
    margin-bottom: 4rem;
  }

  h1 {
    font-weight: bold;
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: #ff9000;
    font-size: 1rem;
    margin-bottom: 1em;
    font-weight: 500;

    span {
      text-transform: capitalize;

      &:after {
        content: ' | ';
        margin: 0 0.5rem;
      }

      &:last-child:after {
        content: '';
      }
    }
  }
`;

export const NextAppointment = styled.div`
  margin: 1rem 0;

  h2 {
    color: #999591;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      height: 80%;
      top: 10%;
      left: 0;
      width: 0.2rem;
      background: #ff9000;
      border-radius: 0.1rem;
    }

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 2.5rem;
    }

    strong {
      font-size: 1.25rem;
      margin-left: 1.5rem;
      color: #fff;
    }

    span {
      display: flex;
      margin-left: auto;
      align-items: center;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 0.5rem;
      }
    }
  }
`;

export const Section = styled.section`
  margin: 2rem 0;

  > p {
    color: #999591;
  }

  header {
    margin: 0;
  }

  h3 {
    color: #999591;
    border-bottom: 1px solid #3e3b47;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;

export const AppointmentList = styled.ul``;

export const Appointment = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  > span {
    display: flex;
    align-items: center;
    width: 7rem;
    color: #999591;

    svg {
      margin-right: 1rem;
      color: #ff9000;
    }
  }

  > div {
    background: #3e3b47;
    display: flex;
    flex: 1;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    position: relative;
  }

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 1.6rem;
  }

  strong {
    font-size: 1rem;
    margin-left: 1rem;
    color: #fff;
  }
`;

export const Calendar = styled.aside`
  width: 24rem;

  .DayPicker {
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 10px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    border: 0.1rem solid #ff9000 !important;
    color: #ff9000 !important;
    border-radius: 10px;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
