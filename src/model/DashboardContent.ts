import { action, observable } from "mobx";
import { DashBoard, DashBoardList } from "./types"
class DashBoardItem{
    id:number;
    icon:any;
    title:string;
    @observable active:boolean;
    path:string;

    constructor(content:DashBoard){
        this.id = content.id;
        this.icon = content.icon;
        this.title = content.title;
        this.active = content.active;
        this.path = content.path;
    }
}
export class DashBoardContentModel {
    list:DashBoard[]

    constructor(content:DashBoardList){
        this.list = content.list.map((ele) => new DashBoardItem(ele))
    }

    @action toggleActiveStatus = (id:number) => {
      this.list = this.list.map((ele) => {
        ele.active = (ele.id == id);
        return ele;
      })
    }
}