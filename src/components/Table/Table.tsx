import classNames from "classnames";
import { path, split } from "ramda";
import React from "react";

type ColumnDefinition = {
  key: string;
  label: string;
  transform?: (value: any) => string;
};

type Props = {
  columns: ColumnDefinition[];
  data: any[];
};

export const Table: React.FC<Props> = ({ columns, data }) => {
  const cellClasses = classNames("px-4 py-2 text-left");
  const rowClasses = classNames("border-t border-b border-collapse");

  return (
    <>
      <table className="w-full">
        <thead>
          <tr className={rowClasses}>
            {columns.map((column) => (
              <th className={cellClasses} key={column.key}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={rowClasses}>
              {columns.map((column) => {
                const value = path<string>(split(".", column.key), row);
                const transformed = column.transform
                  ? column.transform(value)
                  : value;
                return (
                  <td className={cellClasses} key={column.key}>
                    {transformed}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

Table.defaultProps = {};

export default Table;
