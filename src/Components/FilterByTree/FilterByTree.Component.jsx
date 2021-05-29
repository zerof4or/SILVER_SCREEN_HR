import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useTranslation } from 'react-i18next';
import CollapseComponent from '../Collapse/Collapse.Component';
import './FilterByTree.Style.scss';

export const FilterByTreeComponent = ({
  treeList,
  childrensListInput,
  iconInput,
  titleInput,
  parentIndex,
  parentTranslationPath,
  translationPath,
}) => {
  const { t } = useTranslation(parentTranslationPath);
  const [isOpenCollapses, setIsOpenCollapses] = useState([]);
  const onFilterByItemClicked = useCallback(
    (item, index) => () => {
      if (item && item[childrensListInput] && item[childrensListInput].length > 0)
        setIsOpenCollapses((items) => {
          const itemIndex = items.indexOf(index);
          if (itemIndex === -1) items.push(index);
          else items.splice(itemIndex, 1);
          return [...items];
        });
    },
    [childrensListInput]
  );
  const getIsOpenCollapse = useCallback(
    (index) => isOpenCollapses.indexOf(index) !== -1,
    [isOpenCollapses]
  );

  return (
    <div className="filter-by-tree-wrapper shared-wrapper">
      {treeList.map((item, index) => (
        <div
          className={`filter-by-tree-item-wrapper${
            (getIsOpenCollapse(index) && ' is-active') || ''
          }`}
          key={`filterByTreeItemKey${(parentIndex + 1) * (index + 1)}`}
        >
          <ButtonBase className="filter-by-tree-btn" onClick={onFilterByItemClicked(item, index)}>
            <span>
              <span className={`px-1 ${item[iconInput]}`} />
              <span className="px-1">{t(`${translationPath}${item[titleInput]}`)}</span>
            </span>
            {item[childrensListInput] && item[childrensListInput].length > 0 && (
              <span className="d-inline-flex-v-center">
                <span className="childrens-count-wrapper">
                  {item[childrensListInput] && item[childrensListInput].length}
                </span>
                <span
                  className={`toggle-icon mdi mdi-chevron-down${
                    (getIsOpenCollapse(index) && ' mdi-rotate-180') || ''
                  }`}
                />
              </span>
            )}
          </ButtonBase>
          {item[childrensListInput] && item[childrensListInput].length > 0 && (
            <CollapseComponent
              classes="filter-by-tree-childrens-collapse-wrapper"
              isOpen={getIsOpenCollapse(index)}
              component={
                <FilterByTreeComponent
                  treeList={item[childrensListInput]}
                  childrensListInput={childrensListInput}
                  iconInput={iconInput}
                  titleInput={titleInput}
                  parentIndex={index}
                  parentTranslationPath={parentTranslationPath}
                  translationPath={translationPath}
                />
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};

FilterByTreeComponent.propTypes = {
  treeList: PropTypes.instanceOf(Array),
  childrensListInput: PropTypes.string,
  iconInput: PropTypes.string,
  titleInput: PropTypes.string,
  parentIndex: PropTypes.number,
  parentTranslationPath: PropTypes.string.isRequired,
  translationPath: PropTypes.string.isRequired,
};
FilterByTreeComponent.defaultProps = {
  treeList: [],
  childrensListInput: 'childrens',
  iconInput: 'icon',
  titleInput: 'title',
  parentIndex: 0,
};
