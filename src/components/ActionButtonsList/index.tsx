import React from 'react'
import { ActionIconButtonList } from '../../model/ActionIconButton';
import ActionIconButton from '../ActionIconButton';

interface ActionButtonListProps {
    actionIconButtonList: ActionIconButtonList;
    updateActionButtonList: Function;
}

const ActionButtonList = ({ actionIconButtonList, updateActionButtonList }: ActionButtonListProps) => {
    return (<>
        {
            actionIconButtonList.list.map((buttonItem) => (
                <buttonItem.Element
                    size="2rem"
                    color={buttonItem.active ? 'red' : 'grey'}
                    onClick={() => {
                        actionIconButtonList.toggleActiveStatus(buttonItem.id);
                        updateActionButtonList(actionIconButtonList);
                    }}
                />
            ))
        }
    </>);
}

export default ActionButtonList;