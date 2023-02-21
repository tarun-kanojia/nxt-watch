import React, { useContext, useEffect, useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaHome } from "react-icons/fa"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
   const [dashBoardContentList, setDashBoardContentList] = useState<DashBoardContentModel | null>(null);
   const updateDashBoardList = (list: DashBoardContentModel) => {
      setDashBoardContentList(list)
   }
   const currUrl = useLocation();

   useEffect(() => {
      console.log(currUrl.pathname);
      let dashBoardContent = new DashBoardContentModel(DASH_BOARD_CONTENT);
      dashBoardContent.list = dashBoardContent.list.map((content) => {
         content.path === currUrl.pathname 
         ? content.active = true
         :content.active = false;

         return content;
      })
      updateDashBoardList(dashBoardContent);
   }, [])
   return (<>
      {
         dashBoardContentList ?
            <DashBoardContainer>
               <DashBoardContent dashBoardList={dashBoardContentList} updateDashBoardList={updateDashBoardList} />
            </DashBoardContainer>
            : <></>
      }
   </>);
}

export default DashBoard;