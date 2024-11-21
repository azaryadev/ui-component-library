import { useState } from "react";
import classNames from "classnames";
import Header from "./Header";
import { getDecadeRange, formatYear } from "../utils";
import type { CommonProps } from "../../../@types/common";

export interface YearTableProps extends CommonProps {
  value: number;
  onChange: (value: number) => void;
  minYear?: number;
  maxYear?: number;
  yearLabelFormat?: string;
  preventFocus?: boolean;
}

const YearTable = (props: YearTableProps) => {
  const {
    className,
    value,
    onChange,
    minYear,
    maxYear,
    preventFocus,
    yearLabelFormat = "YYYY",
    ...rest
  } = props;

  const [decade, setDecade] = useState(value);
  const range = getDecadeRange(decade);

  // Get first and last year of the decade safely
  const firstYear = range[0]!;
  const lastYear = range[range.length - 1]!;

  const years = range.map((year) => {
    const disabled = year < (minYear as number) || year > (maxYear as number);

    const active = year === value;

    return (
      <button
        key={year}
        disabled={disabled}
        className={classNames(
          "year-picker-cell",
          active && !disabled
            ? "year-picker-cell-active bg-primary"
            : "text-gray-800 dark:text-gray-100",
          !active && !disabled && "hover:bg-gray-100",
          disabled && "year-picker-cell-disabled"
        )}
        type="button"
        onClick={() => onChange(year)}
        onMouseDown={(event) => preventFocus && event.preventDefault()}
      >
        {formatYear(year, yearLabelFormat)}
      </button>
    );
  });

  return (
    <div className={classNames("year-picker", className)} {...rest}>
      <Header
        nextLevelDisabled
        label={`${formatYear(firstYear, yearLabelFormat)} - ${formatYear(
          lastYear,
          yearLabelFormat
        )}`}
        hasPrevious={typeof minYear === "number" ? minYear < firstYear : true}
        hasNext={typeof maxYear === "number" ? maxYear > lastYear : true}
        nextLabel={"Next decade"}
        previousLabel={"Previous decade"}
        preventFocus={preventFocus}
        onNext={() => setDecade((current) => current + 10)}
        onPrevious={() => setDecade((current) => current - 10)}
      />
      <div className="year-table">{years}</div>
    </div>
  );
};

export default YearTable;
