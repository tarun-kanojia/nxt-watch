import React from 'react'
import { IconType } from 'react-icons';
import { ActionIconButtonList, ActionIconButtonModel } from '../../model/ActionIconButton';

interface ActionIconButtonProps {
    item: ActionIconButtonModel;
    updateActionButtonList: Function;
}

const ActionIconButton = ({ item, updateActionButtonList }: ActionIconButtonProps) => {
    return (<>
        <item.Element
            size="2rem"
            color={item.active ? 'red' : 'grey'}
            onClick={() =>updateActionButtonList(item.id)}
        />
    </>);
}

export default ActionIconButton;