import React, { Component } from 'react';
// import TuiCalendar from '../components/TuiCalendar/TuiCalendar';
import MyCalendar from '../components/BigCalendar/BigCalendar';

type Props = {};

export default class CalendarPage extends Component<Props> {
  props: Props;

  render() {
    return <MyCalendar />;
    // return <TuiCalendar />;
  }
}
