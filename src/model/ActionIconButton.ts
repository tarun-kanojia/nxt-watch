import { IconType } from "react-icons"
import { ActionButtonItemInterface, ActionIconButtonListInterface } from "./types";

export class ActionIconButtonModel {
    id: number;
    Element: IconType;
    active: boolean;
    name:string;

    constructor(buttonItem: ActionButtonItemInterface) {
        this.id = buttonItem.id;
        this.Element = buttonItem.Element;
        this.active = buttonItem.active;
        this.name = buttonItem.name;
    }


}


export class ActionIconButtonList {
    list: ActionIconButtonModel[];

    constructor(buttonsList: ActionIconButtonListInterface) {
        this.list = buttonsList.list.map((buttonItem) => new ActionIconButtonModel(buttonItem));
    }

    toggleActiveStatus = (id: number) => {
        this.list = this.list.map((ele) => {
            if (ele.id == id) ele.active = true;
            else ele.active = false;

            return ele;
        })
    }
}