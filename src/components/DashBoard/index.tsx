import React, { useContext, useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaHome } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { ThemeContextHook } from '../../hooks/ThemeContext';
import { DashBoardContentModel } from '../../model/DashboardContent';
import { DASH_BOARD_CONTENT } from './constants';
import { DashBoardContainer, DashBoardElement, ElementLogo, ElementText } from './style';

interface DashBoardContentProps {
   dashBoardList: DashBoardContentModel;
   updateDashBoardList: Function
}
const DashBoardContent = ({ dashBoardList, updateDashBoardList }: DashBoardContentProps) => {

   const theme = useContext(ThemeContextHook);
   const navigate = useNavigate();
   return (
      <>
         {
            dashBoardList.list.map((item) => {
               const Element = item.icon;
               return (
                  <DashBoardElement key={item.id}>
                     <ElementLogo>
                        <Element size='100%' color={item.active ? 'red' : '#606060'} />
                     </ElementLogo>
                     <ElementText
                        active={item.active}
                        onClick={() => {

                           dashBoardList.toggleActiveStatus(item.id);
                           updateDashBoardList(new DashBoardContentModel(dashBoardList));
                           navigate(item.path)

                        }}
                     >{item.title}
                     </ElementText>
                  </DashBoardElement>)
            })
         }
      </>
   )
}

const DashBoard = () => {
   const [dashBoardContentList, setDashBoardContentList] = useState(new DashBoardContentModel(DASH_BOARD_CONTENT));
   const updateDashBoardList = (list: DashBoardContentModel) => {
      setDashBoardContentList(list)
   }
   return (<>

      <DashBoardContainer>
         <DashBoardContent dashBoardList={dashBoardContentList} updateDashBoardList={updateDashBoardList} />
      </DashBoardContainer>
   </>);
}

export default DashBoard;