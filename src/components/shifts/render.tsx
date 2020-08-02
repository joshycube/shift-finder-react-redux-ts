import React from "react";
import { format, isValid } from "date-fns";

import { Shift } from "../../types/shifts";

import * as Styles from "./styles";

interface Props {
  shifts: Shift[];
}

function ShiftsRender({ shifts }: Props) {
  return (
    <Styles.Wrapper>
      {shifts &&
        !!shifts.length &&
        shifts.map((shift: Shift) => (
          <Styles.Card data-test-id="item-card" key={shift.id}>
            <h3 data-test-id="text-practice">{shift.practice.name}</h3>
            <h4 data-test-id="text-rate">£{shift.hourlyRate} / hour</h4>
            {isValid(new Date(shift.startDatetime)) ? (
              <div data-test-id="text-start">
                <b>start: </b>
                {format(new Date(shift.startDatetime), "dd-MM-yyyy H:M")}
              </div>
            ) : (
              <div data-test-id="text-start">
                <b>start: </b> -
              </div>
            )}
            {isValid(new Date(shift.endDatetime)) ? (
              <div data-test-id="text-end">
                <b>end: </b>
                {format(new Date(shift.endDatetime), "dd-MM-yyyy H:M")}
              </div>
            ) : (
              <div data-test-id="text-start">
                <b>end: </b>-
              </div>
            )}
            {shift.applicationIds && (
              <div data-test-id="text-applicants">
                <b>Applications to date:</b> {shift.applicationIds.length}
              </div>
            )}
          </Styles.Card>
        ))}
    </Styles.Wrapper>
  );
}

export default ShiftsRender;
