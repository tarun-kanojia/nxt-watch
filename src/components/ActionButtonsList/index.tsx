import React from 'react'
import { ActionIconButtonList } from '../../model/ActionIconButton';
import ActionIconButton from '../ActionIconButton';
import { CenterContainer } from '../VideoComponent/style';

interface ActionButtonListProps {
    actionIconButtonList: ActionIconButtonList;
    updateActionButtonList: Function;
}

const ActionButtonList = ({ actionIconButtonList, updateActionButtonList }: ActionButtonListProps) => {
    return (<>
        {
            actionIconButtonList.list.map((buttonItem) => (
                <CenterContainer key={buttonItem.id}>
                    <buttonItem.Element
                        size="2rem"
                        color={buttonItem.active ? '#3b82f6' : 'grey'}
                        onClick={() => {
                            actionIconButtonList.toggleActiveStatus(buttonItem.id);
                            updateActionButtonList(actionIconButtonList);
                        }}
                    />
                    <span>{ buttonItem.name}</span>
                </CenterContainer>
            ))
        }
    </>);
}

export default ActionButtonList;