import React, { useCallback, useState, useRef, memo, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import './Tables.Style.scss';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import moment from 'moment';
import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
// import { Tooltip } from '@material-ui/core';
import { TableFilterOperatorsEnum, TableFilterTypesEnum } from '../../Enums';
// import { bottomBoxComponentUpdate } from '../../Helper';
// import { useOnClickOutside } from '../../Hubs';
import { useLocalStorage } from '../../Hooks';
// import { PaginationComponent } from '../PaginationComponent/PaginationComponent';
// import { PopoverComponent } from '../Popover/Popover.Component';
import { TableFilterComponent } from './Sections';
import CheckboxesComponent from '../Checkboxes/Checkboxes.Component';
import { getDataFromObject } from '../../Helpers/Middleware.Helper';

const Tables = memo(
  ({
    tableOptions,
    parentTranslationPath,
    translationPath,
    data,
    activePage,
    totalItems,
    activePageChanged,
    itemsPerPageChanged,
    itemsPerPage,
    headerData,
    footerData,
    sortColumnClicked,
    focusedRowChanged,
    isOriginalPagination,
    // onPageIndexChanged,
    // onPageSizeChanged,
    dateFormat,
    bodyRowId,
    tableFilterClassWrapper,
    filterValues,
    onFilterValuesChanged,
    filterData,
    textInputPlaceholder,
    isWithFilter,
    onHeaderColumnsReorder,
    isSelectAllDisabled,
    uniqueKeyInput,
    isWithCheckAll,
    isWithCheck,
    onSelectAllCheckboxChanged,
    onSelectCheckboxChanged,
    getIsSelectedRow,
    getIsDisabledRow,
    isSelectAll,
    isStickyCheckboxColumn,
    leftCheckboxColumn,
    rightCheckboxColumn,
    selectedRows,
    onSelectedRowsCountChanged,
  }) => {
    const { t } = useTranslation([parentTranslationPath, 'Shared']);
    const [reorderedHeader, setReorderedHeader] = useState(null);
    const [currentDragingColumn, setCurrentDragingColumn] = useState(null);
    const [currentDragOverIndex, setCurrentDragOverIndex] = useState(null);
    const [localSelectedRows, setLocalSelectedRows] = useState([]);
    const [language] = useLocalStorage('localization', {
      currentLanguage: 'en',
      isRtl: false,
    });
    const [currentOrderById, setCurrentOrderById] = useState(-1);
    // actionsAttachedWith
    // const [, setActionsMenuAttachedWith] = useState(null);
    // activeItem
    const [, setActiveItem] = useState(null);
    const [currentOrderDirection, setCurrentOrderDirection] = useState('desc');
    const tableRef = useRef(null);
    const [focusedRow, setFocusedRow] = useState(-1);
    const descendingComparator = (a, b, orderBy) => {
      if (b[orderBy] < a[orderBy]) return -1;
      if (b[orderBy] > a[orderBy]) return 1;
      return 0;
    };
    const getComparator = (order, orderBy) =>
      order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    const createSortHandler = useCallback(
      (columnId) => () => {
        if (!tableOptions) return;
        setCurrentOrderDirection((item) => (item === 'desc' ? 'asc' : 'desc'));
        setCurrentOrderById(columnId);
        if (tableOptions.sortFrom === 2) sortColumnClicked(columnId, currentOrderDirection);
      },
      [currentOrderDirection, tableOptions, sortColumnClicked]
    );
    const stableSort = (array, comparator) => {
      const stabilizedThis = array.map((el, index) => [el, index]);
      stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
      });
      return stabilizedThis.map((el) => el[0]);
    };
    const getCurrentSelectedItemIndex = useCallback(
      (row) =>
        localSelectedRows.findIndex(
          (item) =>
            getDataFromObject(row, uniqueKeyInput) === getDataFromObject(item, uniqueKeyInput)
        ),
      [localSelectedRows, uniqueKeyInput]
    );
    const onSelectAllCheckboxChangedHandler = useCallback(
      (event) => {
        const isChecked = event.target.checked;
        if (!selectedRows) {
          if (isChecked) setLocalSelectedRows([...data]);
          else setLocalSelectedRows([]);
        }
        if (onSelectAllCheckboxChanged)
          onSelectAllCheckboxChanged({ selectedRows: selectedRows || data, isChecked });
      },
      [data, onSelectAllCheckboxChanged, selectedRows]
    );
    const onSelectCheckboxChangedHandler = useCallback(
      (row, rowIndex) => (event) => {
        event.stopPropagation();
        const isChecked = event.target.checked;
        if (!selectedRows)
          setLocalSelectedRows((items) => {
            const localRowIndex = getCurrentSelectedItemIndex(row);
            if (isChecked) items.push(row);
            else if (localRowIndex !== -1) items.splice(localRowIndex, 1);

            if (onSelectCheckboxChanged)
              onSelectCheckboxChanged({
                selectedRows: items,
                selectedRow: row,
                rowIndex,
              });
            return [...items];
          });
        else if (onSelectCheckboxChanged) onSelectCheckboxChanged({ selectedRow: row, rowIndex });
      },
      [getCurrentSelectedItemIndex, onSelectCheckboxChanged, selectedRows]
    );
    const bodyRowClicked = useCallback(
      (rowIndex, item) => {
        setActiveItem(item);
        if (focusedRow === -1 || focusedRow !== rowIndex) {
          setFocusedRow(() => {
            focusedRowChanged(rowIndex, item);
            return rowIndex;
          });
        } else {
          setFocusedRow(() => {
            focusedRowChanged(-1);
            return -1;
          });
        }
      },
      [focusedRow, focusedRowChanged]
    );
    // const getTableActionValue = (key) =>
    //   Object.values(TableActions).find((item) => item.key === key);
    const getSortDataName = () => {
      const currentHeader = (reorderedHeader || headerData).find(
        (item) => item.id === currentOrderById
      );
      if (currentHeader) return currentHeader.input;
      return null;
    };
    const getStickyStyle = useCallback(
      (item) => ({
        position: 'sticky',
        left: !language.isRtl
          ? item.left || item.left === 0
            ? item.left
            : 'initial'
          : item.right || item.right === 0
          ? item.right
          : 'initial',
        right: !language.isRtl
          ? item.right || item.right === 0
            ? item.right
            : 'initial'
          : item.left || item.left === 0
          ? item.left
          : 'initial',
        zIndex: 1,
      }),
      [language.isRtl]
    );
    const onDragColumnHandler = useCallback(
      (index) => (event) => {
        event.dataTransfer.setData('text', event.currentTarget.id);
        setCurrentDragingColumn(index);
      },
      []
    );
    const onDragEndColumnHandler = useCallback(() => {
      if (currentDragOverIndex !== null) setCurrentDragOverIndex(null);
    }, [currentDragOverIndex]);
    const onDragOverColumnHandler = useCallback(
      (index) => (event) => {
        event.preventDefault();
        if (currentDragOverIndex !== index) setCurrentDragOverIndex(index);
      },
      [currentDragOverIndex]
    );
    const onDropColumnHandler = useCallback(
      (index) => (event) => {
        event.preventDefault();

        const localColumns = [...(reorderedHeader || headerData)];
        localColumns.splice(index, 0, localColumns.splice(currentDragingColumn, 1)[0]);
        if (onHeaderColumnsReorder) onHeaderColumnsReorder(localColumns);
        else setReorderedHeader(localColumns);
      },
      [currentDragingColumn, headerData, onHeaderColumnsReorder, reorderedHeader]
    );
    useEffect(() => {
      if ((selectedRows || localSelectedRows) && onSelectedRowsCountChanged)
        onSelectedRowsCountChanged((selectedRows || localSelectedRows).length);
    }, [localSelectedRows, onSelectedRowsCountChanged, selectedRows]);
    useEffect(() => {
      if (selectedRows) setLocalSelectedRows(selectedRows);
    }, [selectedRows]);
    return (
      <div className="w-100 table-responsive" ref={tableRef}>
        <TableContainer>
          <Table
            className="table-wrapper"
            aria-labelledby="tableTitle"
            size={tableOptions.tableSize} // 'small' or 'medium'
            aria-label="enhanced table"
          >
            <TableHead>
              <TableRow>
                {isWithCheckAll && (
                  <TableCell
                    padding="checkbox"
                    style={
                      (isStickyCheckboxColumn &&
                        getStickyStyle({ right: rightCheckboxColumn, left: leftCheckboxColumn })) ||
                      undefined
                    }
                  >
                    <CheckboxesComponent
                      idRef="tableSelectAllRef"
                      singleIndeterminate={
                        localSelectedRows &&
                        localSelectedRows.length > 0 &&
                        localSelectedRows.length < totalItems &&
                        !isSelectAll
                      }
                      singleChecked={
                        isSelectAll ||
                        (totalItems > 0 &&
                          localSelectedRows &&
                          localSelectedRows.length === totalItems)
                      }
                      isDisabled={isSelectAllDisabled}
                      onSelectedCheckboxChanged={onSelectAllCheckboxChangedHandler}
                    />
                  </TableCell>
                )}
                {(reorderedHeader || headerData)
                  .filter((column) => !column.isHidden)
                  .map((item, index) => (
                    <TableCell
                      key={`headerCell${index + 1}`}
                      sortDirection={
                        item.isSortable && currentOrderById === item.id
                          ? currentOrderDirection
                          : false
                      }
                      className={`${(index === currentDragOverIndex && 'drag-over-cell') || ''}`}
                      draggable={item.isDraggable}
                      onDragOver={onDragOverColumnHandler(index)}
                      onDragEnd={onDragEndColumnHandler}
                      onDrag={onDragColumnHandler(index)}
                      onDrop={onDropColumnHandler(index)}
                      style={(item.isSticky && getStickyStyle(item)) || undefined}
                    >
                      {item.isSortable ? (
                        <TableSortLabel
                          active={currentOrderById === item.id}
                          direction={currentOrderById === item.id ? currentOrderDirection : 'desc'}
                          onClick={createSortHandler(item.id)}
                        >
                          {(item.headerComponent && item.headerComponent(item, index)) ||
                            t(`${translationPath}${item.label}`)}
                        </TableSortLabel>
                      ) : (
                        (item.headerComponent && item.headerComponent(item, index)) ||
                        t(`${translationPath}${item.label}`)
                      )}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {isWithFilter && (
                <TableFilterComponent
                  tableFilterClassWrapper={tableFilterClassWrapper}
                  filterValues={filterValues}
                  onFilterValuesChanged={onFilterValuesChanged}
                  filterData={filterData}
                  textInputPlaceholder={textInputPlaceholder}
                />
              )}
              {stableSort(data, getComparator(currentOrderDirection, getSortDataName()))
                .slice(
                  data.length <= itemsPerPage ? 0 : activePage * itemsPerPage,
                  data.length <= itemsPerPage
                    ? itemsPerPage
                    : activePage * itemsPerPage + itemsPerPage
                )
                .map((row, rowIndex) => {
                  const isItemSelected = getCurrentSelectedItemIndex(row) !== -1;
                  return (
                    <React.Fragment key={`bodyRow${rowIndex * (activePage + 1)}`}>
                      <TableRow
                        role="checkbox"
                        aria-checked={
                          (getIsSelectedRow && getIsSelectedRow(row, rowIndex)) || isItemSelected
                        }
                        tabIndex={-1}
                        selected={
                          (getIsSelectedRow && getIsSelectedRow(row, rowIndex)) || isItemSelected
                        }
                        id={`${bodyRowId}${rowIndex * (activePage + 1)}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          bodyRowClicked(rowIndex, row);
                        }}
                        className={rowIndex === focusedRow ? 'table-row-overlay' : ''}
                      >
                        {(isWithCheck || getIsSelectedRow || selectedRows) && (
                          <TableCell
                            padding="checkbox"
                            style={(row.isSticky && getStickyStyle(row)) || undefined}
                          >
                            <CheckboxesComponent
                              idRef={`tableSelectRef${rowIndex + 1}`}
                              singleChecked={
                                isSelectAll ||
                                (getIsSelectedRow && getIsSelectedRow(row, rowIndex)) ||
                                isItemSelected ||
                                false
                              }
                              isDisabled={
                                isSelectAllDisabled ||
                                (getIsDisabledRow && getIsDisabledRow(row, rowIndex))
                              }
                              onSelectedCheckboxChanged={onSelectCheckboxChangedHandler(
                                row,
                                rowIndex
                              )}
                            />
                            <div />
                          </TableCell>
                        )}
                        {headerData.length > 0 &&
                          (reorderedHeader || headerData)
                            .filter((column) => !column.isHidden)
                            .map((column, columnIndex) => (
                              <TableCell
                                key={`bodyColumn${columnIndex * (activePage + 1) + rowIndex}`}
                                className={column.cellClasses || ''}
                                style={(column.isSticky && getStickyStyle(column)) || undefined}
                              >
                                {(column.isDate &&
                                  ((getDataFromObject(row, column.input) &&
                                    moment(getDataFromObject(row, column.input)).format(
                                      column.dateFormat || tableOptions.dateFormat || dateFormat
                                    )) ||
                                    '')) ||
                                  (column.component &&
                                    column.component(row, rowIndex, column, columnIndex)) ||
                                  getDataFromObject(row, column.input)}
                              </TableCell>
                            ))}
                      </TableRow>
                    </React.Fragment>
                  );
                })}
            </TableBody>
            {footerData && footerData.length > 0 && (
              <TableFooter className="footer-wrapper">
                <TableRow>
                  {footerData.map((item, index) => (
                    <TableCell colSpan={item.colSpan} key={`footerCell${index + 1}`}>
                      {(item.component && item.component(item, index)) || item.value}
                    </TableCell>
                  ))}
                </TableRow>
              </TableFooter>
            )}
          </Table>
        </TableContainer>
        {isOriginalPagination && (
          <TablePagination
            rowsPerPageOptions={tableOptions.itemsPerPageOptions}
            component="div"
            count={totalItems}
            rowsPerPage={itemsPerPage}
            page={activePage}
            labelRowsPerPage={t('Shared:tables.rows-per-page')}
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} ${t('Shared:tables.of')} ${count !== -1 ? count : to}`
            }
            nextIconButtonText={t('Shared:tables.next-page')}
            backIconButtonText={t('Shared:tables.previous-page')}
            nextIconButtonProps={{
              className: 'btns-icon theme-transparent mx-2',
            }}
            backIconButtonProps={{
              className: 'btns-icon theme-transparent mx-2',
            }}
            SelectProps={{
              className: 'select-wrapper',
            }}
            onChangePage={activePageChanged}
            onChangeRowsPerPage={itemsPerPageChanged}
            className="pagination-wrapper"
          />
        )}
      </div>
    );
  }
);
Tables.propTypes = {
  tableOptions: PropTypes.shape({
    itemsPerPageOptions: PropTypes.array,
    tableSize: PropTypes.string,
    dateFormat: PropTypes.string,
    sortFrom: PropTypes.number,
  }),
  translationPath: PropTypes.string,
  parentTranslationPath: PropTypes.string,
  dateFormat: PropTypes.string,
  itemsPerPage: PropTypes.number,
  isOriginalPagination: PropTypes.bool,
  // defaultActions: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     enum: PropTypes.oneOf(Object.values(TableActions).map((item) => item.key)),
  //     isDisabled: PropTypes.bool,
  //   })
  // ),
  // actionsOptions: PropTypes.shape({
  //   actions: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       enum: PropTypes.oneOf(Object.values(TableActions).map((item) => item.key)),
  //       isDisabled: PropTypes.bool,
  //     })
  //   ),
  //   externalComponent: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func, PropTypes.node]),
  //   classes: PropTypes.string,
  //   isDisabled: PropTypes.bool,
  //   isReverceDisabled: PropTypes.bool,
  //   actionsIsDisabledInput: PropTypes.string,
  //   onActionClicked: PropTypes.func,
  // }),
  activePage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  // checkboxes related features
  isSelectAllDisabled: PropTypes.bool,
  isWithCheckAll: PropTypes.bool,
  isSelectAll: PropTypes.bool,
  selectedRows: PropTypes.instanceOf(Array),
  uniqueKeyInput: PropTypes.string,
  onSelectAllCheckboxChanged: PropTypes.func,
  onSelectCheckboxChanged: PropTypes.func,
  onSelectedRowsCountChanged: PropTypes.func,
  getIsSelectedRow: PropTypes.func, // function to return bool
  getIsDisabledRow: PropTypes.func, // function to return bool
  isWithCheck: PropTypes.bool,
  isStickyCheckboxColumn: PropTypes.bool,
  leftCheckboxColumn: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rightCheckboxColumn: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // end checkboxes related features
  activePageChanged: PropTypes.func,
  itemsPerPageChanged: PropTypes.func,
  sortColumnClicked: PropTypes.func,
  headerData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isSortable: PropTypes.bool,
      label: PropTypes.string,
      input: PropTypes.string,
      isDate: PropTypes.bool,
      cellClasses: PropTypes.string,
      isDraggable: PropTypes.bool,
      isSticky: PropTypes.bool,
      left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      headerComponent: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func, PropTypes.node]),
    })
  ),
  data: PropTypes.instanceOf(Array),
  footerData: PropTypes.arrayOf(
    PropTypes.shape({
      colSpan: PropTypes.number,
      component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func, PropTypes.node]),
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Date),
        PropTypes.bool,
      ]),
    })
  ),
  onHeaderColumnsReorder: PropTypes.func,
  focusedRowChanged: PropTypes.func,
  // onPageIndexChanged: PropTypes.func,
  // onPageSizeChanged: PropTypes.func,
  // externalPopoverComponent: PropTypes.func,
  bodyRowId: PropTypes.string,
  // filter
  tableFilterClassWrapper: PropTypes.string,
  filterValues: PropTypes.instanceOf(Object),
  onFilterValuesChanged: PropTypes.func,
  filterData: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      colSpan: PropTypes.number,
      component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func, PropTypes.node]),
      filterType: PropTypes.oneOf(Object.values(TableFilterTypesEnum).map((item) => item.key)),
      maxDate: PropTypes.oneOfType([PropTypes.instanceOf(moment), PropTypes.string]),
      minDate: PropTypes.oneOfType([PropTypes.instanceOf(moment), PropTypes.string]),
      operators: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.oneOf(Object.values(TableFilterOperatorsEnum).map((item) => item.key)),
          isDisabled: PropTypes.bool,
        })
      ),
    })
  ),
  textInputPlaceholder: PropTypes.string,
  isWithFilter: PropTypes.bool,
};
Tables.displayName = 'Tables';
Tables.defaultProps = {
  // checkboxes related features
  selectedRows: undefined,
  uniqueKeyInput: undefined,
  onSelectAllCheckboxChanged: undefined,
  onSelectCheckboxChanged: undefined,
  onSelectedRowsCountChanged: undefined,
  getIsSelectedRow: undefined,
  getIsDisabledRow: undefined,
  isWithCheckAll: false,
  isWithCheck: false,
  isDisableCheckAll: false,
  isSelectAll: false,
  isStickyCheckboxColumn: false,
  leftCheckboxColumn: undefined,
  rightCheckboxColumn: undefined,
  // end checkboxes related features
  isSelectAllDisabled: false,
  dateFormat: 'YYYY-MM-DD',
  tableOptions: {
    itemsPerPageOptions: [10, 20, 25, 50, 100],
    tableSize: 'small',
    dateFormat: null,
    sortFrom: 1, // 1:front,2:do nothing only send that it change
  },
  parentTranslationPath: '',
  translationPath: '',
  isOriginalPagination: false,
  itemsPerPage: 10,
  activePageChanged: undefined,
  itemsPerPageChanged: undefined,
  sortColumnClicked: () => {},
  headerData: [],
  data: [],
  footerData: [],
  onHeaderColumnsReorder: undefined,
  focusedRowChanged: () => {},
  // onPageIndexChanged: undefined,
  // onPageSizeChanged: undefined,
  bodyRowId: 'bodyRowRef',
  // filter
  tableFilterClassWrapper: '',
  filterData: undefined,
  filterValues: undefined,
  onFilterValuesChanged: undefined,
  textInputPlaceholder: 'search',
  isWithFilter: false,
};
export { Tables };
